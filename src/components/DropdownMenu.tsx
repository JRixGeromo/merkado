import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Modal, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { commonStyles } from '../styles/commonStyles';
import { useAppSelector } from '../hooks/reduxHooks';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigationTypes';

type DropdownMenuProps = {
  navigation: StackNavigationProp<RootStackParamList>; // Specify the correct navigation type
};

const DropdownMenu = ({ navigation }: DropdownMenuProps) => {
  const themeType = useAppSelector(state => state.theme.theme);
  const commonStyle = commonStyles(themeType);
  const [menuVisible, setMenuVisible] = useState(false); // To control dropdown visibility

  const menuItems = [
    { label: 'View Profile', icon: 'person-outline', action: 'ViewProfile' },
    { label: 'Edit Profile', icon: 'create-outline', action: 'EditProfile' },
    { label: 'Change Password', icon: 'lock-closed-outline', action: 'ChangePassword' },
    { label: 'Manage Addresses', icon: 'location-outline', action: 'ManageAddresses' },
    { label: 'Payment Methods', icon: 'card-outline', action: 'PaymentMethods' },
    { label: 'Product Categories', icon: 'list-outline', action: 'ProductCategories' },
    { label: 'Products', icon: 'cube-outline', action: 'Products' },
    { label: 'Orders', icon: 'receipt-outline', action: 'Orders' },
    { label: 'Favorites', icon: 'heart-outline', action: 'Favorites' },
    { label: 'Live Shows', icon: 'videocam-outline', action: 'LiveShows' },
    { label: 'Offline Shows', icon: 'calendar-outline', action: 'OfflineShows' },
    { label: 'Marketing Campaigns', icon: 'megaphone-outline', action: 'MarketingCampaigns' },
    { label: 'Manage Vendors', icon: 'storefront-outline', action: 'ManageVendors' },
    { label: 'Wishes', icon: 'heart-outline', action: 'Wishes' },
    { label: 'Ratings & Reviews', icon: 'star-outline', action: 'RatingsReviews' },
    { label: 'Reactions', icon: 'thumbs-up-outline', action: 'Reactions' },
    { label: 'Followers', icon: 'people-outline', action: 'Followers' },
    { label: 'Social Accounts', icon: 'logo-facebook', action: 'SocialAccounts' },
    { label: 'Help Center', icon: 'help-circle-outline', action: 'HelpCenter' },
    { label: 'Logout', icon: 'log-out-outline', action: 'Logout' },
  ];

  return (
    <>
      {/* Toggle dropdown visibility */}
      <TouchableOpacity onPress={() => setMenuVisible(true)}>
        <Icon name="ellipsis-vertical" size={24} color={commonStyle.iconColor.color} />
      </TouchableOpacity>

      {/* Use Modal to display dropdown with a background overlay */}
      <Modal
        visible={menuVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setMenuVisible(false)} // Closes when the back button is pressed on Android
      >
        {/* Overlay: Close menu when tapping outside */}
        <TouchableWithoutFeedback onPress={() => setMenuVisible(false)}>
          <View style={commonStyle.overlay}>
            {/* Dropdown menu with scrolling */}
            <View style={[commonStyle.dropdownMenu, { maxHeight: 400, position: 'absolute', right: 10, top: 50 }]}>
              <ScrollView>
                {menuItems.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    style={commonStyle.dropdownItem}
                    onPress={() => {
                      setMenuVisible(false);
                      if (item.action) {
                        //navigation.navigate(item.action); // Navigate to specific screen
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
