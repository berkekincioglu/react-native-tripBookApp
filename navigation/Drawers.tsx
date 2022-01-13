import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';

import {icons, SIZES} from '../constants';

interface Props {}

const Drawer: any = createDrawerNavigator();

const Settings = () => (
  <View>
    <Text>Settings</Text>
  </View>
);

const Profile = () => (
  <View>
    <Text>Profile</Text>
  </View>
);

const Drawers = (props: Props) => {
  const navigation: any = useNavigation();
  return (
    <Drawer.Navigator
      drawerType="front"
      initialRouteName="Profile"
      options={{}}
      screenOptions={{
        activeTintColor: '#e91e63',
        itemStyle: {marginVertical: 10},
      }}>
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};

export default Drawers;
