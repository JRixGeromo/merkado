import React, { useRef, useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  FlatList,
  ListRenderItem,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { useAppSelector } from '../../../hooks/reduxHooks';
import { commonStyles } from '../../../styles/commonStyles';
import { layoutStyles } from '../../../styles/layoutStyles';
import MarketplaceModal from '../../marketplace/components/MarketplaceModal'; // Import reusable modal component
import ContentCard from '../../../components/ContentCard';
import Carousel from 'react-native-snap-carousel';
import { useTranslation } from 'react-i18next'; // Import the translation hook
import { theme as appTheme } from '../../../styles/theme';
import IconLib from '../../../components/IconLib'; // Import IconLib
import { useNavigation } from '@react-navigation/native'; // Import the navigation hook
import { NativeStackNavigationProp } from '@react-navigation/native-stack'; // Use NativeStackNavigationProp
import { RootStackParamList } from '../../../navigationTypes'; // Import RootStackParamList
// import FloatingDollars from '../../../components/FloatingDollars';
// import FloatingHearts from '../../../components/FloatingHearts';
// import FloatingBubbles from '../../../components/FloatingBubbles';

const { width: screenWidth } = Dimensions.get('window');

export type Product = {
  id: string;
  name: string;
  description: string | null;
  distance: string;
  price: number;
  location: string;
  imageUrl: string;
  rating: number;
  likes: number;
  onSale: boolean;
};

export type Store = {
  id: string;
  name: string;
  description: string;
  distance: string;
  location: string;
  imageUrl: string;
  rating: number;
  likes: number;
};

const DashboardScreen = () => {
  const themeType = useAppSelector(state => state.theme.theme);
  const commonStyle = commonStyles(themeType); // This is fine
  const layoutStyle = layoutStyles(themeType); // Rename this to avoid conflict

  const selectedTheme = appTheme[themeType];

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>(); // Correct the type here

  const { t } = useTranslation(); // Initialize translation

  const carouselRef = useRef<Carousel<any>>(null);
  const [likedProducts, setLikedProducts] = useState<{
    [key: string]: boolean;
  }>({});
  const [likedStores, setLikedStores] = useState<{ [key: string]: boolean }>(
    {},
  );

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
    { imageUrl: 'https://picsum.photos/100/100?random=10' },
    { imageUrl: 'https://picsum.photos/100/100?random=11' },
    { imageUrl: 'https://picsum.photos/100/100?random=12' },
  ];

  // Dummy featured stores data
  const featuredStores: Store[] = [
    {
      id: '1',
      name: "Trader Joe's",
      description: 'Description',
      location: 'Springfield, CA',
      distance: 'PH-07(3km)',
      imageUrl: 'https://picsum.photos/100/100?random=1',
      rating: 4.5,
      likes: 10,
    },
    {
      id: '2',
      name: 'Costco',
      description: 'Description',
      location: 'Walnut Creek, CA',
      distance: 'PH-10(31km)',
      imageUrl: 'https://picsum.photos/100/100?random=2',
      rating: 4.8,
      likes: 12,
    },
    {
      id: '3',
      name: 'Vons',
      description: 'Description',
      location: 'Oakland, CA',
      distance: 'PH-05(23km)',
      imageUrl: 'https://picsum.photos/100/100?random=3',
      rating: 4.2,
      likes: 5,
    },
  ];

  // Dummy featured products data
  const featuredProducts: Product[] = [
    {
      id: '1',
      name: 'Beef Boneless',
      description: 'Beef Boneless Description Beef Boneless Description Beef Boneless Description Beef Boneless Description Beef Boneless Description',
      price: 500,
      location: 'Walnut Creek, CA',
      distance: 'PH-03(32km)',
      imageUrl: 'https://picsum.photos/100/100?random=4',
      rating: 4.6,
      likes: 30,
      onSale: true,
    },
    {
      id: '2',
      name: 'Milk Lakeland',
      description: 'Beef Boneless',
      price: 80,
      location: 'Walnut Creek, CA',
      distance: 'PH-07(31km)',
      imageUrl: 'https://picsum.photos/100/100?random=5',
      rating: 4.0,
      likes: 22,
      onSale: false,
    },
    {
      id: '3',
      name: 'Simba Teff Flour',
      description: 'Beef Boneless',
      price: 120,
      location: 'Walnut Creek, CA',
      distance: 'PH-10(43km)',
      imageUrl: 'https://picsum.photos/100/100?random=6',
      rating: 3.9,
      likes: 15,
      onSale: true,
    },
  ];

  // Handle like toggle for products
  const toggleProductLike = (productId: string) => {
    setLikedProducts(prevState => ({
      ...prevState,
      [productId]: !prevState[productId],
    }));
  };

  // Handle like toggle for stores
  const toggleStoreLike = (storeId: string) => {
    setLikedStores(prevState => ({
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
      onFullScreenPress={() =>
        navigation.navigate('DetailsScreen', { item, type: 'store' })
      }
      onLikePress={() => toggleStoreLike(item.id)}
      buttonActions={[
        {
          iconName: 'Chat_O',
          onPress: () => console.log('Chat Pressed'),
          buttonStyle: commonStyle.chatButton,
        },
        {
          //iconName: 'person_add-outline',
          iconName: 'PersonAdd_O',
          onPress: () => console.log('Follow Pressed'),
          buttonStyle: commonStyle.followButton,
        },
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
      onFullScreenPress={() =>
        navigation.navigate('DetailsScreen', { item, type: 'product' })
      }
      onLikePress={() => toggleProductLike(item.id)}
      buttonActions={[
        {
          iconName: 'Chat_O',
          onPress: () => console.log('Chat Pressed'),
          buttonStyle: commonStyle.chatButton,
        },
        {
          iconName: 'Cart_O',
          onPress: () => console.log('Cart Pressed'),
          buttonStyle: commonStyle.cartButton,
        },
      ]}
    />
  );

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={[layoutStyle.container, layoutStyle.rlPaddingS, { backgroundColor: selectedTheme.fullContainerBackgroundColor }]} >
        {/* Search Container */}
        <View style={layoutStyle.verticalSpacerM} />
        <View style={[commonStyle.searchContainer, layoutStyle.columnsInside]}>
          <TouchableOpacity
            style={layoutStyle.rMarginL}
            onPress={toggleModal}
          >
            <IconLib.Menu size={24} color={selectedTheme.iconColorPrimary} />
          </TouchableOpacity>
          <TextInput
            style={commonStyle.searchInput}
            placeholder="Search"
            placeholderTextColor={selectedTheme.textPlaceHolderInfo}
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

        {/* Promo Carousel */}
        
        <View style={layoutStyle.verticalSpacerL}>
          <Text style={commonStyle.sectionTitle}>{t('spotlightOffers')}</Text>
          <Carousel
            ref={carouselRef}
            data={promoImages}
            renderItem={renderPromoItem}
            sliderWidth={screenWidth}
            itemWidth={screenWidth * 0.40}
            loop={true}
            autoplay={true}
            autoplayInterval={3000}
            autoplayDelay={500}
            vertical={false}
          />
        </View>

        {/* Featured Stores */}
        <View>
          <Text style={commonStyle.sectionTitle}>{t('Featured Stores')}</Text>
          <FlatList
            data={featuredStores}
            keyExtractor={item => item.id.toString()}
            renderItem={renderStoreItem}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 5 }}
          />
        </View>

        {/* Featured Products */}
        <View style={layoutStyle.verticalSpacerM}>
          <Text style={commonStyle.sectionTitle}>{t('Featured Products')}</Text>
          <FlatList
            data={featuredProducts}
            keyExtractor={item => item.id.toString()}
            renderItem={renderProductItem}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 5 }}
          />
        </View>
        {/* Overlay with Floating Dollars Animation */}
        {/* <FloatingDollars />
        <FloatingHearts />
        <FloatingBubbles /> */}
      </View>
    </ScrollView>
  );
};

export default DashboardScreen;
