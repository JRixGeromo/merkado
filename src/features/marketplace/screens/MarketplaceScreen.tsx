import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import { categories } from '../data';
import ProductItem from '../components/ProductItem'; // Import the ProductItem component
import LiveSellingCard from '../components/LiveSellingCard';
import SearchBarWithToggle from '../components/SearchBarWithToggle';
import CategoryCard from '../components/CategoryCard';
import Ionicons from 'react-native-vector-icons/Ionicons';

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

type MarketplaceScreenProps = {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    'MarketplaceScreen'
  >;
};

const featuredProducts = [
  {
    id: '1',
    name: 'Featured Product 1',
    description: 'Top-rated product for your needs.',
    price: '$25',
    discountedPrice: '$20',
    imageUrl: 'https://picsum.photos/100/100?random=1',
    isNew: true,
    isPopular: false,
    discount: '20%',
    vendor: 'Vendor A',
    region: 'PH-1(2km)',
  },
  {
    id: '2',
    name: 'Featured Product 2',
    description: 'Best quality at affordable price.',
    price: '$50',
    discountedPrice: '$45',
    imageUrl: 'https://picsum.photos/100/100?random=2',
    isNew: false,
    isPopular: true,
    discount: '10%',
    vendor: 'Vendor B',
    region: 'PH-2(3km)',
  },
  {
    id: '3',
    name: 'Featured Product 2',
    description: 'Best quality at affordable price.',
    price: '$50',
    discountedPrice: '$45',
    imageUrl: 'https://picsum.photos/100/100?random=3',
    isNew: false,
    isPopular: true,
    discount: '10%',
    vendor: 'Vendor B',
    region: 'PH-2(3km)',
  },
  {
    id: '4',
    name: 'Featured Product 2',
    description: 'Best quality at affordable price.',
    price: '$50',
    discountedPrice: '$45',
    imageUrl: 'https://picsum.photos/100/100?random=4',
    isNew: false,
    isPopular: true,
    discount: '10%',
    vendor: 'Vendor B',
    region: 'PH-2(3km)',
  },
];

const recentlyPostedProducts = Array.from({ length: 20 }, (_, index) => ({
  id: index.toString(),
  name: `Recently Posted Product ${index + 1}`,
  description: `Description of product ${index + 1}`,
  price: `$${(10 + index * 5).toFixed(2)}`,
  discountedPrice: `$${(10 + index * 5 - 2).toFixed(2)}`,
  imageUrl: `https://picsum.photos/100/100?random=${index + 1}`,
  isNew: index % 2 === 0,
  isPopular: index % 3 === 0,
  discount: `${index % 3 === 0 ? '10%' : '5%'}`,
  vendor: `Vendor ${String.fromCharCode(65 + (index % 3))}`, // Vendor A, B, C
  region: `PH-${index + 1}(3km)`,
}));


const liveSellingUsers = [
  {
    id: '1',
    name: 'Vendor A',
    profileImage: 'https://picsum.photos/50/50?random=1',
    liveTitle: 'Exclusive Deals!',
  },
  {
    id: '2',
    name: 'Vendor B',
    profileImage: 'https://picsum.photos/50/50?random=2',
    liveTitle: 'Flash Sale - Up to 50% Off!',
  },
  {
    id: '3',
    name: 'Vendor C',
    profileImage: 'https://picsum.photos/50/50?random=3',
    liveTitle: 'Hot Products on Sale!',
  },
  {
    id: '4',
    name: 'Vendor D',
    profileImage: 'https://picsum.photos/50/50?random=4',
    liveTitle: 'Hot Products on Sale!',
  },
  {
    id: '5',
    name: 'Vendor E',
    profileImage: 'https://picsum.photos/50/50?random=5',
    liveTitle: 'Hot Products on Sale!',
  },
  {
    id: '6',
    name: 'Vendor F',
    profileImage: 'https://picsum.photos/50/50?random=6',
    liveTitle: 'Hot Products on Sale!',
  },
  {
    id: '7',
    name: 'Vendor G',
    profileImage: 'https://picsum.photos/50/50?random=7',
    liveTitle: 'Hot Products on Sale!',
  },
  {
    id: '8',
    name: 'Vendor H',
    profileImage: 'https://picsum.photos/50/50?random=8',
    liveTitle: 'Hot Products on Sale!',
  },

];

