import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { faSearch, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import Category from '../components/Category';
import Product from '../components/Product';

function Home({ navigation }) {
  const [city, setCity] = useState('Los Angeles');

  return (
    <ScrollView style={{ backgroundColor: '#FFF' }} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 40,
          marginHorizontal: 20,
        }}
      >
        <View style={{ width: '10%' }}>
          <Image source={require('../images/1.png')} />
        </View>
        <View
          style={{
            width: '80%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* <Picker
              style={{ height: 50, width: 160 }}
              mode="dialog"
              selectedValue={city}
              onValueChange={(itemValue, itemIndex) => setCity(itemValue)}
            >
              <Picker.Item label="Los Angeles" value="Los Angeles" style={{ fontWeight: 'bold' }} />
              <Picker.Item label="Seoul" value="Seoul" style={{ fontWeight: 'bold' }} />
            </Picker> */}
        </View>
        <View style={{ width: '10%' }}>
          <FontAwesomeIcon icon={faSearch} />
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: 20,
          marginTop: 50,
        }}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
          }}
        >
          Food that
        </Text>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
          }}
        >
          meets your needs
        </Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 40 }}>
        <Category label="Burgers" backgroundColor="#f9dd7a" source={require('../images/5.png')} />
        <Category label="Burrito" backgroundColor="#e5e4eb" source={require('../images/10.png')} />
        <Category label="Salads" backgroundColor="#e5e4eb" source={require('../images/7.png')} />
        <Category label="Pizza" backgroundColor="#e5e4eb" source={require('../images/6.png')} />
      </ScrollView>
      <View
        style={{
          alignItems: 'center',
          marginHorizontal: 20,
          flexDirection: 'row',
          marginTop: 40,
        }}
      >
        <View
          style={{
            width: '50%',
          }}
        >
          <Text
            style={{
              fontSize: 22,
              fontWeight: 'bold',
            }}
          >
            New Products
          </Text>
        </View>
        <View
          style={{
            width: '50%',
            alignItems: 'flex-end',
          }}
        >
          <FontAwesomeIcon icon={faEllipsisH} color="#848385" />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 15,
          marginTop: 30,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Product image={require('../images/4.png')} title="Smoke House" price="12.99" onPress={() => navigation.navigate('Detail')} />
        <Product image={require('../images/9.png')} title="Honey Chilli" price="10.99" marginTop={25} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 15,
          marginTop: 30,
        }}
      >
        <Product image={require('../images/6.png')} title="Adios Pizza" price="11.99" />
        <Product image={require('../images/10.png')} title="Burrito" price="10.99" marginTop={25} />
      </View>
    </ScrollView>
  );
}

export default Home;
