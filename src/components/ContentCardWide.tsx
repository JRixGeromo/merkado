import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useAppSelector } from '../hooks/reduxHooks'; // Hook to access the theme from Redux
import { compStyles } from './styles/componentStyles'; // Import your style
import { commonStyles } from '../styles/commonStyles';
import { baseStyles, SHARED } from '../styles/baseStyles';
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
  const compStyle = compStyles(themeType); // This is fine
  const commonStyle = commonStyles(themeType); // This is fine
  const baseStyle = baseStyles(themeType); // Rename this to avoid conflict

  const selectedTheme = appTheme[themeType];

  return (
    <View
      style={[
        baseStyle.shadowedContainer,
        baseStyle.columnsInsideFlex,
        commonStyle.contentBox,
      ]}
    >
      <View style={[compStyle.contentImage, baseStyle.cols_25]}>
        <Image source={{ uri: imageUrl }} style={compStyle.contentImage} />
      </View>

      <View style={[baseStyle.cols_75]}>
        <View style={[baseStyle.paddingAllS, { height: '72%' }]}>
          <Text
            style={[
              baseStyle.mediumText,
              { color: selectedTheme.textSecondary, fontWeight: 'bold' },
            ]}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {name}
          </Text>
          <Text
            style={[
              baseStyle.smallText,
              { color: selectedTheme.textSecondary },
            ]}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {description}
          </Text>
          <View style={baseStyle.verticalSpacerS} />
          {type === 'product' && price !== undefined && (
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={[
                baseStyle.smallText,
                { color: selectedTheme.textSecondary },
              ]}
            >
              Price:₱{price} | Sale:₱{price} | Qty:230
            </Text>
          )}
        </View>

        {/* Render buttons */}
        <View
          style={[
            baseStyle.columnsInside,
            baseStyle.alignRight,
            { height: '28%' },
          ]}
        >
          {buttonActions.map((action, index) => (
            <View key={index} style={[baseStyle.cols_3]}>
              <CustomButton
                title={action.title}
                textSize={action.textSize}
                backgroundColor={action.backgroundColor}
                width={action.width}
                onPress={action.onPress}
                iconName={action.iconName as keyof typeof IconLib}
                iconColor={selectedTheme.buttonTextPrimary}
                iconSize={SHARED.fontL}
                color={selectedTheme.buttonTextPrimary}
                style={[
                  commonStyle.cardButton,
                  action.buttonStyle,
                  { height: '100%' },
                ]}
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
