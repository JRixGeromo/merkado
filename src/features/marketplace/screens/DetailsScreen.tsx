import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useAppSelector } from '../../../hooks/reduxHooks';
import { theme as appTheme } from '../../../styles/theme';
import { commonStyles } from '../../../styles/commonStyles';
import CustomButton from '../../../components/CustomButton';
import { useTranslation } from 'react-i18next';

type DetailsScreenRouteProp = RouteProp<{ params: { item: any; type: 'product' | 'store' } }, 'params'>;

const DetailsScreen: React.FC = () => {
  const route = useRoute<DetailsScreenRouteProp>();
  const { item, type } = route.params;

  const themeType = useAppSelector(state => state.theme.theme);
  const selectedTheme = appTheme[themeType];
  const commonStyle = commonStyles(themeType);
  const { t } = useTranslation();

  const handleComment = async () => {
    // Handle comment functionality here
  };

  const handleChat = async () => {
    // Handle chat functionality here
  };

  return (
    <View style={[styles.container, { backgroundColor: selectedTheme.fullBackgrounColor }]}>
      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {/* Product/Vendor Image */}
        <View style={styles.contentImageWrapper}>
          <Image source={{ uri: item.imageUrl }} style={styles.contentImage} />
        </View>

        {/* Information Section */}
        <View style={styles.infoContainer}>
          <Text style={[styles.name, { color: selectedTheme.textPrimary }]}>{item.name}</Text>
          {type === 'product' && item.price !== undefined && (
            <Text style={[styles.price, { color: selectedTheme.textHighlight }]}>₱{item.price}</Text>
          )}
          {type === 'store' && item.location && (
            <Text style={[styles.location, { color: selectedTheme.textSecondary }]}>{item.location}</Text>
          )}
        </View>

        {/* Rating and Reactions */}
        <View style={styles.reactionsContainer}>
          <View style={styles.ratingRow}>
            <Icon name="star" size={20} color="gold" />
            <Text style={[styles.ratingText, { color: selectedTheme.textPrimary }]}>{item.rating}</Text>
          </View>
          <View style={styles.reactionIcons}>
            <TouchableOpacity>
              <Icon name="heart-outline" size={24} color={selectedTheme.iconColorPrimary} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="thumbs-up-outline" size={24} color={selectedTheme.iconColorPrimary} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="share-outline" size={24} color={selectedTheme.iconColorPrimary} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Comment Section */}
        <View style={styles.commentSection}>
          <TextInput
            placeholder={t('Write a comment...')}
            placeholderTextColor={selectedTheme.textSecondary}
            style={[styles.commentInput, { color: selectedTheme.textPrimary }]}
          />
          <TouchableOpacity style={styles.sendButton}>
            <Icon name="send-outline" size={24} color={selectedTheme.iconColorPrimary} />
          </TouchableOpacity>
        </View>

        {/* Existing Comments */}
        <View style={styles.commentsList}>
          <Text style={[styles.commentText, { color: selectedTheme.textPrimary }]}>User1: Nice post!</Text>
          <Text style={[styles.commentText, { color: selectedTheme.textPrimary }]}>User2: Love this!</Text>
        </View>
      </ScrollView>

      {/* Full-Width Buttons */}
      {/* <View style={styles.buttonRow}>
        <CustomButton
          title={t('comment')}
          onPress={handleComment}
          color={selectedTheme.textLight}
          backgroundColor={selectedTheme.buttonInfo}
          borderRadius={2}
          width={"50%"}
        />
        <CustomButton
          title={t('chat')}
          onPress={handleChat}
          color={selectedTheme.textLight}
          backgroundColor={selectedTheme.buttonDark}
          borderRadius={0}
          width={"50%"}
        />
      </View> */}
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentImageWrapper: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  contentImage: {
    width: '100%',
    height: 200,
  },
  infoContainer: {
    padding: 16,
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    marginBottom: 8,
  },
  location: {
    fontSize: 16,
    marginBottom: 8,
  },
  reactionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginVertical: 16,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 16,
    marginLeft: 8,
  },
  reactionIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '40%',
  },
  commentSection: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    alignItems: 'center',
    marginBottom: 20,
  },
  commentInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    paddingHorizontal: 10,
    height: 40,
  },
  sendButton: {
    marginLeft: 10,
  },
  commentsList: {
    paddingHorizontal: 16,
  },
  commentText: {
    fontSize: 14,
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 16,
    backgroundColor: 'black',
  },
});
