import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigationTypes'; // Import RootStackParamList

type ProductsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ProductsScreen'
>;

const ProductsScreen: React.FC<ProductsScreenProps> = ({ route }) => {
  const { subcategory } = route.params;

  const products = [
    { id: '1', name: 'iPhone 13', price: '$999', imageUrl: 'https://picsum.photos/100/100?random=1' },
    { id: '2', name: 'Samsung Galaxy S22', price: '$799', imageUrl: 'https://picsum.photos/100/100?random=2' },
    { id: '3', name: 'MacBook Pro', price: '$1999', imageUrl: 'https://picsum.photos/100/100?random=3' },
  ];

  const renderProductItem = ({ item }: { item: { id: string; name: string; price: string; imageUrl: string } }) => (
    <View style={styles.productCard}>
      <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{subcategory.name}</Text>
      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.productGrid}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa', padding: 10 },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 15 },
  productGrid: { paddingBottom: 20 },
  productCard: {
    flex: 1,
    margin: 5,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    alignItems: 'center',
  },
  productImage: { width: 80, height: 80, marginBottom: 10 },
  productName: { fontSize: 16, fontWeight: 'bold', marginBottom: 5 },
  productPrice: { fontSize: 14, color: '#555' },
});

export default ProductsScreen;
