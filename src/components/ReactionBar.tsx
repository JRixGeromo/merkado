import React from 'react';
import { ScrollView, TouchableOpacity, Text } from 'react-native';
import { useTheme } from '../hooks/useTheme';
import { Reaction } from './types/reactionTypes';

interface ReactionBarProps {
  reactions: Reaction[];
  onReactionPress: (reaction: Reaction) => void; // Pass full reaction object
}

const ReactionBar: React.FC<ReactionBarProps> = ({
  reactions,
  onReactionPress,
}) => {
  const { baseStyle } = useTheme();

  return (
    <ScrollView horizontal={true} contentContainerStyle={baseStyle.alignLeft}>
      {reactions.map(reaction => (
        <TouchableOpacity
          key={reaction.label}
          onPress={() => onReactionPress(reaction)} // Pass the full reaction object
        >
          <Text style={{ fontSize: 32, marginHorizontal: 5 }}>
            {reaction.emoji}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default ReactionBar;
