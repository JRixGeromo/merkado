// components/LiveSellingCard.tsx
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

type LiveSellingCardProps = {
  item: {
    id: string;
    name: string;
    profileImage: string;
    liveTitle: string;
  };
  onPress?: () => void; // Optional handler for card press
};

const LiveSellingCard: React.FC<LiveSellingCardProps> = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.liveSellingCard} onPress={onPress}>
      {/* Video Icon with Red Dot */}
      <View style={styles.videoIconContainer}>
        <Ionicons name="videocam-outline" size={20} color="#38b000" />
        <View style={styles.redDot} />
      </View>
      <View style={styles.liveIconWrapper}>
        <Image source={{ uri: item.profileImage }} style={styles.liveSellingImage} />
      </View>
      <View style={styles.liveSellingInfo}>
        <Text style={styles.liveSellingName}>{item.name}</Text>
        <Text style={styles.liveSellingTitle}>{item.liveTitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  liveSellingCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  videoIconContainer: {
    position: 'absolute',
    top: 4,
    right: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  redDot: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 8,
    height: 8,
    backgroundColor: 'red',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'white',
  },
  liveIconWrapper: {
    position: 'relative',
  },
  liveSellingImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  liveSellingInfo: {
    flex: 1,
  },
  liveSellingName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  liveSellingTitle: {
    fontSize: 12,
    color: '#666',
  },
});

export default LiveSellingCard;
