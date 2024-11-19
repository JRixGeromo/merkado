import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ProductItem from '../components/ProductItem'; // Import ProductItem

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigationTypes';
import { useAppSelector } from '../../../hooks/reduxHooks';
import { theme as appTheme } from '../../../styles/theme';
import { marketStyles } from '../styles/marketStyles';
import { commonStyles } from '../../../styles/commonStyles';
import { baseStyles } from '../../../styles/baseStyles';
import GradientBG from '../../../components/GradientBG'; // Gradient background wrapper

import { useNavigation } from '@react-navigation/native'; // Import the navigation hook
import { NativeStackNavigationProp } from '@react-navigation/native-stack'; // Use NativeStackNavigationProp


type ProductsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ProductsScreen'
>;

type Product = {
  id: string;
  name: string;
  description: string;
  price: string;
  discountedPrice: string;
  imageUrl: string;
  isNew: boolean;
  isPopular: boolean;
  discount: string;
  vendor: string;
  region: string;
  distance?: string; // Optional
  location?: string; // Optional
  rating?: number;
  likes?: number;
  onSale?: boolean;
};

const ProductsScreen: React.FC<ProductsScreenProps> = ({ route }) => {
  const { subcategory } = route.params;

  const themeType = useAppSelector(state => state.theme.theme);
  const marketStyle = marketStyles(themeType); // This is fine
  const commonStyle = commonStyles(themeType); // This is fine
  const baseStyle = baseStyles(themeType); // Rename this to avoid conflict

  const myTheme = appTheme[themeType];

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>(); // Correct the type here

    const products: Product[] = [
      {
        id: '1',
        name: 'iPhone 13',
        description: 'Premium smartphone with A15 chip',
        price: '$999',
        discountedPrice: '$949',
        imageUrl: 'https://picsum.photos/100/100?random=1',
        isNew: true,
        isPopular: true,
        discount: '5%',
        vendor: 'TechStore Inc.',
        region: 'PH-1(3km)',
        distance: '3km', // Ensure this is a string or undefined
        location: 'TechStore, Makati City',
        rating: 4.8,
        likes: 250,
        onSale: true,
      },
      {
        id: '2',
        name: 'Samsung Galaxy S22',
        description: 'Latest flagship with AMOLED display',
        price: '$799',
        discountedPrice: '$749',
        imageUrl: 'https://picsum.photos/100/100?random=2',
        isNew: false,
        isPopular: true,
        discount: '6%',
        vendor: 'GadgetWorld',
        region: 'PH-2(5km)',
        distance: '5km', // Ensure this is a string
        location: 'GadgetWorld, Quezon City',
        rating: 4.6,
        likes: 180,
        onSale: false,
      },
      {
        id: '3',
        name: 'MacBook Pro',
        description: 'High-performance laptop for professionals',
        price: '$1999',
        discountedPrice: '$1799',
        imageUrl: 'https://picsum.photos/100/100?random=3',
        isNew: true,
        isPopular: false,
        discount: '10%',
        vendor: 'Apple Store',
        region: 'PH-3(10km)',
        distance: '10km', // Ensure this is a string
        location: 'Apple Store, Bonifacio Global City',
        rating: 4.9,
        likes: 300,
        onSale: true,
      },
    ];
    

  return (
    <GradientBG>
    <View style={baseStyle.container}>
      <View 
        style={[commonStyle.headerContainer, baseStyle.shadowedContainer]}
      >
        {/* <Image
          source={{ uri: `https://picsum.photos/400/200?random=header` }}
          style={marketStyle.headerImage}
        /> */}
        <Text style={commonStyle.headerTitle}>{subcategory.name}</Text>
      </View>


      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ProductItem 
            product={item} variant="postedProduct" 
            onFullScreenPress={() =>
              navigation.navigate('DetailsScreen', { item, type: 'product' })
            } // Corrected navigation
            onRatingPress={() => console.log('Rating pressed')}
            onLikePress={() => console.log('Like pressed')}
            isLiked={true}
            likes={150}
            rating={4.8}
            />
          )}
        keyExtractor={item => item.id}
        contentContainerStyle={marketStyle.productList}
      />
    </View>
    </GradientBG>
  );
};

export default ProductsScreen;
