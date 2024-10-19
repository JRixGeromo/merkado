import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ReactionBar from './ReactionBar'; // Import the reusable ReactionBar component

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
    <View style={styles.commentContainer}>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.commentInput}
          placeholder={placeholder}
          placeholderTextColor="#999"
          value={comment}
          onChangeText={setComment}
          multiline={true}
        />

        <TouchableOpacity style={styles.sendButton} onPress={handleSendComment}>
          <Icon name="send-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.reactionArea}>
        {!showReactionBar && (
          <TouchableOpacity onPress={() => setShowReactionBar(true)} style={styles.thumbsUpButton}>
            <Icon name="thumbs-up-outline" size={24} color="#007bff" />
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
    borderRadius: 20,
    padding: 15,
    marginBottom: 10,
    width: '100%', 
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#222',
    borderRadius: 30,
    paddingLeft: 15,
    width: '100%',
  },
  commentInput: {
    flex: 1,
    color: '#fff',
    paddingVertical: 10,
    fontSize: 16,
    paddingRight: 50,
  },
  sendButton: {
    position: 'absolute',
    right: 15,
    padding: 10,
    backgroundColor: '#007bff',
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
