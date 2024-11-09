import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

type Product = {
  id: string;
  name: string;
  description: string;
  price: string;
  discountedPrice: string;
  imageUrl: string;
  isNew: boolean;
  isPopular: boolean;
  discount: string;
  vendor: string;
  region: string;
};

const ProductItem: React.FC<{ product: Product; variant: 'featured' | 'recentlyPosted' }> = ({
  product,
  variant,
}) => {
  const isFeatured = variant === 'featured';

  return (
    <View
      style={[
        styles.productCard,
        isFeatured ? styles.featuredProductCard : styles.recentlyPostedProductCard,
      ]}
    >
      {/* Product Info */}
      <View style={styles.productInfo}>
        <View style={styles.badgesRow}>
          {product.isNew && <Text style={styles.newBadge}>New</Text>}
          {product.isPopular && <Text style={styles.popularBadge}>Popular</Text>}
        </View>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productDescription}>{product.description}</Text>
        <Text style={styles.vendorInfo}>{`${product.vendor} - ${product.region}`}</Text>
        <View style={styles.priceRow}>
          <Text style={styles.discountedPrice}>{product.discountedPrice}</Text>
          {product.price !== product.discountedPrice && (
            <Text style={styles.originalPrice}>{product.price}</Text>
          )}
          {product.discount && <Text style={styles.discountBadge}>-{product.discount}</Text>}
        </View>
      </View>

      {/* Product Image and Action Buttons */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: product.imageUrl }}
          style={[styles.productImage, isFeatured && styles.featuredProductImage]}
        />
        <View style={styles.actionIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Text style={styles.iconText}>💬</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Text style={styles.iconText}>🛒</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  },
  featuredProductCard: {
    width: 300, // Adjusted width for featured products
    marginRight: 15,
    marginLeft: 4,
  },
  recentlyPostedProductCard: {
    marginHorizontal: 0, // Default margin for recently posted products
  },
  productInfo: { flex: 1, paddingRight: 10 },
  badgesRow: {
    flexDirection: 'row',
    marginBottom: 5,
    gap: 8,
  },
  productName: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  productDescription: { fontSize: 14, color: '#666', marginVertical: 5 },
  vendorInfo: { fontSize: 13, color: '#777', marginBottom: 5 },
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
    backgroundColor: '#FF9800',
    color: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 3,
    fontSize: 12,
    fontWeight: 'bold',
    borderRadius: 5,
  },
  newBadge: {
    backgroundColor: '#4CAF50',
    color: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 3,
    fontSize: 12,
    fontWeight: 'bold',
    borderRadius: 5,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: '#e0e0e0',
  },
  featuredProductImage: {
    width: 80, // Smaller image for featured products
    height: 80,
  },
  actionIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    width: 70,
  },
  iconButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    backgroundColor: '#f1f1f1',
    borderRadius: 15,
  },
  iconText: { fontSize: 18, color: '#333' },
});

export default ProductItem;
