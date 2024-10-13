import React from 'react';
import { View, Text, FlatList } from 'react-native';

interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

const MarketplaceScreen = () => {
  const products: Product[] = []; // Replace with actual product fetching logic

  return (
    <View>
      <Text>Marketplace</Text>
      {/* FlatList to render product cards */}
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
            {/* You can add an image using the imageUrl field */}
          </View>
        )}
      />
    </View>
  );
};

export default MarketplaceScreen;
