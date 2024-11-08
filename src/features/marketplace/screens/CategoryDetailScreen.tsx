import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigationTypes';

type CategoryDetailScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'CategoryDetailScreen'
>;

const CategoryDetailScreen: React.FC<CategoryDetailScreenProps> = ({ route, navigation }) => {
  const { category } = route.params;

  const renderSubcategoryItem = ({ item }: { item: { name: string } }) => (
    <TouchableOpacity
      style={styles.subcategoryCard}
      onPress={() => navigation.navigate('ProductsScreen', { subcategory: item })}
    >
      <Text style={styles.subcategoryName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{category.name}</Text>
      <Text style={styles.description}>{category.description}</Text>
      <FlatList
        data={category.subcategories} // `subcategories` is now recognized
        renderItem={renderSubcategoryItem}
        keyExtractor={(item) => item.name}
        contentContainerStyle={styles.subcategoryList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, backgroundColor: '#f8f9fa' },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  description: { fontSize: 16, color: '#555', marginBottom: 20 },
  subcategoryList: { paddingTop: 10 },
  subcategoryCard: {
    padding: 15,
    marginVertical: 5,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  subcategoryName: { fontSize: 16, fontWeight: 'bold' },
});

export default CategoryDetailScreen;
