import React, { useState } from 'react';
import { ScrollView, View, Text, FlatList, Image, Dimensions, TouchableOpacity, ListRenderItem, TextInput } from 'react-native';
import { useAppSelector } from '../../../hooks/reduxHooks';
import { commonStyles } from '../../../styles/commonStyles';
import { theme as appTheme } from '../../../styles/theme';
import MarketplaceModal from '../components/MarketplaceModal'; // Import reusable modal component
import ContentCard from '../../../components/ContentCard';
import Icon from 'react-native-vector-icons/Ionicons'; // Import icons for ratings and likes
import { useTranslation } from 'react-i18next'; // Import translation hook

// Get screen dimensions for responsive design
const { width: screenWidth } = Dimensions.get('window');

// TypeScript types for products and stores
type Product = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  rating: number;
  likes: number;
  onSale?: boolean; // Add an optional "onSale" flag
};

const MarketplaceScreen = () => {
  
  const theme = useAppSelector(state => state.theme.theme); // Get current theme from Redux
  const commonStyle = commonStyles(theme);
  const selectedTheme = appTheme[theme];

  const { t } = useTranslation(); // Initialize translation
  
  const [isModalVisible, setModalVisible] = useState(false);

  // Sample data for categories, brands, vendors, featured, promos, onSaleProducts, newProducts
  const categories = ['Cosmetics', 'Beverages', 'Prepared Meals', 'Snacks'];
  const brands = ['Brand 1', 'Brand 2', 'Brand 3']; // New brands section
  const vendors = ['Vendor 1', 'Vendor 2', 'Vendor 3'];
  const featured = ['Featured 1', 'Featured 2', 'Featured 3'];
  const promos = ['Promo 1', 'Promo 2', 'Promo 3'];
  const onSaleProducts = ['Sale 1', 'Sale 2', 'Sale 3']; // Added onSale products
  const newProducts = ['New 1', 'New 2', 'New 3']; // Added new products
  
  // Function to toggle modal visibility
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const products: { [key: string]: Product[] } = {
    'Cosmetics': [
      { id: '1', name: 'Lipstick', price: 500, imageUrl: 'https://picsum.photos/100/100?random=1', rating: 4.5, likes: 10, onSale: true },
      { id: '2', name: 'Foundation', price: 700, imageUrl: 'https://picsum.photos/100/100?random=2', rating: 4.2, likes: 15 },
      { id: '3', name: 'Eye Brow', price: 700, imageUrl: 'https://picsum.photos/100/100?random=3', rating: 4.2, likes: 15 },
    ],
    'Beverages': [
      { id: '4', name: 'Coke', price: 30, imageUrl: 'https://picsum.photos/100/100?random=4', rating: 4.7, likes: 25 },
      { id: '5', name: 'Pepsi', price: 25, imageUrl: 'https://picsum.photos/100/100?random=5', rating: 4.6, likes: 20 },
      { id: '6', name: 'Beer', price: 25, imageUrl: 'https://picsum.photos/100/100?random=6', rating: 4.6, likes: 20 },
    ],
    'Prepared Meals': [
      { id: '7', name: 'Fried Chicken', price: 120, imageUrl: 'https://picsum.photos/100/100?random=7', rating: 4.8, likes: 35 },
      { id: '8', name: 'Pasta', price: 150, imageUrl: 'https://picsum.photos/100/100?random=8', rating: 4.5, likes: 30 },
      { id: '9', name: 'Lechon Baboy', price: 25, imageUrl: 'https://picsum.photos/100/100?random=9', rating: 4.6, likes: 20 },
    ],
    'Snacks': [
      { id: '10', name: 'Chips', price: 50, imageUrl: 'https://picsum.photos/100/100?random=10', rating: 4.2, likes: 18 },
      { id: '11', name: 'Energy Bar', price: 60, imageUrl: 'https://picsum.photos/100/100?random=11', rating: 4.1, likes: 12 },
      { id: '12', name: 'Skyflakes', price: 25, imageUrl: 'https://picsum.photos/100/100?random=12', rating: 4.6, likes: 20 },
    ],
  };


  // State to manage liked products
  const [likedProducts, setLikedProducts] = useState<{ [key: string]: boolean }>({});

  // Toggle like status for each product
  const toggleProductLike = (productId: string) => {
    setLikedProducts((prevState) => ({
      ...prevState,
      [productId]: !prevState[productId],
    }));
  };

  
  const renderProductItem: ListRenderItem<Product> = ({ item }) => (
    <ContentCard
      type="product"
      imageUrl={item.imageUrl}
      name={item.name}
      price={item.price}
      rating={item.rating}
      likes={item.likes}
      isLiked={likedProducts[item.id]}
      onMagnifyPress={() => console.log('Magnify pressed')}
      onLikePress={() => toggleProductLike(item.id)}
      buttonActions={[
        { iconName: 'chatbubble-outline', onPress: () => console.log('Chat Pressed'), buttonStyle: commonStyle.chatButton },
        { iconName: 'cart-outline', onPress: () => console.log('Cart Pressed'), buttonStyle: commonStyle.cartButton },
      ]}
    />
  );
  
  

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={commonStyle.section}>
        {/* Search Container */}
        <View style={commonStyle.searchContainer}>
          <TouchableOpacity style={commonStyle.headerIcon} onPress={toggleModal}>
            <Icon name="menu" size={24} color={selectedTheme.iconColorPrimary} />
          </TouchableOpacity>
          <TextInput style={commonStyle.searchInput} placeholder="Search" placeholderTextColor="gray" />
        </View>

        {/* Reusable Modal Component */}
        <MarketplaceModal
          visible={isModalVisible}
          onClose={toggleModal}
          categories={categories}
          brands={brands}
          vendors={vendors}
          featured={featured}
          promos={promos}
          onSaleProducts={onSaleProducts}
          newProducts={newProducts}
        />

        {/* Featured Products Section */}
        {categories.map((category, index) => (
          <View key={index} style={commonStyle.section}>
            <Text style={commonStyle.sectionTitle}>{category}</Text>
            <FlatList
              data={products[category]}
              renderItem={renderProductItem}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 16 }}
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default MarketplaceScreen;
