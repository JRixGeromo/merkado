import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useAppSelector } from '../../../hooks/reduxHooks';
import ReactionBar from '../../../components/ReactionBar';
import CommentInput from '../../../components/CommentInput';
import { theme as appTheme } from '../../../styles/theme';
import { useTranslation } from 'react-i18next';

type DetailsScreenRouteProp = RouteProp<
  { params: { item: any; type: 'product' | 'store' } },
  'params'
>;

const DetailsScreen: React.FC = () => {
  const route = useRoute<DetailsScreenRouteProp>();
  const { item, type } = route.params;

  const themeType = useAppSelector((state) => state.theme.theme);
  const selectedTheme = appTheme[themeType];
  const { t } = useTranslation();

  const [showReactions, setShowReactions] = useState(false); // Post reactions
  const [showCommentReactions, setShowCommentReactions] = useState<{ [key: number]: boolean }>({});
  const [selectedCommentReactions, setSelectedCommentReactions] = useState<{ [key: number]: { label: string, emoji: string } }>({});
  const [selectedPostReaction, setSelectedPostReaction] = useState<string | null>(null); // Track post reaction

  const [replyingTo, setReplyingTo] = useState<number | null>(null); // State to track the comment being replied to
  const [replies, setReplies] = useState<{ [key: number]: string[] }>({}); // Stores replies per comment


  const handleSendComment = (comment: string) => {
    console.log('Sent comment:', comment);
    // Handle the comment send logic here, like making an API call
  };

  const handleAddReaction = (reaction: string) => {
    console.log('Selected reaction:', reaction);
    // Handle adding reaction logic here
  };

  const handleReactionPress = (reaction: { label: string, emoji: string }) => {
    setSelectedPostReaction(reaction.emoji); // Use emoji where needed
    setShowReactions(false); // Hide reaction bar
  };

  const toggleCommentReactions = (commentId: number) => {
    setShowCommentReactions((prev) => ({
      ...prev,
      [commentId]: !prev[commentId],
    })); // Toggle reaction bar for the specific comment
  };

  const handleCommentReactionPress = (commentId: number, reaction: { label: string, emoji: string }) => {
    setSelectedCommentReactions(prev => ({
      ...prev,
      [commentId]: reaction // Store both label and emoji
    }));
    setShowCommentReactions(prev => ({ ...prev, [commentId]: false })); // Hide reaction bar
  };

  const reactions = [
    { emoji: '❤️', label: 'LOVE' },
    { emoji: '😃', label: 'HAPPY' },
    { emoji: '😮', label: 'WOW' },
    { emoji: '😢', label: 'SAD' },
    { emoji: '😐', label: 'MEH' },
    { emoji: '😡', label: 'ANGRY' },
    { emoji: '👍', label: 'LIKE' },
    { emoji: '👎', label: 'DISLIKE' },
    { emoji: '🌶️', label: 'SPICY' },
    { emoji: '🍬', label: 'SWEET' },
    { emoji: '🍪', label: 'CRUNCHY' },
    { emoji: '🧂', label: 'TOO_SALTY' },
    { emoji: '🍭', label: 'TOO_SWEET' },
  ];



  const handleReplySend = (commentId: number, reply: string) => {
    setReplies((prevReplies) => ({
      ...prevReplies,
      [commentId]: [...(prevReplies[commentId] || []), reply],
    }));
    setReplyingTo(null); // Hide reply input after sending the reply
  };


  return (
    <View style={[styles.container, { backgroundColor: selectedTheme.fullContainerBackgrounColor }]}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {/* Sale Banner */}
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
          <View style={styles.firstRow}>
            <View style={styles.nameContainer}>
              <Text style={[styles.name, { color: selectedTheme.textPrimary }]}>{item.name}</Text>
            </View>
            <View style={styles.reactionIconContainer}>
              {/* Display selected reaction above the comment count */}
              {selectedPostReaction && (
                <View style={styles.selectedReactionWrapper}>
                  <Text style={styles.selectedReactionText}>
                    {selectedPostReaction}
                  </Text>
                </View>
              )}
            </View>
          </View>

          <View style={styles.secondRow}>
            {type === 'store' && item.location && (
              <Text style={[styles.location, { color: selectedTheme.textSecondary }]}>
                {item.location}
              </Text>
            )}
            {type === 'product' && item.description && (
              <Text style={[styles.description, { color: selectedTheme.textSecondary }]}>
                {item.description}
              </Text>
            )}
            <Text style={[styles.commentCount, { color: selectedTheme.textSecondary }]}>
              46 {t('comments')}
            </Text>
          </View>
        </View>

        {/* Price and Rating Section */}
        <View style={styles.reactionsContainer}>
          <View style={styles.priceContainer}>
            {type === 'product' ? (
              <Text>
                <Text style={[styles.priceText, { color: selectedTheme.textHighlight }]}>₱{item.price} </Text>
                <Text style={[styles.priceText, { color: selectedTheme.textSecondary }]}>{item.distance}</Text>
              </Text>
            ) : (
              <Text style={[styles.priceText, { color: selectedTheme.textSecondary }]}>{item.distance}</Text>
            )}
          </View>

          <View style={styles.ratingAndIconsContainer}>
            <View style={styles.ratingRow}>
              <Icon name="star" size={20} color="gold" />
              <Text style={[styles.ratingText, { color: selectedTheme.textSecondary }]}>{item.rating}</Text>
            </View>

            <View style={styles.reactionIcons}>
              <TouchableOpacity onPress={() => setShowReactions(!showReactions)}>
                <Icon name="thumbs-up-outline" size={24} color={selectedTheme.iconColorGray} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon name="chatbubble-outline" size={24} color={selectedTheme.iconColorPrimary}  style={styles.reactionSpacing} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon name="share-outline" size={24} color={selectedTheme.iconColorSmileys}  style={styles.reactionSpacing} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* ReactionBar */}
        {showReactions && (
          <View style={styles.reactionBarSection}>
            <ReactionBar
              reactions={reactions}
              onReactionPress={handleReactionPress}
            />
          </View>
        )}

        {/* Comment Section */}
        <View style={styles.commentSection}>
          <CommentInput onSend={handleSendComment} onAddReaction={handleAddReaction} reactions={reactions}/>
        </View>

        {/* Existing Comments */}
        <View style={styles.commentsList}>
          {[
            { id: 1, text: 'Nice post! Nice post! Nice post! Nice post! Nice post! Nice post! Nice post! Nice post! Nice post! Nice post! Nice post! Nice post!', user: 'User1' },
            { id: 2, text: 'Love this!', user: 'User2' },
            { id: 3, text: 'Love this!', user: 'User3' },
            { id: 4, text: 'Love this!', user: 'User4' },
            { id: 5, text: 'Love this!', user: 'User5' },
            { id: 6, text: 'Love this!', user: 'User6' },
            { id: 7, text: 'Love this!', user: 'User7' },
          ].map((comment) => (
            <View key={comment.id} style={[styles.commentContainer, {backgroundColor: selectedTheme.commentBackgroundColor}]}>
              <View style={styles.commentWrapper}>
                <Text style={[styles.commentTextWrapper, { color: selectedTheme.textSecondary }]}>
                  {comment.user}: {comment.text}
                </Text>
                <TouchableOpacity onPress={() => toggleCommentReactions(comment.id)}>
                  <Icon name="thumbs-up-outline" size={24} color={selectedTheme.iconColorGray} />
                </TouchableOpacity>
              </View>


              {/* Comment Reaction Bar */}
              {showCommentReactions[comment.id] && (
                <View style={styles.reactionBarSection}>
                 <ReactionBar
                    reactions={reactions}
                    onReactionPress={(reaction) => handleCommentReactionPress(comment.id, reaction)} // Passing the full reaction object
                  />
                </View>
              )}

              {/* Display the selected reaction below the comment if available */}
              {selectedCommentReactions[comment.id] && (
                <View style={styles.selectedReactionWrapper}>
                  <Text style={styles.selectedReactionText}>
                    {selectedCommentReactions[comment.id].emoji}
                  </Text>
                </View>
              )}

              {/* Reply codes start */}

              {/* Display existing replies */}
              {replies[comment.id]?.map((reply, index) => (
                <View key={index} style={styles.replyContainer}>
                  <Text style={[styles.replyText, {color: selectedTheme.textSecondary }]}>Reply: {reply}</Text>
                </View>
              ))}


              {/* Show the reply input field if replying to this comment */}
              {replyingTo === comment.id && (
                <View style={styles.replyInputWrapper}>
                  <CommentInput
                    onSend={(reply) => handleReplySend(comment.id, reply)}
                    onAddReaction={handleAddReaction}
                    reactions={reactions}
                  />
                </View>
              )}
              
              {/* Reply Button */}
              <TouchableOpacity onPress={() => setReplyingTo(comment.id)}>
                <Text style={[styles.replyText, {color: selectedTheme.textGray }]}>Reply</Text>
              </TouchableOpacity>

              {/* End: Reply codes */}
            </View>
          ))}
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
    justifyContent: 'flex-end', // Align to the right
    width: '70%',
    marginRight: 0, // Ensure no extra space at the right
  },
  reactionBar: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingVertical: 5,
  },
  reactionBarSection: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    alignItems: 'center',
    marginBottom: 5,
  },
  selectedReactionWrapper: {
    marginTop: 5, // Add some space between the comment and the reaction
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectedReactionText: {
    fontSize: 20, // Adjust text size for reaction display
    color: 'gray', // You can customize the color here
  },
  commentSection: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    alignItems: 'center',
    marginBottom: 5,
  },
  commentsList: {
    paddingHorizontal: 16, // Adjust padding for the comment list
  },
  commentContainer: {
    borderRadius: 10, // Rounded corners for the container
    padding: 10, // Padding inside the container
    marginBottom: 10, // Margin between comments
  },
  commentWrapper: {
    flexDirection: 'row', // Arrange text and icon in a row
    justifyContent: 'space-between', // Space between text and icon
    alignItems: 'center', // Vertically center items
  },
  commentTextWrapper: {
    flex: 1, // Text will take up the remaining space
    marginRight: 10, // Margin to create space between text and icon
    fontSize: 14, // Adjust text size
    lineHeight: 18, // Adjust line height for better readability
  },
  replyText: {
    marginTop: 5,
  },
  replyInputWrapper: {
    marginLeft: 20,
    marginTop: 10,
  },
  replyContainer: {
    marginLeft: 20,
    marginTop: 5,
    paddingLeft: 10,
    borderLeftWidth: 2,
    borderLeftColor: '#ddd',
  },
});
