import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigationTypes';
import { categories } from '../data';

type MarketplaceScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'MarketplaceScreen'>;
};

const featuredProducts = [
  { id: 1, name: 'Featured Product 1', image: 'https://picsum.photos/400/200?random=1' },
  { id: 2, name: 'Featured Product 2', image: 'https://picsum.photos/400/200?random=2' },
  { id: 3, name: 'Featured Product 3', image: 'https://picsum.photos/400/200?random=3' },
];

const recentlyPostedProducts = Array.from({ length: 20 }, (_, index) => ({
  id: index.toString(),
  name: `Recently Posted Product ${index + 1}`,
  description: `Description of product ${index + 1}`,
  price: `$${(10 + index * 5).toFixed(2)}`,
  discountedPrice: `$${(10 + index * 5 - 2).toFixed(2)}`,
  imageUrl: `https://picsum.photos/100/100?random=${index + 1}`,
  isNew: index % 2 === 0,
  isPopular: index % 3 === 0,
  discount: `${index % 3 === 0 ? '10%' : '5%'}`,
}));

const MarketplaceScreen: React.FC<MarketplaceScreenProps> = ({ navigation }) => {
  const [activeView, setActiveView] = useState<'featured' | 'categories'>('featured');

  const renderCategoryItem = ({ item, index }: { item: typeof categories[0]; index: number }) => (
    <TouchableOpacity
      style={styles.categoryCard}
      onPress={() => navigation.navigate('CategoryDetailScreen', { category: item })}
    >
      <Image source={{ uri: `https://picsum.photos/200/200?random=${index + 1}` }} style={styles.categoryImage} />
      <Text style={styles.categoryName}>{item.name}</Text>
      <Text style={styles.categoryDescription} numberOfLines={2}>
        {item.description}
      </Text>
    </TouchableOpacity>
  );

  const renderRecentlyPostedProduct = ({ item }: { item: typeof recentlyPostedProducts[0] }) => (
    <View style={styles.productCard}>
      {/* Product Information */}
      <View style={styles.productInfo}>
        {/* Badges in One Line */}
        <View style={styles.badgeRow}>
          {item.isNew && <Text style={styles.newBadge}>New</Text>}
          {item.isPopular && <Text style={styles.popularBadge}>Popular</Text>}
        </View>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productDescription}>{item.description}</Text>
        {/* Pricing */}
        <View style={styles.priceRow}>
          <Text style={styles.discountedPrice}>{item.discountedPrice}</Text>
          {item.price !== item.discountedPrice && (
            <Text style={styles.originalPrice}>{item.price}</Text>
          )}
          {item.discount && <Text style={styles.discountBadge}>{item.discount}</Text>}
        </View>
      </View>
  
      {/* Product Image and Add-to-Cart */}
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
      {/* Search Bar and Icons */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search categories or products..."
        />
        <View style={styles.toggleIcons}>
          <TouchableOpacity
            onPress={() => setActiveView('featured')}
            style={[styles.iconButton, activeView === 'featured' && styles.activeIconButton]}
          >
            <Text style={styles.iconText}>⭐</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setActiveView('categories')}
            style={[styles.iconButton, activeView === 'categories' && styles.activeIconButton]}
          >
            <Text style={styles.iconText}>📂</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Conditional Rendering */}
      {activeView === 'featured' ? (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          {/* Featured Products Section */}
          <View style={styles.featuredContainer}>
            <Text style={styles.sectionHeader}>Featured Products</Text>
            <FlatList
              data={featuredProducts}
              horizontal
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.featuredCard}>
                  <Image source={{ uri: item.image }} style={styles.featuredImage} />
                  <Text style={styles.featuredName}>{item.name}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.id.toString()}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.featuredList}
            />
          </View>

          {/* Recently Posted Products Section */}
          <View style={styles.recentlyPostedContainer}>
            <Text style={styles.sectionHeader}>Recently Posted Products</Text>
            <FlatList
              data={recentlyPostedProducts}
              renderItem={renderRecentlyPostedProduct}
              keyExtractor={(item) => item.id}
              scrollEnabled={false} // Disable scrolling for inner FlatList
              contentContainerStyle={styles.recentlyPostedList}
            />
          </View>
        </ScrollView>
      ) : (
        <FlatList
          data={categories.map((category, index) => ({
            ...category,
            image: `https://picsum.photos/200/200?random=${index + 1}`,
          }))}
          renderItem={renderCategoryItem}
          keyExtractor={(item) => item.name}
          numColumns={2}
          contentContainerStyle={styles.categoryGrid}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  badgeRow: {
    flexDirection: 'row', // Arrange badges horizontally
    alignItems: 'center', // Align vertically in the center
    marginBottom: 5, // Space below the badges
    gap: 8, // Space between the badges (optional, use padding instead if unsupported)
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
  popularBadge: {
    backgroundColor: '#FF9800',
    color: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 3,
    fontSize: 12,
    fontWeight: 'bold',
    borderRadius: 5,
  },
   // Product Card
   productCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    padding: 15,
    backgroundColor: '#FEF9E7', // Light yellowish background
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },

  // Product Info Section
  productInfo: {
    flex: 1,
    paddingRight: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  productDescription: {
    fontSize: 14,
    color: '#666',
    marginVertical: 5,
  },

  // Price Row
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  discountedPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 10,
  },
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


  // Image Section
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
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
  addToCartText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },

  container: { flex: 1, backgroundColor: '#f8f9fa' },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    padding: 10,
    borderRadius: 8,
    fontSize: 16,
    marginRight: 10,
  },
  toggleIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    padding: 10,
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    marginLeft: 5,
  },
  activeIconButton: {
    backgroundColor: '#007BFF',
  },
  iconText: {
    fontSize: 18,
    color: '#333',
  },
  activeIconText: {
    color: '#fff',
  },
  scrollViewContent: {
    paddingBottom: 40, // Space below last item
  },
  featuredContainer: {
    marginBottom: 20,
    marginHorizontal: 15, // Align content horizontally
  },
  featuredList: {
    paddingHorizontal: 15,
  },
  featuredCard: {
    marginRight: 15,
    borderRadius: 10,
    overflow: 'hidden',
    width: 250,
  },
  featuredImage: {
    width: '100%',
    height: 150,
  },
  featuredName: {
    fontSize: 14,
    padding: 5,
    textAlign: 'center',
    backgroundColor: '#fff',
    color: '#333',
  },
  recentlyPostedContainer: {
    marginTop: 10,
    marginHorizontal: 15,
  },
  recentlyPostedList: {
    paddingHorizontal: 10,
  },
  
  categoryGrid: {
    paddingHorizontal: 10,
    paddingTop: 10,
    alignItems: 'stretch',
  },
  categoryCard: {
    flex: 1,
    margin: 10,
    padding: 15,
    borderRadius: 15,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
    alignItems: 'center',
  },
  categoryImage: {
    width: 140,
    height: 100,
    borderRadius: 15,
    marginBottom: 10,
    backgroundColor: '#e0e0e0',
  },
  categoryName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
    textAlign: 'center',
  },
  categoryDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
 
});

export default MarketplaceScreen;
