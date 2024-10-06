import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useAppSelector, useAppDispatch } from '../../../hooks/reduxHooks';
import { toggleTheme } from '../../../reducers/themeReducer';
import Icon from 'react-native-vector-icons/Ionicons';
import { commonStyles } from '../../../styles/commonStyles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigationTypes';
import Carousel from 'react-native-snap-carousel';  // Import carousel

const { width: screenWidth } = Dimensions.get('window');

const DashboardScreen = () => {
  const theme = useAppSelector(state => state.theme.theme);
  const dispatch = useAppDispatch();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const styles = commonStyles(theme);

  // Promo images for the carousel
  const promoImages = [
    { id: 1, imageUrl: 'https://athleticahq.com/images/icons/store.png' },
    { id: 2, imageUrl: 'https://athleticahq.com/images/icons/store.png' },
    { id: 3, imageUrl: 'https://athleticahq.com/images/icons/store.png' },
  ];

  // Featured stores and products data
  const stores = [
    {
      id: 1,
      name: "Trader Joe's",
      location: 'Walnut Creek, CA',
      imageUrl: 'https://via.placeholder.com/150',
      rating: 4.6,
    },
    {
      id: 2,
      name: 'Costco Wholesale',
      location: 'Turlock, CA',
      imageUrl: 'https://via.placeholder.com/150',
      rating: 4.8,
    },
    {
      id: 3,
      name: 'Price Cutter',
      location: 'Springfield, MO',
      imageUrl: 'https://via.placeholder.com/150',
      rating: 4.3,
    },
  ];

  const products = [
    {
      id: 1,
      name: 'Beef Boneless',
      imageUrl: 'https://via.placeholder.com/100',
    },
    {
      id: 2,
      name: 'Milk Lakeland',
      imageUrl: 'https://via.placeholder.com/100',
    },
    {
      id: 3,
      name: 'Simba Teff Flour',
      imageUrl: 'https://via.placeholder.com/100',
    },
  ];

  // Render promo slider item
  const renderPromoItem = ({ item }: { item: { imageUrl: string } }) => {
    return (
      <View style={styles.slide}>
        <Image source={{ uri: item.imageUrl }} style={styles.promoImage} />
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        
        {/* Promo Slider Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Mga Promo</Text>
          <Carousel
            data={promoImages}
            renderItem={renderPromoItem}
            sliderWidth={screenWidth}
            itemWidth={screenWidth * 0.8}
            loop={true}
            autoplay={true}
            autoplayInterval={3000}
          />
        </View>

        {/* Featured Stores Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Featured Stores</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {stores.map(store => (
              <View key={store.id} style={styles.storeBox}>
                <Image source={{ uri: store.imageUrl }} style={styles.storeImage} />
                <Text style={styles.storeName}>{store.name}</Text>
                <Text style={styles.storeLocation}>{store.location}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Featured Products Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Featured Products</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {products.map(product => (
              <View key={product.id} style={styles.productBox}>
                <Image source={{ uri: product.imageUrl }} style={styles.productImage} />
                <Text style={styles.productName}>{product.name}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

export default DashboardScreen;
