import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigationTypes';
import { useAppSelector } from '../../../hooks/reduxHooks';
import { theme as appTheme } from '../../../styles/theme';
import { marketStyles } from '../styles/marketStyles';
import { baseStyles } from '../../../styles/baseStyles';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack'; // Use NativeStackNavigationProp
// import { RootStackParamList } from '../../../navigationTypes'; // Import RootStackParamList
// import { useTranslation } from 'react-i18next'; // Import translation hook
// import { useNavigation } from '@react-navigation/native'; // Import the navigation hook

type CategoryDetailScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'CategoryDetailScreen'
>;

const CategoryDetailScreen: React.FC<CategoryDetailScreenProps> = ({
  route,
  navigation,
}) => {
  const { category } = route.params;

  
  const themeType = useAppSelector(state => state.theme.theme);
  const marketStyle = marketStyles(themeType); // This is fine
  const baseStyle = baseStyles(themeType); // Rename this to avoid conflict

  const selectedTheme = appTheme[themeType];

  const renderSubcategoryItem = ({
    item,
    index,
  }: {
    item: { name: string; description: string; productCount?: number, sale?: string };
    index: number;
  }) => (
    <TouchableOpacity
      style={[marketStyle.subcategoryCard, baseStyle.shadowedContainer, baseStyle.columnsInsideFlex]}
      onPress={() =>
        navigation.navigate('ProductsScreen', { subcategory: item })
      }
    >
      {item.sale && (
        <View style={baseStyle.newBadgeContainer}>
          <Text style={baseStyle.newBadgeText}>Up to {item.sale}</Text>
        </View>
      )}
      <Image
        source={{ uri: `https://picsum.photos/100/100?random=${index + 1}` }}
        style={marketStyle.subcategoryImage}
      />
      <View style={marketStyle.subcategoryContent}>
        <Text style={marketStyle.subcategoryName}>{item.name}</Text>
        <Text style={marketStyle.subcategoryDescription}>{item.description}</Text>
        {item.productCount && (
          <View style={marketStyle.detailRow}>
            <Text style={marketStyle.iconText}>📦</Text>
            <Text style={marketStyle.detailText}>{item.productCount || 100}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <View
      style={[
        baseStyle.container,
        baseStyle.rlPaddingS,
        { backgroundColor: selectedTheme.fullContainerBackgroundColor },
      ]}
    >
      {/* Category Header */}
      <View 
        style={[marketStyle.headerContainer, baseStyle.shadowedContainer]}
      >
        {/* <Image
          source={{ uri: `https://picsum.photos/400/200?random=header` }}
          style={marketStyle.headerImage}
        /> */}
        <Text style={marketStyle.header}>{category.name}</Text>
        <Text style={marketStyle.description}>{category.description}</Text>
      </View>

      {/* Subcategories List */}
      <FlatList
        data={category.subcategories.map((subcategory, index) => ({
          ...subcategory,
          productCount: 10 + index * 5, // Example hardcoded product count
        }))}
        renderItem={renderSubcategoryItem}
        keyExtractor={item => item.name}
        contentContainerStyle={marketStyle.subcategoryList}
      />
    </View>
  );
};

export default CategoryDetailScreen;
