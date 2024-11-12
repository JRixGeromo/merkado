// components/SearchBarWithToggle.tsx
import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import IconLib from '../../../components/IconLib'; // Use IconLib here
import { useAppSelector } from '../../../hooks/reduxHooks';
import { theme as appTheme } from '../../../styles/theme';
import { marketStyles } from '../styles/marketStyles';
import { baseStyles } from '../../../styles/baseStyles';
import { useTranslation } from 'react-i18next'; // Import translation hook

type SearchBarWithToggleProps = {
  activeView: 'featured' | 'categories';
  setActiveView: (view: 'featured' | 'categories') => void;
  onSearchChange?: (text: string) => void; // Optional handler for search input changes
};

const SearchBarWithToggle: React.FC<SearchBarWithToggleProps> = ({
  activeView,
  setActiveView,
  onSearchChange,
}) => {
    const themeType = useAppSelector(state => state.theme.theme);
    const marketStyle = marketStyles(themeType); // This is fine
    const baseStyle = baseStyles(themeType); // Rename this to avoid conflict
  
    const selectedTheme = appTheme[themeType];
  
 
    const { t } = useTranslation(); // Initialize translation

  return (
    <View style={[baseStyle.columnsInsideFlex, marketStyle.searchContainer]}>
      <TextInput
        style={marketStyle.searchInput}
        placeholder="Search categories or products..."
        onChangeText={onSearchChange}
      />
      <View style={baseStyle.columnsInsideFlex}>
        <TouchableOpacity
          onPress={() => setActiveView('featured')}
          style={[
            marketStyle.toggleIconButton,
            activeView === 'featured' && marketStyle.activeIconButton,
          ]}
        >
          <Text
            style={[
              //marketStyle.iconText,
              activeView === 'featured' && marketStyle.activeIconText,
            ]}
          >
            <IconLib.Star_O size={21} color={selectedTheme.iconColorGray} />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActiveView('categories')}
          style={[
            marketStyle.toggleIconButton,
            activeView === 'categories' && marketStyle.activeIconButton,
          ]}
        >
          <Text
            style={[
              //marketStyle.iconText,
              activeView === 'categories' && marketStyle.activeIconText,
            ]}
          >
            <IconLib.Folder_O size={21} color={selectedTheme.iconColorGray} />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchBarWithToggle;
