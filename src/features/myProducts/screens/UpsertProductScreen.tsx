import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Switch,
  Image,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import CustomButton from '../../../components/CustomButton';
import TextInputWithIcon from '../../../components/TextInputWithIcon';
import Dropdown from '../../../components/Dropdown';

import { commonStyles } from '../../../styles/commonStyles';
import { layoutStyles } from '../../../styles/layoutStyles';
import { theme as appTheme } from '../../../styles/theme';
import { useAppSelector } from '../../../hooks/reduxHooks';

type ProductData = {
  id?: string;
  name: string;
  stock: string;
  price: string;
  salePrice: string | null;
  longDescription: string;
  category: string;
  unit: string;
  brand: string;
  isFeatured: boolean;
  isActive: boolean;
  images: string[];
};

interface UpsertProductScreenProps {
  product?: ProductData;
}

const UpsertProductScreen: React.FC<UpsertProductScreenProps> = ({ product }) => {
  const themeType = useAppSelector(state => state.theme.theme);
  const commonStyle = commonStyles(themeType);
  const layoutStyle = layoutStyles(themeType);
  const selectedTheme = appTheme[themeType];

  // Initialize states conditionally based on product prop
  const [name, setName] = useState(product?.name || '');
  const [stock, setStock] = useState(product?.stock || '');
  const [price, setPrice] = useState(product?.price || '');
  const [salePrice, setSalePrice] = useState(product?.salePrice || '');
  const [longDescription, setLongDescription] = useState(product?.longDescription || '');
  const [category, setCategory] = useState(product?.category || '');
  const [unit, setUnit] = useState(product?.unit || '');
  const [brand, setBrand] = useState(product?.brand || '');
  const [isFeatured, setIsFeatured] = useState<boolean>(product?.isFeatured ?? false);
  const [isActive, setIsActive] = useState<boolean>(product?.isActive ?? true);
  const [images, setImages] = useState<string[]>(product?.images || []);

  const categoryOptions = [{ label: 'Electronics', value: 'electronics' }, { label: 'Fashion', value: 'fashion' }];
  const unitOptions = [{ label: 'Piece', value: 'piece' }, { label: 'Kilogram', value: 'kilogram' }];
  const brandOptions = [{ label: 'Brand A', value: 'brand_a' }, { label: 'Brand B', value: 'brand_b' }];

  const handleSaveProduct = () => {
    // Validation check
    if (!name || !stock || !price || !category || !unit || !brand || images.length === 0) {
      Alert.alert('Error', 'Please fill in all required fields and add at least one image.');
      return;
    }

    // Create or update logic
    const productData: ProductData = {
      id: product?.id, // Only necessary for update
      name,
      stock,
      price,
      salePrice: salePrice ? salePrice : null,
      longDescription,
      category,
      unit,
      brand,
      isFeatured,
      isActive,
      images,
    };

    if (product) {
      console.log('Updating product:', productData);
      Alert.alert('Success', 'Product updated successfully!');
    } else {
      console.log('Creating product:', productData);
      Alert.alert('Success', 'Product created successfully!');
    }
  };

  const handleImagePick = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      selectionLimit: 3,
    });
    if (result.assets) {
      setImages(result.assets.map(asset => asset.uri as string));
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={[layoutStyle.container, { padding: 20, justifyContent: 'center' }]}>
          <View style={[layoutStyle.formContainer, { backgroundColor: selectedTheme.formBackgroundColorPrimary }]}>
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
            <Dropdown
              selectedValue={category}
              onValueChange={value => setCategory(value)}
              options={categoryOptions}
              placeholder="Select Category"
              iconName="Apps"
              iconSize={22}
              showIcon={true}
            />
            <Dropdown
              selectedValue={brand}
              onValueChange={value => setBrand(value)}
              options={brandOptions}
              placeholder="Select Brand"
              iconName="Briefcase"
              iconSize={22}
              showIcon={true}
            />
            <Dropdown
              selectedValue={unit}
              onValueChange={setUnit}
              options={unitOptions}
              placeholder="Select Unit"
            />
            <View>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {images.map((uri, index) => (
                  <Image
                    key={index}
                    source={{ uri }}
                    style={{ width: 80, height: 80, marginRight: 10, marginBottom: 10, borderRadius: 8 }}
                  />
                ))}
              </View>
            </View>
            <CustomButton
              title="Add Images"
              onPress={handleImagePick}
              backgroundColor={selectedTheme.buttonSecondary}
              color={selectedTheme.textPrimary}
              borderRadius={5}
              width="80%"
              textSize={12}
              style={{
                padding: 10,
                marginBottom: 10,
              }}
            />
            <View style={[layoutStyle.rowsInside, { width: '80%' }]}>
              <View style={[layoutStyle.alignCenter, layoutStyle.dividerWrapper]}>
                <Text style={{ color: selectedTheme.textPrimary, flex: 1 }}>Featured Product</Text>
                <Switch
                  value={isFeatured}
                  onValueChange={(value) => setIsFeatured(value)}
                  trackColor={{ false: selectedTheme.switchInactive, true: selectedTheme.switchActive }}
                  thumbColor={isFeatured ? selectedTheme.switchThumbActive : selectedTheme.switchThumbInactive}
                />
              </View>
              <View style={[layoutStyle.alignCenter, layoutStyle.dividerWrapper]}>
                <Text style={{ color: selectedTheme.textPrimary, flex: 1 }}>Active Product</Text>
                <Switch
                  value={isActive}
                  onValueChange={(value) => setIsActive(value)}
                  trackColor={{ false: selectedTheme.switchInactive, true: selectedTheme.switchActive }}
                  thumbColor={isActive ? selectedTheme.switchThumbActive : selectedTheme.switchThumbInactive}
                />
              </View>
            </View>
            <CustomButton
              title={product ? 'Update Product' : 'Create Product'}
              onPress={handleSaveProduct}
              color={selectedTheme.textLight}
              backgroundColor={selectedTheme.buttonPrimary}
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
