import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

function Detail({ navigation }) {
  const [orderNum, setOrderNum] = useState(1);

  const Increase = () => {
    setOrderNum(orderNum + 1);
  };

  const Decrease = () => {
    if (orderNum > 0) {
      setOrderNum(orderNum - 1);
    }
  };
  return (
    <View style={{ backgroundColor: '#fff' }}>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 40,
            marginHorizontal: 20,
          }}
        >
          <View
            style={{
              width: '10%',
            }}
          >
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={require('../images/2.png')} />
            </TouchableOpacity>
          </View>
          <View style={{ width: '80%', alignItems: 'center' }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                alignSelf: 'center',
              }}
            >
              <Image source={require('../images/3.png')} style={{ height: 25, width: 25 }} />
              <Text style={{ paddingHorizontal: 10, fontWeight: 'bold', fontSize: 16 }}>290 Calories</Text>
            </View>
          </View>
          <View style={{ width: '10%' }}>
            <FontAwesomeIcon icon={faHeart} />
          </View>
        </View>
        <Image
          source={require('../images/5.png')}
          style={{
            height: 300,
            width: 300,
            alignSelf: 'center',
          }}
        />

        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            alignItems: 'center',
            backgroundColor: '#f6f3fb',
            paddingHorizontal: 20,
            paddingVertical: 8,
            borderRadius: 20,
          }}
        >
          <TouchableOpacity onPress={Increase}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 18,
                marginRight: 10,
              }}
            >
              +
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
            }}
          >
            {orderNum}
          </Text>
          <TouchableOpacity onPress={Decrease}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 18,
                marginLeft: 10,
              }}
            >
              -
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 20,
            marginTop: 30,
          }}
        >
          <View>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 25,
              }}
            >
              Smokehouse{' '}
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 15,
                color: '#a4a4a9',
              }}
            >
              Beef burger
            </Text>
          </View>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 28,
              marginLeft: 80,
            }}
          >
            $12.99
          </Text>
        </View>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            marginTop: 30,
            marginHorizontal: 20,
          }}
        >
          Ingredients
        </Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 20, marginHorizontal: 20 }}>
          <View
            style={{
              borderRadius: 15,
              borderWidth: 0.1,
              paddingHorizontal: 12,
              paddingVertical: 8,
              marginRight: 10,
            }}
          >
            <Image source={require('../images/11.png')} style={{ height: 30, width: 30 }} />
          </View>

          <View
            style={{
              borderRadius: 15,
              borderWidth: 0.1,
              paddingHorizontal: 12,
              paddingVertical: 8,
              marginRight: 10,
            }}
          >
            <Image source={require('../images/13.png')} style={{ height: 30, width: 30 }} />
          </View>

          <View
            style={{
              borderRadius: 15,
              borderWidth: 0.1,
              paddingHorizontal: 12,
              paddingVertical: 8,
              marginRight: 10,
            }}
          >
            <Image source={require('../images/12.png')} style={{ height: 30, width: 30 }} />
          </View>

          <View
            style={{
              borderRadius: 15,
              borderWidth: 0.1,
              paddingHorizontal: 12,
              paddingVertical: 8,
              marginRight: 10,
            }}
          >
            <Image source={require('../images/8.png')} style={{ height: 30, width: 30 }} />
          </View>

          <View
            style={{
              borderRadius: 15,
              borderWidth: 0.1,
              paddingHorizontal: 12,
              paddingVertical: 8,
              marginRight: 10,
            }}
          >
            <Image source={require('../images/bl.png')} style={{ height: 30, width: 30 }} />
          </View>

          <View
            style={{
              borderRadius: 15,
              borderWidth: 0.1,
              paddingHorizontal: 12,
              paddingVertical: 8,
              marginRight: 10,
            }}
          >
            <Image source={require('../images/7.png')} style={{ height: 30, width: 30 }} />
          </View>
        </ScrollView>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            marginTop: 30,
            marginHorizontal: 20,
          }}
        >
          Details
        </Text>
        <Text
          style={{
            color: '#a4a4a9',
            fontWeight: 'bold',
            fontSize: 15,
            marginTop: 10,
            marginHorizontal: 20,
            textAlign: 'justify',
          }}
        >
          The most unique fire grilled patty, flame grilled, charred, seared, well-done All natural beef, grass-feed beef, Fiery, juicy,
          greacy. delicous moist The most unique fire grilled patty, flame grilled, charred, seared, well-done All natural beef, grass-feed
          beef, Fiery, juicy, greacy. delicous moist
        </Text>
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          backgroundColor: '#000',
          height: 50,
          width: 50,
          bottom: 20,
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
          borderRadius: 25,
        }}
      >
        <FontAwesomeIcon icon={faShoppingCart} color="#fff" />
      </View>
    </View>
  );
}

export default Detail;
