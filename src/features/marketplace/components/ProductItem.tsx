import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import IconLib from '../../../components/IconLib'; // Use IconLib here
import CustomButton from '../../../components/CustomButton';
import { useAppSelector } from '../../../hooks/reduxHooks';
import { theme as appTheme } from '../../../styles/theme';
import { marketStyles } from '../styles/marketStyles';
import { commonStyles } from '../../../styles/commonStyles';
import { baseStyles, SHARED } from '../../../styles/baseStyles';
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
  const commonStyle = commonStyles(themeType); // This is fine
  const baseStyle = baseStyles(themeType); // Rename this to avoid conflict

  const myTheme = appTheme[themeType];

  const isFeatured = variant === 'featured';
  const { t } = useTranslation(); // Initialize translation

  // Define the ProductImage component inline
  const ProductImage: React.FC<{
    imageUrl: string;
    isFeatured: boolean;
    onFullScreenPress: () => void;
    onRatingPress: () => void;
    onLikePress: () => void;
    isLiked: boolean;
    likes: number;
    rating: number;
  }> = ({
    imageUrl,
    isFeatured,
    onFullScreenPress,
    onRatingPress,
    onLikePress,
    isLiked,
    likes,
    rating,
  }) => {
    if (!imageUrl) return null; // Handle missing image URL

    return (
      <View
      style={[
        baseStyle.innerContainerCenter,
        baseStyle.tMarginXxS,
        isFeatured ? baseStyle.cols_1 : baseStyle.cols_30,
      ]}
    >
      <View style={[
          marketStyle.productImageWrapper,
          isFeatured ? marketStyle.imageHeightS : marketStyle.imageHeightL,
          
          ]}>
        <Image source={{ uri: product.imageUrl}} 
        style={[
          marketStyle.productImage
        ]}
         />
      </View>

      {/* Square overlay with 3-dots icon */}
      
         {/* Full-Screen Button */}
        <TouchableOpacity
          style={marketStyle.iconOverlayContainer}
          onPress={onFullScreenPress}
        >
          <IconLib.DotsMenu size={20} color={myTheme.textLight} />
        </TouchableOpacity>
      
      {/* Rating and Likes */}
      <View style={[baseStyle.columnsInside, baseStyle.verticalSpacerXS]}>
         {/* Rating */}
         <TouchableOpacity
          style={[baseStyle.alignLeft, baseStyle.cols_2]}
          onPress={onRatingPress}
        >
          <View style={[baseStyle.columnsInsideFlex, baseStyle.innerContainerCenter]}>
            <IconLib.Star size={14} color="gold"/>
            <Text
              style={[baseStyle.XxSmallText, { color: myTheme.textBlur }]}
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
          <View style={[baseStyle.columnsInsideFlex, baseStyle.innerContainerCenter]}>
            {isLiked ? (
              <IconLib.Heart size={14} color="red"/>
            ) : (
              <IconLib.Heart_O
                size={16}
                color={myTheme.iconColor1st}
              />
            )}

            <Text
              style={[baseStyle.XxSmallText, { color: myTheme.textBlur }]}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {likes}
            </Text>
            </View>
          </TouchableOpacity>
      </View>
    </View>
    );
  };


  return (
    <View
      style={[
        baseStyle.columnsInsideFlex,
        baseStyle.shadowedContainer,
        marketStyle.productCardLandscape,
        isFeatured ? marketStyle.featuredProductCard : marketStyle.postedProductCard
      ]}
    >
      {product.isNew && (
        <View style={commonStyle.newBadgeContainer}>
          <Text style={[baseStyle.XxSmallText,  {color: myTheme.textLight}]}> New </Text>
        </View>
      )}
      {/* Product Info */}
      <View
        style={[
          marketStyle.productInfo,
          isFeatured ? baseStyle.cols_60 : baseStyle.cols_1,
        ]}
      >
        {/* Product Image and Action Buttons */}
        {isFeatured && (
          <>
            <ProductImage
              imageUrl={product.imageUrl}
              isFeatured={isFeatured}
              onFullScreenPress={onFullScreenPress}
              onRatingPress={onRatingPress}
              onLikePress={onLikePress}
              isLiked={isLiked}
              likes={likes}
              rating={rating}
            />
            <View style={baseStyle.verticalSpacerXS}/>
          </>  
        )}
        
        <Text numberOfLines={1} ellipsizeMode="tail" style={[baseStyle.mediumText, {color: myTheme.text2nd, fontWeight: 'bold'}]}>
          {product.name}
        </Text>
        {/* ///////////////////////////////////////// continue here */}
        { !isFeatured && product.description && 
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={commonStyle.productDescription}
        >
          {product.description}
        </Text>
        }
 
        <Text style={commonStyle.vendorInfo}>{`${product.region}`}</Text>

        <View style={[baseStyle.columnsInsideFlex, commonStyle.priceRow]}>
          <Text style={commonStyle.discountedPrice}>
            {product.discountedPrice}/kg
          </Text>
          {product.price !== product.discountedPrice && (
            <Text style={commonStyle.originalPrice}>{product.price}</Text>
          )}
          {product.discount && (
            <Text style={commonStyle.discountBadge}>-{product.discount}</Text>
          )}
        </View>
        <View
            style={[
              baseStyle.columnsInsideFlex,
              marketStyle.actionIcons,
              isFeatured ? marketStyle.buttonRowWidth : marketStyle.buttonRowGap, // Apply conditionally
            ]}
          >
          <CustomButton
            title={""}
            onPress={() => console.log('Google Login Pressed')}
            color={myTheme.textDark}
            backgroundColor={myTheme.button1st}
            borderRadius={SHARED.borderRadius1st} // You can set this dynamically too
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
            color={myTheme.textDark}
            backgroundColor={myTheme.button1st}
            borderRadius={SHARED.borderRadius1st} // You can set this dynamically too
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
      {!isFeatured && (
          <ProductImage
            imageUrl={product.imageUrl}
            isFeatured={isFeatured}
            onFullScreenPress={onFullScreenPress}
            onRatingPress={onRatingPress}
            onLikePress={onLikePress}
            isLiked={isLiked}
            likes={likes}
            rating={rating}
          />
      )}
    </View>
  );
};

export default ProductItem;
