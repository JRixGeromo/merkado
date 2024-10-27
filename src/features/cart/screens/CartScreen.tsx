import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList, ListRenderItem } from 'react-native';
import { normalizeHeight } from '../../../utils/responsive'; // Assuming you have responsive utilities

import { commonStyles } from '../../../styles/commonStyles';
import { layoutStyles } from '../../../styles/layoutStyles';
import { theme as appTheme } from '../../../styles/theme';
import { useTranslation } from 'react-i18next';
import CustomButton from '../../../components/CustomButton';
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
    console.log("Checkout Screen")
    navigation.navigate('CheckoutScreen');
  };

  // Type for rendering each item in FlatList
  const renderItem: ListRenderItem<CartItem> = ({ item }) => (
    <View style={[commonStyle.contentBox, layoutStyle.columnsInside]}>
      <Image source={item.image} style={commonStyle.cartItemImage} />
      <View style={layoutStyle.lMarginL}>
        <Text style={[layoutStyle.font14, { color: selectedTheme.textPrimary }]}>{item.name}</Text>
        <Text style={[layoutStyle.font16, layoutStyle.verticalSpacerXS, { color: selectedTheme.textSecondary }]}>${item.price}</Text>
        <View style={[layoutStyle.columnsInside, layoutStyle.verticalSpacerM]}>
          <TouchableOpacity onPress={() => updateQuantity(item.id, 'decrement')} style={commonStyle.quantityButton}>
            <Text style={layoutStyle.font16}>-</Text>
          </TouchableOpacity>
          <Text style={[layoutStyle.font16, layoutStyle.lPaddingS, layoutStyle.rPaddingS, {color: selectedTheme.textSecondary}]}>{item.quantity}</Text>
          <TouchableOpacity onPress={() => updateQuantity(item.id, 'increment')} style={commonStyle.quantityButton}>
            <Text style={layoutStyle.font16}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={[layoutStyle.container, layoutStyle.paddingAllS, { backgroundColor: selectedTheme.fullBackgroundColor }]}>
      <FlatList
        data={cart}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={layoutStyle.verticalSpacerS}
      />
      <View style={[layoutStyle.columnsInside, {justifyContent: 'space-between'}]}>
        <Text style={[layoutStyle.font18, { color: selectedTheme.textPrimary }]}>Total:</Text>
        <Text style={[layoutStyle.font18, { color: selectedTheme.textPrimary }]}>${calculateTotal()}</Text>
      </View>
      <CustomButton
        title={t('Proceed to Checkout')}
        onPress={handleProceedToCheckout}
        color={selectedTheme.textLight}
        backgroundColor={selectedTheme.borderColorPrimary}
        borderRadius={2} // You can set this dynamically too
        style={{
          marginLeft: 0,
          marginRight: 0,
          padding:10,
        }}
      />
    </View>
  );
};

export default CartScreen;
