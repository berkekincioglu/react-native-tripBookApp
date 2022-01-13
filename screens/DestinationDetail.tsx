import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, FONTS, icons, images, SIZES} from '../constants';

interface Props {}
interface StarProps {
  rate: number;
}
interface Props {}
interface IconProps {
  icon: any;
  label: string;
}

const IconLabel = ({icon, label}: IconProps) => (
  <View style={{alignItems: 'center'}}>
    <Image source={icon} style={{width: 50, height: 50}} resizeMode="contain" />
    <Text
      style={{...FONTS.h3, color: COLORS.gray, marginTop: SIZES.padding * 0.8}}>
      {label}
    </Text>
  </View>
);

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
      <View style={{flex: 1.5}}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.base,
            paddingHorizontal: SIZES.padding * 2,
            justifyContent: 'space-between',
          }}>
          <IconLabel icon={icons.villa} label="Villa" />
          <IconLabel icon={icons.parking} label="Parking" />
          <IconLabel icon={icons.wind} label="4°C" />

          {/* About */}
        </View>
        <View style={{marginTop: SIZES.base, paddingHorizontal: SIZES.padding}}>
          <Text style={{...FONTS.h2}}>About</Text>
          <Text
            style={{
              marginTop: SIZES.radius,
              color: COLORS.gray,
              ...FONTS.body3,
            }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </Text>
        </View>
      </View>
      {/* Footer */}
      <View style={{flex: 0.5, paddingHorizontal: SIZES.padding}}>
        <LinearGradient
          style={{height: 70, width: '100%', borderRadius: 15}}
          colors={['#edf0fc', '#d6dfff']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{
                flex: 1,
                marginHorizontal: SIZES.padding,
                justifyContent: 'center',
              }}>
              <Text style={{...FONTS.h1}}>$2000</Text>
            </View>
            <TouchableOpacity
              style={{
                width: 130,
                height: '80%',
                marginHorizontal: SIZES.radius,
              }}
              onPress={() => console.log('booked')}>
              <LinearGradient
                style={{
                  flex: 1,
                  height: 70,
                  width: '100%',
                  borderRadius: 15,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                colors={['#46aeff', '#5884ff']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}>
                <Text style={{...FONTS.h2, color: COLORS.white}}>BOOKING</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
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
