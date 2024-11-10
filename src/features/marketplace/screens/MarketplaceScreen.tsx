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
import ProductItem from '../components/ProductItem'; // Import the ProductItem component
import Ionicons from 'react-native-vector-icons/Ionicons';

type MarketplaceScreenProps = {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    'MarketplaceScreen'
  >;
};

const featuredProducts = [
  {
    id: '1',
    name: 'Featured Product 1',
    description: 'Top-rated product for your needs.',
    price: '$25',
    discountedPrice: '$20',
    imageUrl: 'https://picsum.photos/100/100?random=1',
    isNew: true,
    isPopular: false,
    discount: '20%',
    vendor: 'Vendor A',
    region: 'PH-1(2km)',
  },
  {
    id: '2',
    name: 'Featured Product 2',
    description: 'Best quality at affordable price.',
    price: '$50',
    discountedPrice: '$45',
    imageUrl: 'https://picsum.photos/100/100?random=2',
    isNew: false,
    isPopular: true,
    discount: '10%',
    vendor: 'Vendor B',
    region: 'PH-2(3km)',
  },
  {
    id: '3',
    name: 'Featured Product 2',
    description: 'Best quality at affordable price.',
    price: '$50',
    discountedPrice: '$45',
    imageUrl: 'https://picsum.photos/100/100?random=3',
    isNew: false,
    isPopular: true,
    discount: '10%',
    vendor: 'Vendor B',
    region: 'PH-2(3km)',
  },
  {
    id: '4',
    name: 'Featured Product 2',
    description: 'Best quality at affordable price.',
    price: '$50',
    discountedPrice: '$45',
    imageUrl: 'https://picsum.photos/100/100?random=4',
    isNew: false,
    isPopular: true,
    discount: '10%',
    vendor: 'Vendor B',
    region: 'PH-2(3km)',
  },
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
  vendor: `Vendor ${String.fromCharCode(65 + (index % 3))}`, // Vendor A, B, C
  region: `PH-${index + 1}(3km)`,
}));


const liveSellingUsers = [
  {
    id: '1',
    name: 'Vendor A',
    profileImage: 'https://picsum.photos/50/50?random=1',
    liveTitle: 'Exclusive Deals!',
  },
  {
    id: '2',
    name: 'Vendor B',
    profileImage: 'https://picsum.photos/50/50?random=2',
    liveTitle: 'Flash Sale - Up to 50% Off!',
  },
  {
    id: '3',
    name: 'Vendor C',
    profileImage: 'https://picsum.photos/50/50?random=3',
    liveTitle: 'Hot Products on Sale!',
  },
];

const renderLiveSellingItem = ({ item }: { item: typeof liveSellingUsers[0] }) => (
  <TouchableOpacity style={styles.liveSellingCard}>
      {/* Video Icon with Red Dot */}
      <View style={styles.videoIconContainer}>
        <Ionicons name="videocam-outline" size={20} color="green" />
        <View style={styles.redDot} />
      </View>
    <View style={styles.liveIconWrapper}>
      <Image source={{ uri: item.profileImage }} style={styles.liveSellingImage} />
    </View>
    <View style={styles.liveSellingInfo}>
      <Text style={styles.liveSellingName}>{item.name}</Text>
      <Text style={styles.liveSellingTitle}>{item.liveTitle}</Text>
    </View>
  </TouchableOpacity>
);

