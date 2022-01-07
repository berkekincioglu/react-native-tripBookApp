import React from 'react';
import {Image, View, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import {COLORS, icons, SIZES} from '../constants';
import {useNavigation} from '@react-navigation/native';

interface TabsProps {}

const Tab: any = createBottomTabNavigator();

const Tabs: React.FunctionComponent<TabsProps> = props => {
  const navigation = useNavigation();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={{marginLeft: SIZES.padding * 0.5}}
          onPress={() => navigation.goBack()}>
          <Image
            source={icons.back}
            resizeMode="contain"
            style={{width: 25, height: 25}}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <Tab.Navigator
      screenOptions={({route}: any) => ({
        tabBarIcon: ({focused, color, size}: any) => {
          const tintColor = focused ? COLORS.primary : COLORS.gray;

          switch (route.name) {
            case 'Home':
              return (
                <Image
                  source={icons.home}
                  resizeMode="contain"
                  style={{tintColor, width: 30, height: 30}}
                />
              );
            case 'Search':
              return (
                <Image
                  source={icons.search}
                  resizeMode="contain"
                  style={{tintColor, width: 30, height: 30}}
                />
              );
            case 'Bookmark':
              return (
                <Image
                  source={icons.bookmark}
                  resizeMode="contain"
                  style={{tintColor, width: 30, height: 30}}
                />
              );
            case 'Account':
              return (
                <Image
                  source={icons.user}
                  resizeMode="contain"
                  style={{tintColor, width: 30, height: 30}}
                />
              );
          }
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 90,
          shadowColor: '#000',
          shadowOffset: {
            height: 10,
            width: 0,
          },
          shadowOpacity: 0.5,
          shadowRadius: 8,
          elevation: 21,
        },
      })}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="Search"
        component={Home}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Bookmark"
        component={Home}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Account"
        component={Home}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
