import React, { useRef, useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, Dimensions, FlatList, ListRenderItem, TouchableOpacity, TextInput } from 'react-native';
import { useAppSelector } from '../../../hooks/reduxHooks';
import { commonStyles } from '../../../styles/commonStyles';
import MarketplaceModal from '../../marketplace/components/MarketplaceModal'; // Import reusable modal component
import ContentCard from '../../../components/ContentCard';
import Carousel from 'react-native-snap-carousel';
import { useTranslation } from 'react-i18next'; // Import the translation hook
import { theme as appTheme } from '../../../styles/theme';
import Icon from 'react-native-vector-icons/Ionicons'; // Icon library for likes and ratings
import { useNavigation } from '@react-navigation/native'; // Import the navigation hook
import { NativeStackNavigationProp } from '@react-navigation/native-stack';  // Use NativeStackNavigationProp
import { RootStackParamList } from '../../../navigationTypes';  // Import RootStackParamList

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

export type Store = {
  id: string;
  name: string;
  distance: string;
  location: string;
  imageUrl: string;
  rating: number;
  likes: number;
};

const DashboardScreen = () => {
  const theme = useAppSelector(state => state.theme.theme); // Get current theme from Redux
  const commonStyle = commonStyles(theme);
  const selectedTheme = appTheme[theme];
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();  // Correct the type here

  const { t } = useTranslation(); // Initialize translation

  const carouselRef = useRef<Carousel<any>>(null);
  const [likedProducts, setLikedProducts] = useState<{ [key: string]: boolean }>({});
  const [likedStores, setLikedStores] = useState<{ [key: string]: boolean }>({});

  const [isModalVisible, setModalVisible] = useState(false);

  // Sample data for categories, brands, vendors, featured, promos, onSaleProducts, newProducts
  const categories = ['Cosmetics', 'Beverages', 'Prepared Meals', 'Snacks'];
  const brands = ['Brand 1', 'Brand 2', 'Brand 3']; // New brands section
  const vendors = ['Vendor 1', 'Vendor 2', 'Vendor 3'];
  const featured = ['Featured 1', 'Featured 2', 'Featured 3'];
  const promos = ['Promo 1', 'Promo 2', 'Promo 3'];
  const onSaleProducts = ['Sale 1', 'Sale 2', 'Sale 3']; // Added onSale products
  const newProducts = ['New 1', 'New 2', 'New 3']; // Added new products

 // Dummy promo images array
 const promoImages = [
    { imageUrl: 'https://via.placeholder.com/100x100' },
    { imageUrl: 'https://via.placeholder.com/100x100' },
    { imageUrl: 'https://via.placeholder.com/100x100' },
  ];

  // Dummy featured stores data
  const featuredStores: Store[] = [
    { id: '1', name: 'Trader Joe\'s', location: 'Springfield, CA', distance: 'PH-07(3km)', imageUrl: 'https://picsum.photos/100/100?random=1', rating: 4.5, likes: 10 },
    { id: '2', name: 'Costco', location: 'Walnut Creek, CA', distance: 'PH-10(31km)', imageUrl: 'https://picsum.photos/100/100?random=2', rating: 4.8, likes: 12 },
    { id: '3', name: 'Vons', location: 'Oakland, CA', distance: 'PH-05(23km)', imageUrl: 'https://picsum.photos/100/100?random=3', rating: 4.2, likes: 5 },
  ];

  // Dummy featured products data
  const featuredProducts: Product[] = [
    { id: '1', name: 'Beef Boneless', description: 'Beef Boneless', price: 500, distance: 'PH-03(32km)', imageUrl: 'https://picsum.photos/100/100?random=4', rating: 4.6, likes: 30, onSale: true },
    { id: '2', name: 'Milk Lakeland', description: 'Beef Boneless', price: 80, distance: 'PH-07(31km)', imageUrl: 'https://picsum.photos/100/100?random=5', rating: 4.0, likes: 22, onSale: false },
    { id: '3', name: 'Simba Teff Flour', description: 'Beef Boneless', price: 120, distance: 'PH-10(43km)', imageUrl: 'https://picsum.photos/100/100?random=6', rating: 3.9, likes: 15, onSale: true },
  ];

  // Handle like toggle for products
  const toggleProductLike = (productId: string) => {
    setLikedProducts((prevState) => ({
      ...prevState,
      [productId]: !prevState[productId],
    }));
  };

  // Handle like toggle for stores
  const toggleStoreLike = (storeId: string) => {
    setLikedStores((prevState) => ({
      ...prevState,
      [storeId]: !prevState[storeId],
    }));
  };

    
  // Function to toggle modal visibility
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  // Render promo slider item
  const renderPromoItem = ({ item }: { item: { imageUrl: string } }) => (
    <View style={commonStyle.slide}>
      <Image source={{ uri: item.imageUrl }} style={commonStyle.promoImage} />
    </View>
  );

  // Render store item for FlatList
  // Render store item for FlatList
  const renderStoreItem: ListRenderItem<Store> = ({ item }) => (
    <ContentCard
      type="store"
      imageUrl={item.imageUrl}
      name={item.name}
      description={null}
      distance={item.distance}
      location={item.location}
      rating={item.rating}
      likes={item.likes}
      isLiked={likedStores[item.id]}
      onFullScreenPress={() => navigation.navigate('DetailsScreen', { item, type: 'store' })}  // Corrected navigation
      onLikePress={() => toggleStoreLike(item.id)}
      buttonActions={[
        { iconName: 'chatbubble-outline', onPress: () => console.log('Chat Pressed'), buttonStyle: commonStyle.chatButton },
        { iconName: 'person-add-outline', onPress: () => console.log('Follow Pressed'), buttonStyle: commonStyle.followButton },
      ]}
    />
  );

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
      onFullScreenPress={() => navigation.navigate('DetailsScreen', { item, type: 'product' })}  // Corrected navigation
      onLikePress={() => toggleProductLike(item.id)}
      buttonActions={[
        { iconName: 'chatbubble-outline', onPress: () => console.log('Chat Pressed'), buttonStyle: commonStyle.chatButton },
        { iconName: 'cart-outline', onPress: () => console.log('Cart Pressed'), buttonStyle: commonStyle.cartButton },
      ]}
    />
  );

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}  style={commonStyle.fullContainer}>
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

      {/* Promo Carousel */}
      <View style={commonStyle.section}>
        <Text style={commonStyle.sectionTitle}>{t('spotlightOffers')}</Text>
        <Carousel
          ref={carouselRef}
          data={promoImages}
          renderItem={renderPromoItem}
          sliderWidth={screenWidth}
          itemWidth={screenWidth * 0.8}
          loop={true}
          autoplay={true}
          autoplayInterval={3000}
          autoplayDelay={500}
          vertical={false}
        />
      </View>

      {/* Featured Stores */}
      <View style={commonStyle.section}>
        <Text style={commonStyle.sectionTitle}>{t('Featured Stores')}</Text>
        <FlatList
          data={featuredStores}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderStoreItem}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 16 }}
        />
      </View>

      {/* Featured Products */}
      <View style={commonStyle.section}>
        <Text style={commonStyle.sectionTitle}>{t('Featured Products')}</Text>
        <FlatList
          data={featuredProducts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderProductItem}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 16 }}
        />
      </View>
      </View>
    </ScrollView>
  );
};

export default DashboardScreen;
