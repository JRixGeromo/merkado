import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigationTypes';
import ProductItem from '../components/ProductItem'; // Import ProductItem

type ProductsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ProductsScreen'
>;

const ProductsScreen: React.FC<ProductsScreenProps> = ({ route }) => {
  const { subcategory } = route.params;

  const products = [
    {
      id: '1',
      name: 'iPhone 13',
      description: 'Premium smartphone with A15 chip',
      price: '$999',
      discountedPrice: '$949',
      imageUrl: 'https://picsum.photos/100/100?random=1',
      isNew: true,
      isPopular: true,
      discount: '5%',
      vendor: 'TechStore Inc.',
      region: 'PH-1(3km)',
    },
    {
      id: '2',
      name: 'Samsung Galaxy S22',
      description: 'Latest flagship with AMOLED display',
      price: '$799',
      discountedPrice: '$749',
      imageUrl: 'https://picsum.photos/100/100?random=2',
      isNew: false,
      isPopular: true,
      discount: '6%',
      vendor: 'GadgetWorld',
      region: 'PH-2(5km)',
    },
    {
      id: '3',
      name: 'MacBook Pro',
      description: 'High-performance laptop for professionals',
      price: '$1999',
      discountedPrice: '$1799',
      imageUrl: 'https://picsum.photos/100/100?random=3',
      isNew: true,
      isPopular: false,
      discount: '10%',
      vendor: 'Apple Store',
      region: 'PH-3(10km)',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{subcategory.name}</Text>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ProductItem product={item} variant="postedProduct" />
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.productList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa' },
  header: { fontSize: 22, fontWeight: 'bold', margin: 15, color: '#333' },
  productList: { padding: 10 },
});

export default ProductsScreen;
