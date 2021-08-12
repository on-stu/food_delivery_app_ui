import React from 'react';
import { View, Image, Text } from 'react-native';

function Category({ label, source, backgroundColor }) {
  return (
    <View
      style={{
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: backgroundColor,
        marginHorizontal: 15,
        borderRadius: 25,
        paddingVertical: 5,
        paddingHorizontal: 15,
      }}
    >
      <Image source={source} style={{ height: 40, width: 40 }} />
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 18,
          paddingLeft: 10,
        }}
      >
        {label}
      </Text>
    </View>
  );
}

export default Category;
