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
import {
  normalizeFontSize,
  normalizeHeight,
  normalizeWidth,
} from '../../../utils/responsive'; // Import responsive utilities
import { RouteProp, useRoute } from '@react-navigation/native';
import { useAppSelector } from '../../../hooks/reduxHooks';
import ReactionBar from '../../../components/ReactionBar';
import CommentInput from '../../../components/CommentInput';
import CustomButton from '../../../components/CustomButton';
import { theme as appTheme } from '../../../styles/theme';
import { marketStyles } from '../styles/marketStyles';
import { baseStyles, SHARED } from '../../../styles/baseStyles';
import { useTranslation } from 'react-i18next';
import dayjs from 'dayjs'; // Import day.js for date formatting
import relativeTime from 'dayjs/plugin/relativeTime';
import IconLib from '../../../components/IconLib'; // Import your Icon Library
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../navigationTypes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { reactions } from '../../../constants/reactions';
import GradientBG from '../../../components/GradientBG'; // Gradient background wrapper

dayjs.extend(relativeTime);

type DetailsScreenRouteProp = RouteProp<
  { params: { item: any; type: 'product' | 'store' } },
  'params'
>;

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'DetailsScreen'
>;
const DetailsScreen: React.FC = () => {
  const route = useRoute<DetailsScreenRouteProp>();
  const { item, type } = route.params;

  const themeType = useAppSelector(state => state.theme.theme);
  const marketStyle = marketStyles(themeType); // This is fine
  const baseStyle = baseStyles(themeType); // Rename this to avoid conflict

  const myTheme = appTheme[themeType];

  const navigation = useNavigation<NavigationProp>(); // Ensure proper type for navigation

  const { t } = useTranslation();

  const [showReactions, setShowReactions] = useState(false); // Post reactions
  const [showCommentReactions, setShowCommentReactions] = useState<{
    [key: number]: boolean;
  }>({});
  const [selectedCommentReactions, setSelectedCommentReactions] = useState<{
    [key: number]: { label: string; emoji: string };
  }>({});
  const [selectedPostReaction, setSelectedPostReaction] = useState<
    string | null
  >(null); // Track post reaction

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

  const handleReactionPress = (reaction: { label: string; emoji: string }) => {
    setSelectedPostReaction(reaction.emoji); // Use emoji where needed
    setShowReactions(false); // Hide reaction bar
  };

  const toggleCommentReactions = (commentId: number) => {
    setShowCommentReactions(prev => ({
      ...prev,
      [commentId]: !prev[commentId],
    })); // Toggle reaction bar for the specific comment
  };

  const handleCommentReactionPress = (
    commentId: number,
    reaction: { label: string; emoji: string },
  ) => {
    setSelectedCommentReactions(prev => ({
      ...prev,
      [commentId]: reaction, // Store both label and emoji
    }));
    setShowCommentReactions(prev => ({ ...prev, [commentId]: false })); // Hide reaction bar
  };

  // Toggle reply input form visibility
  const handleReplyToggle = (commentId: number) => {
    setReplyingTo(prevReplyingTo =>
      prevReplyingTo === commentId ? null : commentId,
    );
  };

  const handleReplySend = (commentId: number, reply: string) => {
    setReplies(prevReplies => ({
      ...prevReplies,
      [commentId]: [...(prevReplies[commentId] || []), reply],
    }));
    setReplyingTo(null); // Hide reply input after sending the reply
  };
  const handleBuy = () => {};
  const handleFollow = () => {};

  return (
    <GradientBG>
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View
        style={[
          baseStyle.container,
          { paddingHorizontal: normalizeWidth(10)},
        ]}
      >
        {/* Product/Vendor Image */}
        <View style={marketStyle.bannerImageWrapper}>
            {type === 'product' && item.onSale && (
              <View style={marketStyle.saleBanner}>
                <Text
                  style={[
                    baseStyle.mediumText,
                    { color: myTheme.text2nd },
                  ]}
                >
                  ON SALE! 50% off
                </Text>
              </View>
            )}
          <Image
            source={{ uri: item.imageUrl }}
            style={marketStyle.bannerContentImage}
          />

          {type === 'product' && (
            <View style={marketStyle.priceContainer}>
              <Text
                style={[
                  baseStyle.xLargeText,
                  { color: myTheme.textPriceBanner },
                ]}
              >
                {item.price}
              </Text>
            </View>
          )}
        </View>

        <View style={baseStyle.columnsInside}>
          <View style={[baseStyle.cols_2, baseStyle.lPaddingS]}>
            {selectedPostReaction && (
              <View
                style={[
                  marketStyle.selectedReactionWrapper,
                  { marginTop: -12 },
                ]}
              >
                <Text style={marketStyle.selectedReactionText}>
                  {selectedPostReaction}
                </Text>
              </View>
            )}
          </View>
          <View
            style={[
              baseStyle.cols_2,
              baseStyle.alignRight,
              //baseStyle.rPaddingS,
            ]}
          >
            <Text
              style={[baseStyle.smallText, { color: myTheme.textBlur }]}
            >
              46 {t('comments')}
            </Text>
          </View>
        </View>

        <View style={[baseStyle.columnsInside, baseStyle.verticalSpacerS]}>
          <View style={[baseStyle.cols_75]}>
            <Text
              style={[
                baseStyle.mediumText,
                { color: myTheme.text1st },
              ]}
            >
              {item.name}
            </Text>
          </View>
          <View
            style={[
              baseStyle.cols_25,
              baseStyle.alignRight,
            ]}
          >
            <IconLib.Star size={20} color="gold" />
            <Text
              style={[baseStyle.smallText, { color: myTheme.textBlur }]}
            >
              {' '}
              {item.rating}
            </Text>
          </View>
        </View>

        {type === 'store' && item.location && (
          <>
            <View style={[baseStyle.columnsInside, baseStyle.verticalSpacerS]}>
              <Text
                style={[
                  baseStyle.smallText,
                  { color: myTheme.text2nd },
                ]}
              >
                {item.description}
              </Text>
            </View>
            <View style={[baseStyle.columnsInside, baseStyle.verticalSpacerS]}>
              <View style={[baseStyle.cols_75]}>
                <Text
                  style={[
                    baseStyle.smallText,
                    { color: myTheme.text2nd },
                  ]}
                >
                  {item.location}
                </Text>
              </View>
              <View
                style={[
                  baseStyle.cols_25,
                  baseStyle.alignRight,
                  baseStyle.rPaddingS,
                ]}
              >
                <Text
                  style={[
                    baseStyle.smallText,
                    { color: myTheme.textBlur },
                  ]}
                >
                  {item.distance}
                </Text>
              </View>
            </View>
          </>
        )}

        {type === 'product' && (
          <>
            <View style={[baseStyle.columnsInside]}>
              <Text
                style={[
                  baseStyle.smallText,
                  { color: myTheme.textGray },
                ]}
              >
                {item.description}
              </Text>
            </View>
            <View style={[baseStyle.columnsInside, baseStyle.verticalSpacerXS]}>
              <View style={[baseStyle.cols_75]}>
                <Text
                  style={[
                    baseStyle.smallText,
                    { color: myTheme.textGray },
                  ]}
                >
                  {item.location}
                </Text>
              </View>

              <View
                style={[
                  baseStyle.cols_25,
                  baseStyle.alignRight,
                ]}
              >
                <Text
                  style={[
                    baseStyle.smallText,
                    { color: myTheme.textGray },
                  ]}
                >
                  {item.distance}
                </Text>
              </View>
            </View>
          </>
        )}

        <View style={[baseStyle.columnsInside, baseStyle.verticalSpacerL]}>
          <View style={[baseStyle.cols_2]}>
            {type === 'product' ? (
              <Text>
                <CustomButton
                  style={{
                    margin: 5,
                    paddingTop: 5,
                    paddingBottom: 5,
                    paddingRight: 10,
                    paddingLeft: 10,
                  }}
                  title={t('Buy')} // Text inside the button
                  onPress={handleBuy} // Function to handle the press event
                  color={myTheme.buttonText1st} // Text color, using theme values
                  backgroundColor={myTheme.button1st} // Button background color, using theme values
                  borderRadius={2} // Set the border radius for rounded corners
                  iconName="Cart_O" // Icon from IconLib (Cart icon)
                  iconSize={SHARED.fontXxL} // Size of the Cart icon
                  textSize={12} // Font size of the text inside the button
                />
              </Text>
            ) : (
              <Text>
                <CustomButton
                  style={{
                    margin: 5,
                    paddingTop: 5,
                    paddingBottom: 5,
                    paddingRight: 10,
                    paddingLeft: 10,
                  }}
                  title={t('Follow')} // Text inside the button
                  onPress={handleFollow} // Function to handle the press event
                  color={myTheme.buttonText1st} // Text color, using theme values
                  backgroundColor={myTheme.buttonInfo} // Button background color, using theme values
                  borderRadius={2} // Set the border radius for rounded corners
                  iconName="PersonAdd" // Icon from IconLib (Cart icon)
                  iconSize={SHARED.fontXxL} // Size of the Cart icon
                  textSize={12} // Font size of the text inside the button
                />
              </Text>
            )}
          </View>

          <View
            style={[
              baseStyle.cols_2,
              baseStyle.alignRight,
              { flexDirection: 'row' },
            ]}
          >
            <TouchableOpacity onPress={() => setShowReactions(!showReactions)}>
              <IconLib.ThumbsUp_O
                size={22}
                color={myTheme.iconColorGray}
                style={baseStyle.rPaddingL}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <IconLib.Chat_O
                size={22}
                color={myTheme.iconColorGray}
                style={baseStyle.rPaddingL}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <IconLib.Share_O
                size={22}
                color={myTheme.iconColorGray}
                style={baseStyle.rPaddingL}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('FrontStoreScreen', { vendorId: 1 })
              }
            >
              <IconLib.Store_O
                size={22}
                color={myTheme.iconColorGray}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* ReactionBar */}
        {showReactions && (
          <View style={marketStyle.reactionBarSection}>
            <ReactionBar
              reactions={reactions}
              onReactionPress={handleReactionPress}
            />
          </View>
        )}

        {/* Comment Section */}
        <View style={[marketStyle.commentSection]}>
          <View
            style={[
              baseStyle.shadowedContainer,
              { borderColor: myTheme.lineBorderColor },
            ]}
          >
            <CommentInput
              onSend={handleSendComment}
              onAddReaction={handleAddReaction}
              reactions={reactions}
              placeholder={'Write a comment...'}
            />
          </View>
        </View>

        {/* Existing Comments */}
        <View style={marketStyle.commentsList}>
          {[
            {
              id: 1,
              text: 'Nice post! Nice post! Nice post! Nice post! Nice post! Nice post! Nice post! ',
              user: 'User1',
              time: new Date(),
            },
            { id: 2, text: 'Love this!', user: 'User2', time: new Date() },
            { id: 3, text: 'Love this!', user: 'User3', time: new Date() },
            { id: 4, text: 'Love this!', user: 'User4', time: new Date() },
            { id: 5, text: 'Love this!', user: 'User5', time: new Date() },
            { id: 6, text: 'Love this!', user: 'User6', time: new Date() },
            { id: 7, text: 'Love this!', user: 'User7', time: new Date() },
          ].map(comment => (
            <View
              key={comment.id}
              style={[
                baseStyle.shadowedContainer,
                marketStyle.commentContainer,
                { backgroundColor: myTheme.cardBackground },
              ]}
            >
              <View
                style={[
                  baseStyle.rPaddingS,
                  { flexDirection: 'row', alignItems: 'center' },
                ]}
              >
                <Image
                  source={{
                    uri: 'https://randomuser.me/api/portraits/men/1.jpg',
                  }} // Use user's image URL
                  style={marketStyle.userImage}
                />
                {/* Display the user's name beside the image */}
                <Text
                  style={[
                    baseStyle.smallText,
                    { color: myTheme.textDark, marginLeft: 5 },
                  ]}
                >
                  {comment.user}
                </Text>
              </View>
              <View style={marketStyle.commentWrapper}>
                {/* Comment Text */}
                <Text
                  style={[
                    marketStyle.commentTextWrapper,
                    baseStyle.smallText,
                    { color: myTheme.text2nd },
                  ]}
                >
                  {comment.text}
                </Text>

                {/* Display the selected reaction below the comment if available */}
                {selectedCommentReactions[comment.id] && (
                  <View style={marketStyle.selectedReactionWrapper}>
                    <Text style={marketStyle.selectedReactionText}>
                      {selectedCommentReactions[comment.id].emoji}
                    </Text>
                  </View>
                )}

                {/* Time and Thumbs Up Row */}
                <View style={marketStyle.timeAndReactionWrapper}>
                  <Text
                    style={[
                      baseStyle.xSmallText,
                      { color: myTheme.textBlur, marginTop: 3 },
                    ]}
                  >
                    {dayjs(comment.time).fromNow()}
                  </Text>
                  <Text
                    style={[
                      baseStyle.xSmallText,
                      baseStyle.lPaddingS,
                      { color: myTheme.textBlur },
                    ]}
                  >
                    |
                  </Text>
                  <TouchableOpacity
                    onPress={() => toggleCommentReactions(comment.id)}
                    style={baseStyle.lPaddingS}
                  >
                    <Text
                      style={[
                        baseStyle.xSmallText,
                        { color: myTheme.textBlur, marginTop: 3 },
                      ]}
                    >
                      Like
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/* Comment Reaction Bar */}
              {showCommentReactions[comment.id] && (
                <View style={marketStyle.reactionBarSection}>
                  <ReactionBar
                    reactions={reactions}
                    onReactionPress={reaction =>
                      handleCommentReactionPress(comment.id, reaction)
                    } // Passing the full reaction object
                  />
                </View>
              )}

              {/* Reply codes start */}
              {/* Display existing replies */}
              {replies[comment.id]?.map((reply, index) => (
                <View key={index} style={[marketStyle.replyContainer]}>
                  <View style={baseStyle.verticalSpacerM} />
                  <Image
                    source={{
                      uri: 'https://randomuser.me/api/portraits/women/1.jpg',
                    }} // Use user's image URL
                    style={marketStyle.userImage}
                  />
                  <Text
                    style={{ color: myTheme.text2nd, marginTop: 5 }}
                  >
                    {reply}
                  </Text>
                  <Text
                    style={[
                      baseStyle.xSmallText,
                      { color: myTheme.textBlur, marginTop: 3 },
                    ]}
                  >
                    {dayjs(comment.time).fromNow()}
                  </Text>
                </View>
              ))}

              {/* Show the reply input field if replying to this comment */}
              {replyingTo === comment.id && (
                <View style={marketStyle.replyInputWrapper}>
                  <CommentInput
                    onSend={reply => handleReplySend(comment.id, reply)}
                    onAddReaction={handleAddReaction}
                    reactions={reactions}
                    placeholder={'Write your reply...'}
                    backgroundColor={myTheme.cardBackground}
                  />
                </View>
              )}

              {/* Reply Button */}
              <CustomButton
                title={'Reply'} // No text, as you're only displaying an icon
                onPress={() => handleReplyToggle(comment.id)}
                backgroundColor={myTheme.buttonDark} // Assuming you want only the icon and no background
                width={50} // Default width is auto, can be overridden
                color={myTheme.buttonText2nd} // Set the icon color
                borderRadius={0} // Default borderRadius is 15, can be overridden
                //borderColor={myTheme.lineBorderColor}
                textSize={12} // Default text size, can be overridden
                style={{
                  marginTop: 5,
                  paddingTop: 5,
                  paddingBottom: 5,
                  paddingRight: 0,
                  paddingLeft: 0,
                }}
              />

              {/* End: Reply codes */}
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
    </GradientBG>
  );
};

export default DetailsScreen;
