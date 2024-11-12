// components/CategoryCard.tsx
import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

type CategoryCardProps = {
  item: {
    name: string;
    description: string;
    subcategories: { name: string }[];
    totalProducts?: number;
  };
  index: number;
  onPress: () => void;
};

const CategoryCard: React.FC<CategoryCardProps> = ({ item, index, onPress }) => {
  return (
    <TouchableOpacity style={styles.categoryCard} onPress={onPress}>
      <Image
        source={{ uri: `https://picsum.photos/200/200?random=${index + 1}` }}
        style={styles.categoryImage}
      />
      <View style={styles.categoryInfo}>
        <Text style={styles.categoryName}>{item.name}</Text>
        <Text style={styles.categoryDescription} numberOfLines={2}>
          {item.description}
        </Text>
        <View style={styles.categoryDetails}>
          {/* Top Subcategory with Icon */}
          <View style={styles.detailRow}>
            <Text style={styles.iconText}>📌</Text>
            <Text style={styles.detailText}>Top: {item.subcategories[0].name}</Text>
          </View>
          {/* Total Products with Icon */}
          <View style={styles.detailRow}>
            <Text style={styles.iconText}>📦</Text>
            <Text style={styles.detailText}>{item.totalProducts || 100}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  categoryCard: {
    flex: 1,
    margin: 10,
    padding: 15,
    borderRadius: 15,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'space-between',
  },
  categoryImage: {
    width: 140,
    height: 100,
    borderRadius: 0,
    marginBottom: 10,
    backgroundColor: '#e0e0e0',
  },
  categoryInfo: {
    alignItems: 'center',
    flex: 1,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
    textAlign: 'center',
  },
  categoryDescription: {
    fontSize: 13,
    color: '#666',
    textAlign: 'center',
    marginBottom: 10,
    lineHeight: 16,
  },
  categoryDetails: {
    width: '100%',
    marginTop: 10,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  iconText: {
    fontSize: 16,
    marginRight: 5,
    color: '#007BFF',
  },
  detailText: {
    fontSize: 13,
    color: '#555',
    flexWrap: 'wrap',
    textAlign: 'center',
  },
});

export default CategoryCard;
