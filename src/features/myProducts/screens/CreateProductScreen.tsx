import React, { useState } from 'react'; 
import {
  View,
  Text,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Switch,
  Image,
  TouchableOpacity,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
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

  // States for all product fields
  const [name, setName] = useState('');
  const [stock, setStock] = useState('');
  const [price, setPrice] = useState('');
  const [salePrice, setSalePrice] = useState('');
  const [longDescription, setLongDescription] = useState('');
  const [category, setCategory] = useState('');
  const [unit, setUnit] = useState('');
  const [brand, setBrand] = useState('');
  const [isFeatured, setIsFeatured] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [images, setImages] = useState<string[]>([]); // Store image URIs

  const categoryOptions = [{ label: 'Electronics', value: 'electronics' }, { label: 'Fashion', value: 'fashion' }];
  const unitOptions = [{ label: 'Piece', value: 'piece' }, { label: 'Kilogram', value: 'kilogram' }];
  const brandOptions = [{ label: 'Brand A', value: 'brand_a' }, { label: 'Brand B', value: 'brand_b' }];

  const handleCreateProduct = () => {
    if (!name || !stock || !price || !category || !unit || !brand || images.length === 0) {
      Alert.alert('Error', 'Please fill in all required fields and add at least one image.');
      return;
    }
    const productData = {
      name,
      stock: parseInt(stock),
      price: parseFloat(price),
      salePrice: salePrice ? parseFloat(salePrice) : null,
      longDescription,
      category,
      unit,
      brand,
      isFeatured,
      isActive,
      images,
    };
    console.log('Product data submitted:', productData);
    Alert.alert('Success', 'Product created successfully!');
  };

  const handleImagePick = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      selectionLimit: 3, // Limit the number of images
    });
    if (result.assets) {
      setImages(result.assets.map(asset => asset.uri as string));
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={[layoutStyle.container, { padding: 20, justifyContent: 'center' }]}>
          <View style={[layoutStyle.formContainer, { backgroundColor: selectedTheme.formBackgroundColorPrimary }]}>

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
              value={longDescription}
              onChangeText={setLongDescription}
              style={{ height: 75 }}
              multiline={true} // Now supported
            />

            {/* Category Selector */}
            <Dropdown
              selectedValue={category}
              onValueChange={value => setCategory(value)}
              options={categoryOptions}
              placeholder="Select Category"
              iconName="Apps"
              iconSize={22}
              showIcon={true}
            />

            {/* Brand Selector */}
            <Dropdown
              selectedValue={brand}
              onValueChange={value => setBrand(value)}
              options={brandOptions}
              placeholder="Select Brand"
              iconName="Briefcase"
              iconSize={22}
              showIcon={true}
            />

            {/* Unit Selector */}
            <Dropdown selectedValue={unit} onValueChange={setUnit} options={unitOptions} placeholder="Select Unit" />

            {/* Image Picker */}
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
                width={"80%"}
                textSize={12}
                style={{
                    padding:10,
                    marginBottom:10,
                  }}
              />

            {/* Switches for Featured and Active */}
            <View style={[layoutStyle.rowsInside, { width: '80%' }]}>
              <View style={[layoutStyle.alignCenter, layoutStyle.dividerWrapper]}>
                <Text style={{ color: selectedTheme.textPrimary, flex: 1 }}>Featured Product</Text>
                <Switch
                  value={isFeatured}
                  onValueChange={setIsFeatured}
                  trackColor={{ false: selectedTheme.switchInactive, true: selectedTheme.switchActive }}
                  thumbColor={isFeatured ? selectedTheme.switchThumbActive : selectedTheme.switchThumbInactive}
                />
              </View>
              <View style={[layoutStyle.alignCenter, layoutStyle.dividerWrapper]}>
                <Text style={{ color: selectedTheme.textPrimary, flex: 1 }}>Active Product</Text> 
                <Switch
                  value={isActive}
                  onValueChange={setIsActive}
                  trackColor={{ false: selectedTheme.switchInactive, true: selectedTheme.switchActive }}
                  thumbColor={isActive ? selectedTheme.switchThumbActive : selectedTheme.switchThumbInactive}
                />
              </View>
            </View>

            {/* Submit Button */}
            <CustomButton
              title="Save"
              onPress={handleCreateProduct}
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

export default CreateProductScreen;
