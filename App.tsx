import React from 'react';
import 'react-native-gesture-handler';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';
import 'react-native-gesture-handler';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './screens/Home';
import Destination from './screens/Destination';
import OnBoarding from './screens/OnBoarding';
import {COLORS, icons, SIZES} from './constants';
import Tabs from './navigation/Tabs';
import Drawers from './navigation/Drawers';

const Stack = createNativeStackNavigator();

const App = ({navigation}: any) => {
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
          }}
        />
        <Stack.Screen
          name="Destination"
          component={Destination}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Drawer"
          component={Drawers}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
