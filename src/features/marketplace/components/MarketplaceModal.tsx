// src/components/MarketplaceModal.tsx

import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, FlatList, ScrollView, StyleSheet } from 'react-native';
import { useAppSelector } from '../../../hooks/reduxHooks';
import { commonStyles } from '../../../styles/commonStyles';
import { theme } from '../../../styles/theme'; // Import theme
import Icon from 'react-native-vector-icons/Ionicons'; // Import icons for ratings and likes
import { useTranslation } from 'react-i18next'; // Import translation hook

type MarketplaceModalProps = {
  visible: boolean; // Control modal visibility
  onClose: () => void; // Callback function to close the modal
  categories: string[]; // Array of categories
  vendors: string[]; // Array of vendors
  featured: string[]; // Array of featured items
  promos: string[]; // Array of promos
};

const MarketplaceModal: React.FC<MarketplaceModalProps> = ({
  visible,
  onClose,
  categories,
  vendors,
  featured,
  promos,
}) => {
  const [activeSection, setActiveSection] = useState<'categories' | 'vendors' | 'featured' | 'promos' | null>(null);
  const { t } = useTranslation();

  const themeType = useAppSelector((state) => state.theme.theme); // Get current theme
  const commonStyle = commonStyles(themeType);
  const selectedTheme = theme[themeType];
  
  // Render each item in the list
  const renderListItem = ({ item }: { item: string }) => (
    <View style={commonStyle.listItem}>
      <Text>{item}</Text>
    </View>
  );

  return (
    <Modal visible={visible} animationType="slide" transparent={false}>
      <View style={commonStyle.modalContainer}>
        <Text style={commonStyle.modalTitle}>{t('Marketplace Sections')}</Text>

        {/* Section Buttons */}
        <View style={commonStyle.sectionButtonContainer}>
          <TouchableOpacity style={commonStyle.sectionButton} onPress={() => setActiveSection('categories')}>
            <Text>{t('Categories')}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={commonStyle.sectionButton} onPress={() => setActiveSection('vendors')}>
            <Text>{t('Vendors')}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={commonStyle.sectionButton} onPress={() => setActiveSection('featured')}>
            <Text>{t('Featured')}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={commonStyle.sectionButton} onPress={() => setActiveSection('promos')}>
            <Text>{t('Promos')}</Text>
          </TouchableOpacity>
        </View>

        {/* Dynamic Content Based on Selected Section */}
        <ScrollView style={commonStyle.sectionContent}>
          {activeSection === 'categories' && (
            <FlatList data={categories} renderItem={renderListItem} keyExtractor={(item) => item} />
          )}
          {activeSection === 'vendors' && (
            <FlatList data={vendors} renderItem={renderListItem} keyExtractor={(item) => item} />
          )}
          {activeSection === 'featured' && (
            <FlatList data={featured} renderItem={renderListItem} keyExtractor={(item) => item} />
          )}
          {activeSection === 'promos' && (
            <FlatList data={promos} renderItem={renderListItem} keyExtractor={(item) => item} />
          )}
        </ScrollView>

        {/* Close Button */}
        <TouchableOpacity style={commonStyle.closeButton} onPress={onClose}>
          <Text>{t('Close')}</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default MarketplaceModal;

