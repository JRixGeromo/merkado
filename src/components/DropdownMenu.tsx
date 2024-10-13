import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Modal, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { commonStyles } from '../styles/commonStyles';
import { useAppSelector } from '../hooks/reduxHooks';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigationTypes';

type DropdownMenuProps = {
  navigation: StackNavigationProp<RootStackParamList>;
};

const DropdownMenu = ({ navigation }: DropdownMenuProps) => {
  const themeType = useAppSelector(state => state.theme.theme);
  const commonStyle = commonStyles(themeType);
  const [menuVisible, setMenuVisible] = useState(false);

  const menuItems = [
    { label: 'Account Setting', icon: 'cog-outline', action: 'AccountScreen' as keyof RootStackParamList },
    { label: 'Product Categories', icon: 'list-outline', action: 'ProductCategoriesScreen' as keyof RootStackParamList },
    { label: 'Products', icon: 'cube-outline', action: 'ProductsScreen' as keyof RootStackParamList },
    { label: 'Favorites', icon: 'heart-outline', action: 'FavoritesScreen' as keyof RootStackParamList },
    { label: 'Live Shows', icon: 'videocam-outline', action: 'LiveShowsScreen' as keyof RootStackParamList },
    { label: 'Offline Shows', icon: 'calendar-outline', action: 'OfflineShowsScreen' as keyof RootStackParamList },
    { label: 'Marketing Campaigns', icon: 'megaphone-outline', action: 'MarketingCampaignsScreen' as keyof RootStackParamList },
    { label: 'Manage Vendors', icon: 'storefront-outline', action: 'ManageVendorsScreen' as keyof RootStackParamList },
    { label: 'Wishes', icon: 'heart-outline', action: 'Wishes' as keyof RootStackParamList },
    { label: 'Ratings & Reviews', icon: 'star-outline', action: 'RatingsReviewsScreen' as keyof RootStackParamList },
    { label: 'Reactions', icon: 'thumbs-up-outline', action: 'ReactionsScreen' as keyof RootStackParamList },
    { label: 'Followers', icon: 'people-outline', action: 'FollowersScreen' as keyof RootStackParamList },
    { label: 'Social Accounts', icon: 'logo-facebook', action: 'SocialAccountsScreen' as keyof RootStackParamList },
    { label: 'Help Center', icon: 'help-circle-outline', action: 'HelpCenterScreen' as keyof RootStackParamList },
    { label: 'Logout', icon: 'log-out-outline', action: 'LogoutScreen' as keyof RootStackParamList },
  ];

  return (
    <>
      <TouchableOpacity onPress={() => setMenuVisible(true)}>
        <Icon name="ellipsis-vertical" size={24} color={commonStyle.iconColor.color} />
      </TouchableOpacity>

      <Modal
        visible={menuVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setMenuVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setMenuVisible(false)}>
          <View style={commonStyle.overlay}>
            <View style={[commonStyle.dropdownMenu, { maxHeight: 400, position: 'absolute', right: 10, top: 50 }]}>
              <ScrollView>
                {menuItems.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    style={commonStyle.dropdownItem}
                    onPress={() => {
                      setMenuVisible(false);
                      if (item.action) {
                        navigation.navigate(item.action); // Correct typing for action navigation
                      }
                    }}
                  >
                    <Icon name={item.icon} size={20} color={commonStyle.iconColor.color} />
                    <Text style={commonStyle.dropdownText}>{item.label}</Text>
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
