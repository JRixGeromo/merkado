import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigationTypes'; // Import RootStackParamList

interface Category {
  name: string;
  description: string;
}

const categories: Category[] = [
  { name: 'Electronics & Appliances', description: 'Explore a wide range of electronic devices.' },
  { name: 'Fashion & Apparel', description: 'Stylish clothing and accessories.' },
  { name: 'Health & Wellness', description: 'Health, beauty, and personal care products.' },
  { name: 'Home & Living', description: 'Furniture, decor, and essentials for your home.' },
  { name: 'Food & Beverages', description: 'Fresh produce, snacks, and beverages.' },
];

type MarketplaceScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'MarketplaceScreen'>;
};

const MarketplaceScreen: React.FC<MarketplaceScreenProps> = ({ navigation }) => {
  const renderCategoryItem = ({ item }: { item: Category }) => (
    <TouchableOpacity
      style={styles.categoryCard}
      onPress={() => navigation.navigate('CategoryDetailScreen', { category: item })}
    >
      <Text style={styles.categoryName}>{item.name}</Text>
      <Text style={styles.categoryDescription} numberOfLines={2}>
        {item.description}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.name}
        numColumns={2}
        contentContainerStyle={styles.categoryGrid}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa' },
  categoryGrid: { padding: 10 },
  categoryCard: {
    flex: 1,
    margin: 5,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  categoryName: { fontSize: 16, fontWeight: 'bold', marginBottom: 5 },
  categoryDescription: { fontSize: 14, color: '#555' },
});

export default MarketplaceScreen;
