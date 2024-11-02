import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Modal from 'react-native-modal';

import { useAppSelector } from '../hooks/reduxHooks';
import { commonStyles } from '../styles/commonStyles';
import { layoutStyles } from '../styles/layoutStyles';
import { theme as appTheme } from '../styles/theme';

interface SlideContentModalProps {
  visible: boolean;
  onClose: () => void;
  title?: string; // Optional title for the modal
  children: React.ReactNode; // Allows any JSX content
}

const SlideContentModal: React.FC<SlideContentModalProps> = ({ visible, onClose, title, children }) => {

  const themeType = useAppSelector(state => state.theme.theme);
  const commonStyle = commonStyles(themeType); // This is fine
  const layoutStyle = layoutStyles(themeType); // Rename this to avoid conflict

  const selectedTheme = appTheme[themeType];

  return (
    <Modal
      isVisible={visible}
      onBackdropPress={onClose} // Close modal when clicking outside
      onBackButtonPress={onClose} // Close modal on back button (Android)
      style={commonStyle.slideModal} // Style to position it at the bottom
      animationIn="slideInUp" // Slide up animation
      animationOut="slideOutDown" // Slide down on close
      backdropOpacity={0.3} // Slightly darken background
    >
      <View style={commonStyle.slideModalContent}>
        {/* Close Button */}
        <TouchableOpacity style={commonStyle.slideModalCloseButton} onPress={onClose}>
          <Text style={[layoutStyle.largeText, {color: selectedTheme.textGray}]}>X</Text>
        </TouchableOpacity>

        {/* Optional Title */}
        {title && <Text style={commonStyle.modalTitle}>{title}</Text>}

        <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
          {/* Render the passed child content */}
          {children}
        </ScrollView>
      </View>
    </Modal>
  );
};

export default SlideContentModal;
