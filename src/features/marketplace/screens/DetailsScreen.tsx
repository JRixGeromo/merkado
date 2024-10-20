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
import { commonStyles } from '../../../styles/commonStyles';
import { layoutStyles } from '../../../styles/layoutStyles';
import { useTranslation } from 'react-i18next';
import dayjs from 'dayjs'; // Import day.js for date formatting
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

type DetailsScreenRouteProp = RouteProp<
  { params: { item: any; type: 'product' | 'store' } },
  'params'
>;

const DetailsScreen: React.FC = () => {
  const route = useRoute<DetailsScreenRouteProp>();
  const { item, type } = route.params;

const themeType = useAppSelector((state) => state.theme.theme);

const commonStyle = commonStyles(themeType); // This is fine
const layoutStyle = layoutStyles(themeType); // Rename this to avoid conflict

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
    <View style={[layoutStyle.container, { backgroundColor: selectedTheme.fullContainerBackgrounColor }]}>    
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        
        {/* Sale Banner */}
        {type === 'product' && item.onSale && (
          <View style={commonStyle.saleBanner}>
            <Text style={[commonStyle.font14, { color: selectedTheme.textSecondary }]}>ON SALE! 50% off</Text>
          </View>
        )}

        {/* Product/Vendor Image */}
        <View style={commonStyle.bannerImageWrapper}>
          <Image source={{ uri: item.imageUrl }} style={commonStyle.bannerContentImage} />
        </View>
        
        <View style={layoutStyle.columns}>
          <View style={[layoutStyle.cols_2, commonStyle.lPadding]}>
            {selectedPostReaction && (
              <View style={[commonStyle.selectedReactionWrapper, { marginTop: -12}]}>
                <Text style={commonStyle.selectedReactionText}>
                  {selectedPostReaction}
                </Text>
              </View>
            )}
          </View>
          <View style={[layoutStyle.cols_2, commonStyle.rightAlignedItem, commonStyle.rPadding]}>
            
            <Text style={[commonStyle.font12, { color: selectedTheme.textSecondary }]}>
              46 {t('comments')}
            </Text>
          
          </View>
        </View>

        <View style={layoutStyle.dividerWrapper}>
          <View style={layoutStyle.divider} />
        </View>
        
        <View style={layoutStyle.columns}>
          <View style={[layoutStyle.cols_75, commonStyle.lPadding]}>
            <Text style={[commonStyle.font14, { color: selectedTheme.textPrimary }]}>{item.name}</Text>
          </View>
          <View style={[layoutStyle.cols_25, commonStyle.rightAlignedItems, commonStyle.rPadding, { flexDirection: "row" }]}>
            <Icon name="star" size={20} color="gold" />
            <Text style={[commonStyle.font12, { color: selectedTheme.textSecondary }]}>{" "}{item.rating}</Text>
        </View>
        </View> 
        
        <View style={layoutStyle.verticalSpacer} />
        
        <View style={[layoutStyle.column, commonStyle.lPadding]}>
            {type === 'store' && item.location && (
              <Text style={[commonStyle.font12, { color: selectedTheme.textSecondary }]}>
                {item.location}
              </Text>
            )}
            {type === 'product' && item.description && (
              <Text style={[commonStyle.font12, { color: selectedTheme.textSecondary }]}>
                {item.description}
              </Text>
            )}
        </View>  
        
        <View style={layoutStyle.verticalSpacer} />
        
        <View style={layoutStyle.columns}>
          <View style={[layoutStyle.cols_2, commonStyle.lPadding]}>
            {type === 'product' ? (
              <Text>
                <Text style={[commonStyle.font14, { color: selectedTheme.textLight }]}>₱{item.price} </Text>
                <Text style={[commonStyle.font12, { color: selectedTheme.textGray }]}>{" "}{item.distance}</Text>
              </Text>
            ) : (
              <Text style={[commonStyle.font14, { color: selectedTheme.textGray }]}>{item.distance}</Text>
            )}
          </View>

          <View style={[layoutStyle.cols_2, commonStyle.rightAlignedItems, {flexDirection: "row"}]}>
              <TouchableOpacity onPress={() => setShowReactions(!showReactions)}>
                <Icon name="thumbs-up-outline" size={24} color={selectedTheme.iconColorGray} style={commonStyle.rPadding2}/>
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon name="chatbubble-outline" size={24} color={selectedTheme.iconColorPrimary}  style={commonStyle.rPadding2} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon name="arrow-redo-outline" size={24} color={selectedTheme.iconColorSmileys} style={commonStyle.rPadding} />
              </TouchableOpacity>
          </View>
        </View>  

        <View style={layoutStyle.verticalSpacer} />

        {/* ReactionBar */}
        {showReactions && (
          <View style={commonStyle.reactionBarSection}>
            <ReactionBar
              reactions={reactions}
              onReactionPress={handleReactionPress}
            />
          </View>
        )}

        {/* Comment Section */}
        <View style={commonStyle.commentSection}>
          <CommentInput onSend={handleSendComment} onAddReaction={handleAddReaction} reactions={reactions}/>
        </View>

        {/* Existing Comments */}
        <View style={commonStyle.commentsList}>
          {[
            { id: 1, text: 'Nice post! Nice post! Nice post! Nice post! Nice post! Nice post! Nice post! ', user: 'User1', time: new Date() },
            { id: 2, text: 'Love this!', user: 'User2', time: new Date() },
            { id: 3, text: 'Love this!', user: 'User3', time: new Date() },
            { id: 4, text: 'Love this!', user: 'User4', time: new Date() },
            { id: 5, text: 'Love this!', user: 'User5', time: new Date() },
            { id: 6, text: 'Love this!', user: 'User6', time: new Date() },
            { id: 7, text: 'Love this!', user: 'User7', time: new Date() },
          ].map((comment) => (
            <View key={comment.id} style={[commonStyle.commentContainer, {backgroundColor: selectedTheme.commentBackgroundColor}]}>
              <Image
                source={{ uri: "https://randomuser.me/api/portraits/men/1.jpg" }} // Use user's image URL
                style={commonStyle.userImage}
              />
              
              <View style={commonStyle.commentWrapper}>
                {/* Comment Text */}
                <Text style={[commonStyle.commentTextWrapper, commonStyle.font12, { color: selectedTheme.textSecondary }]}>
                  {comment.user}: {comment.text}
                </Text>

                {/* Display the selected reaction below the comment if available */}
                {selectedCommentReactions[comment.id] && (
                  <View style={commonStyle.selectedReactionWrapper}>
                    <Text style={commonStyle.selectedReactionText}>
                      {selectedCommentReactions[comment.id].emoji}
                    </Text>
                  </View>
                )}

                {/* Time and Thumbs Up Row */}
                <View style={commonStyle.timeAndReactionWrapper}>
                  <Text style={[commonStyle.font12, { color: selectedTheme.textGray }]}>
                    {dayjs(comment.time).fromNow()}
                  </Text>
                  <Text style={[commonStyle.font12, commonStyle.lPadding, { color: selectedTheme.textGray }]}>
                    |
                  </Text>
                  <TouchableOpacity onPress={() => toggleCommentReactions(comment.id)} style={commonStyle.lPadding}>
                    {/* <Icon name="thumbs-up-outline" size={18} color={selectedTheme.iconColorGray} /> */}
                    
                    <Text style={[commonStyle.font12, { color: selectedTheme.textGray }]}>
                      Like
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>


              {/* Comment Reaction Bar */}
              {showCommentReactions[comment.id] && (
                <View style={commonStyle.reactionBarSection}>
                 <ReactionBar
                    reactions={reactions}
                    onReactionPress={(reaction) => handleCommentReactionPress(comment.id, reaction)} // Passing the full reaction object
                  />
                </View>
              )}

              {/* Reply codes start */}
              {/* Display existing replies */}
              {replies[comment.id]?.map((reply, index) => (
                <View key={index} style={[commonStyle.replyContainer]}>
                  <View style={layoutStyle.verticalSpacer} />
                  <Image
                    source={{ uri: "https://randomuser.me/api/portraits/women/1.jpg" }} // Use user's image URL
                    style={commonStyle.userImage}
                  />
                  <Text style={{color: selectedTheme.textSecondary, marginTop: 5 }}>{reply}</Text>
                  <Text style={[commonStyle.font12, { color: selectedTheme.textGray, marginTop: 3 }]}>
                    {dayjs(comment.time).fromNow()}
                  </Text>
                </View>
              ))}


              {/* Show the reply input field if replying to this comment */}
              {replyingTo === comment.id && (
                <View style={commonStyle.replyInputWrapper}>
                  <CommentInput
                    onSend={(reply) => handleReplySend(comment.id, reply)}
                    onAddReaction={handleAddReaction}
                    reactions={reactions}
                  />
                </View>
              )}

              {/* Reply Button */}
              <TouchableOpacity onPress={() => setReplyingTo(comment.id)}>
                <Text style={{color: selectedTheme.textGray, marginTop: 5 }}>Reply</Text>
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

