import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useAppSelector } from '../../../hooks/reduxHooks';
import { theme as appTheme } from '../../../styles/theme';
import { commonStyles } from '../../../styles/commonStyles';
import CustomButton from '../../../components/CustomButton';
import { useTranslation } from 'react-i18next';

type DetailsScreenRouteProp = RouteProp<{ params: { item: any; type: 'product' | 'store' } }, 'params'>;

const DetailsScreen: React.FC = () => {
  const route = useRoute<DetailsScreenRouteProp>();
  const { item, type } = route.params;

  const themeType = useAppSelector(state => state.theme.theme);
  const selectedTheme = appTheme[themeType];
  const commonStyle = commonStyles(themeType);
  const { t } = useTranslation();

  const handleComment = async () => {
    // Handle comment functionality here
  };

  const handleChat = async () => {
    // Handle chat functionality here
  };

  return (
    <View style={[commonStyle.fullContainer, {backgroundColor: selectedTheme.fullBackgrounColor}]}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {/* Image of Product or Vendor */}

        <View style={commonStyle.contentImageWrapper}>
            <Image source={{ uri: item.imageUrl }} style={commonStyle.contentImage} />
            {/* <TouchableOpacity style={commonStyle.magnifyingGlassButton} onPress={onMagnifyPress}>
            <Icon name="search" size={18} color="white" />
            </TouchableOpacity> */}
        </View>

        {/* Information about the Product or Vendor */}
        <View style={commonStyle.contentContainer}>
          <Text style={[ { color: selectedTheme.textPrimary }]}>{item.name}</Text>
          {type === 'product' && item.price !== undefined && (
            <Text style={[{ color: selectedTheme.textHighlight }]}>₱{item.price}</Text>
          )}
          {type === 'store' && item.location && (
            <Text style={[{ color: selectedTheme.textSecondary }]}>{item.location}</Text>
          )}
        </View>

        {/* Rating and Reactions */}
        <View style={commonStyle.infoRow}>
            <View style={commonStyle.infoRow}>
                <Icon name="star" size={16} color="gold" style={commonStyle.iconContainer} />
                <Text style={commonStyle.infoText}>{item.rating}</Text>
            </View>
            <View style={commonStyle.infoRow}>
                <TouchableOpacity>
                <Icon name="heart-outline" size={24} color={selectedTheme.iconColorPrimary} />
                </TouchableOpacity>
                <TouchableOpacity>
                <Icon name="thumbs-up-outline" size={24} color={selectedTheme.iconColorPrimary} />
                </TouchableOpacity>
                <TouchableOpacity>
                <Icon name="thumbs-down-outline" size={24} color={selectedTheme.iconColorPrimary} />
                </TouchableOpacity>
            </View>
        </View>
      </ScrollView>

      {/* Full-Width Buttons fixed to the bottom */}
      <View style={commonStyle.buttonRow}>
        <CustomButton
            title={t('comment')}
            onPress={handleComment}
            color={selectedTheme.textLight}
            backgroundColor={selectedTheme.buttonInfo}
            borderRadius={2}
            width={"50%"}
        />
        <CustomButton
            title={t('chat')}
            onPress={handleChat}
            color={selectedTheme.textLight}
            backgroundColor={selectedTheme.buttonDark}
            borderRadius={0}
            width={"50%"}
        />
      </View>
    </View>
  );
};

export default DetailsScreen;
