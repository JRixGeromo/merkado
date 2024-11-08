import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigationTypes'; // Import RootStackParamList

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
    },
  ];

  const renderProductItem = ({ item }: { item: typeof products[0] }) => (
    <View style={styles.productCard}>
      {/* Product Info */}
      <View style={styles.productInfo}>
        {/* New Badge */}
        {item.isNew && <Text style={styles.newBadge}>New</Text>}
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productDescription}>{item.description}</Text>
        <View style={styles.priceRow}>
          <Text style={styles.discountedPrice}>{item.discountedPrice}</Text>
          {item.price !== item.discountedPrice && (
            <Text style={styles.originalPrice}>{item.price}</Text>
          )}
          {item.discount && <Text style={styles.discountBadge}>-{item.discount}</Text>}
        </View>
        {item.isPopular && <Text style={styles.popularBadge}>Popular</Text>}
      </View>

      {/* Product Image */}
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.addToCartText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{subcategory.name}</Text>
      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.productList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa' },
  header: { fontSize: 22, fontWeight: 'bold', margin: 15, color: '#333' },
  productList: { padding: 10 },
  productCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    position: 'relative', // For badges
  },
  productInfo: { flex: 1, paddingRight: 10 },
  productName: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  productDescription: { fontSize: 14, color: '#666', marginVertical: 5 },
  priceRow: { flexDirection: 'row', alignItems: 'center', marginTop: 5 },
  discountedPrice: { fontSize: 16, fontWeight: 'bold', color: '#333', marginRight: 10 },
  originalPrice: {
    fontSize: 14,
    color: '#999',
    textDecorationLine: 'line-through',
    marginRight: 10,
  },
  discountBadge: {
    backgroundColor: '#FF5252',
    color: '#fff',
    paddingHorizontal: 5,
    fontSize: 12,
    borderRadius: 5,
    fontWeight: 'bold',
  },
  popularBadge: {
    marginTop: 5,
    backgroundColor: '#FF9800',
    color: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 3,
    fontSize: 12,
    fontWeight: 'bold',
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  newBadge: {
    backgroundColor: '#4CAF50',
    color: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 3,
    fontSize: 12,
    fontWeight: 'bold',
    borderRadius: 5,
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  imageContainer: {
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: '#e0e0e0',
  },
  addToCartButton: {
    backgroundColor: '#4CAF50',
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addToCartText: { fontSize: 18, color: '#fff', fontWeight: 'bold' },
});

export default ProductsScreen;
