import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useAppSelector } from '../../../hooks/reduxHooks';
import { commonStyles } from '../../../styles/commonStyles';
import { layoutStyles } from '../../../styles/layoutStyles';
import { theme as appTheme } from '../../../styles/theme';
import IconLib from '../../../components/IconLib';
import { useTranslation } from 'react-i18next';
import ReactionBar from '../../../components/ReactionBar'; // Assuming ReactionBar is imported
import { launchCamera } from 'react-native-image-picker';

type Message = {
  id: number;
  text?: string; // Optional if the message has no text
  sender: string;
  imageUri?: string; // Add an image URI for messages containing photos
};

type Avatar = {
  id: string;
  avatarUrl: string;
  name?: string; // Optional, if you have a name or label for the avatar
  unreadCount?: number; // Adding unread count for each user
};

const ChatScreen = () => {
  const themeType = useAppSelector(state => state.theme.theme);
  const commonStyle = commonStyles(themeType);
  const layoutStyle = layoutStyles(themeType);
  const selectedTheme = appTheme[themeType];
  const { t } = useTranslation();

  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: 'Hi!', sender: 'user1' },
    { id: 2, text: 'Hello Hello Hello Hello Hello', sender: 'user2' },
    { id: 3, text: 'Good', sender: 'user1' },
    { id: 4, text: 'How’s all', sender: 'user2' },
  ]);

  const [showReactions, setShowReactions] = useState(false);

  const avatars: Avatar[] = [
    { id: 'user1', avatarUrl: 'https://randomuser.me/api/portraits/men/1.jpg', name: 'user1', unreadCount: 2 },
    { id: 'user2', avatarUrl: 'https://randomuser.me/api/portraits/men/2.jpg', name: 'user2', unreadCount: 0 },
    { id: 'user3', avatarUrl: 'https://randomuser.me/api/portraits/women/3.jpg', name: 'user3', unreadCount: 1 },
    { id: 'user4', avatarUrl: 'https://randomuser.me/api/portraits/men/4.jpg', name: 'user4', unreadCount: 0 },
    { id: 'user5', avatarUrl: 'https://randomuser.me/api/portraits/men/1.jpg', name: 'user5' },
    // ... add more avatars if needed
  ];

  const scrollViewRef = useRef<ScrollView>(null);

  const sendMessage = () => {
    if (message.trim()) {
      setMessages(prevMessages => [
        ...prevMessages,
        { id: prevMessages.length + 1, text: message, sender: 'user1' },
      ]);
      setMessage('');
    }
  };

  const sendPhoto = (imageUri: string) => {
    setMessages(prevMessages => [
      ...prevMessages,
      { id: prevMessages.length + 1, imageUri, sender: 'user1' },
    ]);
  };

  const takePhoto = () => {
    launchCamera(
      {
        mediaType: 'photo',
        includeBase64: false,
      },
      (response) => {
        if (response?.assets && response.assets.length > 0) {
          const photo = response.assets[0];
  
          // Check if the photo has a valid uri
          if (photo.uri) {
            sendPhoto(photo.uri); // Only send if the URI is valid
          } else {
            console.error("Photo URI is undefined");
          }
        }
      }
    );
  };
  

  useEffect(() => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

  const appendEmojiToMessage = (emoji: string) => {
    setMessage(prevMessage => prevMessage + emoji);
    setShowReactions(false); // Hide the smileys once an emoji is selected
  };

  const renderMessage = (msg: Message) => (
    <View
      key={msg.id}
      style={[layoutStyle.columnsInside, commonStyle.rPaddingS, commonStyle.lPaddingS, {
        justifyContent: msg.sender === 'user1' ? 'flex-start' : 'flex-end',
      }]}
    >
      {msg.imageUri ? (
        <Image
          source={{ uri: msg.imageUri }}
          style={{ width: 200, height: 200, borderRadius: 10, marginBottom: 10 }}
        />
      ) : (
        <View
          style={{
            backgroundColor: msg.sender === 'user1' ? '#ede7b1' : 'lightblue',
            padding: 10,
            borderRadius: 10,
            marginBottom: 10,
            maxWidth: '75%',
          }}
        >
          <Text style={{ color: 'black' }}>{msg.text}</Text>
        </View>
      )}
    </View>
  );

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

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: selectedTheme.fullContainerBackgrounColor }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={80}
    >
      {/* Chat History Avatars */}
      <View style={{ height: 60, backgroundColor: selectedTheme.cardBackground, flexDirection: 'row' }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {avatars.map(avatar => (
            <View key={avatar.id} style={{ position: 'relative', marginHorizontal: 5, marginVertical: 5 }}>
              <TouchableOpacity>
                <Image
                  source={{ uri: avatar.avatarUrl }}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 25,
                    borderWidth: 2,
                    borderColor: selectedTheme.textPrimary,
                  }}
                />
                {/* Display unread message badge */}
                {(avatar.unreadCount ?? 0) > 0 && (
                <View style={styles.unreadBadge}>
                    <Text style={styles.unreadText}>{avatar.unreadCount}</Text>
                </View>
                )}
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Chat Messages */}
      <ScrollView
        ref={scrollViewRef}
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 10, paddingTop: 10 }}
        onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
      >
        {messages.map(renderMessage)}
      </ScrollView>

      {/* Message Input */}
      <View style={{ position: 'relative', backgroundColor: selectedTheme.cardBackground, paddingTop: 8, paddingBottom: 8 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', paddingHorizontal: 10, marginBottom: 10, marginRight: 5 }}>
          {!showReactions && (
          <TouchableOpacity onPress={() => setShowReactions(true)}>
            <IconLib.ThumbsUp_O size={24} color={selectedTheme.iconColorGray} />
          </TouchableOpacity>
          )}
          <TouchableOpacity onPress={takePhoto} style={{ marginLeft: 10 }}>
            <IconLib.Camera_O size={24} color={selectedTheme.iconColorGray} />
          </TouchableOpacity>
        </View>

        {showReactions && (
          <ReactionBar
            reactions={reactions}
            onReactionPress={(reaction) => appendEmojiToMessage(reaction.emoji)}
          />
        )}

        <View style={[styles.inputContainer, { backgroundColor: selectedTheme.inputBackgroundColor }]}>
          <TextInput
            value={message}
            onChangeText={setMessage}
            placeholder={t('type here ...')}
            placeholderTextColor={selectedTheme.textPlaceHolderInfo}
            style={[commonStyle.input, commonStyle.font14, { flex: 1, color: selectedTheme.textPrimary }]}
            onFocus={() => setShowReactions(false)} // Hide smileys when input is focused
          />
          <TouchableOpacity onPress={sendMessage} style={commonStyle.chatSendButton}>
            <IconLib.Send_O size={24} color={selectedTheme.iconColorPrimary} />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginBottom: 5,
    borderRadius: 25,
  },
  unreadBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  unreadText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default ChatScreen;