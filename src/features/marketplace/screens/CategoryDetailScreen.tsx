import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigationTypes';
import StarburstBadge from '../../../components/StarburstBadge';

type CategoryDetailScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'CategoryDetailScreen'
>;

const CategoryDetailScreen: React.FC<CategoryDetailScreenProps> = ({
  route,
  navigation,
}) => {
  const { category } = route.params;

  const renderSubcategoryItem = ({
    item,
    index,
  }: {
    item: { name: string; description: string; productCount?: number, sale?: string };
    index: number;
  }) => (
    <TouchableOpacity
      style={styles.subcategoryCard}
      onPress={() =>
        navigation.navigate('ProductsScreen', { subcategory: item })
      }
    >
      {item.sale && (
        <View style={styles.newBadgeContainer}>
          <Text style={styles.newBadgeText}>Up to {item.sale}</Text>
        </View>
      )}
      <Image
        source={{ uri: `https://picsum.photos/100/100?random=${index + 1}` }}
        style={styles.subcategoryImage}
      />
      <View style={styles.subcategoryContent}>
        <Text style={styles.subcategoryName}>{item.name}</Text>
        <Text style={styles.subcategoryDescription}>{item.description}</Text>
        {item.productCount && (
          <View style={styles.detailRow}>
            <Text style={styles.iconText}>📦</Text>
            <Text style={styles.detailText}>{item.productCount || 100}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Category Header */}
      <View style={styles.headerContainer}>
        <Image
          source={{ uri: `https://picsum.photos/400/200?random=header` }}
          style={styles.headerImage}
        />
        <Text style={styles.header}>{category.name}</Text>
        <Text style={styles.description}>{category.description}</Text>
      </View>

      {/* Subcategories List */}
      <FlatList
        data={category.subcategories.map((subcategory, index) => ({
          ...subcategory,
          productCount: 10 + index * 5, // Example hardcoded product count
        }))}
        renderItem={renderSubcategoryItem}
        keyExtractor={item => item.name}
        contentContainerStyle={styles.subcategoryList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  headerContainer: {
    backgroundColor: '#ffecec',
    padding: 15,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
  },
  headerImage: {
    width: '100%',
    height: 150,
    borderRadius: 15,
    marginBottom: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  subcategoryList: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  subcategoryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  subcategoryImage: {
    width: 80,
    height: 80,
    borderRadius: 0,
    marginRight: 15,
    backgroundColor: '#e0e0e0',
  },
  subcategoryContent: {
    flex: 1,
  },
  subcategoryName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  subcategoryDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  productCountBadge: {
    marginTop: 5,
    alignSelf: 'flex-start',
    backgroundColor: '#FFD700', // Gold background for the badge
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
  },
  productCountText: {
    fontSize: 12,
    color: '#333',
    fontWeight: 'bold',
  },
  detailRow: {
    flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center', // Center-align details
    marginTop: 5,
  },
  iconText: {
    fontSize: 12,
    marginRight: 5,
    color: '#007BFF', // Blue icon color for distinction
  },
  detailText: {
    fontSize: 12, // Smaller font size to fit content
    color: '#555',
    flexWrap: 'wrap', // Ensure text wraps correctly
    textAlign: 'center', // Center-align text
  },
  newBadgeContainer: {
    position: 'absolute',
    backgroundColor: 'red', // Green background
    borderTopRightRadius: 10, // Only round the top-left corner
    borderBottomLeftRadius: 12, // Only round the bottom-right corner
    borderBottomRightRadius: 0, // Keep top-right square
    borderTopLeftRadius: 0, // Keep bottom-left square
    paddingHorizontal: 10, // Space on left and right
    paddingVertical: 2, // Space on top and bottom
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    right: 0,
    zIndex: 23,
  },
  newBadgeText: {
    color: '#fff', // White text color
    fontSize: 10, // Smaller text
    fontWeight: 'bold', // Bold text
  },
});

export default CategoryDetailScreen;
