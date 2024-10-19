import React from 'react';
import { ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';

interface Reaction {
  emoji: string;
  label: string;
}

interface ReactionBarProps {
  reactions: Reaction[];
  onReactionPress: (reaction: Reaction) => void; // Pass full reaction object
}

const ReactionBar: React.FC<ReactionBarProps> = ({ reactions, onReactionPress }) => {
  return (
    <ScrollView horizontal={true} contentContainerStyle={styles.reactionBar}>
      {reactions.map((reaction) => (
        <TouchableOpacity
          key={reaction.label}
          onPress={() => onReactionPress(reaction)} // Pass the full reaction object
        >
          <Text style={{ fontSize: 32, marginHorizontal: 5 }}>{reaction.emoji}</Text>
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
