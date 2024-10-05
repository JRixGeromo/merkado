import React from 'react';
import { View, TextInput, Image, TouchableOpacity } from 'react-native';
import { useAppSelector, useAppDispatch } from '../../../hooks/reduxHooks'; // Import Redux hooks
import { commonStyles } from '../../../styles/commonStyles';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = () => {
  const theme = useAppSelector((state) => state.theme.theme); // Get the current theme
  const styles = commonStyles(theme); // Generate dynamic styles

  return (
    <View style={[styles.container, { flexDirection: 'row', alignItems: 'center', padding: 10, justifyContent: 'space-between' }]}>
      {/* Logo */}
      <Image
        source={require('../../../../assets/logo.jpg')} // Replace with your logo image
        style={{ width: 120, height: 40, resizeMode: 'contain' }}
      />

      {/* Search Bar */}
      <TextInput
        placeholder="What are you looking for?"
        style={[
          styles.input,
          {
            flex: 1,
            marginHorizontal: 10,
            padding: 10,
            backgroundColor: theme === 'light' ? '#f3f3f3' : '#444',
          },
        ]}
      />

      {/* Icons */}
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity>
          <Icon name="notifications-outline" size={24} color={theme === 'light' ? '#333' : '#fff'} style={{ marginRight: 10 }} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="person-outline" size={24} color={theme === 'light' ? '#333' : '#fff'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
