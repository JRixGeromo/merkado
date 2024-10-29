import React, { useState } from 'react';
import {
  View,
  Text,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import CustomButton from '../../../components/CustomButton';
import TextInputWithIcon from '../../../components/TextInputWithIcon';
import Dropdown from '../../../components/Dropdown';

import { commonStyles } from '../../../styles/commonStyles';
import { layoutStyles } from '../../../styles/layoutStyles';
import { theme as appTheme } from '../../../styles/theme';
import { useAppSelector } from '../../../hooks/reduxHooks';

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
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [brand, setBrand] = useState('');
  const [isFeatured, setIsFeatured] = useState(false);
  const [isActive, setIsActive] = useState(true);

  // Mock categories and brands
  const categories = [
    { label: 'Electronics', value: '1' },
    { label: 'Groceries', value: '2' },
  ];
  const brands = [
    { label: 'Brand A', value: '1' },
    { label: 'Brand B', value: '2' },
  ];

  const handleCreateProduct = () => {
    if (!name || !price || !stock || !category || !brand) {
      Alert.alert('Error', 'Please fill out all required fields.');
      return;
    }

    const newProduct = {
      name,
      stock: parseInt(stock, 10),
      price: parseFloat(price),
      salePrice: salePrice ? parseFloat(salePrice) : null,
      description,
      categoryId: category,
      brandId: brand,
      isFeatured,
      isActive,
    };

    console.log('Creating Product:', newProduct);
    Alert.alert('Success', 'Product created successfully!');
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={[layoutStyle.container, { padding: 20, justifyContent: 'center' }]}>
          <View style={[layoutStyle.formContainer, { backgroundColor: selectedTheme.formBackgroundColorPrimary }]}>
            <Text style={commonStyle.header}>Create New Product</Text>

            {/* Product Name */}
            <TextInputWithIcon
              placeholder="Product Name"
              iconName="Pricetag"
              value={name}
              onChangeText={setName}
              style={{ height: 45 }}
            />

            {/* Stock */}
            <TextInputWithIcon
              placeholder="Stock"
              iconName="Layers"
              value={stock}
              keyboardType="numeric"
              onChangeText={setStock}
              style={{ height: 45 }}
            />

            {/* Price */}
            <TextInputWithIcon
              placeholder="Price"
              iconName="Cash"
              value={price}
              keyboardType="numeric"
              onChangeText={setPrice}
              style={{ height: 45 }}
            />

            {/* Sale Price */}
            <TextInputWithIcon
              placeholder="Sale Price (Optional)"
              iconName="Pricetags"
              value={salePrice}
              keyboardType="numeric"
              onChangeText={setSalePrice}
              style={{ height: 45 }}
            />

            {/* Description */}
            <TextInputWithIcon
              placeholder="Description"
              iconName="Document"
              value={description}
              onChangeText={setDescription}
              style={[{ height: 75 }, commonStyle.multilineInput]}
              multiline={true} // Now supported
            />

            {/* Category Selector */}
            <Dropdown
              selectedValue={category}
              onValueChange={value => setCategory(value)}
              options={categories}
              placeholder="Select Category"
              iconName="Apps"
              iconSize={22}
              showIcon={true}
            />

            {/* Brand Selector */}
            <Dropdown
              selectedValue={brand}
              onValueChange={value => setBrand(value)}
              options={brands}
              placeholder="Select Brand"
              iconName="Briefcase"
              iconSize={22}
              showIcon={true}
            />

            {/* Featured Toggle */}
            <TouchableOpacity
              style={[commonStyle.toggleContainer, { backgroundColor: isFeatured ? selectedTheme.buttonSuccess : selectedTheme.buttonDisabled }]}
              onPress={() => setIsFeatured(!isFeatured)}
            >
              <Text style={{ color: selectedTheme.textLight }}>
                {isFeatured ? 'Featured' : 'Not Featured'}
              </Text>
            </TouchableOpacity>

            {/* Active Toggle */}
            <TouchableOpacity
              style={[commonStyle.toggleContainer, { backgroundColor: isActive ? selectedTheme.buttonSuccess : selectedTheme.buttonDisabled }]}
              onPress={() => setIsActive(!isActive)}
            >
              <Text style={{ color: selectedTheme.textLight }}>
                {isActive ? 'Active' : 'Inactive'}
              </Text>
            </TouchableOpacity>

            {/* Submit Button */}
            <CustomButton
              title="Create Product"
              onPress={handleCreateProduct}
              color={selectedTheme.textLight}
              backgroundColor={selectedTheme.buttonPrimary}
              borderRadius={5}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CreateProductScreen;
