import React, { useState, useEffect } from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  TextInput,
  Text,
  Image,
  ActivityIndicator,
} from 'react-native';
import { useTheme } from '../../../hooks/useTheme';
import { myProductStyles } from '../styles/myProductStyles';
import { baseStyles, SHARED } from '../../../styles/baseStyles';
import { commonStyles } from '../../../styles/commonStyles';
import ContentCardWide from '../../../components/ContentCardWide';
import SlideContentModal from '../../../components/SlideContentModal';
import ConfirmationModal from '../../../components/ConfirmationModal';
import IconLib from '../../../components/IconLib';
import CustomButton from '../../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigationTypes';
import { useAppSelector, useAppDispatch } from '../../../hooks/reduxHooks';
import { fetchProducts, deleteProduct, Product } from '../../../store/slices/productSlice';

const MyProductsScreen = () => {
  const { themeType, commonStyle, baseStyle, myTheme } = useTheme();
  const myProductStyle = myProductStyles(themeType);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const dispatch = useAppDispatch();
  const { products, status, error } = useAppSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

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
      dispatch(deleteProduct(parseInt(selectedProduct.id, 10)));
      setSelectedProduct(null);
      setConfirmVisible(false);
    }
  };

  const handleProduct = () => {
    navigation.navigate('UpsertProductScreen' as any);
  };

  const handleRefresh = () => {
    dispatch(fetchProducts());
  };

  const handleViewProduct = (product: Product) => {
    setSelectedProduct(product);
    setIsModalVisible(true);
  };

  const renderProductItem = ({ item }: { item: Product }) => (
    <ContentCardWide
      type="product"
      imageUrl={''}
      name={item.name}
      description={item.longDescription}
      price={item.price}
      buttonActions={[
        {
          iconName: 'Trash_O',
          title: '',
          backgroundColor: myTheme.buttonDark,
          width: '100%',
          textSize: 12,
          onPress: () => handleDeleteProduct(item),
          buttonStyle: commonStyle.cardButton,
        },
        {
          iconName: 'Create_O',
          title: '',
          backgroundColor: myTheme.button1st,
          width: '100%',
          textSize: 12,
          onPress: () => navigation.navigate('UpsertProductScreen', { product: item }),
          buttonStyle: commonStyle.cardButton,
        },
        {
          iconName: 'View_O',
          title: '',
          backgroundColor: myTheme.buttonInfo,
          width: '100%',
          textSize: 12,
          onPress: () => handleViewProduct(item),
          buttonStyle: commonStyle.cardButton,
        },
      ]}
    />
  );

  // Show loading indicator
if (status === 'loading') {
  return (
    <View style={[baseStyle.container, baseStyle.alignAllItems, { justifyContent: 'center' }]}>
      <ActivityIndicator size="large" color={myTheme.button1st} />
      <Text style={[baseStyle.mediumText, { color: myTheme.text2nd, marginTop: 10 }]}>
        Loading products...
      </Text>
    </View>
  );
}

// Show error state
if (status === 'failed') {
  return (
    <View style={[baseStyle.container, baseStyle.alignAllItems, { justifyContent: 'center' }]}>
      <Text style={[baseStyle.mediumText, { color: myTheme.buttonDanger }]}>
        Error: {error}
      </Text>
      <CustomButton
        title="Retry"
        onPress={() => dispatch(fetchProducts())}
        backgroundColor={myTheme.button1st}
        color={myTheme.buttonText1st}
        style={{ marginTop: 20 }}
      />
    </View>
  );
}

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
            commonStyle.searchContainer,
            baseStyle.columnsInside,
            baseStyle.cols_80,
          ]}
        >
          <TouchableOpacity style={baseStyle.rMarginS}>
            <IconLib.Menu size={24} color={myTheme.iconColorGray} />
          </TouchableOpacity>
          <TextInput
            style={commonStyle.searchInput}
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
            style={commonStyle.cardButton}
            borderRadius={0}
          />
        </View>
        <View style={[baseStyle.cols_5, baseStyle.lPaddingL]}>
          <CustomButton
            title=""
            textSize={12}
            backgroundColor={myTheme.buttonInfo}
            width="100%"
            onPress={handleRefresh}
            iconName="Store" // Use existing icon instead of Refresh
            iconColor={myTheme.buttonInfo}
            iconSize={SHARED.fontXL}
            color={myTheme.buttonInfo}
            style={commonStyle.cardButton}
            borderRadius={0}
            disabled={status === 'loading' as any}
          />
        </View>
      </View>
      <View style={baseStyle.verticalSpacerM} />
      {/* Product List */}
      {products.length === 0 && status !== 'loading' as any ? (
        <View style={[baseStyle.container, baseStyle.alignAllItems, { justifyContent: 'center', flex: 1 }]}>
          <Text style={[baseStyle.mediumText, { color: myTheme.text2nd }]}>
            No products found
          </Text>
          <CustomButton
            title="Refresh"
            onPress={handleRefresh}
            backgroundColor={myTheme.button1st}
            color={myTheme.buttonText1st}
            style={{ marginTop: 20 }}
          />
        </View>
      ) : (
        <FlatList
          data={products.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase()),
          )}
          keyExtractor={item => item.id}
          renderItem={renderProductItem}
          contentContainerStyle={baseStyle.flatListPaddingTop}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View style={[baseStyle.container, baseStyle.alignAllItems, { justifyContent: 'center', paddingVertical: 50 }]}>
              <Text style={[baseStyle.mediumText, { color: myTheme.text2nd }]}>
                No products match your search
              </Text>
            </View>
          )}
        />
      )}

      {/* Slide-up Modal for Viewing Product */}
      <SlideContentModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        title={selectedProduct?.name}
      >
        {selectedProduct && (
          <View>
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
              Stock: {selectedProduct.stock}
            </Text>
            <Text
              style={[
                baseStyle.smallText,
                { color: myTheme.text2nd },
              ]}
            >
              Description: {selectedProduct.longDescription || 'No description'}
            </Text>
            <Text
              style={[
                baseStyle.smallText,
                { color: myTheme.text2nd },
              ]}
            >
              Sale Price: {selectedProduct.salePrice ? `₱${selectedProduct.salePrice}` : 'N/A'}
            </Text>
            <Text
              style={[
                baseStyle.smallText,
                { color: myTheme.text2nd },
              ]}
            >
              Vendor: {selectedProduct.vendor?.businessName || 'N/A'}
            </Text>
            <Text
              style={[
                baseStyle.smallText,
                { color: myTheme.text2nd },
              ]}
            >
              Featured: {selectedProduct.isFeatured ? 'Yes' : 'No'}
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
