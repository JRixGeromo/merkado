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
  const theme = useAppSelector((state) => state.theme.theme);
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
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

        {/* Search Box */}
        {/* <View style={{ marginVertical: 10 }}>
          <TextInputWithIcon placeholder="What are you looking for?" iconName="search-outline" />
        </View> */}

        {/* Most Visited Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Most Visited</Text>
          <View style={[styles.storeBox, { borderWidth: 1, borderColor: '#4CAF50' }]}>
            <Image
              source={{ uri: stores[0].imageUrl }}
              style={[styles.storeImage, { height: 120, width: '100%', resizeMode: 'cover', borderRadius: 10 }]} // Adjust height and aspect ratio
            />
            <Text style={styles.storeName}>{stores[0].name}</Text>
            <Text style={styles.storeLocation}>{stores[0].location}</Text>
            <Text style={{ color: '#f39c12' }}>⭐ {stores[0].rating} (1000+)</Text>
          </View>
        </View>

        {/* Featured Stores Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Featured Stores</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {stores.map((store) => (
              <View
                key={store.id}
                style={[
                  styles.storeBox,
                  {
                    marginRight: 15, // Add spacing between stores
                    padding: 10, // Add padding inside the box
                    borderRadius: 10, // Rounded corners for the store box
                    shadowColor: '#000', // Subtle shadow for depth
                    shadowOpacity: 0.1,
                    shadowOffset: { width: 0, height: 2 },
                    shadowRadius: 5,
                    backgroundColor: theme === 'light' ? '#fff' : '#444', // Light and dark theme support
                  },
                ]}
              >
                <Image
                  source={{
                    uri: store.imageUrl,
                  }}
                  style={[
                    styles.storeImage,
                    {
                      height: 120,
                      width: 150,
                      resizeMode: 'cover',
                      borderRadius: 10, // Rounded corners for image
                    },
                  ]}
                />
                <View style={{ marginTop: 10, alignItems: 'center' }}> 
                  <Text style={styles.storeName}>{store.name}</Text>
                  <Text style={styles.storeLocation}>{store.location}</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                    <Text style={{ color: '#f39c12', fontSize: 14 }}>⭐ {store.rating}</Text>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>


        {/* Featured Products Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Featured Products</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {products.map((product) => (
              <View key={product.id} style={[styles.productBox, { marginRight: 10 }]}>
                <Image
                  source={{ uri: product.imageUrl }}
                  style={[styles.productImage, { height: 100, width: 100, resizeMode: 'cover', borderRadius: 10 }]} // Adjust product image size
                />
                <Text style={styles.productName}>{product.name}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

export default DashboardScreen;
