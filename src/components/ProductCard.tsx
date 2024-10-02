import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useAppSelector, useAppDispatch } from '../hooks/reduxHooks'; // Import the custom hooks
import { toggleTheme } from '../reducers/themeReducer'; // Import the Redux action
import styles from '../styles/styles'; // Import the styles

const ProductCard = () => {
  const theme = useAppSelector((state) => state.theme.theme); // Get the current theme from Redux
  const dispatch = useAppDispatch(); // Get the dispatch function

  return (
    <View style={[styles.productCard, { backgroundColor: theme === 'light' ? '#FFF' : '#333' }]}>
      <Image
        style={styles.productImage}
        source={{ uri: 'https://example.com/product-image.jpg' }}
      />
      <Text style={[styles.productTitle, { color: theme === 'light' ? '#333' : '#FFF' }]}>
        Organic Bananas
      </Text>
      <Text style={[styles.productDescription, { color: theme === 'light' ? '#777' : '#CCC' }]}>
        Fresh bananas from local farms.
      </Text>
      <Text style={[styles.productPrice, { color: theme === 'light' ? '#00A876' : '#1E90FF' }]}>
        $5.99
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => dispatch(toggleTheme())}>
        <Text style={styles.buttonText}>Toggle Theme</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;
