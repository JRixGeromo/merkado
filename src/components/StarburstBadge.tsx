import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const StarburstBadge: React.FC<{ text: string }> = ({ text }) => {
  return (
    <View style={styles.container}>
      <Svg width="70" height="70" viewBox="0 0 100 100">
        <Path
          d="M50 0 
             L60 30 
             L90 30 
             L65 50 
             L75 80 
             L50 60 
             L25 80 
             L35 50 
             L10 30 
             L40 30 
             Z"
          fill="#FF5252"
        />
      </Svg>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 70,
    height: 70,
  },
  text: {
    position: 'absolute',
    top: '45%', // Center vertically
    left: '50%', // Center horizontally
    transform: [{ translateX: -15 }, { translateY: -10 }], // Adjust to align perfectly
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center',
  },
});

export default StarburstBadge;
