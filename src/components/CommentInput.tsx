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
import { commonStyles } from '../styles/commonStyles';
import { layoutStyles } from '../styles/layoutStyles';
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
  const commonStyle = commonStyles(themeType); // This is fine
  const layoutStyle = layoutStyles(themeType); // Rename this to avoid conflict

  const selectedTheme = appTheme[themeType];

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
        layoutStyle.rowsInside,
        commonStyle.commentFormContainer,
        { backgroundColor: backgroundColor || selectedTheme.formBackgroundColorPrimary }, // Use backgroundColor prop if provided
      ]}
    >
      <View
        style={[
          commonStyle.inputWrapper,
          { backgroundColor: selectedTheme.inputBackgroundColor },
        ]}
      >
        <TextInput
          style={[
            commonStyle.commentInput,
            { color: selectedTheme.textPrimary },
          ]}
          placeholder={placeholder}
          placeholderTextColor={selectedTheme.textPlaceHolderInfo }
          value={comment}
          onChangeText={setComment}
          multiline={true}
        />

        <TouchableOpacity
          style={commonStyle.sendButton}
          onPress={handleSendComment}
        >
          {/* Use IconLib for the send icon */}
          <IconLib.Send_O size={24} color={selectedTheme.iconColorPrimary} />
        </TouchableOpacity>
      </View>

      <View
        style={[
          layoutStyle.columnsInside,
          layoutStyle.alignLeft,
          { paddingTop: 10 },
        ]}
      >
        {!showReactionBar && (
          <TouchableOpacity
            onPress={() => setShowReactionBar(true)}
            style={commonStyle.thumbsUpButton}
          >
            {/* Use IconLib for the thumbs-up icon */}
            <IconLib.ThumbsUp_O size={24} color={selectedTheme.iconColorGray} />
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
