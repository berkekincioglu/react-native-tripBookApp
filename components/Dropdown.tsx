import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {SIZES} from '../constants';

interface Props {}

const Dropdown = (props: Props) => {
  const navigation: any = useNavigation();
  return (
    <View
      style={{
        backgroundColor: '#fff',
        width: '30%',
        height: SIZES.height * 0.1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: SIZES.radius,
        position: 'absolute',
        right: 5,
        zIndex: 3,
      }}>
      <Button
        title="Profile"
        onPress={() => navigation.navigate('OnBoarding')}></Button>
      <Button
        title="Settings"
        onPress={() => navigation.navigate('OnBoarding')}></Button>
    </View>
  );
};

export default Dropdown;

const styles = StyleSheet.create({});
