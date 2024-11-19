import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Modal,
  ScrollView,
} from 'react-native';
import IconLib from '../components/IconLib'; // Import the new IconLib
import { compStyles } from './styles/componentStyles'; // Import your style
import { baseStyles } from '../styles/baseStyles';
import { theme as appTheme } from '../styles/theme';
import { useAppSelector } from '../hooks/reduxHooks';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigationTypes';

type DropdownMenuProps = {
  navigation: StackNavigationProp<RootStackParamList>;
};

const DropdownMenu = ({ navigation }: DropdownMenuProps) => {
  const themeType = useAppSelector(state => state.theme.theme);
  const compStyle = compStyles(themeType); // This is fine
  const baseStyle = baseStyles(themeType); // Rename this to avoid conflict

  const myTheme = appTheme[themeType];
  const [menuVisible, setMenuVisible] = useState(false);

  const menuItems = [
    {
      label: 'Account Setting',
      icon: 'Cog_O', // Use the predefined key for Cog icon in IconLib
      action: 'AccountScreen' as keyof RootStackParamList,
    },
    {
      label: 'Product Categories',
      icon: 'List_O', // Use the predefined key for List icon in IconLib
      action: 'ProductCategoriesScreen' as keyof RootStackParamList,
    },
    {
      label: 'My Products',
      icon: 'Products_O', // Use the predefined key for Products icon in IconLib
      action: 'MyProductsScreen' as keyof RootStackParamList,
    },
    {
      label: 'Favorites',
      icon: 'Heart_O', // Use the predefined key for Heart icon in IconLib
      action: 'FavoritesScreen' as keyof RootStackParamList,
    },
    {
      label: 'Live Shows',
      icon: 'Video_O', // Use the predefined key for Video icon in IconLib
      action: 'LiveShowsScreen' as keyof RootStackParamList,
    },
    {
      label: 'Offline Shows',
      icon: 'Calendar_O', // Use the predefined key for Calendar icon in IconLib
      action: 'OfflineShowsScreen' as keyof RootStackParamList,
    },
    {
      label: 'Marketing Campaigns',
      icon: 'Megaphone_O', // Use the predefined key for Megaphone icon in IconLib
      action: 'MarketingCampaignsScreen' as keyof RootStackParamList,
    },
    {
      label: 'Manage Vendors',
      icon: 'Marketplace_O', // Use the predefined key for Marketplace icon in IconLib
      action: 'ManageVendorsScreen' as keyof RootStackParamList,
    },
    {
      label: 'Wishes',
      icon: 'Heart_O', // Use the predefined key for Heart icon in IconLib
      action: 'WishesScreen' as keyof RootStackParamList,
    },
    {
      label: 'Ratings & Reviews',
      icon: 'Star_O', // Use the predefined key for Star icon in IconLib
      action: 'RatingsReviewsScreen' as keyof RootStackParamList,
    },
    {
      label: 'Reactions',
      icon: 'ThumbsUp_O', // Use the predefined key for ThumbsUp icon in IconLib
      action: 'ReactionsScreen' as keyof RootStackParamList,
    },
    {
      label: 'Followers',
      icon: 'People_O', // Use the predefined key for People icon in IconLib
      action: 'FollowersScreen' as keyof RootStackParamList,
    },
    {
      label: 'Social Accounts',
      icon: 'FBLogo_O', // Use the predefined key for Facebook Logo icon in IconLib
      action: 'SocialAccountsScreen' as keyof RootStackParamList,
    },
    {
      label: 'Help Center',
      icon: 'Help_O', // Use the predefined key for Help icon in IconLib
      action: 'HelpCenterScreen' as keyof RootStackParamList,
    },
    {
      label: 'Logout',
      icon: 'Logout_O', // Use the predefined key for Logout icon in IconLib
      action: 'LogoutScreen' as keyof RootStackParamList,
    },
  ];
  // Function to render the icons dynamically
  const renderIcon = (
    iconName: keyof typeof IconLib,
    size: number,
    color: string,
  ) => {
    const IconComponent = IconLib[iconName]; // Access the icon component dynamically
    return <IconComponent size={size} color={color} />;
  };

  return (
    <>
      <TouchableOpacity onPress={() => setMenuVisible(true)}>
        {renderIcon('DotsMenu', 24, myTheme.iconColor2nd)}
      </TouchableOpacity>

      <Modal
        visible={menuVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setMenuVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setMenuVisible(false)}>
          <View style={compStyle.overlay}>
            <View
              style={[
                compStyle.dropdownMenu,
                { maxHeight: 400, position: 'absolute', right: 10, top: 50 },
              ]}
            >
              <ScrollView>
                {menuItems.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    style={compStyle.dropdownItem}
                    onPress={() => {
                      setMenuVisible(false);
                      if (item.action) {
                        navigation.navigate(item.action); // Correct typing for action navigation
                      }
                    }}
                  >
                    {/* Use renderIcon to dynamically load the icon */}
                    {renderIcon(item.icon, 20, myTheme.iconColorGray)}
                    <Text style={compStyle.dropdownText}>{item.label}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

export default DropdownMenu;
