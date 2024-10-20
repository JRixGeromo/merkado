import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
  ListRenderItem,
  TextInput,
} from 'react-native';
import { useAppSelector } from '../../../hooks/reduxHooks';
import { commonStyles } from '../../../styles/commonStyles';
import { theme as appTheme } from '../../../styles/theme';
import MarketplaceModal from '../components/MarketplaceModal'; // Import reusable modal component
import ContentCard from '../../../components/ContentCard';
import IconLib from '../../../components/IconLib'; // Use IconLib here
import { useTranslation } from 'react-i18next'; // Import translation hook
import { useNavigation } from '@react-navigation/native'; // Import the navigation hook
import { NativeStackNavigationProp } from '@react-navigation/native-stack'; // Use NativeStackNavigationProp
import { RootStackParamList } from '../../../navigationTypes'; // Import RootStackParamList

// Get screen dimensions for responsive design
const { width: screenWidth } = Dimensions.get('window');

export type Product = {
  id: string;
  name: string;
  description: string | null;
  distance: string;
  price: number;
  imageUrl: string;
  rating: number;
  likes: number;
  onSale: boolean;
};

const MarketplaceScreen = () => {
  const theme = useAppSelector(state => state.theme.theme); // Get current theme from Redux
  const commonStyle = commonStyles(theme);
  const selectedTheme = appTheme[theme];
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>(); // Correct the type here

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
    Cosmetics: [
      {
        id: '1',
        name: 'Lipstick',
        description: 'Beef Boneless',
        price: 500,
        distance: 'PH-03(32km)',
        imageUrl: 'https://picsum.photos/100/100?random=1',
        rating: 4.5,
        likes: 10,
        onSale: true,
      },
      {
        id: '2',
        name: 'Foundation',
        description: 'Beef Boneless',
        price: 500,
        distance: 'PH-03(32km)',
        imageUrl: 'https://picsum.photos/100/100?random=2',
        rating: 4.2,
        likes: 15,
        onSale: false,
      },
      {
        id: '3',
        name: 'Eye Brow',
        description: 'Beef Boneless',
        price: 500,
        distance: 'PH-03(32km)',
        imageUrl: 'https://picsum.photos/100/100?random=3',
        rating: 4.2,
        likes: 15,
        onSale: true,
      },
    ],
    Beverages: [
      {
        id: '4',
        name: 'Coke',
        description: 'Beef Boneless',
        price: 500,
        distance: 'PH-03(32km)',
        imageUrl: 'https://picsum.photos/100/100?random=4',
        rating: 4.7,
        likes: 25,
        onSale: true,
      },
      {
        id: '5',
        name: 'Pepsi',
        description: 'Beef Boneless',
        price: 500,
        distance: 'PH-03(32km)',
        imageUrl: 'https://picsum.photos/100/100?random=5',
        rating: 4.6,
        likes: 20,
        onSale: false,
      },
      {
        id: '6',
        name: 'Beer',
        description: 'Beef Boneless',
        price: 500,
        distance: 'PH-03(32km)',
        imageUrl: 'https://picsum.photos/100/100?random=6',
        rating: 4.6,
        likes: 20,
        onSale: true,
      },
    ],
    'Prepared Meals': [
      {
        id: '7',
        name: 'Fried Chicken',
        description: 'Beef Boneless',
        price: 500,
        distance: 'PH-03(32km)',
        imageUrl: 'https://picsum.photos/100/100?random=7',
        rating: 4.8,
        likes: 35,
        onSale: false,
      },
      {
        id: '8',
        name: 'Pasta',
        description: 'Beef Boneless',
        price: 500,
        distance: 'PH-03(32km)',
        imageUrl: 'https://picsum.photos/100/100?random=8',
        rating: 4.5,
        likes: 30,
        onSale: true,
      },
      {
        id: '9',
        name: 'Lechon Baboy',
        description: 'Beef Boneless',
        price: 500,
        distance: 'PH-03(32km)',
        imageUrl: 'https://picsum.photos/100/100?random=9',
        rating: 4.6,
        likes: 20,
        onSale: true,
      },
    ],
    Snacks: [
      {
        id: '10',
        name: 'Chips',
        description: 'Beef Boneless',
        price: 500,
        distance: 'PH-03(32km)',
        imageUrl: 'https://picsum.photos/100/100?random=10',
        rating: 4.2,
        likes: 18,
        onSale: true,
      },
      {
        id: '11',
        name: 'Energy Bar',
        description: 'Beef Boneless',
        price: 500,
        distance: 'PH-03(32km)',
        imageUrl: 'https://picsum.photos/100/100?random=11',
        rating: 4.1,
        likes: 12,
        onSale: true,
      },
      {
        id: '12',
        name: 'Skyflakes',
        description: 'Beef Boneless',
        price: 500,
        distance: 'PH-03(32km)',
        imageUrl: 'https://picsum.photos/100/100?random=12',
        rating: 4.6,
        likes: 20,
        onSale: true,
      },
    ],
  };

  // State to manage liked products
  const [likedProducts, setLikedProducts] = useState<{
    [key: string]: boolean;
  }>({});

  // Toggle like status for each product
  const toggleProductLike = (productId: string) => {
    setLikedProducts(prevState => ({
      ...prevState,
      [productId]: !prevState[productId],
    }));
  };

  const renderProductItem: ListRenderItem<Product> = ({ item }) => (
    <ContentCard
      type="product"
      imageUrl={item.imageUrl}
      name={item.name}
      description={item.description}
      distance={item.distance}
      price={item.price}
      rating={item.rating}
      likes={item.likes}
      isLiked={likedProducts[item.id]}
      onFullScreenPress={() =>
        navigation.navigate('DetailsScreen', { item, type: 'product' })
      } // Corrected navigation
      onLikePress={() => toggleProductLike(item.id)}
      buttonActions={[
        {
          iconName: 'Chat_O', // Update to use IconLib name
          onPress: () => console.log('Chat Pressed'),
          buttonStyle: commonStyle.chatButton,
        },
        {
          iconName: 'Cart_O', // Update to use IconLib name
          onPress: () => console.log('Cart Pressed'),
          buttonStyle: commonStyle.cartButton,
        },
      ]}
    />
  );

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={commonStyle.section}>
        {/* Search Container */}
        <View style={commonStyle.searchContainer}>
          <TouchableOpacity
            style={commonStyle.headerIcon}
            onPress={toggleModal}
          >
            <IconLib.Menu size={24} color={selectedTheme.iconColorPrimary} />
          </TouchableOpacity>
          <TextInput
            style={commonStyle.searchInput}
            placeholder="Search"
            placeholderTextColor="gray"
          />
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
              keyExtractor={item => item.id}
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
