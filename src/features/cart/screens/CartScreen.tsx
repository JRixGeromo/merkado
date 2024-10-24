import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList, ListRenderItem } from 'react-native';
import { normalizeHeight } from '../../../utils/responsive'; // Assuming you have responsive utilities

import { commonStyles } from '../../../styles/commonStyles';
import { layoutStyles } from '../../../styles/layoutStyles';
import { theme as appTheme } from '../../../styles/theme';
import { useTranslation } from 'react-i18next';
import IconLib from '../../../components/IconLib';
import { useAppSelector } from '../../../hooks/reduxHooks';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'; // Use NativeStackNavigationProp
import { RootStackParamList } from '../../../navigationTypes'; // Import RootStackParamList

// Define the cart item interface
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: any; // You can specify the type of image if you are using specific image libraries or modules
}

// Sample data for cart items
const cartItems: CartItem[] = [
  {
    id: '1',
    name: 'Item 1',
    price: 100,
    quantity: 1,
    image: { uri: 'https://picsum.photos/100/100?random=5' }, // Replace with your image URL
  },
  {
    id: '2',
    name: 'Item 2',
    price: 50,
    quantity: 2,
    image: { uri: 'https://picsum.photos/100/100?random=6' }, // Replace with your image URL
  },
  // Add more items as needed
];


const CartScreen: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>(); // Correct the type here
  const themeType = useAppSelector(state => state.theme.theme);
  const commonStyle = commonStyles(themeType);
  const layoutStyle = layoutStyles(themeType);
  const selectedTheme = appTheme[themeType];
  const { t } = useTranslation();

  const [cart, setCart] = useState<CartItem[]>(cartItems);

  // Function to update the quantity
  const updateQuantity = (id: string, action: 'increment' | 'decrement') => {
    const updatedCart = cart.map(item => {
      if (item.id === id) {
        const newQuantity = action === 'increment' ? item.quantity + 1 : item.quantity - 1;
        return { ...item, quantity: newQuantity > 0 ? newQuantity : 1 }; // Prevent quantity from going below 1
      }
      return item;
    });
    setCart(updatedCart);
  };

  // Calculate total price
  const calculateTotal = (): number => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleProceedToCheckout = () => {
    navigation.navigate('CheckoutScreen');
  };

  // Type for rendering each item in FlatList
  const renderItem: ListRenderItem<CartItem> = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={[styles.itemName, { color: selectedTheme.textPrimary }]}>{item.name}</Text>
        <Text style={[styles.itemPrice, { color: selectedTheme.textSecondary }]}>${item.price}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => updateQuantity(item.id, 'decrement')} style={styles.quantityButton}>
            <Text style={styles.quantityText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityValue}>{item.quantity}</Text>
          <TouchableOpacity onPress={() => updateQuantity(item.id, 'increment')} style={styles.quantityButton}>
            <Text style={styles.quantityText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: selectedTheme.fullBackgroundColor }]}>
      <FlatList
        data={cart}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.cartList}
      />
      <View style={styles.totalContainer}>
        <Text style={[styles.totalText, { color: selectedTheme.textPrimary }]}>Total:</Text>
        <Text style={[styles.totalPrice, { color: selectedTheme.textPrimary }]}>${calculateTotal()}</Text>
      </View>
      {/* <TouchableOpacity style={[styles.checkoutButton, { backgroundColor: selectedTheme.buttonBorderPrimary }]}>
        <Text style={[styles.checkoutText, { color: selectedTheme.textPrimary }]}>Proceed to Checkout</Text>
      </TouchableOpacity> */}

      <View style={styles.container}>
        {/* Other cart screen elements */}
        <TouchableOpacity onPress={handleProceedToCheckout} style={styles.checkoutButton}>
          <Text style={styles.checkoutText}>Proceed to Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: normalizeHeight(10),
  },
  cartList: {
    paddingBottom: normalizeHeight(100), // Provide space for the total and button
  },
  cartItem: {
    flexDirection: 'row',
    marginBottom: normalizeHeight(15),
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: normalizeHeight(10),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  itemDetails: {
    flex: 1,
    marginLeft: normalizeHeight(10),
  },
  itemName: {
    fontSize: normalizeHeight(16),
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: normalizeHeight(14),
    marginVertical: normalizeHeight(5),
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
  },
  quantityText: {
    fontSize: normalizeHeight(18),
  },
  quantityValue: {
    marginHorizontal: 10,
    fontSize: normalizeHeight(16),
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: normalizeHeight(15),
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  totalText: {
    fontSize: normalizeHeight(18),
    fontWeight: 'bold',
  },
  totalPrice: {
    fontSize: normalizeHeight(18),
    fontWeight: 'bold',
  },
  checkoutButton: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    paddingVertical: normalizeHeight(15),
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkoutText: {
    fontSize: normalizeHeight(18),
    fontWeight: 'bold',
  },
});

export default CartScreen;
