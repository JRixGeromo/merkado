import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useAppSelector } from '../../../hooks/reduxHooks';
import { theme as appTheme } from '../../../styles/theme';
import { useTranslation } from 'react-i18next';

type DetailsScreenRouteProp = RouteProp<{ params: { item: any; type: 'product' | 'store' } }, 'params'>;

const DetailsScreen: React.FC = () => {
  const route = useRoute<DetailsScreenRouteProp>();
  const { item, type } = route.params;

  const themeType = useAppSelector(state => state.theme.theme);
  const selectedTheme = appTheme[themeType];
  const { t } = useTranslation();

  // State to track reactions
  const [showReactions, setShowReactions] = useState(false); // State to handle the reaction bar visibility

  const handleReactionPress = (reaction: string) => {
    setShowReactions(false); // Hide the reaction bar after a reaction is selected
  };

  console.log(item.description);

  return (
    <View style={[styles.container, { backgroundColor: selectedTheme.fullBackgrounColor }]}>
      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        
        {/* "ON SALE! 50% off" Message */}
        {type === 'product' && item.onSale && (
          <View style={styles.saleBanner}>
            <Text style={styles.saleText}>ON SALE! 50% off</Text>
          </View>
        )}

        {/* Product/Vendor Image */}
        <View style={styles.contentImageWrapper}>
          <Image source={{ uri: item.imageUrl }} style={styles.contentImage} />
        </View>

        {/* Information Section */}
        <View style={styles.infoSection}>
          {/* First row with name and reactions */}
          <View style={styles.firstRow}>
            <View style={styles.nameContainer}>
              <Text style={[styles.name, { color: selectedTheme.textPrimary }]}>{item.name}</Text>
            </View>
            <View style={styles.reactionIconContainer}>
              <Icon name="heart-outline" size={24} color={selectedTheme.iconColorPrimary} />
              <Icon name="thumbs-up-outline" size={24} color={selectedTheme.iconColorPrimary} />
            </View>
          </View>

          {/* Second row with location and comments count */}
          <View style={styles.secondRow}>
            {type === 'store' && item.location && (
              <Text style={[styles.location, { color: selectedTheme.textSecondary }]}>{item.location}</Text>
            )}
            {type === 'product' && item.description && (
              <Text style={[styles.description, { color: selectedTheme.textSecondary }]}>{item.description}</Text>
            )}
            <Text style={[styles.commentCount, { color: selectedTheme.textPrimary }]}>
              46 {t('comments')}
            </Text>
          </View>
        </View>

        {/* Price and Rating/Reactions Section */}
        <View style={styles.reactionsContainer}>
          {/* 30% for Price */}
          <View style={styles.priceContainer}>
            {type === 'product' ? (
              <Text>
                {/* Price in red */}
                <Text style={[styles.priceText, { color: 'red' }]}>₱{item.price} </Text>

                {/* Distance in white */}
                <Text style={[styles.priceText, { color: 'white' }]}>{item.distance}</Text>
              </Text>
            ) : (
              <Text style={[styles.priceText, { color: 'white' }]}>{item.distance}</Text>
            )}
          </View>

          {/* 70% for Rating, Reaction Icons, Chat, Spread */}
          <View style={styles.ratingAndIconsContainer}>
            <View style={styles.ratingRow}>
              <Icon name="star" size={20} color="gold" />
              <Text style={[styles.ratingText, { color: selectedTheme.textPrimary }]}>{item.rating}</Text>
            </View>

            <View style={styles.reactionIcons}>
              <TouchableOpacity onPress={() => setShowReactions(!showReactions)}>
                <Icon name="thumbs-up-outline" size={24} color={selectedTheme.iconColorPrimary} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleReactionPress('chat')}>
                <Icon name="chatbubble-outline" size={24} color={selectedTheme.iconColorPrimary} style={styles.reactionSpacing}/>
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon name="share-outline" size={24} color={selectedTheme.iconColorPrimary} style={styles.reactionSpacing}/>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Reaction Bar */}
        {showReactions && (
          <View style={styles.reactionBar}>
            {['heart', 'happy', 'sad', 'angry', 'surprised'].map(reaction => (
              <TouchableOpacity key={reaction} onPress={() => handleReactionPress(reaction)}>
                <Icon name={reaction} size={32} color={selectedTheme.iconColorPrimary} />
              </TouchableOpacity>
            ))}
          </View>
        )}

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
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  saleBanner: {
    position: 'absolute',
    top: 0,
    width: '100%',
    backgroundColor: 'red',
    padding: 5,
    zIndex: 1, // Ensures it appears on top of the image
    alignItems: 'center',
  },
  saleText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
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
  infoSection: {
    paddingHorizontal: 16,
    marginTop: 10,
  },
  firstRow: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Name takes 70% and reactions 30%
    alignItems: 'center',
  },
  nameContainer: {
    flex: 0.7, // Name takes 70% width
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  reactionIconContainer: {
    flex: 0.3, // Reactions take 30% width
    flexDirection: 'row',
    justifyContent: 'flex-end', // Align reactions to the right
  },
  reactionSpacing: {
    marginLeft: 15,
  },
  secondRow: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Location takes 70% and comments count 30%
    marginTop: 6,
  },
  location: {
    flex: 0.7,
    fontSize: 16,
  },
  description: {
    flex: 0.7,
    fontSize: 16,
  },
  commentCount: {
    flex: 0.3,
    textAlign: 'right', // Align comments count to the right
    fontSize: 16,
  },
  reactionsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginVertical: 16,
    alignItems: 'center',
  },
  priceContainer: {
    flex: 0.55, // Price takes 30% width
    justifyContent: 'center',
  },
  priceText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  ratingAndIconsContainer: {
    flex: 0.45, // Rating and reaction icons take 70% width
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    justifyContent: 'flex-end',  // Align to the right
    width: '70%',
    marginRight: 0,  // Ensure no extra space at the right
  },
  reactionBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
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
});