const renderLiveSellingItem = ({ item }: { item: typeof liveSellingUsers[0] }) => (
  <LiveSellingCard
    item={item}
    onPress={() => console.log(`Clicked on ${item.name}`)} // Optional click handler
  />
);

const MarketplaceScreen: React.FC<MarketplaceScreenProps> = ({
  navigation,
}) => {
  const [activeView, setActiveView] = useState<'featured' | 'categories'>(
    'featured',
  );

  
  const [keyword, setKeyword] = useState<string>(''); // Ensure it's initialized as a string

  const themeType = useAppSelector(state => state.theme.theme);
  const marketStyle = marketStyles(themeType); // This is fine
  const commonStyle = commonStyles(themeType); // This is fine
  const baseStyle = baseStyles(themeType); // Rename this to avoid conflict

  const selectedTheme = appTheme[themeType];


  const renderCategoryItem = ({
    item,
    index,
  }: {
    item: (typeof categories)[0];
    index: number;
  }) => (
    <CategoryCard
        item={item}
        index={index}
        onPress={() =>
          navigation.navigate('CategoryDetailScreen', { category: item })
        }
      />
  );

  return (
    <GradientBG>
      <View style={baseStyle.container}>
        {/* Search Bar and Toggle Icons */}
        <SearchBarWithToggle
          keyWord={keyword}
          activeView={activeView}
          setActiveView={setActiveView}
          onSearchChange={(text) => console.log('Search input:', text)} // Optional search handler
        />


        {/* Live Selling Section */}
        <View style={marketStyle.liveSellingContainer}>
          <Text style={commonStyle.sectionHeader}>Currently Live Selling</Text>
          <FlatList
            data={liveSellingUsers}
            horizontal
            renderItem={renderLiveSellingItem}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={[marketStyle.liveSellingList]}
          />
        </View>

        {/* Conditional Rendering */}
        {activeView === 'featured' ? (
          <ScrollView contentContainerStyle={commonStyle.scrollViewContent}>
            {/* Featured Products Section */}
            <View style={commonStyle.featuredContainer}>
              <Text style={commonStyle.sectionHeader}>Featured Products</Text>
              <FlatList
                data={featuredProducts}
                horizontal
                renderItem={({ item }) => (
                  <ProductItem product={item} variant="featured" 
                    onFullScreenPress={() => console.log('Full-screen pressed')}
                    onRatingPress={() => console.log('Rating pressed')}
                    onLikePress={() => console.log('Like pressed')}
                    isLiked={true}
                    likes={150}
                    rating={4.8}
                    />
                )}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={marketStyle.featuredList}
              />
            </View>

            {/* Recently Posted Products Section */}
            <View style={marketStyle.recentlyPostedContainer}>
              <Text style={commonStyle.sectionHeader}>Recently Posted Products</Text>
              <FlatList
                data={recentlyPostedProducts}
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
                scrollEnabled={false} // Disable scrolling for inner FlatList
                contentContainerStyle={commonStyle.recentlyPostedList}
              />
            </View>
          </ScrollView>
        ) : (
          <FlatList
            data={categories.map((category, index) => ({
              ...category,
              image: `https://picsum.photos/200/200?random=${index + 1}`,
            }))}
            renderItem={renderCategoryItem}
            keyExtractor={item => item.name}
            numColumns={2}
            contentContainerStyle={commonStyle.categoryGrid}
          />
        )}
      </View>
    </GradientBG>
  );
};

export default MarketplaceScreen;
