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

type Message = {
  id: number;
  text: string;
  sender: string;
};

type Avatar = {
  id: string;
  avatarUrl: string;
  name?: string; // Optional, if you have a name or label for the avatar
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
    { id: 2, text: 'Hello', sender: 'user2' },
    { id: 3, text: 'Good', sender: 'user1' },
    { id: 4, text: 'How’s all', sender: 'user2' },
  ]);

  const [showReactions, setShowReactions] = useState(false);

  const avatars: Avatar[] = [
    { id: 'user1', avatarUrl: 'https://randomuser.me/api/portraits/men/1.jpg', name: 'user1' },
    { id: 'user2', avatarUrl: 'https://randomuser.me/api/portraits/men/2.jpg', name: 'user2' },
    { id: 'user3', avatarUrl: 'https://randomuser.me/api/portraits/women/3.jpg', name: 'user3' },
    { id: 'user4', avatarUrl: 'https://randomuser.me/api/portraits/men/4.jpg', name: 'user4' },
    { id: 'user5', avatarUrl: 'https://randomuser.me/api/portraits/men/5.jpg', name: 'user5' },
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

  // Scroll to the bottom whenever messages are updated
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
        layoutStyle.columnsInside,
        commonStyle.rPaddingS,
        commonStyle.lPaddingS,
        { justifyContent: msg.sender === 'user1' ? 'flex-start' : 'flex-end' },
      ]}
    >
      <View
        style={{
          backgroundColor: msg.sender === 'user1' ? 'grey' : 'lightblue',
          padding: 10,
          borderRadius: 10,
          marginBottom: 10,
          maxWidth: '75%',
        }}
      >
        <Text style={{ color: 'black' }}>{msg.text}</Text>
      </View>
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
      <View style={{ height: 50, backgroundColor: selectedTheme.cardBackground, flexDirection: 'row' }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {avatars.map(avatar => (
            <TouchableOpacity key={avatar.id}>
              <Image
                source={{ uri: avatar.avatarUrl }}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  marginHorizontal: 5,
                  borderWidth: 2,
                  borderColor: selectedTheme.textPrimary,
                }}
              />
            </TouchableOpacity>
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
      <View style={{ position: 'relative', backgroundColor: "#ccc", paddingTop: 8, paddingBottom: 8 }}>
        <View style={[styles.inputContainer, { backgroundColor: selectedTheme.inputBackgroundColor }]}>
          <TextInput
            value={message}
            onChangeText={setMessage}
            placeholder={t('type here ...')}
            placeholderTextColor={selectedTheme.textSecondary}
            style={[commonStyle.input, { flex: 1, color: selectedTheme.textPrimary }]}
            onFocus={() => setShowReactions(false)} // Hide smileys when input is focused
          />
          <TouchableOpacity onPress={sendMessage} style={commonStyle.chatSendButton}>
            <IconLib.Send_O size={24} color={selectedTheme.iconColorPrimary} />
          </TouchableOpacity>
        </View>

        {!showReactions && (
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, marginTop: 5 }}>
            <TouchableOpacity onPress={() => setShowReactions(true)}>
              <IconLib.ThumbsUp_O size={24} color={selectedTheme.iconColorPrimary} />
            </TouchableOpacity>
          </View>
        )}

        {showReactions && (
          <ReactionBar
            reactions={reactions}
            onReactionPress={(reaction) => appendEmojiToMessage(reaction.emoji)}
          />
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderTopWidth: 1,
    marginHorizontal: 10,
    marginBottom: 5,
    borderRadius: 25,
  },
  sendButton: {
    marginLeft: 10,
    borderRadius: 25,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ChatScreen;
