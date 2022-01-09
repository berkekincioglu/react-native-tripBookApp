import React from 'react';
import {View, Text, Button} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';

interface Props {}
const Drawer: any = createDrawerNavigator();

function HomeScreen({navigation}: any) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => navigation.navigate('Tabs')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({navigation}: any) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawers = (props: Props) => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Test" component={HomeScreen} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator>
  );
};

export default Drawers;
