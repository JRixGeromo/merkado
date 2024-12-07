import React, { useState } from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  TextInput,
  Text,
  Image,
} from 'react-native';
import { useAppSelector } from '../../../hooks/reduxHooks';
import { myProductStyles } from '../styles/myProductStyles';
import { baseStyles, SHARED } from '../../../styles/baseStyles';
import { theme as appTheme } from '../../../styles/theme';
import ContentCardWide from '../../../components/ContentCardWide';
import SlideContentModal from '../../../components/SlideContentModal';
import ConfirmationModal from '../../../components/ConfirmationModal';
import IconLib from '../../../components/IconLib';
import CustomButton from '../../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigationTypes';

export type Product = {
  id: string;
  name: string;
  description: string | null;
  price: number;
  imageUrl: string;
  onSale: boolean;
};

const MyProductsScreen = () => {
  const themeType = useAppSelector(state => state.theme.theme);
  const myProductStyle = myProductStyles(themeType);
  const baseStyle = baseStyles(themeType);
  const myTheme = appTheme[themeType];
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [products, setProducts] = useState<Product[]>([
    {
      id: '1',
      name: 'Beef Boneless Beef Boneless Beef Boneless Beef Boneless Beef Boneless',
      description:
        'High quality boneless beef. High quality boneless beef. High quality boneless beef.',
      price: 500,
      imageUrl: 'https://picsum.photos/100/100?random=1',
      onSale: true,
    },
    {
      id: '2',
      name: 'Dried Fish Boneless',
      description: 'High quality boneless dried fish.',
      price: 200,
      imageUrl: 'https://picsum.photos/100/100?random=2',
      onSale: true,
    },
    {
      id: '3',
      name: 'Pork Skin',
      description: 'High quality pork skin.',
      price: 520,
      imageUrl: 'https://picsum.photos/100/100?random=3',
      onSale: true,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isConfirmVisible, setConfirmVisible] = useState(false);

  const handleDeleteProduct = (product: Product) => {
    setSelectedProduct(product);
    setConfirmVisible(true); // Show confirmation modal
  };

  const confirmDeletion = () => {
    if (selectedProduct) {
      console.log(`Deleting product: ${selectedProduct.name}`);
      setProducts(products.filter(p => p.id !== selectedProduct.id));
      setSelectedProduct(null);
      setConfirmVisible(false);
    }
  };

  const handleProduct = () => {
    navigation.navigate('UpsertProductScreen');
  };

  const handleViewProduct = (product: Product) => {
    setSelectedProduct(product);
    setIsModalVisible(true);
  };

  const renderProductItem = ({ item }: { item: Product }) => (
    <ContentCardWide
      type="product"
      imageUrl={item.imageUrl}
      name={item.name}
      description={item.description}
      price={item.price}
      buttonActions={[
        {
          iconName: 'Trash_O',
          title: '',
          backgroundColor: myTheme.buttonDark,
          width: '100%',
          textSize: 12,
          onPress: () => handleDeleteProduct(item),
          buttonStyle: baseStyle.cardButton,
        },
        {
          iconName: 'Create_O',
          title: '',
          backgroundColor: myTheme.button1st,
          width: '100%',
          textSize: 12,
          onPress: () => console.log('Edit Pressed'),
          buttonStyle: baseStyle.cardButton,
        },
        {
          iconName: 'View_O',
          title: '',
          backgroundColor: myTheme.buttonInfo,
          width: '100%',
          textSize: 12,
          onPress: () => handleViewProduct(item),
          buttonStyle: baseStyle.cardButton,
        },
      ]}
    />
  );

  return (
    <View
      style={[
        baseStyle.container,
        baseStyle.rlPaddingS,
        { backgroundColor: myTheme.fullContainerBGColor },
      ]}
    >
      <View style={baseStyle.verticalSpacerM} />
      {/* Search Bar */}
      <View style={[baseStyle.columnsInside, baseStyle.alignAllItems]}>
        <View
          style={[
            baseStyle.searchContainer,
            baseStyle.columnsInside,
            baseStyle.cols_80,
          ]}
        >
          <TouchableOpacity style={baseStyle.rMarginS}>
            <IconLib.Menu size={24} color={myTheme.iconColorGray} />
          </TouchableOpacity>
          <TextInput
            style={baseStyle.searchInput}
            placeholder="Search Products"
            placeholderTextColor={myTheme.textPHolderInfo}
            value={searchTerm}
            onChangeText={setSearchTerm}
          />
        </View>

        <View style={[baseStyle.cols_5, baseStyle.lPaddingL]}>
          <CustomButton
            title=""
            textSize={12}
            backgroundColor={myTheme.button1st}
            width="100%"
            onPress={handleProduct}
            iconName="Add"
            iconColor={myTheme.buttonText1st}
            iconSize={SHARED.fontXL}
            color={myTheme.buttonText1st}
            style={baseStyle.cardButton}
            borderRadius={0}
          />
        </View>
      </View>
      <View style={baseStyle.verticalSpacerM} />
      {/* Product List */}
      <FlatList
        data={products.filter(product =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()),
        )}
        //data={products} // Temporarily use this without filtering
        keyExtractor={item => item.id}
        renderItem={renderProductItem}
        contentContainerStyle={baseStyle.flatListPaddingTop}
        showsVerticalScrollIndicator={false}
      />

      {/* Slide-up Modal for Viewing Product */}
      <SlideContentModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        title={selectedProduct?.name}
      >
        {selectedProduct && (
          <View>
            <Image
              source={{ uri: selectedProduct.imageUrl }}
              style={baseStyle.slideModalImage}
            />
            <Text
              style={[
                baseStyle.smallText,
                { color: myTheme.text2nd },
              ]}
            >
              Price: ₱{selectedProduct.price}
            </Text>
            <Text
              style={[
                baseStyle.smallText,
                { color: myTheme.text2nd },
              ]}
            >
              Description: {selectedProduct.description}
            </Text>
            <Text
              style={[
                baseStyle.smallText,
                { color: myTheme.text2nd },
              ]}
            >
              On Sale: {selectedProduct.onSale ? 'Yes' : 'No'}
            </Text>
          </View>
        )}
      </SlideContentModal>

      {/* Confirmation Modal */}
      <ConfirmationModal
        visible={isConfirmVisible}
        onClose={() => setConfirmVisible(false)}
        title="Confirm Deletion"
        message={`Are you sure you want to delete ${selectedProduct?.name}?`}
        onConfirm={confirmDeletion}
        confirmText="Delete"
        cancelText="Cancel"
        confirmButtonColor={myTheme.buttonDanger} // Custom confirm button color
        cancelButtonColor={myTheme.buttonCancel} // Custom cancel button color
      />
    </View>
  );
};

export default MyProductsScreen;
