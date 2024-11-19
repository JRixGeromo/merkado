import React, { useState } from 'react';
import { View, Text, Modal, FlatList } from 'react-native';
import { useAppSelector } from '../../../hooks/reduxHooks';
import { commonStyles } from '../../../styles/commonStyles';
import { baseStyles } from '../../../styles/baseStyles';
import { theme as appTheme } from '../../../styles/theme';
import { useTranslation } from 'react-i18next'; // Import translation hook
import CustomButton from '../../../components/CustomButton'; // Import your CustomButton component
import { normalizeFontSize, normalizeHeight } from '../../../utils/responsive'; // Import responsive utilities

type MarketplaceModalProps = {
  visible: boolean;
  onClose: () => void;
  categories: string[];
  brands: string[];
  featured: string[];
  promos: string[];
  onSaleProducts: string[];
  newProducts: string[];
  vendors: string[];
};

const MarketplaceModal: React.FC<MarketplaceModalProps> = ({
  visible,
  onClose,
  categories,
  brands,
  featured,
  promos,
  onSaleProducts,
  newProducts,
  vendors,
}) => {
  const [activeSection, setActiveSection] = useState<
    | 'categories'
    | 'brands'
    | 'vendors'
    | 'featured'
    | 'promos'
    | 'onSale'
    | 'newProducts'
    | null
  >('categories');
  const { t } = useTranslation();

  const themeType = useAppSelector(state => state.theme.theme);
  const commonStyle = commonStyles(themeType); // This is fine
  const baseStyle = baseStyles(themeType); // Rename this to avoid conflict

  const myTheme = appTheme[themeType];

  // Render each item in the list
  const renderListItem = ({ item }: { item: string }) => (
    <View style={commonStyle.listItem}>
      <Text style={{ color: myTheme.text2nd }}>{item}</Text>
    </View>
  );

  // Function to render the correct content based on the active section
  const getActiveSectionData = () => {
    switch (activeSection) {
      case 'categories':
        return categories;
      case 'brands':
        return brands;
      case 'vendors':
        return vendors;
      case 'featured':
        return featured;
      case 'promos':
        return promos;
      case 'onSale':
        return onSaleProducts;
      case 'newProducts':
        return newProducts;
      default:
        return [];
    }
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={false}>
      <View
        style={[
          baseStyle.container,
          baseStyle.paddingAllS,
          { backgroundColor: myTheme.fullContainerBGColor },
        ]}
      >
        <Text style={commonStyle.modalTitle}>{t('Search in merkado by')}</Text>

        {/* Scrollable Section Buttons */}
        <FlatList
          horizontal
          data={[
            { key: 'categories', label: t('Categories') },
            { key: 'brands', label: t('Brands') },
            { key: 'vendors', label: t('Vendors') },
            { key: 'featured', label: t('Featured') },
            { key: 'promos', label: t('Promos') },
            { key: 'onSale', label: t('On Sale') },
            { key: 'newProducts', label: t('New Products') },
          ]}
          renderItem={({ item }) => (
            <CustomButton
              title={item.label}
              onPress={() => setActiveSection(item.key as any)}
              backgroundColor={myTheme.button1st} // Use theme for close button color
              style={[commonStyle.searchButton, { marginHorizontal: 10 }]} // You can pass an array of styles
              borderRadius={20} // Set borderRadius
              color={myTheme.buttonText1st}
              textSize={normalizeFontSize(12)} // Custom text size
              borderColor={myTheme.buttonBorderLight}
            />
          )}
          keyExtractor={item => item.key}
          showsHorizontalScrollIndicator={false}
          style={baseStyle.flatListMaxHeight} // Set the max height for the FlatList
        />

        {/* Dynamic Content Based on Selected Section */}
        <FlatList
          data={getActiveSectionData()} // Dynamically render content
          renderItem={renderListItem}
          keyExtractor={item => item}
          contentContainerStyle={{ paddingTop: 10 }} // Ensure content is aligned at the top
        />

        {/* Close Button */}
        <CustomButton
          title={t('Close')}
          onPress={onClose}
          backgroundColor={myTheme.buttonClose} // Use theme for close button color
          borderRadius={2} // You can set this dynamically too
          color={myTheme.buttonText1st}
          style={{
            marginLeft: 0,
            marginRight: 0,
            padding: 10,
          }}
        />
      </View>
    </Modal>
  );
};

export default MarketplaceModal;
