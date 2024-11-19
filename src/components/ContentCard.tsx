import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useAppSelector } from '../hooks/reduxHooks'; // Hook to access the theme from Redux
import { compStyles } from './styles/componentStyles'; // Import your style
import { commonStyles } from '../styles/commonStyles';
import { baseStyles, SHARED } from '../styles/baseStyles';
import { theme as appTheme } from '../styles/theme';
import IconLib from './IconLib'; // Import IconLib for icons
import CustomButton from './CustomButton';

interface ContentCardProps {
  type: 'store' | 'product' | 'featured' | 'onSale'; // Define types of items
  imageUrl: string;
  name: string;
  distance: string;
  description: string | null;
  price?: number;
  location?: string;
  rating: number;
  likes: number;
  isLiked: boolean;
  onFullScreenPress: () => void;
  onLikePress: () => void;
  buttonActions: {
    iconName: string;
    onPress: () => void;
    buttonStyle: object;
  }[];
}

const ContentCard: React.FC<ContentCardProps> = ({
  type,
  imageUrl,
  name,
  description = null,
  distance,
  price = null,
  location,
  rating,
  likes,
  isLiked,
  onFullScreenPress,
  onLikePress,
  buttonActions,
}) => {
  const themeType = useAppSelector(state => state.theme.theme);
  const compStyle = compStyles(themeType); // This is fine
  const commonStyle = commonStyles(themeType); // This is fine
  const baseStyle = baseStyles(themeType); // Rename this to avoid conflict

  const myTheme = appTheme[themeType];

  return (
    <View style={[baseStyle.shadowedContainer, compStyle.contentBoxPortrait]}>
      <View style={compStyle.cardImageWrapper}>
        <Image source={{ uri: imageUrl }} style={compStyle.productImage} />
        <TouchableOpacity
          style={compStyle.goFullScreenButton}
          onPress={onFullScreenPress}
        >
          {/* Replace with IconLib for the expand icon */}
          <IconLib.DotsMenu
            size={SHARED.fontL}
            color={myTheme.textLight}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={compStyle.goLiveShowButton}
          onPress={onFullScreenPress}
        >
          {/* Replace with IconLib for the expand icon */}
          <IconLib.Video_O size={SHARED.fontL} color={myTheme.online} />
        </TouchableOpacity>
      </View>

      <View style={compStyle.contentContainer}>
        <Text
          style={compStyle.productName}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {name}
        </Text>
        <View style={baseStyle.verticalSpacerXS} />
        {/* Conditionally render based on the type */}
        {type === 'product' && price !== undefined && (
          <Text style={compStyle.productPrice}>₱{price}</Text>
        )}

        {type === 'store' && location && (
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={compStyle.storeLocation}
          >
            {location}
          </Text>
        )}
        <View style={baseStyle.verticalSpacerS} />
        <View style={baseStyle.columnsInside}>
          <View style={[baseStyle.columnsInsideFlex, baseStyle.cols_2]}>
            <IconLib.Star size={16} color="gold" style={baseStyle.rMarginXS} />
            <Text
              style={[baseStyle.smallText, { color: myTheme.textBlur }]}
            >
              {rating}
            </Text>
          </View>
          <View
            style={[
              baseStyle.columnsInsideFlex,
              baseStyle.cols_2,
              baseStyle.alignRight,
              baseStyle.rPaddingXS,
            ]}
          >
            <TouchableOpacity onPress={onLikePress} style={baseStyle.rMarginXS}>
              {isLiked ? (
                <IconLib.Heart size={SHARED.fontXL} color="red" />
              ) : (
                <IconLib.Heart_O
                  size={SHARED.fontXL}
                  color={myTheme.iconColor1st}
                />
              )}
            </TouchableOpacity>
            <Text
              style={[baseStyle.smallText, { color: myTheme.textBlur }]}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {likes + (isLiked ? 1 : 0)}
            </Text>
          </View>
        </View>
      </View>
      <View style={baseStyle.verticalSpacerXS} />
      <View style={[baseStyle.columnsInsideFlex, compStyle.buttonContainer]}>
        {buttonActions.map((action, index) => (
          <CustomButton
            key={index}
            title={''} // No text, as you're only displaying an icon
            onPress={action.onPress}
            backgroundColor="transparent" // Assuming you want only the icon and no background
            iconName={action.iconName as keyof typeof IconLib} // Pass the icon name dynamically
            iconColor={myTheme.buttonText1st} // Set the icon color
            iconSize={SHARED.fontL} // Set the icon size
            style={[baseStyle.cols_2, commonStyle.cardButton, action.buttonStyle]} // Apply the button styles
            borderRadius={0} // Default borderRadius is 15, can be overridden
          />
        ))}
      </View>
    </View>
  );
};

export default ContentCard;
