import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useAppSelector } from '../hooks/reduxHooks'; // Hook to access the theme from Redux
import { commonStyles } from '../styles/commonStyles'; // Import your style
import { theme as appTheme } from '../styles/theme';
import IconLib from './IconLib'; // Import IconLib for icons

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
  const theme = useAppSelector(state => state.theme.theme); // Get current theme from Redux
  const commonStyle = commonStyles(theme);
  const selectedTheme = appTheme[theme];

  const renderIcon = (iconName: keyof typeof IconLib, size: number, color: string) => {
    const IconComponent = IconLib[iconName]; // Access the icon component dynamically
    return <IconComponent size={size} color={color} />;
  };

  return (
    <View style={commonStyle.productBox}>
      <View style={commonStyle.productImageWrapper}>
        <Image source={{ uri: imageUrl }} style={commonStyle.productImage} />
        <TouchableOpacity
          style={commonStyle.magnifyingGlassButton}
          onPress={onFullScreenPress}
        >
          {/* Replace with IconLib for the expand icon */}
          <IconLib.DotsMenu size={18} color="white" />
        </TouchableOpacity>
      </View>

      <View style={commonStyle.contentContainer}>
        <Text style={commonStyle.productName}>{name}</Text>

        {/* Conditionally render based on the type */}
        {type === 'product' && price !== undefined && (
          <Text style={commonStyle.productPrice}>₱{price}</Text>
        )}

        {type === 'store' && location && (
          <Text style={commonStyle.storeLocation}>{location}</Text>
        )}

        <View style={commonStyle.infoRow}>
          {/* Replace with IconLib for the star icon */}
          <IconLib.Star size={16} color="gold" style={commonStyle.iconContainer} />
          <Text style={commonStyle.infoText}>{rating}</Text>
        </View>

        <View style={commonStyle.likeRow}>
          <TouchableOpacity
            onPress={onLikePress}
            style={commonStyle.iconContainer}
          >
            {/* Replace with IconLib for the heart icon */}
            {isLiked ? (
              <IconLib.Heart size={18} color="red" />
            ) : (
              <IconLib.Heart_O size={18} color={selectedTheme.iconColorPrimary} />
            )}
          </TouchableOpacity>
          <Text style={commonStyle.infoText}>
            {likes + (isLiked ? 1 : 0)} Reactions
          </Text>
        </View>
      </View>

      <View style={commonStyle.buttonRow}>
        {buttonActions.map((action, index) => (
          <TouchableOpacity
            key={index}
            style={[commonStyle.fullWidthButton, action.buttonStyle]}
            onPress={action.onPress}
          >
            {/* Use the renderIcon function to dynamically render icons */}
            {renderIcon(action.iconName as keyof typeof IconLib, 20, selectedTheme.textLight)}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default ContentCard;
