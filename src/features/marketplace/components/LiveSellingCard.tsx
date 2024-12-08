// components/LiveSellingCard.tsx
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useAppSelector } from '../../../hooks/reduxHooks';
import { theme as appTheme } from '../../../styles/theme';
import { marketStyles } from '../styles/marketStyles';
import { baseStyles } from '../../../styles/baseStyles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'; // Use NativeStackNavigationProp
import { RootStackParamList } from '../../../navigationTypes'; // Import RootStackParamList
import { useTranslation } from 'react-i18next'; // Import translation hook
import { useNavigation } from '@react-navigation/native'; // Import the navigation hook


type LiveSellingCardProps = {
  item: {
    id: string;
    name: string;
    profileImage: string;
    liveTitle: string;
  };
  onPress?: () => void; // Optional handler for card press
};

const LiveSellingCard: React.FC<LiveSellingCardProps> = ({ item, onPress }) => {
  const themeType = useAppSelector(state => state.theme.theme);
  const marketStyle = marketStyles(themeType); // This is fine
  const baseStyle = baseStyles(themeType); // Rename this to avoid conflict

  const myTheme = appTheme[themeType];
  return (
    <TouchableOpacity 
      onPress={onPress}
      style={[
        baseStyle.shadowedContainer,
        marketStyle.liveSellingCard,
        baseStyle.innerContainerCenter
      ]}
    >
      <View style={[marketStyle.videoIconContainer]}>
        <Ionicons name="videocam-outline" size={20} color={myTheme.online} />
        <View style={marketStyle.redDot} />
      </View>
      <View style={marketStyle.liveIconWrapper}>
        <Image source={{ uri: item.profileImage }} style={marketStyle.liveSellingImage} />
      </View>
      <View style={marketStyle.liveSellingInfo}>
        <Text style={[baseStyle.smallText, {color: myTheme.text2nd}]}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default LiveSellingCard;
