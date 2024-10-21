import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Import Ionicons package
import IconFA from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome package
import { useAppSelector } from '../hooks/reduxHooks'; // Hook for theme selection
import { theme as appTheme } from '../styles/theme'; // Theme

interface IconProps {
  size?: number; // Icon size (optional, default provided)
  color?: string; // Custom color if needed (optional)
  style?: object; // Additional custom styles (optional)
  onPress?: () => void; // Optional onPress handler
  iconType?: 'ion' | 'fa'; // Optional icon type: ion or fa (Ionicons or FontAwesome)
}

// Define CustomIcon component for internal usage within IconLibrary
const CustomIcon: React.FC<{
  name: string;
  size?: number;
  color?: string;
  style?: object;
  onPress?: () => void; // Add the onPress prop
  iconType?: 'ion' | 'fa'; // Add the iconType prop to differentiate between Ionicons and FontAwesome
}> = ({ name, size = 24, color, style = {}, onPress, iconType = 'ion' }) => {
  const themeType = useAppSelector(state => state.theme.theme);
  const selectedTheme = appTheme[themeType];

  const IconComponent = iconType === 'fa' ? IconFA : Icon;

  // If onPress is provided, wrap the Icon with TouchableOpacity
  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress}>
        <IconComponent
          name={name}
          size={size}
          color={color || selectedTheme.iconColorGray} // Use theme color if not provided
          style={style}
        />
      </TouchableOpacity>
    );
  }

  // If no onPress, just render the Icon
  return (
    <IconComponent
      name={name}
      size={size}
      color={color || selectedTheme.iconColorGray} // Use theme color if not provided
      style={style}
    />
  );
};

// Create a library of predefined icons with support for FontAwesome
const IconLib = {
  ThumbsUp: (props: IconProps) => <CustomIcon name="thumbs-up" {...props} />,
  Chat: (props: IconProps) => <CustomIcon name="chatbubble" {...props} />,
  Share: (props: IconProps) => <CustomIcon name="arrow-redo" {...props} />,
  Heart: (props: IconProps) => <CustomIcon name="heart" {...props} />,
  Dashboard: (props: IconProps) => <CustomIcon name="home" {...props} />,
  Marketplace: (props: IconProps) => <CustomIcon name="storefront" {...props} />,
  Products: (props: IconProps) => <CustomIcon name="cube" {...props} />,
  Transactions: (props: IconProps) => <CustomIcon name="receipt" {...props} />,
  Cart: (props: IconProps) => <CustomIcon name="cart" {...props} />,
  Cog: (props: IconProps) => <CustomIcon name="cog" {...props} />,
  List: (props: IconProps) => <CustomIcon name="list" {...props} />,
  Video: (props: IconProps) => <CustomIcon name="videocam" {...props} />,
  Calendar: (props: IconProps) => <CustomIcon name="calendar" {...props} />,
  Megaphone: (props: IconProps) => <CustomIcon name="megaphone" {...props} />,
  Star: (props: IconProps) => <CustomIcon name="star" {...props} />,
  People: (props: IconProps) => <CustomIcon name="people" {...props} />,
  FBLogo: (props: IconProps) => <CustomIcon name="logo-facebook" {...props} />,
  Help: (props: IconProps) => <CustomIcon name="help-circle" {...props} />,
  PersonAdd: (props: IconProps) => <CustomIcon name="person-add" {...props} />,
  Logout: (props: IconProps) => <CustomIcon name="log-out" {...props} />,

  ThumbsUp_O: (props: IconProps) => <CustomIcon name="thumbs-up-outline" {...props} />,
  Chat_O: (props: IconProps) => <CustomIcon name="chatbubble-outline" {...props} />,
  Share_O: (props: IconProps) => <CustomIcon name="arrow-redo-outline" {...props} />,
  Heart_O: (props: IconProps) => <CustomIcon name="heart-outline" {...props} />,
  Dashboard_O: (props: IconProps) => <CustomIcon name="home-outline" {...props} />,
  Marketplace_O: (props: IconProps) => <CustomIcon name="storefront-outline" {...props} />,
  Products_O: (props: IconProps) => <CustomIcon name="cube-outline" {...props} />,
  Transactions_O: (props: IconProps) => <CustomIcon name="receipt-outline" {...props} />,
  Cart_O: (props: IconProps) => <CustomIcon name="cart-outline" {...props} />,
  Cog_O: (props: IconProps) => <CustomIcon name="cog-outline" {...props} />,
  List_O: (props: IconProps) => <CustomIcon name="list-outline" {...props} />,
  Video_O: (props: IconProps) => <CustomIcon name="videocam-outline" {...props} />,
  Calendar_O: (props: IconProps) => <CustomIcon name="calendar-outline" {...props} />,
  Megaphone_O: (props: IconProps) => <CustomIcon name="megaphone-outline" {...props} />,
  Star_O: (props: IconProps) => <CustomIcon name="star-outline" {...props} />,
  People_O: (props: IconProps) => <CustomIcon name="people-outline" {...props} />,
  FBLogo_O: (props: IconProps) => <CustomIcon name="logo-facebook" {...props} />,
  PersonAdd_O: (props: IconProps) => <CustomIcon name="person-add-outline" {...props} />,
  Help_O: (props: IconProps) => <CustomIcon name="help-circle-outline" {...props} />,
  Logout_O: (props: IconProps) => <CustomIcon name="log-out-outline" {...props} />,
  Send_O: (props: IconProps) => <CustomIcon name="send-outline" {...props} />,
  
  Settings_O: (props: IconProps) => <CustomIcon name="settings-outline" {...props} />,
  
  // FontAwesome Icons using the "fa" type
  Google: (props: IconProps) => <CustomIcon name="google" {...props} iconType="fa" />,
  Fb: (props: IconProps) => <CustomIcon name="facebook" {...props} iconType="fa" />,
  StarRate: (props: IconProps) => <CustomIcon name="star" {...props} />,
  DotsMenu: (props: IconProps) => <CustomIcon name="ellipsis-vertical" {...props} />,
  Menu: (props: IconProps) => <CustomIcon name="menu" {...props} />,
  Email: (props: IconProps) => <CustomIcon name="mail" {...props} />,
  Locked: (props: IconProps) => <CustomIcon name="lock-closed" {...props} />,
  Globe: (props: IconProps) => <CustomIcon name="globe" {...props} />,
  Sunny: (props: IconProps) => <CustomIcon name="sunny" {...props} />,
  Moon: (props: IconProps) => <CustomIcon name="moon" {...props} />,
  
  
  Person: (props: IconProps) => <CustomIcon name="person" {...props} />,
  Male: (props: IconProps) => <CustomIcon name="male" {...props} />,

};

export default IconLib;