const MarketplaceScreen: React.FC<MarketplaceScreenProps> = ({
  navigation,
}) => {
  const [activeView, setActiveView] = useState<'featured' | 'categories'>(
    'featured',
  );

  const renderCategoryItem = ({
    item,
    index,
  }: {
    item: (typeof categories)[0];
    index: number;
  }) => (
    <TouchableOpacity
      style={styles.categoryCard}
      onPress={() =>
        navigation.navigate('CategoryDetailScreen', { category: item })
      }
    >
      <Image
        source={{ uri: `https://picsum.photos/200/200?random=${index + 1}` }}
        style={styles.categoryImage}
      />
      <View style={styles.categoryInfo}>
        <Text style={styles.categoryName}>{item.name}</Text>
        <Text style={styles.categoryDescription} numberOfLines={2}>
          {item.description}
        </Text>
        <View style={styles.categoryDetails}>
          {/* Top Subcategory with Icon */}
          <View style={styles.detailRow}>
            <Text style={styles.iconText}>📌</Text>
            <Text style={styles.detailText}>{item.subcategories[0].name}</Text>
          </View>
          {/* Total Products with Icon */}
          <View style={styles.detailRow}>
            <Text style={styles.iconText}>📦</Text>
            <Text style={styles.detailText}>{item.totalProducts || 100}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
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
            style={[
              styles.iconButton,
              activeView === 'featured' && styles.activeIconButton,
            ]}
          >
            <Text
              style={[
                styles.iconText,
                activeView === 'featured' && styles.activeIconText,
              ]}
            >
              ⭐
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setActiveView('categories')}
            style={[
              styles.iconButton,
              activeView === 'categories' && styles.activeIconButton,
            ]}
          >
            <Text
              style={[
                styles.iconText,
                activeView === 'categories' && styles.activeIconText,
              ]}
            >
              📂
            </Text>
          </TouchableOpacity>
        </View>
      </View>


    {/* Live Selling Section */}
    <View style={styles.liveSellingContainer}>
      <Text style={styles.sectionHeader}>Currently Live Selling</Text>
      <FlatList
        data={liveSellingUsers}
        horizontal
        renderItem={renderLiveSellingItem}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.liveSellingList}
      />
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
                <ProductItem product={item} variant="featured" />
              )}
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.featuredList}
            />
          </View>

          {/* Recently Posted Products Section */}
          <View style={styles.recentlyPostedContainer}>
            <Text style={styles.sectionHeader}>Recently Posted Products</Text>
            <FlatList
              data={recentlyPostedProducts}
              renderItem={({ item }) => (
                <ProductItem product={item} variant="postedProduct" />
              )}
              keyExtractor={item => item.id}
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
          keyExtractor={item => item.name}
          numColumns={2}
          contentContainerStyle={styles.categoryGrid}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
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
  activeIconText: {
    color: '#fff',
  },
  scrollViewContent: {
    paddingBottom: 40,
  },
  featuredContainer: {
    marginBottom: 20,
    marginHorizontal: 5,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    marginLeft: 10,
  },
  featuredList: {
    paddingHorizontal: 5,
  },
  recentlyPostedContainer: {
    marginTop: 10,
    marginHorizontal: 4,
  },
  recentlyPostedList: {
    paddingHorizontal: 10,
  },

  categoryCard: {
    flex: 1,
    margin: 10,
    padding: 15,
    borderRadius: 15,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    //maxWidth: 160, // Constrain card width
    justifyContent: 'space-between', // Ensure proper spacing
  },
  categoryImage: {
    width: 140,
    height: 100,
    borderRadius: 0,
    marginBottom: 10,
    backgroundColor: '#e0e0e0',
  },
  categoryInfo: {
    alignItems: 'center',
    flex: 1, // Ensure the card expands evenly
  },
  categoryName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
    textAlign: 'center',
  },
  categoryDescription: {
    fontSize: 13,
    color: '#666',
    textAlign: 'center',
    marginBottom: 10,
    lineHeight: 16, // Add spacing between lines
  },
  categoryDetails: {
    width: '100%',
    marginTop: 10,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Center-align details
    marginBottom: 5,
  },
  iconText: {
    fontSize: 16,
    marginRight: 5,
    color: '#007BFF', // Blue icon color for distinction
  },
  detailText: {
    fontSize: 13, // Smaller font size to fit content
    color: '#555',
    flexWrap: 'wrap', // Ensure text wraps correctly
    textAlign: 'center', // Center-align text
  },

  categoryGrid: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },

  categorySubcategory: {
    fontSize: 13,
    color: '#888',
    marginTop: 3,
    textAlign: 'center',
    fontStyle: 'italic',
  },


  liveIconWrapper: {
    position: 'relative',
  },
  videoIconContainer: {
    position: 'absolute',
    top: 2, // Position above the profile image
    right: 4, // Position to the right
    justifyContent: 'center',
    alignItems: 'center',
  },
  redDot: {
    position: 'absolute',
    top: 0, // Position at the top of the video icon
    right: 0, // Position at the right of the video icon
    width: 8, // Size of the red dot
    height: 8,
    backgroundColor: 'red', // Red color for the dot
    borderRadius: 4, // Fully circular
    borderWidth: 1, // Optional border for distinction
    borderColor: 'white', // Border color to make it stand out
  },
  liveSellingImage: {
    width: 50,
    height: 50,
    borderRadius: 25, // Circular profile image
    marginRight: 10,
  },
  liveSellingCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  liveSellingInfo: {
    flex: 1,
  },
  liveSellingName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  liveSellingTitle: {
    fontSize: 14,
    color: '#666',
  },
  
  // onlineIndicator: {
  //   position: 'absolute',
  //   bottom: -5, // Slightly below the icon
  //   right: -5, // Slightly to the right
  //   width: 10,
  //   height: 10,
  //   backgroundColor: 'green', // Green online status
  //   borderRadius: 5, // Fully circular
  //   borderWidth: 1,
  //   borderColor: 'white', // Border to make it distinct
  // },
  
  
  videoIcon: {
    fontSize: 12, // Adjust icon size
    color: 'white',
    fontWeight: 'bold',
  },
  
  liveSellingContainer: {
    marginBottom: 20, // Add spacing from the section below
    marginHorizontal: 5,
    paddingVertical: 10, // Ensure padding around the section
    borderTopWidth: 1, // Add top border
    borderBottomWidth: 1, // Add bottom border
    borderColor: '#ddd', // Light gray border color
    backgroundColor: '#fff', // Ensure contrast with the borders
  },
  liveSellingList: {
    paddingHorizontal: 10,
  },
 
});

export default MarketplaceScreen;
