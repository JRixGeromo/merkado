import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useAppSelector } from '../../../hooks/reduxHooks';
import { commonStyles } from '../../../styles/commonStyles';
import { baseStyles } from '../../../styles/baseStyles';
import { theme as appTheme } from '../../../styles/theme';

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

const ProductItem: React.FC<{
  product: Product;
  variant: 'featured' | 'postedProduct';
}> = ({ product, variant }) => {
  const themeType = useAppSelector(state => state.theme.theme);
  const commonStyle = commonStyles(themeType); // This is fine
  const baseStyle = baseStyles(themeType); // Rename this to avoid conflict

  const selectedTheme = appTheme[themeType];

  const isFeatured = variant === 'featured';

  return (
    <View
      style={[
        styles.productCard,
        isFeatured ? styles.featuredProductCard : styles.postedProductCard,
      ]}
    >
      {product.isNew && (
        <View style={styles.newBadgeContainer}>
          <Text style={styles.newBadgeText}> New </Text>
        </View>
      )}
      {/* Product Info */}
      <View
        style={[
          styles.productInfo,
          isFeatured ? baseStyle.cols_60 : baseStyle.cols_70,
        ]}
      >
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.productName}>
          {product.name}
        </Text>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={styles.productDescription}
        >
          {product.description}
        </Text>
        <Text style={styles.vendorInfo}>{`${product.region}`}</Text>

        <View style={styles.priceRow}>
          <Text style={styles.discountedPrice}>
            {product.discountedPrice}/kg
          </Text>
          {product.price !== product.discountedPrice && (
            <Text style={styles.originalPrice}>{product.price}</Text>
          )}
          {product.discount && (
            <Text style={styles.discountBadge}>-{product.discount}</Text>
          )}
        </View>
        <View style={styles.actionIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Text style={styles.iconText}>Chat</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Text style={styles.iconText}>Buy</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Product Image and Action Buttons */}
      <View
        style={[
          styles.imageContainer,
          isFeatured ? baseStyle.cols_40 : baseStyle.cols_30,
        ]}
      >
        <Image
          source={{ uri: product.imageUrl }}
          style={[
            styles.productImage,
            isFeatured && styles.featuredProductImage,
          ]}
        />
        {/* Square overlay with 3-dots icon */}
        <View style={styles.overlayContainer}>
          <TouchableOpacity style={styles.threeDotsButton}>
            <Text style={styles.threeDotsText}>⋮</Text>
          </TouchableOpacity>
        </View>
        <View style={baseStyle.columnsInside}>
          <View style={[styles.alignLeft, baseStyle.cols_2]}>
            <Text style={styles.ratingText}>⭐ 4.5</Text>
          </View>
          <View style={[styles.alignRight, baseStyle.cols_2]}>
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
    paddingTop: 20,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
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
    borderRadius: 15, // Fully rounded
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
  vendorInfo: { fontSize: 10, color: '#777', marginBottom: 5 },
  priceRow: { flexDirection: 'row', alignItems: 'center', marginRight: 10 },
  discountedPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 10,
  },
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
    width: '100%',
    height: 80,
    //borderRadius: 10,
    marginBottom: 10,
    backgroundColor: '#e0e0e0',
  },
  featuredProductImage: {
    width: '100%',
    height: 80,
  },
  actionIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  iconButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 2,
    paddingBottom: 2,
    width: 60,
    marginRight: 10,
  },
  iconText: { fontSize: 12, color: 'gray' },

  reactionRow: {
    flexDirection: 'row', // Arrange children in a row
    width: '100%', // Ensure it spans the full width
  },
  alignLeft: {
    alignItems: 'flex-start', // Align items to the left within the flex space
  },
  alignRight: {
    alignItems: 'flex-end', // Align items to the right within the flex space
  },

  ratingText: {
    fontSize: 10,
    color: '#aaa',
    fontWeight: 'bold',
  },
  reactionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reactionText: {
    fontSize: 10,
    color: '#aaa',
    fontWeight: 'bold',
  },
  newBadgeContainer: {
    position: 'absolute',
    backgroundColor: '#4CAF50', // Green background
    borderTopRightRadius: 10, // Only round the top-left corner
    borderBottomLeftRadius: 12, // Only round the bottom-right corner
    borderBottomRightRadius: 0, // Keep top-right square
    borderTopLeftRadius: 0, // Keep bottom-left square
    paddingHorizontal: 10, // Space on left and right
    paddingVertical: 2, // Space on top and bottom
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    right: 0,
    zIndex: 23,
  },
  newBadgeText: {
    color: '#fff', // White text color
    fontSize: 8, // Smaller text
    fontWeight: 'bold', // Bold text
  },
});

export default ProductItem;
