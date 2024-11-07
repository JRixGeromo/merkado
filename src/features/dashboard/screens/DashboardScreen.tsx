import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { useAppSelector } from '../../../hooks/reduxHooks';
import { theme as appTheme } from '../../../styles/theme';
import { dashStyles } from '../styles/dashStyles'; // Import your style
import { baseStyles } from '../../../styles/baseStyles';
import ContentCard from '../../../components/ContentCard';
import IconLib from '../../../components/IconLib';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigationTypes';

const { width: screenWidth } = Dimensions.get('window');

type DashboardMetrics = {
  totalSales: number;
  totalOrders: number;
  avgRating: number;
  followers: number;
};

export type Product = {
  id: string;
  name: string;
  description: string | null;
  distance: string;
  price: number;
  location: string;
  imageUrl: string;
  rating: number;
  likes: number;
  onSale: boolean;
};

export type Store = {
  id: string;
  name: string;
  description: string;
  distance: string;
  location: string;
  imageUrl: string;
  rating: number;
  likes: number;
};

const VendorDashboard = () => {
  const themeType = useAppSelector(state => state.theme.theme);
  const dashStyle = dashStyles(themeType);
  const baseStyle = baseStyles(themeType);
  const selectedTheme = appTheme[themeType];
  const { t } = useTranslation();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [dashboardMetrics, setDashboardMetrics] = useState<DashboardMetrics>({
    totalSales: 145000,
    totalOrders: 320,
    avgRating: 4.5,
    followers: 1200,
  });

  const [reactionMetrics, setReactionMetrics] = useState({
    hearts: 450,
    shares: 120,
    comments: 85,
  });

  const [recentOrders, setRecentOrders] = useState([
    { id: '101', customerName: 'John Doe', amount: 450, status: 'Pending' },
    { id: '102', customerName: 'Jane Smith', amount: 300, status: 'Completed' },
  ]);

  const [recentFeedback, setRecentFeedback] = useState([
    {
      id: '1',
      content: 'Great quality and fast delivery!',
      user: 'Alice Brown',
      rating: 5,
    },
    {
      id: '2',
      content: 'The product was amazing!',
      user: 'Mark Taylor',
      rating: 4,
    },
  ]);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View
        style={[
          baseStyle.container,
          baseStyle.rlPaddingS,
          { backgroundColor: selectedTheme.fullContainerBackgroundColor },
        ]}
      >
        {/* Dashboard Metrics */}
        <View style={[baseStyle.verticalSpacerM]}>
          <View
            style={[baseStyle.columnsInside, baseStyle.verticalSpacerS]}
          >
            <View style={[dashStyle.metricBox]}>
              <Text style={dashStyle.largeText}>{t('Total Sales')}</Text>
              <Text style={dashStyle.metricValue}>
                ₱{dashboardMetrics.totalSales}
              </Text>
            </View>
            <View style={[dashStyle.metricBox]}>
              <Text style={dashStyle.largeText}>{t('Total Orders')}</Text>
              <Text style={dashStyle.metricValue}>
                {dashboardMetrics.totalOrders}
              </Text>
            </View>
          </View>
          <View
            style={[baseStyle.columnsInside, baseStyle.verticalSpacerS]}
          >
            <View style={[dashStyle.metricBox]}>
              <Text style={dashStyle.largeText}>{t('Avg. Rating')}</Text>
              <Text style={dashStyle.metricValue}>
                {dashboardMetrics.avgRating} ★
              </Text>
            </View>
            <View style={[dashStyle.metricBox]}>
              <Text style={dashStyle.largeText}>{t('Followers')}</Text>
              <Text style={dashStyle.metricValue}>
                {dashboardMetrics.followers}
              </Text>
            </View>
          </View>
        </View>

        {/* Reaction Metrics */}
        <View style={{ marginTop: 20 }}>
          {/* <Text style={baseStyle.largeText}>{t('Reactions')}</Text> */}
          <View style={[baseStyle.columnsInside, { marginTop: 10 }]}>
            <View style={[baseStyle.cols_3, dashStyle.metricBox]}>
              <IconLib.Heart size={24} color={selectedTheme.iconColorPrimary} />
              <Text style={dashStyle.reactionValue}>
                {reactionMetrics.hearts}
              </Text>
              <Text style={dashStyle.reactionLabel}>{t('Hearts')}</Text>
            </View>
            <View style={[baseStyle.cols_3, dashStyle.metricBox]}>
              <IconLib.Share size={24} color={selectedTheme.iconColorPrimary} />
              <Text style={dashStyle.reactionValue}>
                {reactionMetrics.shares}
              </Text>
              <Text style={dashStyle.reactionLabel}>{t('Shares')}</Text>
            </View>
            <View style={[baseStyle.cols_3, dashStyle.metricBox]}>
              <IconLib.Chat_O
                size={24}
                color={selectedTheme.iconColorPrimary}
              />
              <Text style={dashStyle.reactionValue}>
                {reactionMetrics.comments}
              </Text>
              <Text style={dashStyle.reactionLabel}>{t('Comments')}</Text>
            </View>
          </View>
        </View>

        {/* Recent Orders */}
        <View style={{ marginTop: 30 }}>
          <Text style={baseStyle.largeText}>{t('Recent Orders')}</Text>
          {recentOrders.map(order => (
            <View key={order.id} style={dashStyle.orderBox}>
              <Text style={dashStyle.orderText}>
                {order.customerName} - ₱{order.amount}
              </Text>
              <Text
                style={[
                  dashStyle.orderStatus,
                  { color: selectedTheme.textAccent },
                ]}
              >
                {order.status}
              </Text>
            </View>
          ))}
        </View>

        {/* Customer Feedback */}
        <View style={{ marginTop: 30 }}>
          <Text style={baseStyle.largeText}>{t('Customer Feedback')}</Text>
          {recentFeedback.map(feedback => (
            <View key={feedback.id} style={dashStyle.feedbackBox}>
              <Text style={dashStyle.feedbackUser}>{feedback.user}</Text>
              <Text style={dashStyle.feedbackContent}>{feedback.content}</Text>
              <Text style={dashStyle.feedbackRating}>{feedback.rating} ★</Text>
            </View>
          ))}
        </View>

        {/* Quick Access to Live Show */}
        {/* <TouchableOpacity
          style={[baseStyle.liveShowButton, { backgroundColor: selectedTheme.buttonPrimary }]}
          onPress={() => navigation.navigate('LiveShowScreen')}
        >
          <IconLib.Video size={20} color={selectedTheme.textLight} />
          <Text style={dashStyle.liveShowText}>{t('Go Live')}</Text>
        </TouchableOpacity> */}
      </View>
    </ScrollView>
  );
};

export default VendorDashboard;
