import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {COLORS, FONTS, icons, images, SIZES} from '../constants';

interface Props {}
interface StarProps {
  rate: number;
}

const StarReview = ({rate}: StarProps) => {
  let starComponents = [];
  let fullStar = Math.floor(rate);
  let noStar = Math.floor(5 - rate);
  let halfStar = 5 - fullStar - noStar;
  // Full Star
  for (let i = 0; i < fullStar; i++) {
    starComponents.push(
      <Image
        key={`full-${i}`}
        source={icons.starFull}
        resizeMode="cover"
        style={{width: 20, height: 20}}
      />,
    );
  }
  // Half Star
  for (let i = 0; i < halfStar; i++) {
    starComponents.push(
      <Image
        key={`half-${i}`}
        source={icons.starHalf}
        resizeMode="cover"
        style={{width: 20, height: 20}}
      />,
    );
  }

  // Half Star
  for (let i = 0; i < noStar; i++) {
    starComponents.push(
      <Image
        key={`empty-${i}`}
        source={icons.starEmpty}
        resizeMode="cover"
        style={{width: 20, height: 20}}
      />,
    );
  }

  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      {starComponents}
      <Text
        style={{marginLeft: SIZES.base, color: COLORS.gray, ...FONTS.body3}}>
        {rate}
      </Text>
    </View>
  );
};

const DestinationDetail = ({navigation, route}: any) => {
  const {item} = route.params;
  console.log(item);
  // React.useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerLeft: () => (
  //       <TouchableOpacity
  //         style={{marginLeft: SIZES.padding * 0.5}}
  //         onPress={() => navigation.goBack()}>
  //         <Image
  //           source={icons.back}
  //           resizeMode="contain"
  //           style={{width: 25, height: 25}}
  //         />
  //       </TouchableOpacity>
  //     ),
  //   });
  // }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Header */}

      <View style={{flex: 2}}>
        <Image
          source={item.image}
          resizeMode="cover"
          style={{width: '100%', height: '80%', opacity: 0.9}}
        />
        <View
          style={{
            position: 'absolute',
            bottom: '5%',

            left: '5%',
            right: '5%',
            borderRadius: 15,
            padding: SIZES.padding,
            backgroundColor: COLORS.white,
            ...styles.shadow,
          }}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.shadow}>
              <Image
                source={item.image}
                style={{width: 70, height: 70, borderRadius: 15}}
              />
            </View>
            <View
              style={{
                marginHorizontal: SIZES.radius,
                justifyContent: 'space-around',
              }}>
              <Text style={{...FONTS.h3}}>{item.name}</Text>
              <Text style={{...FONTS.body3}}>{item.location}</Text>
              <StarReview rate={item.rate} />
            </View>
          </View>
          <View style={{marginTop: SIZES.radius}}>
            <Text style={{...FONTS.body3, color: COLORS.gray}}>
              {item.description}
            </Text>
          </View>
        </View>
        {/* Header Buttons */}
        <View
          style={{
            position: 'absolute',
            top: '10%',
            left: '10%',
            right: '10%',
            flexDirection: 'row',
          }}>
          <View style={{flex: 1}}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={icons.back}
                resizeMode="contain"
                style={{width: 25, height: 25, tintColor: 'black'}}
              />
            </TouchableOpacity>
          </View>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={icons.menu}
                resizeMode="contain"
                style={{width: 25, height: 25, tintColor: 'black'}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Body */}
      <View style={{flex: 1.5}}></View>
      {/* Footer */}
      <View style={{flex: 0.5}}></View>
    </View>
  );
};

export default DestinationDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.35,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
