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
import { commonStyles } from '../../../styles/commonStyles'; // Import your style
import { baseStyles } from '../../../styles/baseStyles';
import ContentCard from '../../../components/ContentCard';
import IconLib from '../../../components/IconLib';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigationTypes';
import GradientBG from '../../../components/GradientBG'; // Gradient background wrapper

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
  const commonStyle = commonStyles(themeType);
  const baseStyle = baseStyles(themeType);
  const myTheme = appTheme[themeType];
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
    <GradientBG>
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View
        style={[
          baseStyle.container,
          baseStyle.rlPaddingS,
        ]}
      >
        {/* Dashboard Metrics */}
        
          <View style={[baseStyle.columnsInside, baseStyle.tMarginS]}>
            <View style={[baseStyle.cols_2, dashStyle.metricBox]}>
              <View style={[dashStyle.metricBoxInner, baseStyle.alignAllItems]}>
                <Text style={[baseStyle.slargeText, {color: myTheme.text2nd}]}>{t('Total Sales')}</Text>
                <Text style={[baseStyle.mediumText, {color: myTheme.text2nd}]}>
                  ₱{dashboardMetrics.totalSales}
                </Text>
              </View>
            </View>
            <View style={[baseStyle.cols_2, dashStyle.metricBox]}>
              <View style={[dashStyle.metricBoxInner, baseStyle.alignAllItems]}>
              <Text style={[baseStyle.slargeText, {color: myTheme.text2nd}]}>{t('Total Orders')}</Text>
              <Text style={[baseStyle.mediumText, {color: myTheme.text2nd}]}>
                {dashboardMetrics.totalOrders}
              </Text>
            </View>
            </View>
          </View>
          <View style={[baseStyle.columnsInside, baseStyle.verticalSpacerS]}>
            <View style={[baseStyle.cols_2, dashStyle.metricBox]}>
            <View style={[dashStyle.metricBoxInner, baseStyle.alignAllItems]}>
              <Text style={[baseStyle.slargeText, {color: myTheme.text2nd}]}>{t('Avg. Rating')}</Text>
              <Text style={[baseStyle.mediumText, {color: myTheme.text2nd}]}>
                {dashboardMetrics.avgRating} ★
              </Text>
              </View>
            </View>
            <View style={[baseStyle.cols_2, dashStyle.metricBox]}>
            <View style={[dashStyle.metricBoxInner, baseStyle.alignAllItems]}>
              <Text style={[baseStyle.slargeText, {color: myTheme.text2nd}]}>{t('Followers')}</Text>
              <Text style={[baseStyle.smallText, {color: myTheme.text2nd}]}>
                {dashboardMetrics.followers}
              </Text>
              </View>
            </View>
          </View>
        

        {/* Reaction Metrics */}
          <Text style={[baseStyle.slargeText, {color: myTheme.text2nd}]}>{t('Reactions')}</Text>
          <View style={[baseStyle.columnsInside]}>
            <View style={[baseStyle.cols_3, dashStyle.metricBox]}>
            <View style={[dashStyle.metricBoxInner, baseStyle.alignAllItems]}>
              <IconLib.Heart size={24} color={myTheme.iconColor2nd} />
              <Text style={[baseStyle.smallText, {color: myTheme.text2nd}]}>
                {reactionMetrics.hearts}
              </Text>
              <Text style={[baseStyle.smallText, {color: myTheme.text2nd}]}>{t('Hearts')}</Text>
            </View>
            </View>
            <View style={[baseStyle.cols_3, dashStyle.metricBox]}>
            <View style={[dashStyle.metricBoxInner, baseStyle.alignAllItems]}>
              <IconLib.Share size={24} color={myTheme.iconColor2nd} />
              <Text style={[baseStyle.smallText, {color: myTheme.text2nd}]}>
                {reactionMetrics.shares}
              </Text>
              <Text style={[baseStyle.smallText, {color: myTheme.text2nd}]}>{t('Shares')}</Text>
            </View>
            </View>
            <View style={[baseStyle.cols_3, dashStyle.metricBox]}>
            <View style={[dashStyle.metricBoxInner, baseStyle.alignAllItems]}>
              <IconLib.Chat_O
                size={24}
                color={myTheme.iconColor2nd}
              />
              <Text style={[baseStyle.smallText, {color: myTheme.text2nd}]}>
                {reactionMetrics.comments}
              </Text>
              <Text style={[baseStyle.smallText, {color: myTheme.text2nd}]}>{t('Comments')}</Text>
            </View>
            </View>
          </View>

        {/* Recent Orders */}
        <View style={{ marginTop: 30 }}>
          <Text style={[baseStyle.slargeText, {color: myTheme.text2nd}]}>{t('Recent Orders')}</Text>
          {recentOrders.map(order => (
            <View key={order.id} style={[baseStyle.columnsInside, dashStyle.orderBox]}>
              <Text style={[baseStyle.cols_2, {color: myTheme.text2nd}]}>
                {order.customerName} - ₱{order.amount}
              </Text>
              <Text style={[baseStyle.cols_2, {textAlign: 'right', color: myTheme.text2nd}]}>
                {order.status}
              </Text>
            </View>
          ))}
        </View>

        {/* Customer Feedback */}
        <View style={{ marginTop: 30 }}>
          <Text style={baseStyle.slargeText}>{t('Customer Feedback')}</Text>
          {recentFeedback.map(feedback => (
            <View key={feedback.id} style={dashStyle.feedbackBox}>
              <Text style={[baseStyle.smallText, {fontWeight: 'bold', color: myTheme.text2nd}]}>{feedback.user}</Text>
              <Text style={[baseStyle.smallText, {color: myTheme.text2nd}]}>{feedback.content}</Text>
              <Text style={[baseStyle.xSmallText, {color: myTheme.text2nd}]}>{feedback.rating} ★</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
    </GradientBG>
  );
};

export default VendorDashboard;
