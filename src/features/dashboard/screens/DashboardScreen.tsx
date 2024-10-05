import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useAppSelector, useAppDispatch } from '../../../hooks/reduxHooks'; // Access theme and dispatch
import { toggleTheme } from '../../../reducers/themeReducer'; // Import theme toggle action
import CustomButton from '../../../components/CustomButton'; // Reusable button
import { commonStyles } from '../../../styles/commonStyles'; // Common styles
import Icon from 'react-native-vector-icons/Ionicons'; // Icon for theme toggle
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigationTypes'; // Import navigation types

const DashboardScreen = () => {
  const theme = useAppSelector((state) => state.theme.theme); // Get current theme from Redux
  const dispatch = useAppDispatch(); // Get dispatch for Redux actions
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>(); // Use correct type for navigation
  const styles = commonStyles(theme);  // Apply dynamic styles based on the theme
  const { container, title, sectionTitle, storeBox, productBox, storeName, storeLocation, productName, storeImage, productImage } = styles; // Destructure commonly used styles

  // Dummy data for stores
  const stores = [
    {
      id: 1,
      name: "Trader Joe's",
      location: 'Walnut Creek, CA',
      imageUrl: 'https://example.com/store1.jpg',
    },
    {
      id: 2,
      name: 'Costco Wholesale',
      location: 'Turlock, CA',
      imageUrl: 'https://example.com/store2.jpg',
    },
    {
      id: 3,
      name: 'Price Cutter',
      location: 'Springfield, MO',
      imageUrl: 'https://example.com/store3.jpg',
    },
  ];

  // Dummy data for products
  const products = [
    {
      id: 1,
      name: 'Beef Boneless',
      imageUrl: 'https://example.com/product1.jpg',
    },
    {
      id: 2,
      name: 'Milk Lakeland',
      imageUrl: 'https://example.com/product2.jpg',
    },
    {
      id: 3,
      name: 'Simba Teff Flour',
      imageUrl: 'https://example.com/product3.jpg',
    },
  ];

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={container}>
        <Text style={title}>
          Welcome to the Dashboard
        </Text>

        {/* Featured Stores Section */}
        <View style={styles.section}>
          <Text style={sectionTitle}>
            Featured Stores
          </Text>
          {stores.map((store) => (
            <View key={store.id} style={storeBox}>
              <Image source={{ uri: store.imageUrl }} style={storeImage} />
              <Text style={storeName}>{store.name}</Text>
              <Text style={storeLocation}>{store.location}</Text>
            </View>
          ))}
        </View>

        {/* Featured Products Section */}
        <View style={styles.section}>
          <Text style={sectionTitle}>
            Featured Products
          </Text>
          {products.map((product) => (
            <View key={product.id} style={productBox}>
              <Image source={{ uri: product.imageUrl }} style={productImage} />
              <Text style={productName}>{product.name}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default DashboardScreen;
