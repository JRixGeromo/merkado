import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { useAppSelector } from '../hooks/reduxHooks';
import { commonStyles } from '../styles/commonStyles';
import { layoutStyles } from '../styles/layoutStyles';
import { theme as appTheme } from '../styles/theme';

interface ConfirmationModalProps {
  visible: boolean;
  onClose: () => void;
  title?: string;
  message: string;
  onConfirm: () => void;
  confirmText?: string;
  cancelText?: string;
  confirmButtonColor?: string; // New prop for custom confirm button color
  cancelButtonColor?: string;  // New prop for custom cancel button color
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  visible,
  onClose,
  title = 'Confirmation',
  message,
  onConfirm,
  confirmText = 'Yes',
  cancelText = 'No',
  confirmButtonColor,
  cancelButtonColor,
}) => {
  const themeType = useAppSelector(state => state.theme.theme);
  const selectedTheme = appTheme[themeType];
  const commonStyle = commonStyles(themeType);
  const layoutStyle = layoutStyles(themeType);

  return (
    <Modal
      isVisible={visible}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      style={commonStyle.centeredConfimrationModal} // Centered on screen
      backdropOpacity={0.3}
    >
      <View style={[commonStyle.confimrationModalContent, { backgroundColor: selectedTheme.formBackgroundColorPrimary }]}>
        {/* Optional Title */}
        {title && <Text style={[commonStyle.confimrationModalTitle, { color: selectedTheme.textPrimary }]}>{title}</Text>}
        
        {/* Message */}
        <Text style={[commonStyle.confimrationModalMessage, { color: selectedTheme.textSecondary }]}>
          {message}
        </Text>

        {/* Buttons */}
        <View style={[layoutStyle.columnsInside, { justifyContent: 'space-between', marginTop: 20 }]}>
          {/* Cancel Button */}
          <TouchableOpacity
            style={[
              commonStyle.confimrationModalButton, 
              { backgroundColor: cancelButtonColor || selectedTheme.buttonDanger }
            ]}
            onPress={onClose}
          >
            <Text style={[commonStyle.confimrationButtonText, { color: selectedTheme.textLight }]}>{cancelText}</Text>
          </TouchableOpacity>

          {/* Confirm Button */}
          <TouchableOpacity
            style={[
              commonStyle.confimrationModalButton, 
              { backgroundColor: confirmButtonColor || selectedTheme.buttonPrimary }
            ]}
            onPress={() => {
              onConfirm();
              onClose(); // Close the modal after confirming
            }}
          >
            <Text style={[commonStyle.confimrationButtonText, { color: selectedTheme.textLight }]}>{confirmText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmationModal;
