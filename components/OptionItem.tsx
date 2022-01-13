import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, FONTS, SIZES} from '../constants';

interface Props {
  icon: any;
  bgColor: string[];
  label: string;
  onPress: () => void;
}

const OptionItem = ({icon, bgColor, label, onPress}: Props) => {
  return (
    <TouchableOpacity
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
      onPress={onPress}>
      <View style={{...styles.shadow, width: 60, height: 60}}>
        <LinearGradient
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 15,
          }}
          colors={bgColor}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}>
          <Image
            source={icon}
            style={{width: 30, height: 30, tintColor: COLORS.white}}
            resizeMode="cover"
          />
        </LinearGradient>
      </View>
      <Text
        // numberOfLines={1}
        style={{
          marginTop: SIZES.base,
          ...FONTS.h4,
          alignItems: 'center',
          textAlign: 'center',
          color: COLORS.gray,
          fontWeight: '400',
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default OptionItem;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
