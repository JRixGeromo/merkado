import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAppDispatch } from '../../../hooks/reduxHooks';
import { commonStyles } from '../../../styles/commonStyles';
import { baseStyles } from '../../../styles/baseStyles';
//import { logout } from '../../../store/slices/authSlice';

const LogoutScreen = () => {
  const dispatch = useAppDispatch();
  const baseStyle = baseStyles('light');
  //   const handleLogout = () => {
  //     dispatch(logout());
  //   };

  return (
    <View style={baseStyle.container}>
      <Button
        title="Logout"
        //onPress={handleLogout}
      />
    </View>
  );
};

export default LogoutScreen;
