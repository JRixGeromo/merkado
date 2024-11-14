// components/CategoryCard.tsx
import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import { useAppSelector } from '../../../hooks/reduxHooks';
import { theme as appTheme } from '../../../styles/theme';
import { marketStyles } from '../styles/marketStyles';
import { baseStyles } from '../../../styles/baseStyles';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack'; // Use NativeStackNavigationProp
// import { RootStackParamList } from '../../../navigationTypes'; // Import RootStackParamList
// import { useTranslation } from 'react-i18next'; // Import translation hook
// import { useNavigation } from '@react-navigation/native'; // Import the navigation hook

type CategoryCardProps = {
  item: {
    name: string;
    description: string;
    subcategories: { name: string }[];
    totalProducts?: number;
  };
  index: number;
  onPress: () => void;
};

const CategoryCard: React.FC<CategoryCardProps> = ({ item, index, onPress }) => {

  const themeType = useAppSelector(state => state.theme.theme);
  const marketStyle = marketStyles(themeType); // This is fine
  const baseStyle = baseStyles(themeType); // Rename this to avoid conflict

  const selectedTheme = appTheme[themeType];

  return (
    <TouchableOpacity style={[marketStyle.categoryCard,baseStyle.shadowedContainer]} onPress={onPress}>
      <Image
        source={{ uri: `https://picsum.photos/200/200?random=${index + 1}` }}
        style={marketStyle.categoryImage}
      />
      <View style={marketStyle.categoryInfo}>
        <Text style={marketStyle.categoryName}>{item.name}</Text>
        <Text style={marketStyle.categoryDescription} numberOfLines={2}>
          {item.description}
        </Text>
        <View style={marketStyle.categoryDetails}>
          {/* Top Subcategory with Icon */}
          <View style={[baseStyle.columnsInside, baseStyle.innerContainerCenter]}>
            <Text style={baseStyle.iconTextSolid}>📌</Text>
            <Text style={baseStyle.detailText}> Top: {item.subcategories[0].name}</Text>
          </View>
          {/* Total Products with Icon */}
          <View style={[baseStyle.columnsInside, baseStyle.innerContainerCenter, baseStyle.tMarginXS]}>
            <Text style={baseStyle.iconTextSolid}>📦</Text>
            <Text style={baseStyle.detailText}> {item.totalProducts || 100}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;
