import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useAppSelector } from '../hooks/reduxHooks'; // Hook to access the theme from Redux
import { commonStyles } from '../styles/commonStyles'; // Import your style
import { layoutStyles } from '../styles/layoutStyles';
import { theme as appTheme } from '../styles/theme';
import IconLib from './IconLib'; // Import IconLib for icons
import CustomButton from './CustomButton';

interface ContentCardWideProps {
    type: 'store' | 'product' | 'featured' | 'onSale';
    imageUrl: string;
    name: string;
    distance?: string; // Make distance optional
    description: string | null;
    price?: number;
    buttonActions: {
      iconName: string;
      onPress: () => void;
      buttonStyle: object;
    }[];
  }

const ContentCardWide: React.FC<ContentCardWideProps> = ({
  type,
  imageUrl,
  name,
  description = null,
  price = null,
  buttonActions,
}) => {
  const themeType = useAppSelector(state => state.theme.theme);
  const commonStyle = commonStyles(themeType); // This is fine
  const layoutStyle = layoutStyles(themeType); // Rename this to avoid conflict

  const selectedTheme = appTheme[themeType];

  const renderIcon = (iconName: keyof typeof IconLib, size: number, color: string) => {
    const IconComponent = IconLib[iconName]; // Access the icon component dynamically
    return <IconComponent size={size} color={color} />;
  };

  return (
    <View style={[layoutStyle.shadowedContainer, commonStyle.contentBox]}>
      <View style={commonStyle.cardImageWrapper}>
        <Image source={{ uri: imageUrl }} style={commonStyle.contentImage} />
      </View>

      <View style={layoutStyle.contentContainer}>
        <Text style={commonStyle.productName}>{name}</Text>
        <View style={layoutStyle.verticalSpacerS} />
        {/* Conditionally render based on the type */}
        {type === 'product' && price !== undefined && (
          <Text style={commonStyle.productPrice}>₱{price}</Text>
        )}
        <View style={layoutStyle.verticalSpacerS} />
        <View style={layoutStyle.verticalSpacerS} />
      </View>
      <View style={layoutStyle.verticalSpacerS} />

      {/* <View style={layoutStyle.columnsInsideFlex}>
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
      </View> */}
    </View>
  );
};

export default ContentCardWide;
