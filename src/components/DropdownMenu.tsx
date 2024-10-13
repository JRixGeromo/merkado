import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, TouchableWithoutFeedback  } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { commonStyles } from '..//styles/commonStyles';
import { useAppSelector } from '../hooks/reduxHooks';

const DropdownMenu = () => {
  const themeType = useAppSelector(state => state.theme.theme);
  const commonStyle = commonStyles(themeType);
  const [menuVisible, setMenuVisible] = useState(false); // To control dropdown visibility

  const menuItems = [
    { label: 'View Profile', icon: 'person-outline' },
    { label: 'Edit Profile', icon: 'create-outline' },
    { label: 'Change Password', icon: 'lock-closed-outline' },
    { label: 'Manage Addresses', icon: 'location-outline' },
    { label: 'Payment Methods', icon: 'card-outline' },
    { label: 'Product Categories', icon: 'pricetag-outline', action: 'CategoriesScreen' }, // New Category Screen
    { label: 'Products', icon: 'cube-outline', action: 'ProductsScreen' }, // New Product Screen
    { label: 'Orders', icon: 'bag-outline' },
    { label: 'Favorites', icon: 'heart-outline' },
    { label: 'Notifications', icon: 'notifications-outline' },
    { label: 'Help Center', icon: 'help-circle-outline' },
    { label: 'Logout', icon: 'log-out-outline' },
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
            {/* Dropdown menu */}
            <View style={[commonStyle.dropdownMenu, { position: 'absolute', right: 10, top: 50 }]}>
              {menuItems.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={commonStyle.dropdownItem}
                  onPress={() => {
                    setMenuVisible(false);
                    // Handle menu item action
                  }}
                >
                  <Icon name={item.icon} size={20} color={commonStyle.iconColor.color} />
                  <Text style={commonStyle.dropdownText}>{item.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

export default DropdownMenu;
