import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { useAppSelector, useAppDispatch } from '../../../hooks/reduxHooks'; // Access theme and dispatch
import { toggleTheme } from '../../../reducers/themeReducer'; // Import theme toggle action
import CustomButton from '../../../components/CustomButton'; // Reusable button
import { commonStyles } from '../../../styles/commonStyles'; // Common styles

const DashboardScreen = () => {
  const theme = useAppSelector((state) => state.theme.theme); // Get current theme from Redux
  const dispatch = useAppDispatch(); // Get dispatch for Redux actions
  const styles = commonStyles(theme);  // Apply dynamic styles based on the theme
  const { container, title, sectionTitle, storeBox, productBox, storeName, storeLocation, productName, productImage } = styles; // Destructure commonly used styles

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={[container, { backgroundColor: theme === 'light' ? '#fff' : '#333' }]}>
        <Text style={[title, { color: theme === 'light' ? '#333' : '#fff' }]}>
          Welcome to the Dashboard
        </Text>

        {/* Button to toggle theme */}
        <CustomButton
          title="Toggle Theme"
          onPress={() => dispatch(toggleTheme())} // Dispatch the theme toggle action
          backgroundColor={theme === 'light' ? '#4CAF50' : '#1E90FF'} // Adjust button color based on theme
          color="#fff"
        />

        {/* Featured Stores Section */}
        <View style={styles.section}>
          <Text style={[sectionTitle, { color: theme === 'light' ? '#333' : '#fff' }]}>
            Featured Stores
          </Text>
          <View style={storeBox}>
            <Image source={{ uri: 'https://example.com/store.jpg' }} style={styles.productImage} />
            <Text style={storeName}>Trader Joe's</Text>
            <Text style={storeLocation}>Walnut Creek, CA</Text>
          </View>
        </View>

        {/* Featured Products Section */}
        <View style={styles.section}>
          <Text style={[sectionTitle, { color: theme === 'light' ? '#333' : '#fff' }]}>
            Featured Products
          </Text>
          <View style={productBox}>
            <Image source={{ uri: 'https://example.com/product.jpg' }} style={styles.productImage} />
            <Text style={productName}>Beef Boneless</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default DashboardScreen;
