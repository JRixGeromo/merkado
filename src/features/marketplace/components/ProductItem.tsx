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

const ProductItem: React.FC<{ product: Product; variant: 'featured' | 'postedProduct' }> = ({ 
  product,
  variant,
}) => {
  const isFeatured = variant === 'featured';

  return (
    <View
      style={[
        styles.productCard,
        isFeatured ? styles.featuredProductCard : styles.postedProductCard,
      ]}
    >
      {/* Product Info */}
      <View style={styles.productInfo}>
      {product.isNew && (
  <View style={styles.newBadgeContainer}>
    <Text style={styles.newBadgeText}>New</Text>
  </View>
)}
        <Text style={styles.productName}>{product.name}</Text>
        {/* <Text style={styles.productDescription}>{product.description}</Text> */}
        <Text style={styles.vendorInfo}>{`${product.region}`}</Text>
        
        <View style={styles.priceRow}>
          <Text style={styles.discountedPrice}>{product.discountedPrice}/kg</Text>
          {product.price !== product.discountedPrice && (
            <Text style={styles.originalPrice}>{product.price}</Text>
          )}
          {product.discount && <Text style={styles.discountBadge}>-{product.discount}</Text>}
        </View>
        <View style={styles.actionIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Text style={styles.iconText}>💬</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Text style={styles.iconText}>🛒</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Product Image and Action Buttons */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: product.imageUrl }}
          style={[styles.productImage, isFeatured && styles.featuredProductImage]}
        />
        {/* Square overlay with 3-dots icon */}
        <View style={styles.overlayContainer}>
          <TouchableOpacity style={styles.threeDotsButton}>
            <Text style={styles.threeDotsText}>⋮</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.reactionRow}>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>⭐ 4.5</Text>
        </View>
        <View style={styles.reactionContainer}>
          <Text style={styles.reactionText}>❤️ 123</Text>
        </View>
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productCard: {
    flexDirection: 'row',
    alignItems: 'flex-start', // Ensures the items align to the top
    justifyContent: 'flex-start', // Align the content to the top-left
    marginVertical: 8,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  
  productInfo: {
    flex: 1,
    paddingRight: 10,
    alignItems: 'flex-start', // Ensures child elements are aligned to the top-left
    justifyContent: 'flex-start', // Forces content to start at the top
  },
  featuredProductCard: {
    width: 275,
    marginRight: 15,
    marginLeft: 4,
  },
  postedProductCard: {
    marginHorizontal: 0,
  },
  overlayContainer: {
    position: 'absolute',
    top: 3,
    right: 3,
    width: 30,
    height: 30,
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Semi-transparent background
    borderRadius: 4, // Fully rounded
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  threeDotsButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  threeDotsText: {
    fontSize: 18,
    color: '#fff', // White color for contrast
    fontWeight: 'bold',
  },

  badgesRow: {
    flexDirection: 'row',
    marginBottom: 5,
    gap: 8,
  },
  productName: { fontSize: 14, color: '#333' },
  productDescription: { fontSize: 12, color: '#666', marginVertical: 5 },
  vendorInfo: { fontSize: 10, color: '#777', marginBottom: 5},
  priceRow: { flexDirection: 'row', alignItems: 'center' },
  discountedPrice: { fontSize: 16, fontWeight: 'bold', color: '#333', marginRight: 10 },
  originalPrice: {
    fontSize: 12,
    color: '#999',
    textDecorationLine: 'line-through',
    marginRight: 10,
  },
  discountBadge: {
    backgroundColor: '#FF5252',
    color: '#fff',
    paddingHorizontal: 5,
    fontSize: 10,
    borderRadius: 5,
    fontWeight: 'bold',
  },
  popularBadge: {
    backgroundColor: '#FF9800',
    color: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 3,
    fontSize: 10,
    fontWeight: 'bold',
    borderRadius: 5,
  },
  newBadge: {
    backgroundColor: '#4CAF50',
    color: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 3,
    fontSize: 10,
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
    //borderRadius: 10,
    marginBottom: 10,
    backgroundColor: '#e0e0e0',
  },
  featuredProductImage: {
    width: 100,
    height: 100,
  },
  actionIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 80,
    marginTop: 10,
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
  reactionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    //marginTop: 18, // Spacing from the price row
    gap: 16, // Space between rating and reaction
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 12,
    color: '#333',
    fontWeight: 'bold',
  },
  reactionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reactionText: {
    fontSize: 12,
    color: '#FF5252',
    fontWeight: 'bold',
  },
  newBadgeContainer: {
    backgroundColor: '#4CAF50', // Green background
    borderTopLeftRadius: 10, // Only round the top-left corner
    borderBottomRightRadius: 12, // Only round the bottom-right corner
    borderTopRightRadius: 0, // Keep top-right square
    borderBottomLeftRadius: 0, // Keep bottom-left square
    paddingHorizontal: 10, // Space on left and right
    paddingVertical: 2, // Space on top and bottom
    alignItems: 'center',
    justifyContent: 'center',
    top: -16,
    left: -16,
  },
  newBadgeText: {
    color: '#fff', // White text color
    fontSize: 12, // Smaller text
    fontWeight: 'bold', // Bold text
  },
});

export default ProductItem;
