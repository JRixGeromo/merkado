import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import IconLib from '../IconLib';
import DropdownMenu from '../DropdownMenu';
import { useAppSelector } from '../../hooks/reduxHooks';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigationTypes';
import { commonStyles } from '../../styles/commonStyles';
import { baseStyles } from '../../styles/baseStyles';
import { theme as appTheme } from '../../styles/theme';

interface TabHeaderProps {
  route: { name: string };
  navigation: StackNavigationProp<RootStackParamList>;
}

export const HeaderTitle = ({ route }: { route: { name: string } }) => {
  const themeType = useAppSelector(state => state.theme.theme);
  const commonStyle = commonStyles(themeType);

  return (
    <View style={commonStyle.tabHeaderContainer}>
      <Image
        source={require('../../../assets/logo.png')}
        style={commonStyle.headerLogo}
      />
      <Text style={commonStyle.screenHeaderTitle}>{route.name}</Text>
    </View>
  );
};

export const HeaderRight = ({ navigation }: Omit<TabHeaderProps, 'route'>) => {
  const themeType = useAppSelector(state => state.theme.theme);
  const user = useAppSelector(state => state.auth.user);
  const cartCount = 2; // Hardcoded cart count as in original
  const commonStyle = commonStyles(themeType);
  const baseStyle = baseStyles(themeType);
  const selectedTheme = appTheme[themeType];

  return (
    <View style={commonStyle.headerRightContainer}>
      <View style={{ position: 'relative' }}>
        <IconLib.Cart_O
          size={20}
          color={selectedTheme.iconColor2nd}
          onPress={() => navigation.navigate('CartScreen')}
          style={commonStyle.headerIcon}
        />
        {cartCount > 0 && (
          <View
            style={{
              position: 'absolute',
              top: -7,
              right: 15,
              backgroundColor: 'red',
              borderRadius: 10,
              paddingHorizontal: 5,
              paddingVertical: 2,
            }}
          >
            <Text
              style={{ color: 'white', fontSize: 8, fontWeight: 'bold' }}
            >
              {cartCount}
            </Text>
          </View>
        )}
      </View>
      {/* Front Store Icon */}
      <TouchableOpacity
        onPress={() => navigation.navigate('FrontStoreScreen')}
        style={baseStyle.rMarginL}
      >
        <IconLib.Store_O size={20} color={selectedTheme.iconColor2nd} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('AccountScreen')}
        style={baseStyle.rMarginL}
      >
        {user?.avatar ? (
          <Image
            source={{ uri: user.avatar }}
            style={{
              width: 35,
              height: 35,
              borderRadius: 17.5,
              marginRight: 10,
            }}
          />
        ) : (
          <IconLib.Person_O
            size={20}
            color={selectedTheme.iconColor2nd}
          />
        )}
      </TouchableOpacity>
      <DropdownMenu navigation={navigation} />
    </View>
  );
};
