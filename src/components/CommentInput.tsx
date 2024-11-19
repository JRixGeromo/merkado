import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';
import { useAppSelector } from '../hooks/reduxHooks';
import ReactionBar from './ReactionBar'; // Import the reusable ReactionBar component
import { compStyles } from './styles/componentStyles'; // Import your style
import { baseStyles } from '../styles/baseStyles';
import { theme as appTheme } from '../styles/theme';
import IconLib from './IconLib'; // Import IconLib for icons

interface Reaction {
  emoji: string;
  label: string;
}

interface CommentInputProps {
  onSend: (comment: string) => void;
  onAddReaction: (reaction: string) => void; // Expect only emoji string here
  reactions: Reaction[];
  placeholder?: string;
  backgroundColor?: string; // New background color prop
}

const CommentInput: React.FC<CommentInputProps> = ({
  onSend,
  onAddReaction,
  reactions,
  placeholder = 'Write a comment...',
  backgroundColor, // Added background color prop
}) => {
  const [comment, setComment] = useState('');
  const [showReactionBar, setShowReactionBar] = useState(false);

  const themeType = useAppSelector(state => state.theme.theme);
  const compStyle = compStyles(themeType); // This is fine
  const baseStyle = baseStyles(themeType); // Rename this to avoid conflict

  const myTheme = appTheme[themeType];

  const handleSendComment = () => {
    if (comment.trim()) {
      onSend(comment);
      setComment(''); // Clear input after sending
    }
  };

  const handleAddReaction = (emoji: string) => {
    setComment(prevComment => `${prevComment} ${emoji}`); // Append emoji to the comment
    onAddReaction(emoji); // Only pass the emoji string here
    setShowReactionBar(false); // Hide the ReactionBar after selecting a reaction
  };

  return (
    <View
      style={[
        baseStyle.rowsInside,
        compStyle.commentFormContainer,
        { backgroundColor: backgroundColor || myTheme.cardBackground }, // Use backgroundColor prop if provided
      ]}
    >
      <View
        style={[
          compStyle.inputWrapper,
          { backgroundColor: myTheme.inputBackgroundColor },
        ]}
      >
        <TextInput
          style={[compStyle.commentInput, { color: myTheme.text1st }]}
          placeholder={placeholder}
          placeholderTextColor={myTheme.textPHolderInfo}
          value={comment}
          onChangeText={setComment}
          multiline={true}
        />

        <TouchableOpacity
          style={compStyle.sendButton}
          onPress={handleSendComment}
        >
          <IconLib.Send_O size={24} color={myTheme.iconColor1st} />
        </TouchableOpacity>
      </View>

      <View
        style={[
          baseStyle.columnsInside,
          baseStyle.alignLeft,
          { paddingTop: 10 },
        ]}
      >
        {!showReactionBar && (
          <TouchableOpacity
            onPress={() => setShowReactionBar(true)}
            style={compStyle.thumbsUpButton}
          >
            <IconLib.ThumbsUp_O size={24} color={myTheme.iconColorGray} />
          </TouchableOpacity>
        )}

        {showReactionBar && (
          <ReactionBar
            reactions={reactions}
            onReactionPress={reaction => handleAddReaction(reaction.emoji)} // Extract the emoji here
          />
        )}
      </View>
    </View>
  );
};

export default CommentInput;
