import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { useAppSelector } from '../../../hooks/reduxHooks';
import { theme as appTheme } from '../../../styles/theme';
import { commonStyles } from '../../../styles/commonStyles';
import { layoutStyles } from '../../../styles/layoutStyles';
import ContentCard from '../../../components/ContentCard';
import IconLib from '../../../components/IconLib';
import { useTranslation } from 'react-i18next';

const FrontStoreScreenx = () => {
  const themeType = useAppSelector(state => state.theme.theme);
  const commonStyle = commonStyles(themeType);
  const layoutStyle = layoutStyles(themeType);
  const selectedTheme = appTheme[themeType];
  const { t } = useTranslation();

  const [products, setProducts] = useState([
    { id: '1', name: 'Organic Juice', price: 250, rating: 4.6, likes: 100, isLiked: true, imageUrl: 'https://picsum.photos/100/100?random=1' },
    { id: '2', name: 'Handmade Soap', price: 150, rating: 4.8, likes: 80, isLiked: false, imageUrl: 'https://picsum.photos/100/100?random=2' },
    // Add more products
  ]);

  const [banners, setBanners] = useState([
    { id: '1', imageUrl: 'https://picsum.photos/600/200?random=1' },
    { id: '2', imageUrl: 'https://picsum.photos/600/200?random=2' },
  ]);

  const vendorInfo = {
    logoUrl: 'https://picsum.photos/100/100',
    name: 'Best Vendor',
    location: 'Downtown City',
    followers: 1500,
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={[layoutStyle.container, layoutStyle.rlPaddingS, { backgroundColor: selectedTheme.fullContainerBackgroundColor }]}>
        
        {/* Vendor Header */}
        <View style={commonStyle.vendorHeader}>
          <Image source={{ uri: vendorInfo.logoUrl }} style={commonStyle.logo} />
          <View style={commonStyle.vendorInfo}>
            <Text style={commonStyle.vendorName}>{vendorInfo.name}</Text>
            <Text style={commonStyle.vendorLocation}>{vendorInfo.location}</Text>
            <Text style={commonStyle.vendorStats}>{vendorInfo.followers} Followers</Text>
          </View>
          <TouchableOpacity style={commonStyle.followButton}>
            <Text style={commonStyle.followButtonText}>{t('Follow')}</Text>
          </TouchableOpacity>
        </View>

        {/* Banner Carousel */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={commonStyle.bannerContainer}>
          {banners.map(banner => (
            <Image key={banner.id} source={{ uri: banner.imageUrl }} style={commonStyle.bannerImage} />
          ))}
        </ScrollView>

        {/* Categories */}
        <View style={layoutStyle.verticalSpacerM}>
          <Text style={[layoutStyle.largeText, { color: selectedTheme.textPrimary }]}>{t('Categories')}</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={commonStyle.categoriesContainer}>
            <View style={commonStyle.categoryCard}><Text style={commonStyle.categoryText}>Cosmetics</Text></View>
            <View style={commonStyle.categoryCard}><Text style={commonStyle.categoryText}>Beverages</Text></View>
            <View style={commonStyle.categoryCard}><Text style={commonStyle.categoryText}>Snacks</Text></View>
            {/* Add more categories as needed */}
          </ScrollView>
        </View>

        {/* Products List */}
        <View style={layoutStyle.verticalSpacerM}>
          <Text style={[layoutStyle.largeText, { color: selectedTheme.textPrimary }]}>{t('Top Products')}</Text>
          <FlatList
            data={products}
            renderItem={({ item }) => (
              <ContentCard
                type="product"
                imageUrl={item.imageUrl}
                name={item.name}
                distance=""
                description=""
                price={item.price}
                rating={item.rating}
                likes={item.likes}
                isLiked={item.isLiked}
                onFullScreenPress={() => console.log('View Fullscreen')}
                onLikePress={() => console.log('Liked')}
                buttonActions={[
                  {
                    iconName: 'Cart_O',
                    onPress: () => console.log('Add to Cart'),
                    buttonStyle: commonStyle.cartButton,
                  },
                ]}
              />
            )}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 5 }}
          />
        </View>

        {/* Customer Reviews */}
        <View style={layoutStyle.verticalSpacerM}>
          <Text style={[layoutStyle.largeText, { color: selectedTheme.textPrimary }]}>{t('Customer Reviews')}</Text>
          <View style={commonStyle.reviewBox}>
            <Text style={commonStyle.reviewUser}>John Doe</Text>
            <Text style={commonStyle.reviewContent}>Amazing quality!</Text>
            <Text style={commonStyle.reviewRating}>★★★★★</Text>
          </View>
          <View style={commonStyle.reviewBox}>
            <Text style={commonStyle.reviewUser}>Jane Smith</Text>
            <Text style={commonStyle.reviewContent}>Highly recommended!</Text>
            <Text style={commonStyle.reviewRating}>★★★★☆</Text>
          </View>
          {/* Add more reviews as needed */}
        </View>
      </View>
    </ScrollView>
  );
};

export default FrontStoreScreenx;
