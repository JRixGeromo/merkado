import React, { useRef, useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, Dimensions, FlatList, ListRenderItem, TouchableOpacity, TextInput } from 'react-native';
import { useAppSelector } from '../../../hooks/reduxHooks';
import { commonStyles } from '../../../styles/commonStyles';
import ContentCard from '../../../components/ContentCard';
import Carousel from 'react-native-snap-carousel';
import { useTranslation } from 'react-i18next'; // Import the translation hook
import { theme as appTheme } from '../../../styles/theme';
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
  const theme = useAppSelector(state => state.theme.theme); // Get current theme from Redux
  const commonStyle = commonStyles(theme);
  const selectedTheme = appTheme[theme];

  const { t } = useTranslation(); // Initialize translation

  const carouselRef = useRef<Carousel<any>>(null);
  const [likedProducts, setLikedProducts] = useState<{ [key: string]: boolean }>({});
  const [likedStores, setLikedStores] = useState<{ [key: string]: boolean }>({});
 // Dummy promo images array
 const promoImages = [
    { imageUrl: 'https://via.placeholder.com/100x100' },
    { imageUrl: 'https://via.placeholder.com/100x100' },
    { imageUrl: 'https://via.placeholder.com/100x100' },
  ];

  // Dummy featured stores data
  const featuredStores: Store[] = [
    { id: '1', name: 'Trader Joe\'s', location: 'Springfield, CA', imageUrl: 'https://picsum.photos/100/100?random=1', rating: 4.5, likes: 10 },
    { id: '2', name: 'Costco', location: 'Walnut Creek, CA', imageUrl: 'https://picsum.photos/100/100?random=2', rating: 4.8, likes: 12 },
    { id: '3', name: 'Vons', location: 'Oakland, CA', imageUrl: 'https://picsum.photos/100/100?random=3', rating: 4.2, likes: 5 },
  ];

  // Dummy featured products data
  const featuredProducts: Product[] = [
    { id: '1', name: 'Beef Boneless', price: 500, imageUrl: 'https://picsum.photos/100/100?random=4', rating: 4.6, likes: 30 },
    { id: '2', name: 'Milk Lakeland', price: 80, imageUrl: 'https://picsum.photos/100/100?random=5', rating: 4.0, likes: 22 },
    { id: '3', name: 'Simba Teff Flour', price: 120, imageUrl: 'https://picsum.photos/100/100?random=6', rating: 3.9, likes: 15 },
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
    <View style={commonStyle.slide}>
      <Image source={{ uri: item.imageUrl }} style={commonStyle.promoImage} />
    </View>
  );

  // Render store item for FlatList
  const renderStoreItem: ListRenderItem<Store> = ({ item }) => (
    <ContentCard
      type="store"
      imageUrl={item.imageUrl}
      name={item.name}
      location={item.location}
      rating={item.rating}
      likes={item.likes}
      isLiked={likedStores[item.id]}
      onMagnifyPress={() => console.log('Magnify pressed')}
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

  // const renderProductItem: ListRenderItem<Product> = ({ item }) => (
  //   <View style={commonStyle.productBox}>
  //     <View style={commonStyle.productImageWrapper}>
  //       <Image source={{ uri: item.imageUrl }} style={commonStyle.productImage} />
  //       <TouchableOpacity style={commonStyle.magnifyingGlassButton} onPress={() => console.log('Magnify pressed')}>
  //         <Icon name="search" size={18} color="white" />
  //       </TouchableOpacity>
  //     </View>
  
  //     <Text style={commonStyle.productName}>{item.name}</Text>
  //     <Text style={commonStyle.productPrice}>₱{item.price}</Text>
  
  //     <View style={commonStyle.infoRow}>
  //       <Icon name="star" size={16} color="gold" style={commonStyle.iconContainer} />
  //       <Text style={commonStyle.infoText}>{item.rating}</Text>
  //     </View>
  
  //     <View style={commonStyle.likeRow}>
  //       <TouchableOpacity onPress={() => toggleProductLike(item.id)} style={commonStyle.iconContainer}>
  //         <Icon
  //           name={likedProducts[item.id] ? 'heart' : 'heart-outline'}
  //           size={18}
  //           color={likedProducts[item.id] ? 'red' : selectedTheme.iconColor}
  //         />
  //       </TouchableOpacity>
  //       <Text style={commonStyle.infoText}>
  //         {item.likes + (likedProducts[item.id] ? 1 : 0)} Likes
  //       </Text>
  //     </View>
  
  //     <View style={commonStyle.buttonRow}>
  //       <TouchableOpacity style={[commonStyle.fullWidthButton, commonStyle.chatButton]}>
  //         <Icon name="chatbubble-outline" size={20} color={selectedTheme.textLight} />
  //       </TouchableOpacity>
  //       <TouchableOpacity style={[commonStyle.fullWidthButton, commonStyle.cartButton]}>
  //         <Icon name="cart-outline" size={20} color={selectedTheme.textLight} />
  //       </TouchableOpacity>
  //     </View>
  //   </View>
  // );
  
  

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={commonStyle.section}>
      {/* Search Bar */}
      <View style={commonStyle.searchContainer}>
          {/* Categories Icon Button */}
          <TouchableOpacity style={commonStyle.headerIcon}>
            <Icon name="menu" size={24} color={selectedTheme.iconColor} />
          </TouchableOpacity>

          {/* Search Bar */}
          <TextInput
            style={commonStyle.searchInput}
            placeholder="Search"
            placeholderTextColor="gray"
          />
        </View>

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
