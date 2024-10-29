import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useAppSelector } from '../../../hooks/reduxHooks';
import { commonStyles } from '../../../styles/commonStyles';
import { layoutStyles } from '../../../styles/layoutStyles';
import { theme as appTheme } from '../../../styles/theme';
import ContentCardWide from '../../../components/ContentCardWide';
import IconLib from '../../../components/IconLib';
import CustomButton from '../../../components/CustomButton';

export type Category = { id: string; name: string };
export type Brand = { id: string; name: string };

const CreateProductScreen = () => {
  const themeType = useAppSelector(state => state.theme.theme);
  const commonStyle = commonStyles(themeType);
  const layoutStyle = layoutStyles(themeType);
  const selectedTheme = appTheme[themeType];

  // State for product fields
  const [name, setName] = useState('');
  const [stock, setStock] = useState('');
  const [price, setPrice] = useState('');
  const [salePrice, setSalePrice] = useState('');
  const [longDescription, setLongDescription] = useState('');
  const [category, setCategory] = useState<Category | null>(null);
  const [brand, setBrand] = useState<Brand | null>(null);
  const [isFeatured, setIsFeatured] = useState(false);
  const [isActive, setIsActive] = useState(true);

  // Mock categories and brands
  const categories = [
    { id: '1', name: 'Electronics' },
    { id: '2', name: 'Groceries' },
  ];
  const brands = [
    { id: '1', name: 'Brand A' },
    { id: '2', name: 'Brand B' },
  ];

  const handleCreateProduct = () => {
    // Form validation
    if (!name || !price || !stock || !category || !brand) {
      Alert.alert('Error', 'Please fill out all required fields.');
      return;
    }

    // Submit product data to backend
    const newProduct = {
      name,
      stock: parseInt(stock, 10),
      price: parseFloat(price),
      salePrice: salePrice ? parseFloat(salePrice) : null,
      longDescription,
      categoryId: category.id,
      brandId: brand.id,
      isFeatured,
      isActive,
    };
    console.log('Creating Product:', newProduct);
    // TODO: Add your API call here

    Alert.alert('Success', 'Product created successfully!');
  };

  return (
    <ScrollView contentContainerStyle={[layoutStyle.container, { backgroundColor: selectedTheme.fullContainerBackgroundColor }]}>
      <Text style={commonStyle.header}>Create New Product</Text>

      {/* Product Name */}
      <TextInput
        placeholder="Product Name"
        placeholderTextColor={selectedTheme.textPlaceHolderInfo}
        style={commonStyle.input}
        value={name}
        onChangeText={setName}
      />

      {/* Stock */}
      <TextInput
        placeholder="Stock"
        placeholderTextColor={selectedTheme.textPlaceHolderInfo}
        style={commonStyle.input}
        keyboardType="numeric"
        value={stock}
        onChangeText={setStock}
      />

      {/* Price */}
      <TextInput
        placeholder="Price"
        placeholderTextColor={selectedTheme.textPlaceHolderInfo}
        style={commonStyle.input}
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
      />

      {/* Sale Price */}
      <TextInput
        placeholder="Sale Price (Optional)"
        placeholderTextColor={selectedTheme.textPlaceHolderInfo}
        style={commonStyle.input}
        keyboardType="numeric"
        value={salePrice}
        onChangeText={setSalePrice}
      />

      {/* Long Description */}
      <TextInput
        placeholder="Description"
        placeholderTextColor={selectedTheme.textPlaceHolderInfo}
        style={[commonStyle.input, commonStyle.multilineInput]}
        multiline
        numberOfLines={4}
        value={longDescription}
        onChangeText={setLongDescription}
      />

      {/* Category Selector */}
      <TouchableOpacity
        style={commonStyle.input}
        onPress={() => {
          // TODO: Open a modal or dropdown for selecting a category
          const selected = categories[0]; // Mock selection
          setCategory(selected);
        }}
      >
        <Text style={{ color: selectedTheme.textPrimary }}>
          {category ? category.name : 'Select Category'}
        </Text>
      </TouchableOpacity>

      {/* Brand Selector */}
      <TouchableOpacity
        style={commonStyle.input}
        onPress={() => {
          // TODO: Open a modal or dropdown for selecting a brand
          const selected = brands[0]; // Mock selection
          setBrand(selected);
        }}
      >
        <Text style={{ color: selectedTheme.textPrimary }}>
          {brand ? brand.name : 'Select Brand'}
        </Text>
      </TouchableOpacity>

      {/* Toggle Featured Product */}
      <TouchableOpacity
        style={[commonStyle.toggleContainer, { backgroundColor: isFeatured ? selectedTheme.buttonSuccess : selectedTheme.buttonDisabled }]}
        onPress={() => setIsFeatured(prev => !prev)}
      >
        <Text style={{ color: selectedTheme.textLight }}>{isFeatured ? 'Featured' : 'Not Featured'}</Text>
      </TouchableOpacity>

      {/* Toggle Active Status */}
      <TouchableOpacity
        style={[commonStyle.toggleContainer, { backgroundColor: isActive ? selectedTheme.buttonSuccess : selectedTheme.buttonDisabled }]}
        onPress={() => setIsActive(prev => !prev)}
      >
        <Text style={{ color: selectedTheme.textLight }}>{isActive ? 'Active' : 'Inactive'}</Text>
      </TouchableOpacity>

      {/* Submit Button */}
      <CustomButton
        title="Create Product"
        backgroundColor={selectedTheme.buttonPrimary}
        width="100%"
        onPress={handleCreateProduct}
        iconName="Add"
        iconColor={selectedTheme.iconColorLight}
        iconSize={18}
        color={selectedTheme.textLight}
        style={[commonStyle.button]}
        borderRadius={5}
      />
    </ScrollView>
  );
};

export default CreateProductScreen;
