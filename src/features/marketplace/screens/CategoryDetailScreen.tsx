import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigationTypes';

type CategoryDetailScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'CategoryDetailScreen'
>;

const CategoryDetailScreen: React.FC<CategoryDetailScreenProps> = ({ route, navigation }) => {
  const { category } = route.params;

  const renderSubcategoryItem = ({ item, index }: { item: { name: string }; index: number }) => (
    <TouchableOpacity
      style={styles.subcategoryCard}
      onPress={() => navigation.navigate('ProductsScreen', { subcategory: item })}
    >
      <Image
        source={{ uri: `https://picsum.photos/100/100?random=${index + 1}` }}
        style={styles.subcategoryImage}
      />
      <Text style={styles.subcategoryName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Category Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.header}>{category.name}</Text>
        <Text style={styles.description}>{category.description}</Text>
      </View>

      {/* Subcategories List */}
      <FlatList
        data={category.subcategories}
        renderItem={renderSubcategoryItem}
        keyExtractor={(item) => item.name}
        contentContainerStyle={styles.subcategoryList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa' },
  headerContainer: { padding: 15, backgroundColor: '#fff', marginBottom: 10 },
  header: { fontSize: 22, fontWeight: 'bold', color: '#333', marginBottom: 5 },
  description: { fontSize: 14, color: '#666' },
  subcategoryList: { paddingHorizontal: 10, paddingTop: 10 },
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
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 15,
    backgroundColor: '#e0e0e0',
  },
  subcategoryName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default CategoryDetailScreen;
