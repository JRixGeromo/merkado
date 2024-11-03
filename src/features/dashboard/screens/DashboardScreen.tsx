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
import { commonStyles } from '../../../styles/commonStyles';
import { layoutStyles } from '../../../styles/layoutStyles';
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

const VendorDashboard = () => {
  const themeType = useAppSelector(state => state.theme.theme);
  const commonStyle = commonStyles(themeType);
  const layoutStyle = layoutStyles(themeType);
  const selectedTheme = appTheme[themeType];
  const { t } = useTranslation();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

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
          layoutStyle.container,
          layoutStyle.rlPaddingS,
          { backgroundColor: selectedTheme.fullContainerBackgroundColor },
        ]}
      >
        {/* Dashboard Metrics */}
        <View style={[layoutStyle.verticalSpacerM]}>
          <View style={[layoutStyle.columnsInside, layoutStyle.verticalSpacerS]}>
            <View style={[commonStyle.metricBox]}>
              <Text style={commonStyle.largeText}>{t('Total Sales')}</Text>
              <Text style={commonStyle.metricValue}>₱{dashboardMetrics.totalSales}</Text>
            </View>
            <View style={[commonStyle.metricBox]}>
              <Text style={commonStyle.largeText}>{t('Total Orders')}</Text>
              <Text style={commonStyle.metricValue}>{dashboardMetrics.totalOrders}</Text>
            </View>
          </View>
          <View style={[layoutStyle.columnsInside, layoutStyle.verticalSpacerS]}>  
            <View style={[commonStyle.metricBox]}>
              <Text style={commonStyle.largeText}>{t('Avg. Rating')}</Text>
              <Text style={commonStyle.metricValue}>{dashboardMetrics.avgRating} ★</Text>
            </View>
            <View style={[commonStyle.metricBox]}>
              <Text style={commonStyle.largeText}>{t('Followers')}</Text>
              <Text style={commonStyle.metricValue}>{dashboardMetrics.followers}</Text>
            </View>
          </View>
        </View>

         {/* Reaction Metrics */}
        <View style={{ marginTop: 20 }}>
          {/* <Text style={layoutStyle.largeText}>{t('Reactions')}</Text> */}
          <View style={[layoutStyle.columnsInside, { marginTop: 10 }]}>
            <View style={[layoutStyle.cols_3, commonStyle.metricBox]}>
              <IconLib.Heart size={24} color={selectedTheme.iconColorPrimary} />
              <Text style={commonStyle.reactionValue}>{reactionMetrics.hearts}</Text>
              <Text style={commonStyle.reactionLabel}>{t('Hearts')}</Text>
            </View>
            <View style={[layoutStyle.cols_3, commonStyle.metricBox]}>
              <IconLib.Share size={24} color={selectedTheme.iconColorPrimary} />
              <Text style={commonStyle.reactionValue}>{reactionMetrics.shares}</Text>
              <Text style={commonStyle.reactionLabel}>{t('Shares')}</Text>
            </View>
            <View style={[layoutStyle.cols_3, commonStyle.metricBox]}>
              <IconLib.Chat_O size={24} color={selectedTheme.iconColorPrimary} />
              <Text style={commonStyle.reactionValue}>{reactionMetrics.comments}</Text>
              <Text style={commonStyle.reactionLabel}>{t('Comments')}</Text>
            </View>
          </View>
        </View>

       {/* Recent Orders */}
       <View style={{ marginTop: 30 }}>
          <Text style={layoutStyle.largeText}>{t('Recent Orders')}</Text>
          {recentOrders.map(order => (
            <View key={order.id} style={commonStyle.orderBox}>
              <Text style={commonStyle.orderText}>
                {order.customerName} - ₱{order.amount}
              </Text>
              <Text style={[commonStyle.orderStatus, { color: selectedTheme.textAccent }]}>
                {order.status}
              </Text>
            </View>
          ))}
        </View>


        {/* Customer Feedback */}
        <View style={{ marginTop: 30 }}>
          <Text style={layoutStyle.largeText}>{t('Customer Feedback')}</Text>
          {recentFeedback.map(feedback => (
            <View key={feedback.id} style={commonStyle.feedbackBox}>
              <Text style={commonStyle.feedbackUser}>{feedback.user}</Text>
              <Text style={commonStyle.feedbackContent}>{feedback.content}</Text>
              <Text style={commonStyle.feedbackRating}>{feedback.rating} ★</Text>
            </View>
          ))}
        </View>

        {/* Quick Access to Live Show */}
        {/* <TouchableOpacity
          style={[layoutStyle.liveShowButton, { backgroundColor: selectedTheme.buttonPrimary }]}
          onPress={() => navigation.navigate('LiveShowScreen')}
        >
          <IconLib.Video size={20} color={selectedTheme.textLight} />
          <Text style={commonStyle.liveShowText}>{t('Go Live')}</Text>
        </TouchableOpacity> */}
      </View>
    </ScrollView>
  );
};

export default VendorDashboard;
