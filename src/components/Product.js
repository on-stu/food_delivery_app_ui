import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

function Product({ onPress, marginTop, image, title }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: '#f5f5fa',
        height: 280,
        width: '45%',
        borderRadius: 20,
        marginTop: marginTop,
        marginRight: 10,
        marginLeft: 10,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          alignSelf: 'center',
          marginTop: 20,
        }}
      >
        <Image source={require('../images/3.png')} style={{ height: 25, width: 20 }} />
        <Text style={{ paddingHorizontal: 10, fontWeight: 'bold', fontSize: 16 }}>290 Calories</Text>
      </View>
      <Image source={image} style={{ height: 105, width: 130, alignSelf: 'center', marginTop: 15, marginBottom: 15 }} />
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          paddingHorizontal: 10,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontSize: 15,
          fontWeight: 'bold',
          paddingHorizontal: 10,
          color: '#848385',
          marginTop: 5,
        }}
      >
        Beef Burger
      </Text>
    </TouchableOpacity>
  );
}

export default Product;
