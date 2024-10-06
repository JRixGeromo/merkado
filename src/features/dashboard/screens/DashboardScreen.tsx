import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useAppSelector, useAppDispatch } from '../../../hooks/reduxHooks';
import { toggleTheme } from '../../../reducers/themeReducer';
import Icon from 'react-native-vector-icons/Ionicons';
import { commonStyles } from '../../../styles/commonStyles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigationTypes';

const DashboardScreen = () => {
  const theme = useAppSelector(state => state.theme.theme);
  const dispatch = useAppDispatch();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const styles = commonStyles(theme);
  const stores = [
    {
      id: 1,
      name: "Trader Joe's",
      location: 'Walnut Creek, CA',
      imageUrl: 'https://via.placeholder.com/150', // Working placeholder image
      rating: 4.6,
    },
    {
      id: 2,
      name: 'Costco Wholesale',
      location: 'Turlock, CA',
      imageUrl: 'https://via.placeholder.com/150', // Working placeholder image
      rating: 4.8,
    },
    {
      id: 3,
      name: 'Price Cutter',
      location: 'Springfield, MO',
      imageUrl: 'https://via.placeholder.com/150', // Working placeholder image
      rating: 4.3,
    },
  ];

  const products = [
    {
      id: 1,
      name: 'Beef Boneless',
      imageUrl: 'https://via.placeholder.com/100',
    },
    {
      id: 2,
      name: 'Milk Lakeland',
      imageUrl: 'https://via.placeholder.com/100',
    },
    {
      id: 3,
      name: 'Simba Teff Flour',
      imageUrl: 'https://via.placeholder.com/100',
    },
  ];

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        {/* Most Visited Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Most Visited</Text>
        </View>

        {/* Featured Stores Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Featured Stores</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          ></ScrollView>
        </View>

        {/* Featured Products Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Featured Products</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          ></ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

export default DashboardScreen;
