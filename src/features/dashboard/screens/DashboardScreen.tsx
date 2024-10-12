import React, { useRef, useEffect } from 'react';
import { View, Text, ScrollView, Image, Dimensions, FlatList, ListRenderItem } from 'react-native';
import { useAppSelector, useAppDispatch } from '../../../hooks/reduxHooks';
import { commonStyles } from '../../../styles/commonStyles';
import Carousel from 'react-native-snap-carousel';
import { useQuery, gql } from '@apollo/client';
import { useTranslation } from 'react-i18next'; // Import the translation hook

const { width: screenWidth } = Dimensions.get('window');

// GraphQL query to fetch products
const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      id
      name
      price
     
    }
  }
`;

type Product = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
};

const DashboardScreen = () => {
  const theme = useAppSelector(state => state.theme.theme);
  const dispatch = useAppDispatch();
  const styles = commonStyles(theme);

  // Reference for the carousel
  const carouselRef = useRef<Carousel<any>>(null);
  const { t, i18n } = useTranslation(); // Initialize translation

  // Promo images array
  const promoImages = [
    { imageUrl: 'https://athleticahq.com/images/icons/store.png' },
    { imageUrl: 'https://athleticahq.com/images/icons/store.png' },
    { imageUrl: 'https://athleticahq.com/images/icons/store.png' },
  ];

  // Fetch products using Apollo Client
  const { loading, error, data } = useQuery(GET_PRODUCTS);


  // Render promo slider item
  const renderPromoItem = ({ item }: { item: { imageUrl: string } }) => (
    <View style={styles.slide}>
      <Image source={{ uri: item.imageUrl }} style={styles.promoImage} />
    </View>
  );

  // Render product item for FlatList with correct typing
  const renderProductItem: ListRenderItem<Product> = ({ item }) => (
    <View style={styles.productBox}>
      <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>₱{item.price}</Text>
    </View>
  );

  // Ensure autoplay is started once the component is mounted
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.startAutoplay();  // Start autoplay manually
    }
  }, []);

  // Ensure autoplay is started once the component is mounted
  useEffect(() => {
    console.log("Loading:", loading);
    console.log("Error:", error);
    console.log("Data:", data);
  }, [loading, error, data]);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('promos')}</Text>
          <Carousel
            ref={carouselRef}  // Attach the carousel reference
            data={promoImages}  // Use the promo images array
            renderItem={renderPromoItem}
            sliderWidth={screenWidth}
            itemWidth={screenWidth * 0.8}
            loop={true}
            autoplay={true}  // Enable autoplay
            autoplayInterval={3000}  // Set autoplay interval to 3 seconds
            autoplayDelay={500}  // Delay autoplay start for 0.5 seconds
            vertical={false}  // Horizontal carousel
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('products')}</Text>
          {loading ? (
            <Text>Loading products...</Text>
          ) : error ? (
            <Text>Error loading products!</Text>
          ) : (
            <FlatList
              data={data?.products as Product[]}  // Ensure proper typing for the data
              keyExtractor={(item) => item.id.toString()}
              renderItem={renderProductItem}  // Properly typed renderItem
              horizontal={true}  // Horizontal product list
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 16 }}
            />
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default DashboardScreen;
