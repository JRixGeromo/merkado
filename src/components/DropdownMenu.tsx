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
    { label: 'View Profile', icon: 'person-outline', action: 'ViewProfile' as keyof RootStackParamList },
    { label: 'Edit Profile', icon: 'create-outline', action: 'EditProfile' as keyof RootStackParamList },
    { label: 'Change Password', icon: 'lock-closed-outline', action: 'ChangePassword' as keyof RootStackParamList },
    { label: 'Manage Addresses', icon: 'location-outline', action: 'ManageAddresses' as keyof RootStackParamList },
    { label: 'Payment Methods', icon: 'card-outline', action: 'PaymentMethods' as keyof RootStackParamList },
    { label: 'Product Categories', icon: 'list-outline', action: 'ProductCategories' as keyof RootStackParamList },
    { label: 'Products', icon: 'cube-outline', action: 'Products' as keyof RootStackParamList },
    { label: 'Orders', icon: 'receipt-outline', action: 'Orders' as keyof RootStackParamList },
    { label: 'Favorites', icon: 'heart-outline', action: 'Favorites' as keyof RootStackParamList },
    { label: 'Live Shows', icon: 'videocam-outline', action: 'LiveShows' as keyof RootStackParamList },
    { label: 'Offline Shows', icon: 'calendar-outline', action: 'OfflineShows' as keyof RootStackParamList },
    { label: 'Marketing Campaigns', icon: 'megaphone-outline', action: 'MarketingCampaigns' as keyof RootStackParamList },
    { label: 'Manage Vendors', icon: 'storefront-outline', action: 'ManageVendors' as keyof RootStackParamList },
    { label: 'Wishes', icon: 'heart-outline', action: 'Wishes' as keyof RootStackParamList },
    { label: 'Ratings & Reviews', icon: 'star-outline', action: 'RatingsReviews' as keyof RootStackParamList },
    { label: 'Reactions', icon: 'thumbs-up-outline', action: 'Reactions' as keyof RootStackParamList },
    { label: 'Followers', icon: 'people-outline', action: 'Followers' as keyof RootStackParamList },
    { label: 'Social Accounts', icon: 'logo-facebook', action: 'SocialAccounts' as keyof RootStackParamList },
    { label: 'Help Center', icon: 'help-circle-outline', action: 'HelpCenter' as keyof RootStackParamList },
    { label: 'Logout', icon: 'log-out-outline', action: 'Logout' as keyof RootStackParamList },
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
