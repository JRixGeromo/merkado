import React, { useState } from 'react';
import {
  View,
  Text,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Switch,
} from 'react-native';
import CustomButton from '../../../components/CustomButton';
import TextInputWithIcon from '../../../components/TextInputWithIcon';
import ListOptions from '../../../components/ListOptions';
import { myProductStyles } from '../styles/myProductStyles';
import { baseStyles, SHARED } from '../../../styles/baseStyles';
import { useTheme } from '../../../hooks/useTheme';
import { useAppSelector, useAppDispatch } from '../../../hooks/reduxHooks';
import { createProduct, updateProduct, Product, CreateProductInput, UpdateProductInput } from '../../../store/slices/productSlice';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../navigationTypes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Default IDs for required backend relations
const DEFAULT_CATEGORY_ID = 1;
const DEFAULT_VENDOR_ID = 1;
const DEFAULT_UNIT_ID = 1;

type UpsertProductScreenRouteProp = RouteProp<RootStackParamList, 'UpsertProductScreen'>;

const UpsertProductScreen = () => {
  const { themeType, baseStyle, myTheme } = useTheme();
  const myProductStyle = myProductStyles(themeType);
  const dispatch = useAppDispatch();
  const route = useRoute<UpsertProductScreenRouteProp>();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { status } = useAppSelector(state => state.products);
  
  const product = route.params?.product; // Get product from route params for editing

  // Initialize states conditionally based on product prop
  const [name, setName] = useState(product?.name || '');
  const [stock, setStock] = useState(product?.stock?.toString() || '0');
  const [price, setPrice] = useState(product?.price?.toString() || '');
  const [salePrice, setSalePrice] = useState(product?.salePrice?.toString() || '');
  const [longDescription, setLongDescription] = useState(
    product?.longDescription || '',
  );
  const [categoryId, setCategoryId] = useState('1');
  const [vendorId, setVendorId] = useState('1');
  const [unitId, setUnitId] = useState('1');
  const [isFeatured, setIsFeatured] = useState<boolean>(
    product?.isFeatured ?? false,
  );
  const [isActive, setIsActive] = useState<boolean>(product?.isActive ?? true);

  const categoryOptions = [
    { label: 'Electronics', value: '1' },
    { label: 'Fashion', value: '2' },
  ];
  const unitOptions = [
    { label: 'Piece', value: '1' },
    { label: 'Kilogram', value: '2' },
  ];
  const vendorOptions = [
    { label: 'Default Vendor', value: '1' },
  ];

  const handleSaveProduct = async () => {
    // Validation check
    if (!name || !price) {
      Alert.alert('Error', 'Please fill in product name and price.');
      return;
    }

    try {
      if (product) {
        // Update existing product
        const updateData: UpdateProductInput = {
          id: parseInt(product.id, 10),
          name,
          price: parseFloat(price),
          stock: parseInt(stock, 10) || 0,
          salePrice: salePrice ? parseFloat(salePrice) : null,
          longDescription: longDescription || null,
          isFeatured,
          isActive,
        };
        await dispatch(updateProduct(updateData)).unwrap();
        navigation.goBack();
        Alert.alert('Success', 'Product updated successfully!');
      } else {
        // Create new product
        const createData: CreateProductInput = {
          name,
          price: parseFloat(price),
          stock: parseInt(stock, 10) || 0,
          salePrice: salePrice ? parseFloat(salePrice) : null,
          longDescription: longDescription || null,
          categoryId: parseInt(categoryId, 10),
          vendorId: parseInt(vendorId, 10),
          unitId: parseInt(unitId, 10),
          isFeatured,
          isActive,
        };
        await dispatch(createProduct(createData)).unwrap();
        navigation.goBack();
        Alert.alert('Success', 'Product created successfully!');
      }
    } catch (error) {
      console.error('Product operation failed:', error);
      Alert.alert('Error', `Failed to ${product ? 'update' : 'create'} product. Please try again.`);
    }
  };


  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View
          style={[
            baseStyle.container,
            { padding: 20, justifyContent: 'center' },
          ]}
        >
          <View
            style={[
              baseStyle.shadowedContainer,
              baseStyle.formContainer,
              { backgroundColor: myTheme.cardBackground },
            ]}
          >
            <Text
              style={[
                baseStyle.verticalSpacerM,
                { color: myTheme.text2nd },
              ]}
            >
              {product ? 'Update' : 'Create'}
            </Text>
            <View style={baseStyle.verticalSpacerM} />
            <TextInputWithIcon
              placeholder="Product Name"
              iconName="Pricetag"
              value={name}
              onChangeText={setName}
              style={{ height: 45 }}
            />
            <TextInputWithIcon
              placeholder="Stock"
              iconName="Layers"
              value={stock}
              keyboardType="numeric"
              onChangeText={setStock}
              style={{ height: 45 }}
            />
            <TextInputWithIcon
              placeholder="Price"
              iconName="Cash"
              value={price}
              keyboardType="numeric"
              onChangeText={setPrice}
              style={{ height: 45 }}
            />
            <TextInputWithIcon
              placeholder="Sale Price (Optional)"
              iconName="Pricetags"
              value={salePrice}
              keyboardType="numeric"
              onChangeText={setSalePrice}
              style={{ height: 45 }}
            />
            <TextInputWithIcon
              placeholder="Description"
              iconName="Document"
              value={longDescription}
              onChangeText={setLongDescription}
              style={{ height: 75 }}
              multiline={true}
            />
            <ListOptions
              selectedValue={categoryId}
              onValueChange={setCategoryId}
              options={categoryOptions}
              placeholder="Select Category"
              iconName="Apps"
              iconSize={SHARED.fontXxL}
              showIcon={true}
            />
            <ListOptions
              selectedValue={vendorId}
              onValueChange={setVendorId}
              options={vendorOptions}
              placeholder="Select Vendor"
              iconName="Briefcase"
              iconSize={SHARED.fontXxL}
              showIcon={true}
            />
            <ListOptions
              selectedValue={unitId}
              onValueChange={setUnitId}
              options={unitOptions}
              placeholder="Select Unit"
            />
            <View style={[baseStyle.rowsInside, { width: '80%' }]}>
              <View style={[baseStyle.alignCenter, baseStyle.dividerWrapper]}>
                <Text style={{ color: myTheme.text1st, flex: 1 }}>
                  Featured Product
                </Text>
                <Switch
                  value={isFeatured}
                  onValueChange={value => setIsFeatured(value)}
                  trackColor={{
                    false: myTheme.switchInactive,
                    true: myTheme.switchActive,
                  }}
                  thumbColor={
                    isFeatured
                      ? myTheme.switchThumbActive
                      : myTheme.switchThumbInactive
                  }
                />
              </View>
              <View style={[baseStyle.alignCenter, baseStyle.dividerWrapper]}>
                <Text style={{ color: myTheme.text1st, flex: 1 }}>
                  Active Product
                </Text>
                <Switch
                  value={isActive}
                  onValueChange={value => setIsActive(value)}
                  trackColor={{
                    false: myTheme.switchInactive,
                    true: myTheme.switchActive,
                  }}
                  thumbColor={
                    isActive
                      ? myTheme.switchThumbActive
                      : myTheme.switchThumbInactive
                  }
                />
              </View>
            </View>
            <CustomButton
              title={product ? 'Update Product' : 'Create Product'}
              onPress={handleSaveProduct}
              color={myTheme.buttonText1st}
              backgroundColor={myTheme.button1st}
              borderRadius={5}
              textSize={14}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default UpsertProductScreen;
