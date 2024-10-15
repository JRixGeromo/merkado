import React, { useState } from 'react';
import { ScrollView, View, Text, FlatList, Image, Dimensions, TouchableOpacity, ListRenderItem, TextInput } from 'react-native';
import { useAppSelector } from '../../../hooks/reduxHooks';
import { commonStyles } from '../../../styles/commonStyles';
import { theme } from '../../../styles/theme'; // Import theme
import MarketplaceModal from '../components/MarketplaceModal'; // Import reusable modal component
import Icon from 'react-native-vector-icons/Ionicons'; // Import icons for ratings and likes
import { useTranslation } from 'react-i18next'; // Import translation hook

const { width: screenWidth } = Dimensions.get('window');

type Product = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  rating: number;
  likes: number;
};

const MarketplaceScreen = () => {
  const themeType = useAppSelector(state => state.theme.theme); // Get current theme
  const styles = commonStyles(themeType);
  const selectedTheme = theme[themeType];
  const { t } = useTranslation(); // Initialize translation
  
  const [isModalVisible, setModalVisible] = useState(false);

  // Sample data for categories, vendors, featured, promos
  const categories = ['Cosmetics', 'Beverages', 'Prepared Meals', 'Snacks'];
  const vendors = ['Vendor 1', 'Vendor 2', 'Vendor 3'];
  const featured = ['Featured 1', 'Featured 2', 'Featured 3'];
  const promos = ['Promo 1', 'Promo 2', 'Promo 3'];

  // Function to toggle modal visibility
  const toggleModal = () => {
    setModalVisible(prev => !prev);
  };

  const products: { [key: string]: Product[] } = {
    'Cosmetics': [
      { id: '1', name: 'Lipstick', price: 500, imageUrl: 'https://via.placeholder.com/100', rating: 4.5, likes: 10 },
      { id: '2', name: 'Foundation', price: 700, imageUrl: 'https://via.placeholder.com/100', rating: 4.2, likes: 15 },
      { id: '3', name: 'Face Cream', price: 200, imageUrl: 'https://via.placeholder.com/100', rating: 4.0, likes: 15 },
    ],
    'Beverages': [
      { id: '3', name: 'Coke', price: 30, imageUrl: 'https://via.placeholder.com/100', rating: 4.7, likes: 25 },
      { id: '4', name: 'Pepsi', price: 25, imageUrl: 'https://via.placeholder.com/100', rating: 4.6, likes: 20 },
      { id: '5', name: 'Sprite', price: 200, imageUrl: 'https://via.placeholder.com/100', rating: 4.0, likes: 15 },
    ],
    'Prepared Meals': [
      { id: '5', name: 'Fried Chicken', price: 120, imageUrl: 'https://via.placeholder.com/100', rating: 4.8, likes: 35 },
      { id: '6', name: 'Pasta', price: 150, imageUrl: 'https://via.placeholder.com/100', rating: 4.5, likes: 30 },
      { id: '7', name: 'Bulad', price: 200, imageUrl: 'https://via.placeholder.com/100', rating: 4.0, likes: 15 },
    ],
    'Snacks': [
      { id: '7', name: 'Chips', price: 50, imageUrl: 'https://via.placeholder.com/100', rating: 4.2, likes: 18 },
      { id: '8', name: 'Energy Bar', price: 60, imageUrl: 'https://via.placeholder.com/100', rating: 4.1, likes: 12 },
      { id: '9', name: 'Skyflakes', price: 200, imageUrl: 'https://via.placeholder.com/100', rating: 4.0, likes: 15 },
      { id: '10', name: 'Mani', price: 200, imageUrl: 'https://via.placeholder.com/100', rating: 4.0, likes: 15 },
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

  // Render each product in the list
  const renderProductItem: ListRenderItem<Product> = ({ item }) => (
    <View style={styles.productBox}>
      <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>₱{item.price}</Text>

      <View style={styles.infoRow}>
        <Icon name="star" size={16} color="gold" />
        <Text style={styles.infoText}>{item.rating}</Text>
      </View>

      {/* Wrap heart icon and likes count in a row */}
      <View style={styles.likeRow}>
        <TouchableOpacity onPress={() => toggleProductLike(item.id)}>
          <Icon
            name={likedProducts[item.id] ? 'heart' : 'heart-outline'}
            size={18}
            color={likedProducts[item.id] ? 'red' : selectedTheme.iconColor}
          />
        </TouchableOpacity>
        <Text style={styles.infoText}>{item.likes + (likedProducts[item.id] ? 1 : 0)} Likes</Text>
      </View>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.section}>
        <View style={styles.searchContainer}>
          {/* Categories Icon Button */}
          <TouchableOpacity style={styles.headerIcon} onPress={toggleModal}>
            <Icon name="menu" size={24} color={selectedTheme.iconColor} />
          </TouchableOpacity>

          {/* Search Bar */}
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="gray"
          />

          {/* Reusable Modal Component */}
          <MarketplaceModal
            visible={isModalVisible}
            onClose={toggleModal}
            categories={categories}
            vendors={vendors}
            featured={featured}
            promos={promos}
          />
        </View>

        {/* Featured Products Section */}
        {categories.map((category, index) => (
          <View key={index} style={styles.section}>
            <Text style={styles.sectionTitle}>{category}</Text>
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
