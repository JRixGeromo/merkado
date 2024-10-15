import React, { useRef, useEffect } from 'react';
import { View, Text, ScrollView, Image, Dimensions, FlatList, ListRenderItem } from 'react-native';
import { useAppSelector } from '../../../hooks/reduxHooks';
import { commonStyles } from '../../../styles/commonStyles';
import Carousel from 'react-native-snap-carousel';
import { useTranslation } from 'react-i18next'; // Import the translation hook
import { theme } from '../../../styles/theme'; // Import the theme object
const { width: screenWidth } = Dimensions.get('window');

// Product type definition
type Product = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
};

// Store type definition
type Store = {
  id: string;
  name: string;
  location: string;
  imageUrl: string;
};

const DashboardScreen = () => {
  const themeType = useAppSelector(state => state.theme.theme); // Access theme from Redux
  const styles = commonStyles(themeType);
  const selectedTheme = theme[themeType]; // Get the light or dark theme directly from your theme file
  const { t } = useTranslation(); // Initialize translation

  const carouselRef = useRef<Carousel<any>>(null);

  // Dummy promo images array
  const promoImages = [
    { imageUrl: 'https://athleticahq.com/images/icons/store.png' },
    { imageUrl: 'https://athleticahq.com/images/icons/store.png' },
    { imageUrl: 'https://athleticahq.com/images/icons/store.png' },
  ];

  // Dummy featured stores data
  const featuredStores: Store[] = [
    { id: '1', name: 'Trader Joe\'s', location: 'Springfield, CA', imageUrl: 'https://via.placeholder.com/100x100' },
    { id: '2', name: 'Costco', location: 'Walnut Creek, CA', imageUrl: 'https://via.placeholder.com/100x100' },
    { id: '3', name: 'Vons', location: 'Oakland, CA', imageUrl: 'https://via.placeholder.com/100x100' },
  ];

  // Dummy featured products data
  const featuredProducts: Product[] = [
    { id: '1', name: 'Beef Boneless', price: 500, imageUrl: 'https://via.placeholder.com/100x100' },
    { id: '2', name: 'Milk Lakeland', price: 80, imageUrl: 'https://via.placeholder.com/100x100' },
    { id: '3', name: 'Simba Teff Flour', price: 120, imageUrl: 'https://via.placeholder.com/100x100' },
  ];

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
    </View>
  );

  // Render product item for FlatList
  const renderProductItem: ListRenderItem<Product> = ({ item }) => (
    <View style={styles.productBox}>
      <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>₱{item.price}</Text>
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
