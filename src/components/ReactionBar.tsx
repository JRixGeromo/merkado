import React from 'react';
import { ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useAppSelector } from '../hooks/reduxHooks'; // Hook to access the theme from Redux
import { layoutStyles } from '../styles/layoutStyles';
import { theme as appTheme } from '../styles/theme';

interface Reaction {
  emoji: string;
  label: string;
}

interface ReactionBarProps {
  reactions: Reaction[];
  onReactionPress: (reaction: Reaction) => void; // Pass full reaction object
}

const ReactionBar: React.FC<ReactionBarProps> = ({
  reactions,
  onReactionPress,
}) => {

  const themeType = useAppSelector(state => state.theme.theme);
  const layoutStyle = layoutStyles(themeType); // Rename this to avoid conflict

  const selectedTheme = appTheme[themeType];


  return (
    <ScrollView horizontal={true} contentContainerStyle={layoutStyle.alignLeft}>
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
