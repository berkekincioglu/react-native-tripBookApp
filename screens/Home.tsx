import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Dropdown from '../components/Dropdown';
import OptionItem from '../components/OptionItem';
import {COLORS, SIZES, images, icons, FONTS} from '../constants';

interface Props {}

const Home = () => {
  const navigation: any = useNavigation();
  const [destinations, setDestinations] = useState<any>([
    {id: 0, name: 'Ski Villa', image: images.skiVilla},
    {id: 1, name: 'Climbing Hills', image: images.climbingHills},
    {id: 2, name: 'Frozen Hills', image: images.frozenHills},
    {id: 3, name: 'Beach', image: images.beach},
  ]);

  const renderDestinations = (item: any, index: any) => {
    let destinationStyle = {};

    if (index === 0) {
      destinationStyle = {marginLeft: SIZES.padding};
    }

    return (
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          marginHorizontal: SIZES.base,
          ...destinationStyle,
        }}
        onPress={() => navigation.navigate('DestinationDetail')}>
        <Image
          source={item.image}
          resizeMode="cover"
          style={{width: SIZES.width * 0.28, height: '82%', borderRadius: 15}}
        />
        <Text style={{marginTop: SIZES.base / 2, ...FONTS.h4}}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          marginTop: SIZES.base,
          paddingHorizontal: SIZES.padding,
        }}>
        <Image
          source={images.homeBanner}
          resizeMode="cover"
          style={{width: '100%', height: '100%', borderRadius: 15}}
        />
      </View>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.padding,
            paddingHorizontal: SIZES.base,
            marginBottom: SIZES.padding * 0.5,
          }}>
          <OptionItem
            icon={icons.airplane}
            bgColor={['#46aeff', '#5884ff']}
            label="Flight"
            onPress={() => console.log('Flight')}
          />
          <OptionItem
            icon={icons.train}
            bgColor={['#fddf90', '#fcda13']}
            label="Train"
            onPress={() => console.log('Train')}
          />
          <OptionItem
            icon={icons.taxi}
            bgColor={['#fcaba8', '#fe6bba']}
            label="Taxi"
            onPress={() => console.log('Taxi')}
          />
          <OptionItem
            icon={icons.bus}
            bgColor={['#e973ad', '#da5df2']}
            label="Bus"
            onPress={() => console.log('Bus')}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.radius,
            paddingHorizontal: SIZES.base,
          }}>
          <OptionItem
            icon={icons.bed}
            bgColor={['#ffc465', '#ff9c5f']}
            label="Bed"
            onPress={() => console.log('Bed')}
          />
          <OptionItem
            icon={icons.eat}
            bgColor={['#7cf1fb', '#4ebefd']}
            label="Eats"
            onPress={() => console.log('Eats')}
          />
          <OptionItem
            icon={icons.compass}
            bgColor={['#7be993', '#46caaf']}
            label="Adventure"
            onPress={() => console.log('Adventure')}
          />
          <OptionItem
            icon={icons.event}
            bgColor={['#fca397', '#fc7b6c']}
            label="Event"
            onPress={() => console.log('Event')}
          />
        </View>
      </View>
      <View style={{flex: 1}}>
        <Text
          style={{
            marginTop: SIZES.base * 2,
            marginHorizontal: SIZES.padding,
            ...FONTS.h2,
          }}>
          Destination
        </Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={destinations}
          keyExtractor={item => item.id.toString()}
          renderItem={({item, index}: any) => renderDestinations(item, index)}
        />
      </View>
    </View>
  );
};

export default Home;

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
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
