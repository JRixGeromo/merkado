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

type MenuAction = 
  | 'AccountScreen'
  | 'ProductCategoriesScreen'
  | 'MyProductsScreen'
  | 'FavoritesScreen'
  | 'LiveShowsScreen'
  | 'OfflineShowsScreen'
  | 'MarketingCampaignsScreen'
  | 'ManageVendorsScreen'
  | 'WishesScreen'
  | 'RatingsReviewsScreen'
  | 'ReactionsScreen'
  | 'FollowersScreen'
  | 'SocialAccountsScreen'
  | 'HelpCenterScreen'
  | 'LogoutScreen';

interface MenuItem {
  label: string;
  icon: keyof typeof IconLib;
  action: MenuAction;
}

const DropdownMenu = ({ navigation }: DropdownMenuProps) => {
  const themeType = useAppSelector(state => state.theme.theme);
  const compStyle = compStyles(themeType); // This is fine
  const baseStyle = baseStyles(themeType); // Rename this to avoid conflict

  const myTheme = appTheme[themeType];
  const [menuVisible, setMenuVisible] = useState(false);

  const menuItems: MenuItem[] = [
    {
      label: 'Account Setting',
      icon: 'Cog_O', // Use the predefined key for Cog icon in IconLib
      action: 'AccountScreen',
    },
    {
      label: 'Product Categories',
      icon: 'List_O', // Use the predefined key for List icon in IconLib
      action: 'ProductCategoriesScreen',
    },
    {
      label: 'My Products',
      icon: 'Products_O', // Use the predefined key for Products icon in IconLib
      action: 'MyProductsScreen',
    },
    {
      label: 'Favorites',
      icon: 'Heart_O', // Use the predefined key for Heart icon in IconLib
      action: 'FavoritesScreen',
    },
    {
      label: 'Live Shows',
      icon: 'Video_O', // Use the predefined key for Video icon in IconLib
      action: 'LiveShowsScreen',
    },
    {
      label: 'Offline Shows',
      icon: 'Calendar_O', // Use the predefined key for Calendar icon in IconLib
      action: 'OfflineShowsScreen',
    },
    {
      label: 'Marketing Campaigns',
      icon: 'Megaphone_O', // Use the predefined key for Megaphone icon in IconLib
      action: 'MarketingCampaignsScreen',
    },
    {
      label: 'Manage Vendors',
      icon: 'Marketplace_O', // Use the predefined key for Marketplace icon in IconLib
      action: 'ManageVendorsScreen',
    },
    {
      label: 'Wishes',
      icon: 'Heart_O', // Use the predefined key for Heart icon in IconLib
      action: 'WishesScreen',
    },
    {
      label: 'Ratings & Reviews',
      icon: 'Star_O', // Use the predefined key for Star icon in IconLib
      action: 'RatingsReviewsScreen',
    },
    {
      label: 'Reactions',
      icon: 'ThumbsUp_O', // Use the predefined key for ThumbsUp icon in IconLib
      action: 'ReactionsScreen',
    },
    {
      label: 'Followers',
      icon: 'People_O', // Use the predefined key for People icon in IconLib
      action: 'FollowersScreen',
    },
    {
      label: 'Social Accounts',
      icon: 'FBLogo_O', // Use the predefined key for Facebook Logo icon in IconLib
      action: 'SocialAccountsScreen',
    },
    {
      label: 'Help Center',
      icon: 'Help_O', // Use the predefined key for Help icon in IconLib
      action: 'HelpCenterScreen',
    },
    {
      label: 'Logout',
      icon: 'Logout_O', // Use the predefined key for Logout icon in IconLib
      action: 'LogoutScreen',
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
