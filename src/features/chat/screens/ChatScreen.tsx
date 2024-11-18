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
import { chatStyles } from '../styles/chatStyles'; // Import your style
import { commonStyles } from '../../../styles/commonStyles';
import { baseStyles } from '../../../styles/baseStyles';
import { theme as appTheme } from '../../../styles/theme';
import IconLib from '../../../components/IconLib';
import { useTranslation } from 'react-i18next';
import ReactionBar from '../../../components/ReactionBar'; // Assuming ReactionBar is imported
import { launchCamera } from 'react-native-image-picker';
import { reactions } from '../../../constants/reactions';
import GradientBG from '../../../components/GradientBG'; // Gradient background wrapper

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
  const chatStyle = chatStyles(themeType);
  const baseStyle = baseStyles(themeType);
  const commonStyle = commonStyles(themeType);
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
    {
      id: 'user1',
      avatarUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
      name: 'user1',
      unreadCount: 2,
    },
    {
      id: 'user2',
      avatarUrl: 'https://randomuser.me/api/portraits/men/2.jpg',
      name: 'user2',
      unreadCount: 0,
    },
    {
      id: 'user3',
      avatarUrl: 'https://randomuser.me/api/portraits/women/3.jpg',
      name: 'user3',
      unreadCount: 1,
    },
    {
      id: 'user4',
      avatarUrl: 'https://randomuser.me/api/portraits/men/4.jpg',
      name: 'user4',
      unreadCount: 0,
    },
    {
      id: 'user5',
      avatarUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
      name: 'user5',
    },
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
      response => {
        // Handle the case where the user cancels the camera
        if (response.didCancel) {
          console.log('User cancelled the camera');
          return; // Early return if the user cancels
        }

        if (response.assets && response.assets.length > 0) {
          const photo = response.assets[0];
          if (photo.uri) {
            sendPhoto(photo.uri); // Call sendPhoto if the image is valid
          }
        } else if (response.errorCode) {
          console.error('Camera error: ', response.errorMessage); // Handle potential errors
        }
      },
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
      style={[
        baseStyle.columnsInside,
        baseStyle.rPaddingS,
        baseStyle.lPaddingS,
        {
          justifyContent: msg.sender === 'user1' ? 'flex-start' : 'flex-end',
        },
      ]}
    >
      {msg.imageUri ? (
        <Image
          source={{ uri: msg.imageUri }}
          style={{
            width: 200,
            height: 200,
            borderRadius: 10,
            marginBottom: 10,
          }}
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

  return (
    <GradientBG>
      <KeyboardAvoidingView
        style={{
          flex: 1,
        }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={80}
      >
        {/* Chat History Avatars */}
        <View style={chatStyle.avatarBar}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {avatars.map(avatar => (
              <View
                key={avatar.id}
                style={{
                  position: 'relative',
                  marginHorizontal: 5,
                  marginVertical: 5,
                }}
              >
                <TouchableOpacity>
                  <Image
                    source={{ uri: avatar.avatarUrl }}
                    style={chatStyle.chatAvatar}
                  />
                  {/* Display unread message badge */}
                  {(avatar.unreadCount ?? 0) > 0 && (
                    <View style={chatStyle.unreadBadge}>
                      <Text style={chatStyle.unreadText}>
                        {avatar.unreadCount}
                      </Text>
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
          onContentSizeChange={() =>
            scrollViewRef.current?.scrollToEnd({ animated: true })
          }
        >
          {messages.map(renderMessage)}
        </ScrollView>

        {/* Message Input */}
        <View
          style={[
            chatStyle.chatMessagesContainer,
            { borderTopColor: selectedTheme.lineBorderColor, borderWidth: selectedTheme.boxBorderWidth },
          ]}
        >
          <View
            style={[
              baseStyle.alignRight,
              {
                paddingHorizontal: 10,
                marginBottom: 10,
                marginRight: 5,
              },
            ]}
          >
            {!showReactions && (
              <TouchableOpacity onPress={() => setShowReactions(true)}>
                <IconLib.ThumbsUp_O
                  size={24}
                  color={selectedTheme.iconColorGray}
                />
              </TouchableOpacity>
            )}
            <TouchableOpacity onPress={takePhoto} style={{ marginLeft: 10 }}>
              <IconLib.Camera_O size={24} color={selectedTheme.iconColorGray} />
            </TouchableOpacity>
          </View>

          {showReactions && (
            <ReactionBar
              reactions={reactions}
              onReactionPress={reaction => appendEmojiToMessage(reaction.emoji)}
            />
          )}

          <View
            style={[
              chatStyle.chatInputContainer,
              { backgroundColor: selectedTheme.inputBackgroundColor },
            ]}
          >
            <TextInput
              value={message}
              onChangeText={setMessage}
              placeholder={t('type here ...')}
              placeholderTextColor={selectedTheme.textPlaceHolderInfo}
              style={[
                commonStyle.input,
                baseStyle.mediumText,
                { flex: 1, color: selectedTheme.textPrimary },
              ]}
              onFocus={() => setShowReactions(false)} // Hide smileys when input is focused
            />
            <TouchableOpacity
              onPress={sendMessage}
              style={chatStyle.chatSendButton}
            >
              <IconLib.Send_O size={24} color={selectedTheme.iconColorPrimary} />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </GradientBG>
  );
};

export default ChatScreen;
