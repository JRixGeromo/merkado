import React, { useState } from 'react';
import { ScrollView, View, Text, FlatList, Image, Dimensions, TouchableOpacity, ListRenderItem, TextInput } from 'react-native';
import { useAppSelector } from '../../../hooks/reduxHooks';
import { commonStyles } from '../../../styles/commonStyles';
import { theme as appTheme } from '../../../styles/theme';
import MarketplaceModal from '../components/MarketplaceModal'; // Import reusable modal component
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
    ],
    'Beverages': [
      { id: '3', name: 'Coke', price: 30, imageUrl: 'https://picsum.photos/100/100?random=3', rating: 4.7, likes: 25 },
      { id: '4', name: 'Pepsi', price: 25, imageUrl: 'https://picsum.photos/100/100?random=4', rating: 4.6, likes: 20 },
    ],
    'Prepared Meals': [
      { id: '5', name: 'Fried Chicken', price: 120, imageUrl: 'https://picsum.photos/100/100?random=5', rating: 4.8, likes: 35 },
      { id: '6', name: 'Pasta', price: 150, imageUrl: 'https://picsum.photos/100/100?random=6', rating: 4.5, likes: 30 },
    ],
    'Snacks': [
      { id: '7', name: 'Chips', price: 50, imageUrl: 'https://picsum.photos/100/100?random=7', rating: 4.2, likes: 18 },
      { id: '8', name: 'Energy Bar', price: 60, imageUrl: 'https://picsum.photos/100/100?random=8', rating: 4.1, likes: 12 },
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
    <View style={commonStyle.productBox}>
      <Image source={{ uri: item.imageUrl }} style={commonStyle.productImage} />
      <Text style={commonStyle.productName}>{item.name}</Text>
      <Text style={commonStyle.productPrice}>₱{item.price}</Text>
  
      <View style={commonStyle.infoRow}>
        <Icon name="star" size={16} color="gold" style={commonStyle.iconContainer} />
        <Text style={commonStyle.infoText}>{item.rating}</Text>
      </View>
  
      <View style={commonStyle.likeRow}>
        <TouchableOpacity onPress={() => toggleProductLike(item.id)} style={commonStyle.iconContainer}>
          <Icon
            name={likedProducts[item.id] ? 'heart' : 'heart-outline'}
            size={18}
            color={likedProducts[item.id] ? 'red' : selectedTheme.iconColor}
          />
        </TouchableOpacity>
        <Text style={commonStyle.infoText}>
          {item.likes + (likedProducts[item.id] ? 1 : 0)} Likes
        </Text>
      </View>
  
      {/* Buttons with 50% width each */}
      <View style={commonStyle.buttonRow}>
        <TouchableOpacity style={[commonStyle.fullWidthButton, commonStyle.chatButton]}>
          <Icon name="chatbubble-outline" size={20} color={selectedTheme.textLight} />
        </TouchableOpacity>
        <TouchableOpacity style={[commonStyle.fullWidthButton, commonStyle.cartButton]}>
          <Icon name="cart-outline" size={20} color={selectedTheme.textLight} />
        </TouchableOpacity>
      </View>
    </View>
  );
  
  

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={commonStyle.section}>
        {/* Search Container */}
        <View style={commonStyle.searchContainer}>
          <TouchableOpacity style={commonStyle.headerIcon} onPress={toggleModal}>
            <Icon name="menu" size={24} color={selectedTheme.iconColor} />
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
