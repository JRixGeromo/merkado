import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAppDispatch } from '../../../hooks/reduxHooks';
import { commonStyles } from '../../../styles/commonStyles';
//import { logout } from '../../../store/slices/authSlice';

const LogoutScreen = () => {
  const dispatch = useAppDispatch();
  //   const handleLogout = () => {
  //     dispatch(logout());
  //   };

  return (
    <View style={commonStyles('light').container}>
      <Text style={commonStyles('light').title}>Logout</Text>
      <Button
        title="Logout"
        //onPress={handleLogout}
      />
    </View>
  );
};

export default LogoutScreen;
