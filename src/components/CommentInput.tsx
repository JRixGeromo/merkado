import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useAppSelector } from '../hooks/reduxHooks';
import ReactionBar from './ReactionBar'; // Import the reusable ReactionBar component
import { theme as appTheme } from '../styles/theme';

interface Reaction {
  emoji: string;
  label: string;
}

interface CommentInputProps {
  onSend: (comment: string) => void;
  onAddReaction: (reaction: string) => void; // Expect only emoji string here
  reactions: Reaction[];
  placeholder?: string;
}

const CommentInput: React.FC<CommentInputProps> = ({ onSend, onAddReaction, reactions, placeholder = 'Write a comment...' }) => {
  const [comment, setComment] = useState('');
  const [showReactionBar, setShowReactionBar] = useState(false);

  const themeType = useAppSelector((state) => state.theme.theme);
  const selectedTheme = appTheme[themeType];

  const handleSendComment = () => {
    if (comment.trim()) {
      onSend(comment);
      setComment(''); // Clear input after sending
    }
  };

  const handleAddReaction = (emoji: string) => {
    setComment((prevComment) => `${prevComment} ${emoji}`); // Append emoji to the comment
    onAddReaction(emoji); // Only pass the emoji string here
    setShowReactionBar(false); // Hide the ReactionBar after selecting a reaction
  };

  return (
    <View style={[styles.commentContainer, {backgroundColor: selectedTheme.formBackgrounColor}]}>
      <View style={[styles.inputWrapper, {backgroundColor: selectedTheme.inputBackgroundColor}]}>
        <TextInput
          style={[styles.commentInput, {color: selectedTheme.textSecondary}]}
          placeholder={placeholder}
          placeholderTextColor="#999"
          value={comment}
          onChangeText={setComment}
          multiline={true}
        />

        <TouchableOpacity style={styles.sendButton} onPress={handleSendComment}>
          <Icon name="send-outline" size={24} color={selectedTheme.iconColorPrimary} />
        </TouchableOpacity>
      </View>

      <View style={styles.reactionArea}>
        {!showReactionBar && (
          <TouchableOpacity onPress={() => setShowReactionBar(true)} style={styles.thumbsUpButton}>
            <Icon name="thumbs-up-outline" size={24} color={selectedTheme.iconColorGray} />
          </TouchableOpacity>
        )}

        {showReactionBar && (
          <ReactionBar
            reactions={reactions}
            onReactionPress={(reaction) => handleAddReaction(reaction.emoji)} // Extract the emoji here
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  commentContainer: {
    backgroundColor: '#333',
    borderRadius: 2,
    padding: 15,
    marginBottom: 10,
    width: '100%', 
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 30,
    paddingLeft: 15,
    width: '100%',
  },
  commentInput: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 16,
    paddingRight: 50,
  },
  sendButton: {
    position: 'absolute',
    right: 15,
    padding: 10,
    //backgroundColor: '#007bff',
    borderRadius: 20,
  },
  reactionArea: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 10,
  },
  thumbsUpButton: {
    paddingHorizontal: 10,
  },
});

export default CommentInput;
