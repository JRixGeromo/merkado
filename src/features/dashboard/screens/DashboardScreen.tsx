import React, { useRef, useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, Dimensions, FlatList, ListRenderItem, TouchableOpacity } from 'react-native';
import { useAppSelector } from '../../../hooks/reduxHooks';
import { commonStyles } from '../../../styles/commonStyles';
import Carousel from 'react-native-snap-carousel';
import { useTranslation } from 'react-i18next'; // Import the translation hook
import { theme } from '../../../styles/theme'; // Import the theme object
import Icon from 'react-native-vector-icons/Ionicons'; // Icon library for likes and ratings

const { width: screenWidth } = Dimensions.get('window');

// Product type definition
type Product = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  rating: number; // Added rating field
  likes: number; // Number of likes
};

// Store type definition
type Store = {
  id: string;
  name: string;
  location: string;
  imageUrl: string;
  rating: number; // Added rating field
  likes: number; // Number of likes
};
const DashboardScreen = () => {
  const themeType = useAppSelector(state => state.theme.theme); // Access theme from Redux
  const styles = commonStyles(themeType);
  const selectedTheme = theme[themeType]; // Get the light or dark theme directly from your theme file
  const { t } = useTranslation(); // Initialize translation

  const carouselRef = useRef<Carousel<any>>(null);
  const [likedProducts, setLikedProducts] = useState<{ [key: string]: boolean }>({});
  const [likedStores, setLikedStores] = useState<{ [key: string]: boolean }>({});
 // Dummy promo images array
 const promoImages = [
    { imageUrl: 'https://athleticahq.com/images/icons/store.png' },
    { imageUrl: 'https://athleticahq.com/images/icons/store.png' },
    { imageUrl: 'https://athleticahq.com/images/icons/store.png' },
  ];

  // Dummy featured stores data
  const featuredStores: Store[] = [
    { id: '1', name: 'Trader Joe\'s', location: 'Springfield, CA', imageUrl: 'https://via.placeholder.com/100x100', rating: 4.5, likes: 10 },
    { id: '2', name: 'Costco', location: 'Walnut Creek, CA', imageUrl: 'https://via.placeholder.com/100x100', rating: 4.8, likes: 12 },
    { id: '3', name: 'Vons', location: 'Oakland, CA', imageUrl: 'https://via.placeholder.com/100x100', rating: 4.2, likes: 5 },
  ];

  // Dummy featured products data
  const featuredProducts: Product[] = [
    { id: '1', name: 'Beef Boneless', price: 500, imageUrl: 'https://via.placeholder.com/100x100', rating: 4.6, likes: 30 },
    { id: '2', name: 'Milk Lakeland', price: 80, imageUrl: 'https://via.placeholder.com/100x100', rating: 4.0, likes: 22 },
    { id: '3', name: 'Simba Teff Flour', price: 120, imageUrl: 'https://via.placeholder.com/100x100', rating: 3.9, likes: 15 },
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

  // Render promo slider item
  const renderPromoItem = ({ item }: { item: { imageUrl: string } }) => (
    <View style={styles.slide}>
      <Image source={{ uri: item.imageUrl }} style={styles.promoImage} />
    </View>
  );

  // Render store item for FlatList
  const renderStoreItem: ListRenderItem<Store> = ({ item }) => (
    <View style={styles.productBox}>
      <Image source={{ uri: item.imageUrl }} style={styles.storeImage} />
      <Text style={styles.storeName}>{item.name}</Text>
      <Text style={styles.storeLocation}>{item.location}</Text>

      <View style={styles.infoRow}>
        <Icon name="star" size={16} color="gold" />
        <Text style={styles.infoText}>{item.rating}</Text>
      </View>

      {/* Wrap heart icon and likes count in a row */}
      <View style={styles.likeRow}>
        <TouchableOpacity onPress={() => toggleStoreLike(item.id)}>
          <Icon
            name={likedStores[item.id] ? 'heart' : 'heart-outline'}
            size={18}
            color={likedStores[item.id] ? 'red' : selectedTheme.iconColor}
          />
        </TouchableOpacity>
        <Text style={styles.infoText}>{item.likes + (likedStores[item.id] ? 1 : 0)} Likes</Text>
      </View>
    </View>
  );

  // Render product item for FlatList
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
      {/* Search Bar */}
      <View style={[styles.searchBar, styles.shadow]}>
        <Text style={styles.searchText}>{t('What are you looking for?')}</Text>
      </View>

      {/* Promo Carousel */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t('Promotional Banners')}</Text>
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
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t('Featured Stores')}</Text>
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
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t('Featured Products')}</Text>
        <FlatList
          data={featuredProducts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderProductItem}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 16 }}
        />
      </View>
    </ScrollView>
  );
};

export default DashboardScreen;
