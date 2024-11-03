import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity, TextInput, Text, Image } from 'react-native';
import { useAppSelector } from '../../../hooks/reduxHooks';
import { commonStyles } from '../../../styles/commonStyles';
import { layoutStyles, SHARED } from '../../../styles/layoutStyles';
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
  const commonStyle = commonStyles(themeType);
  const layoutStyle = layoutStyles(themeType);
  const selectedTheme = appTheme[themeType];
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [products, setProducts] = useState<Product[]>([
    {
      id: '1',
      name: 'Beef Boneless Beef Boneless Beef Boneless Beef Boneless Beef Boneless',
      description: 'High quality boneless beef. High quality boneless beef. High quality boneless beef.',
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
          title: 'Delete',
          backgroundColor: selectedTheme.buttonDark,
          width: "100%",
          textSize: 12,
          onPress: () => handleDeleteProduct(item),
          buttonStyle: commonStyle.cardButton,
        },
        {
          iconName: 'Create_O',
          title: 'Edit',
          backgroundColor: selectedTheme.buttonPrimary,
          width: "100%",
          textSize: 12,
          onPress: () => console.log('Edit Pressed'),
          buttonStyle: commonStyle.cardButton,
        },
        {
          iconName: 'View_O',
          title: 'View',
          backgroundColor: selectedTheme.buttonInfo,
          width: "100%",
          textSize: 12,
          onPress: () => handleViewProduct(item),
          buttonStyle: commonStyle.cardButton,
        },
      ]}
    />
  );

  return (
    <View style={[layoutStyle.container, layoutStyle.rlPaddingS, { backgroundColor: selectedTheme.fullContainerBackgroundColor }]}>
      <View style={layoutStyle.verticalSpacerM} />
      {/* Search Bar */}
      <View style={[layoutStyle.columnsInside, layoutStyle.alignAllItems]}>
        <View style={[commonStyle.searchContainer, layoutStyle.columnsInside, layoutStyle.cols_75]}>
          <TouchableOpacity style={layoutStyle.rMarginS}>
            <IconLib.Menu size={24} color={selectedTheme.iconColorGray} />
          </TouchableOpacity>
          <TextInput
            style={commonStyle.searchInput}
            placeholder="Search Products"
            placeholderTextColor={selectedTheme.textPlaceHolderInfo}
            value={searchTerm}
            onChangeText={setSearchTerm}
          />
        </View>

        <View style={[layoutStyle.cols_25, layoutStyle.lPaddingS]}>
          <CustomButton
            title="Create"
            textSize={12}
            backgroundColor={selectedTheme.buttonPrimary}
            width="100%"
            onPress={handleProduct}
            iconName="Add"
            iconColor={selectedTheme.iconColorLight}
            iconSize={SHARED.fontXL}
            color={selectedTheme.textLight}
            style={[commonStyle.cardButton]}
            borderRadius={0}
          />
        </View>
      </View>
      <View style={layoutStyle.verticalSpacerM} />
      {/* Product List */}
      <FlatList
        data={products.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))}
        //data={products} // Temporarily use this without filtering
        keyExtractor={item => item.id}
        renderItem={renderProductItem}
        contentContainerStyle={layoutStyle.flatListPaddingTop}
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
            <Image source={{ uri: selectedProduct.imageUrl }} style={commonStyle.slideModalImage} />
            <Text style={[layoutStyle.smallText, {color: selectedTheme.textSecondary}]}>Price: ₱{selectedProduct.price}</Text>
            <Text style={[layoutStyle.smallText, {color: selectedTheme.textSecondary}]}>Description: {selectedProduct.description}</Text>
            <Text style={[layoutStyle.smallText, {color: selectedTheme.textSecondary}]}>On Sale: {selectedProduct.onSale ? 'Yes' : 'No'}</Text>
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
        confirmButtonColor={selectedTheme.buttonDanger}       // Custom confirm button color
        cancelButtonColor={selectedTheme.buttonCancel}       // Custom cancel button color
      />
    </View>
  );
};

export default MyProductsScreen;
