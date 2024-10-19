import React from 'react';
import { ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';

interface Reaction {
  emoji: string;
  label: string;
}

interface ReactionBarProps {
  reactions: Reaction[];
  onReactionPress: (label: string) => void;
  iconSize?: number; // Optional: for customizing the size of the emojis
}

const ReactionBar: React.FC<ReactionBarProps> = ({
  reactions,
  onReactionPress,
  iconSize = 32, // Default size if not provided
}) => {
  return (
    <ScrollView horizontal={true} contentContainerStyle={styles.reactionBar}>
      {reactions.map((reaction) => (
        <TouchableOpacity
          key={reaction.label}
          onPress={() => onReactionPress(reaction.label)}
        >
          <Text style={{ fontSize: iconSize, marginHorizontal: 5 }}>
            {reaction.emoji}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  reactionBar: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingVertical: 5,
  },
});

export default ReactionBar;
