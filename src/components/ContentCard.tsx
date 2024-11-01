import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useAppSelector } from '../hooks/reduxHooks'; // Hook to access the theme from Redux
import { commonStyles } from '../styles/commonStyles'; // Import your style
import { layoutStyles } from '../styles/layoutStyles';
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
  const commonStyle = commonStyles(themeType); // This is fine
  const layoutStyle = layoutStyles(themeType); // Rename this to avoid conflict

  const selectedTheme = appTheme[themeType];

  return (
    <View style={[layoutStyle.shadowedContainer, commonStyle.contentBoxPortrait]}>
      <View style={commonStyle.cardImageWrapper}>
        <Image source={{ uri: imageUrl }} style={commonStyle.productImage} />
        <TouchableOpacity
          style={commonStyle.goFullScreenButton}
          onPress={onFullScreenPress}
        >
          {/* Replace with IconLib for the expand icon */}
          <IconLib.DotsMenu size={18} color="white" />
        </TouchableOpacity>
      </View>

      <View style={layoutStyle.contentContainer}>
        <Text style={commonStyle.productName}>{name}</Text>
        <View style={layoutStyle.verticalSpacerS} />
        {/* Conditionally render based on the type */}
        {type === 'product' && price !== undefined && (
          <Text style={commonStyle.productPrice}>₱{price}</Text>
        )}

        {type === 'store' && location && (
          <Text style={commonStyle.storeLocation}>{location}</Text>
        )}
        <View style={layoutStyle.verticalSpacerS} />
        <View style={layoutStyle.columnsInsideFlex}>
          {/* Replace with IconLib for the star icon */}
          <IconLib.Star size={16} color="gold" style={layoutStyle.rMarginXS} />
          <Text style={[layoutStyle.fontS, {color: selectedTheme.textSecondary}]}>{rating}</Text>
        </View>
        <View style={layoutStyle.verticalSpacerS} />
        <View style={layoutStyle.columnsInsideFlex}>
          <TouchableOpacity
            onPress={onLikePress}
            style={layoutStyle.rMarginXS}
          >
            {/* Replace with IconLib for the heart icon */}
            {isLiked ? (
              <IconLib.Heart size={18} color="red" />
            ) : (
              <IconLib.Heart_O size={18} color={selectedTheme.iconColorPrimary} />
            )}
          </TouchableOpacity>
          <Text style={[layoutStyle.fontS, {color: selectedTheme.textSecondary}]}>
            {likes + (isLiked ? 1 : 0)} Reactions
          </Text>
        </View>
      </View>
      <View style={layoutStyle.verticalSpacerS} />

      <View style={layoutStyle.columnsInsideFlex}>
        {buttonActions.map((action, index) => (
          <CustomButton
            key={index}
            title={''} // No text, as you're only displaying an icon
            onPress={action.onPress}
            backgroundColor="transparent" // Assuming you want only the icon and no background
            iconName={action.iconName as keyof typeof IconLib} // Pass the icon name dynamically
            iconColor={selectedTheme.textLight} // Set the icon color
            iconSize={20} // Set the icon size
            style={[layoutStyle.cols_2, commonStyle.cardButton, action.buttonStyle]} // Apply the button styles
            borderRadius={0} // Default borderRadius is 15, can be overridden
          />
        ))}
      </View>
    </View>
  );
};

export default ContentCard;
