import React, { useState } from 'react';
import { View, Image, Text } from 'react-native';
import { compStyles } from './styles/componentStyles'; // Import your style
import { commonStyles } from '../styles/commonStyles';
import { useTheme } from '../hooks/useTheme';
import { SHARED } from '../styles/baseStyles';
import IconLib from './IconLib'; // Import IconLib for icons
import CustomButton from './CustomButton';
import {
  SharedCardButtonActionBase,
  SharedContentCardBaseProps,
} from './types/contentCardTypes';

interface ContentCardWideProps extends SharedContentCardBaseProps {
  distance?: string; // Make distance optional
  buttonActions: (SharedCardButtonActionBase & {
    title: string;
    textSize: number;
    width: string;
    backgroundColor: string;
  })[];
}

const ContentCardWide: React.FC<ContentCardWideProps> = ({
  type,
  imageUrl,
  name,
  description = null,
  price = null,
  buttonActions,
}) => {
  const { themeType, commonStyle, baseStyle, myTheme } = useTheme();
  const compStyle = compStyles(themeType); // This is fine
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const renderImage = () => {
    // If there's no imageUrl or there was an error, show a placeholder
    if (!imageUrl || !imageUrl.trim() || imageError) {
      return (
        <View style={[compStyle.contentImage, { backgroundColor: '#f0f0f0', justifyContent: 'center', alignItems: 'center' }]}>
          <Text style={{ color: '#999', fontSize: 12, textAlign: 'center' }}>No Image</Text>
        </View>
      );
    }

    return (
      <Image 
        source={{ uri: imageUrl }} 
        style={compStyle.contentImage} 
        onError={handleImageError}
      />
    );
  };

  return (
    <View
      style={[
        baseStyle.shadowedContainer,
        baseStyle.columnsInsideFlex,
        commonStyle.contentBox,
      ]}
    >
      <View style={[compStyle.contentImage, baseStyle.cols_25]}>
        {renderImage()}
      </View>

      <View style={[baseStyle.cols_75]}>
        <View style={[baseStyle.paddingAllS, { height: '72%' }]}>
          <Text
            style={[
              baseStyle.mediumText,
              { color: myTheme.text2nd, fontWeight: 'bold' },
            ]}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {name}
          </Text>
          <Text
            style={[
              baseStyle.smallText,
              { color: myTheme.text2nd },
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
                { color: myTheme.text2nd },
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
                iconColor={myTheme.buttonText1st}
                iconSize={SHARED.fontL}
                color={myTheme.buttonText1st}
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
