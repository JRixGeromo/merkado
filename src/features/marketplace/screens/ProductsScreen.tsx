import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ProductItem from '../components/ProductItem'; // Import ProductItem

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigationTypes';
import { useAppSelector } from '../../../hooks/reduxHooks';
import { theme as appTheme } from '../../../styles/theme';
import { marketStyles } from '../styles/marketStyles';
import { baseStyles } from '../../../styles/baseStyles';

type ProductsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ProductsScreen'
>;

const ProductsScreen: React.FC<ProductsScreenProps> = ({ route }) => {
  const { subcategory } = route.params;

  const themeType = useAppSelector(state => state.theme.theme);
  const marketStyle = marketStyles(themeType); // This is fine
  const baseStyle = baseStyles(themeType); // Rename this to avoid conflict

  const selectedTheme = appTheme[themeType];

  const products = [
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
    },
  ];

  return (
    <View style={baseStyle.container}>
      <View 
        style={[baseStyle.headerContainer, baseStyle.shadowedContainer]}
      >
        {/* <Image
          source={{ uri: `https://picsum.photos/400/200?random=header` }}
          style={marketStyle.headerImage}
        /> */}
        <Text style={baseStyle.headerTitle}>{subcategory.name}</Text>
      </View>


      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ProductItem product={item} variant="postedProduct" 
            onFullScreenPress={() => console.log('Full-screen pressed')}
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
  );
};

export default ProductsScreen;
