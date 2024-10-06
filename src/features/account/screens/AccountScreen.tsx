import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useAppSelector, useAppDispatch } from '../../../hooks/reduxHooks';
import { toggleTheme } from '../../../reducers/themeReducer';
import CustomButton from '../../../components/CustomButton';
import { commonStyles } from '../../../styles/commonStyles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigationTypes';

const AccountScreen = () => {
  const theme = useAppSelector(state => state.theme.theme);
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const styles = commonStyles(theme);

  // Mock Data for Account Info
  const accountInfo = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    location: '123 Main St, Springfield, CA',
    paymentMethod: {
      type: 'Mastercard',
      last4: '0123',
    },
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 16 }}>
      <View style={styles.container}>
        {/* Section for Account Information */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Icon name="person" size={20} color={styles.iconColor.color} />
            <Text style={styles.cardHeaderTitle}>Account Information</Text>
          </View>
          <Text style={styles.cardText}>Name: {accountInfo.name}</Text>
          <Text style={styles.cardText}>Email: {accountInfo.email}</Text>
          <Text style={styles.cardText}>Location: {accountInfo.location}</Text>
          <TouchableOpacity 
            //onPress={() => navigation.navigate('EditAccountScreen')}
          >
            <Text style={styles.editLink}>Edit</Text>
          </TouchableOpacity>
        </View>

        {/* Section for Payment Method */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Icon name="card" size={20} color={styles.iconColor.color} />
            <Text style={styles.cardHeaderTitle}>Payment Method</Text>
          </View>
          <Text style={styles.cardText}>
            {accountInfo.paymentMethod.type} ending in {accountInfo.paymentMethod.last4}
          </Text>
          <TouchableOpacity 
            //onPress={() => navigation.navigate('PaymentMethodScreen')}
          >
            <Text style={styles.editLink}>Edit</Text>
          </TouchableOpacity>
        </View>

        {/* Theme Toggle Section */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Icon name="moon" size={20} color={styles.iconColor.color} />
            <Text style={styles.cardHeaderTitle}>Preferences</Text>
          </View>
          <View style={styles.toggleButtonContainer}>
            <Text style={styles.cardText}>Dark Mode</Text>
            <TouchableOpacity onPress={() => dispatch(toggleTheme())}>
              <Icon
                name={theme === 'dark' ? 'moon' : 'sunny'}
                size={24}
                color={styles.iconColor.color}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Logout Section */}
        <CustomButton
          title="Logout"
          onPress={() => {
            // Implement logout logic
          }}
          backgroundColor={styles.button.backgroundColor}
          color={styles.buttonText.color}
        />
      </View>
    </ScrollView>
  );
};

export default AccountScreen;
