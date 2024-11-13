import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import IconLib from '../../../components/IconLib'; // Use IconLib here
import CustomButton from '../../../components/CustomButton';
import { useAppSelector } from '../../../hooks/reduxHooks';
import { theme as appTheme } from '../../../styles/theme';
import { marketStyles } from '../styles/marketStyles';
import { baseStyles } from '../../../styles/baseStyles';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack'; // Use NativeStackNavigationProp
// import { RootStackParamList } from '../../../navigationTypes'; // Import RootStackParamList
import { useTranslation } from 'react-i18next'; // Import translation hook
//import { useNavigation } from '@react-navigation/native'; // Import the navigation hook


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
};

const ProductItem: React.FC<{
  product: Product;
  variant: 'featured' | 'postedProduct';
  onFullScreenPress: () => void;
  onRatingPress: () => void;
  onLikePress: () => void;
  isLiked: boolean;
  likes: number;
  rating: number;
}> = ({
  product,
  variant,
  onFullScreenPress,
  onRatingPress,
  onLikePress,
  isLiked,
  likes,
  rating,
}) => {
  const themeType = useAppSelector(state => state.theme.theme);
  const marketStyle = marketStyles(themeType); // This is fine
  const baseStyle = baseStyles(themeType); // Rename this to avoid conflict

  const selectedTheme = appTheme[themeType];

  const isFeatured = variant === 'featured';
  const { t } = useTranslation(); // Initialize translation
  return (
    <View
      style={[
        baseStyle.columnsInsideFlex,
        baseStyle.shadowedContainer,
        marketStyle.productCardLandscape,
        isFeatured ? marketStyle.featuredProductCard : marketStyle.postedProductCard,
      ]}
    >
      {product.isNew && (
        <View style={marketStyle.newBadgeContainer}>
          <Text style={marketStyle.newBadgeText}> New </Text>
        </View>
      )}
      {/* Product Info */}
      <View
        style={[
          marketStyle.productInfo,
          isFeatured ? baseStyle.cols_60 : baseStyle.cols_70,
        ]}
      >
        <Text numberOfLines={1} ellipsizeMode="tail" style={marketStyle.productName}>
          {product.name}
        </Text>
        
        {/* <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={marketStyle.productDescription}
        >
          {product.description}
        </Text> */}
        
        <Text style={marketStyle.vendorInfo}>{`${product.region}`}</Text>

        <View style={[baseStyle.columnsInsideFlex, marketStyle.priceRow]}>
          <Text style={marketStyle.discountedPrice}>
            {product.discountedPrice}/kg
          </Text>
          {product.price !== product.discountedPrice && (
            <Text style={marketStyle.originalPrice}>{product.price}</Text>
          )}
          {product.discount && (
            <Text style={marketStyle.discountBadge}>-{product.discount}</Text>
          )}
        </View>
        <View style={[baseStyle.columnsInsideFlex, marketStyle.actionIcons]}>
          <CustomButton
            title={""}
            onPress={() => console.log('Google Login Pressed')}
            color={selectedTheme.textDark}
            backgroundColor={selectedTheme.buttonDark}
            borderRadius={2} // You can set this dynamically too
            iconName={'Chat_O'}
            iconSize={16} // Font size of the text inside the button
            width={50}
            style={{
              paddingTop: 2,
              paddingBottom: 2,
              paddingRight: 10,
              paddingLeft: 10,
            }}
          />
          <CustomButton
            title={""}
            onPress={() => console.log('Google Login Pressed')}
            color={selectedTheme.textDark}
            backgroundColor={selectedTheme.buttonBorderPrimary}
            borderRadius={2} // You can set this dynamically too
            iconName={'Cart_O'}
            iconSize={16} // Font size of the text inside the button
            width={50}
            style={{
              paddingTop: 2,
              paddingBottom: 2,
              paddingRight: 10,
              paddingLeft: 10,
            }}
          />
        </View>
      </View>

      {/* Product Image and Action Buttons */}
      <View
        style={[
          marketStyle.imageContainer,
          isFeatured ? baseStyle.cols_40 : baseStyle.cols_30,
        ]}
      >
        <Image
          source={{ uri: product.imageUrl }}
          style={[
            marketStyle.productImage,
            isFeatured && marketStyle.featuredProductImage,
          ]}
        />
        {/* Square overlay with 3-dots icon */}
        
           {/* Full-Screen Button */}
          <TouchableOpacity
            style={marketStyle.iconOverlayContainer}
            onPress={onFullScreenPress}
          >
            <IconLib.DotsMenu size={20} color={selectedTheme.textLight} />
          </TouchableOpacity>
        
        {/* Rating and Likes */}
        <View style={[baseStyle.columnsInside]}>
           {/* Rating */}
           <TouchableOpacity
            style={[baseStyle.alignLeft, baseStyle.cols_2]}
            onPress={onRatingPress}
          >
            <View style={[baseStyle.columnsInsideFlex, baseStyle.innerContainer]}>
              <IconLib.Star size={16} color="gold" style={baseStyle.rMarginXS} />
              <Text
                style={[baseStyle.xSmallText, { color: selectedTheme.textBlur }]}
              >
                {rating}
              </Text>
            </View>
          </TouchableOpacity>
          {/* Likes */}
            <TouchableOpacity 
              onPress={onLikePress} 
              style={[baseStyle.cols_2, baseStyle.alignRight]}
            >
            <View style={[baseStyle.columnsInsideFlex, baseStyle.innerContainer]}>
              {isLiked ? (
                <IconLib.Heart size={16} color="red"  style={baseStyle.rMarginXS}/>
              ) : (
                <IconLib.Heart_O
                  size={16}
                  color={selectedTheme.iconColorPrimary}
                  style={baseStyle.rMarginXS}
                />
              )}

              <Text
                style={[baseStyle.xSmallText, { color: selectedTheme.textBlur }]}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {likes}
              </Text>
              </View>
            </TouchableOpacity>
        </View>
      

      </View>
    </View>
  );
};

export default ProductItem;
