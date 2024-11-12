// components/SearchBarWithToggle.tsx
import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

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
  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search categories or products..."
        onChangeText={onSearchChange}
      />
      <View style={styles.toggleIcons}>
        <TouchableOpacity
          onPress={() => setActiveView('featured')}
          style={[
            styles.iconButton,
            activeView === 'featured' && styles.activeIconButton,
          ]}
        >
          <Text
            style={[
              styles.iconText,
              activeView === 'featured' && styles.activeIconText,
            ]}
          >
            ⭐
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActiveView('categories')}
          style={[
            styles.iconButton,
            activeView === 'categories' && styles.activeIconButton,
          ]}
        >
          <Text
            style={[
              styles.iconText,
              activeView === 'categories' && styles.activeIconText,
            ]}
          >
            📂
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    padding: 10,
    borderRadius: 8,
    fontSize: 16,
    marginRight: 10,
  },
  toggleIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    padding: 10,
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    marginLeft: 5,
  },
  activeIconButton: {
    backgroundColor: '#007BFF',
  },
  iconText: {
    fontSize: 16,
    color: '#333',
  },
  activeIconText: {
    color: '#fff',
  },
});

export default SearchBarWithToggle;
