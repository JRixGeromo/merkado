import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigationTypes';
import { categories } from '../data';

type MarketplaceScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'MarketplaceScreen'>;
};

const MarketplaceScreen: React.FC<MarketplaceScreenProps> = ({ navigation }) => {
  const renderCategoryItem = ({ item, index }: { item: typeof categories[0]; index: number }) => (
    <TouchableOpacity
      style={styles.categoryCard}
      onPress={() => navigation.navigate('CategoryDetailScreen', { category: item })}
    >
      <Image
        source={{ uri: `https://picsum.photos/200/200?random=${index + 1}` }}
        style={styles.categoryImage}
      />
      <Text style={styles.categoryName}>{item.name}</Text>
      <Text style={styles.categoryDescription} numberOfLines={2}>
        {item.description}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={categories.map((category, index) => ({
          ...category,
          image: `https://picsum.photos/200/200?random=${index + 1}`, // Dynamically generated images
        }))}
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
  categoryGrid: { paddingHorizontal: 10, paddingBottom: 20 },
  categoryCard: {
    flex: 1,
    margin: 10,
    padding: 15,
    borderRadius: 15,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
    alignItems: 'center', // Center-align content
    transform: [{ scale: 1 }],
  },
  categoryCardPressed: {
    transform: [{ scale: 0.97 }],
  },
  categoryImage: {
    width: 140, // Increased width
    height: 100, // Increased height
    borderRadius: 15, // Slightly rounded corners
    marginBottom: 15, // Space between image and text
    backgroundColor: '#e0e0e0', // Placeholder background
  },
  categoryName: {
    fontSize: 18, // Increased font size
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
    textAlign: 'center',
  },
  categoryDescription: {
    fontSize: 14, // Slightly larger font
    color: '#666',
    textAlign: 'center',
    lineHeight: 18, // Improved readability
  },
});


export default MarketplaceScreen;
