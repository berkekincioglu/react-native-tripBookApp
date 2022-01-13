import React, {useState} from 'react';
import 'react-native-gesture-handler';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
  Modal,
} from 'react-native';
import 'react-native-gesture-handler';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DrawerActions, NavigationContainer} from '@react-navigation/native';
import Home from './screens/Home';
import Destination from './screens/Destination';
import OnBoarding from './screens/OnBoarding';
import {COLORS, icons, SIZES} from './constants';
import Tabs from './navigation/Tabs';
import Drawers from './navigation/Drawers';
import DestinationDetail from './screens/DestinationDetail';

const Stack = createNativeStackNavigator();

const App = ({navigation}: any) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OnBoarding">
        <Stack.Screen
          name="OnBoarding"
          component={OnBoarding}
          options={{
            title: '',
            headerStyle: {
              // backgroundColor: COLORS.white,
              backgroundColor: COLORS.white,
            },
            headerLeft: () => null,
            headerRight: () => (
              <TouchableOpacity
                style={{marginRight: SIZES.padding}}
                onPress={() => console.log('pressed')}>
                <Image
                  source={icons.barMenu}
                  resizeMode="contain"
                  style={{width: 25, height: 25}}
                />
              </TouchableOpacity>
            ),
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{
            title: '',
            headerStyle: {backgroundColor: COLORS.white},
            headerRight: () => (
              <TouchableOpacity onPress={() => null}>
                <Image
                  source={icons.menu}
                  resizeMode="contain"
                  style={{width: 25, height: 25, marginRight: SIZES.padding}}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="Destination"
          component={Destination}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DestinationDetail"
          component={DestinationDetail}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
