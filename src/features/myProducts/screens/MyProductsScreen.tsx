import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import { useAppSelector } from '../../../hooks/reduxHooks';
import { commonStyles } from '../../../styles/commonStyles';
import { layoutStyles } from '../../../styles/layoutStyles';
import { theme as appTheme } from '../../../styles/theme';
import ContentCardWide from '../../../components/ContentCardWide';
import IconLib from '../../../components/IconLib';
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
      name: 'Beef Boneless',
      description: 'High quality boneless beef.',
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
      description: 'High quality posk skin.',
      price: 520,
      imageUrl: 'https://picsum.photos/100/100?random=3',
      onSale: true,
    },
    // Additional product data as needed
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  // const handleProductLikeToggle = (productId: string) => {
  //   setProducts(prevProducts =>
  //     prevProducts.map(product =>
  //       product.id === productId ? { ...product, likes: product.likes + 1 } : product
  //     )
  //   );
  // };

  const renderProductItem = ({ item }: { item: Product }) => (
  <ContentCardWide
    type="product"
    imageUrl={item.imageUrl}
    name={item.name}
    description={item.description}
    price={item.price}
    buttonActions={[
      {
        iconName: 'Edit_O',
        //onPress: () => navigation.navigate('EditProductScreen', { product: item }),
        onPress: () => console.log('Edit Pressed'),
        buttonStyle: commonStyle.editButton,
      },
      {
        iconName: 'Delete_O',
        onPress: () => console.log('Delete Pressed'),
        buttonStyle: commonStyle.deleteButton,
      },
    ]}
  />
);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={[layoutStyle.container, { backgroundColor: selectedTheme.fullContainerBackgroundColor }]}>
        {/* Search Bar */}
        <View style={[commonStyle.searchContainer, layoutStyle.columnsInside]}>
          <TouchableOpacity>
            <IconLib.Menu size={24} color={selectedTheme.iconColorPrimary} />
          </TouchableOpacity>
          <TextInput
            style={commonStyle.searchInput}
            placeholder="Search Products"
            placeholderTextColor={selectedTheme.textPlaceHolderInfo}
            value={searchTerm}
            onChangeText={setSearchTerm}
          />
          <TouchableOpacity 
            //onPress={() => navigation.navigate('AddProductScreen')}
            >
            <IconLib.Menu size={24} color={selectedTheme.iconColorPrimary} />
          </TouchableOpacity>
        </View>

        {/* Product List */}
        <FlatList
          data={products.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))}
          keyExtractor={item => item.id}
          renderItem={renderProductItem}
          contentContainerStyle={{ padding: 10 }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </ScrollView>
  );
};

export default MyProductsScreen;
