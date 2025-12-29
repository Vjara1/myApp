import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';

const products = [
  { id: '1', title: 'Olive Oil', price: '4.50 €', image: 'https://via.placeholder.com/200' },
  { id: '2', title: 'Parmesan', price: '6.20 €', image: 'https://via.placeholder.com/200' },
  { id: '3', title: 'Basil', price: '2.30 €', image: 'https://via.placeholder.com/200' },
];

const { width } = Dimensions.get('window');

export default function ProductSection() {
  return (
    <View style={{ height: 220, marginTop: 20 }}>
      <Text style={styles.heading}>Recommended Products</Text>
      <Swiper showsPagination={true} loop={true} autoplay={true} autoplayTimeout={3}>
        {products.map(p => (
          <View key={p.id} style={styles.slide}>
            <Image source={{ uri: p.image }} style={styles.image} />
            <Text style={styles.title}>{p.title}</Text>
            <Text style={styles.price}>{p.price}</Text>
          </View>
        ))}
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: { fontSize:18, fontWeight:'700', marginBottom:8, color:'#FF6F61', marginLeft:10 },
  slide: { justifyContent:'center', alignItems:'center', backgroundColor:'#fff', borderRadius:12, marginHorizontal:20, padding:10, elevation:3 },
  image: { width: width - 80, height: 120, borderRadius:12, marginBottom:10 },
  title: { fontSize:16, fontWeight:'700', marginBottom:4 },
  price: { fontSize:14, color:'#555' }
});
