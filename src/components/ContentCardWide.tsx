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
    title: string;
    textSize: number;
    width: string;
    backgroundColor: string;
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

  return (
    <View style={[layoutStyle.shadowedContainer, layoutStyle.columnsInsideFlex, commonStyle.contentBox]}>
      
      <View style={[commonStyle.contentImage, layoutStyle.cols_25]}>
        <Image source={{ uri: imageUrl }} style={commonStyle.contentImage} />
      </View>

      <View style={[layoutStyle.cols_75]}>
        <View style={[layoutStyle.paddingAllS, {height: "75%"}]}>
          <Text style={[layoutStyle.mediumText, {color: selectedTheme.textPrimary}]}>{name}</Text>
          <Text style={[layoutStyle.smallText, {color: selectedTheme.textSecondary}]}>{description}</Text>
          <View style={layoutStyle.verticalSpacerS} />
          {type === 'product' && price !== undefined && (
            <Text style={commonStyle.productPrice}>₱{price}</Text>
          )}
        </View>
       
        {/* Render buttons */}
        <View style={[layoutStyle.columnsInside, layoutStyle.alignRight, {height: "25%"}]}>
          {buttonActions.map((action, index) => (
            <View key={index} style={[layoutStyle.cols_3]}>
              <CustomButton
                title={action.title}
                textSize={action.textSize}
                backgroundColor={action.backgroundColor}
                width={action.width}
                onPress={action.onPress}
                iconName={action.iconName as keyof typeof IconLib}
                iconColor={selectedTheme.iconColorLight}
                iconSize={18}
                color={selectedTheme.textLight}
                style={[commonStyle.cardButton, action.buttonStyle]}
                borderRadius={0}
              />
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default ContentCardWide;
