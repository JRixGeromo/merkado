import React from 'react';
import { View, Text } from 'react-native';
import Modal from 'react-native-modal';
import { useAppSelector } from '../hooks/reduxHooks';
import { commonStyles } from '../styles/commonStyles';
import { layoutStyles } from '../styles/layoutStyles';
import { theme as appTheme } from '../styles/theme';
import CustomButton from './CustomButton'; // Import CustomButton

interface ConfirmationModalProps {
  visible: boolean;
  onClose: () => void;
  title?: string;
  message: string;
  onConfirm: () => void;
  confirmText?: string;
  cancelText?: string;
  confirmButtonColor?: string;
  cancelButtonColor?: string;
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
      style={commonStyle.centeredConfimrationModal}
      backdropOpacity={0.3}
    >
      <View style={[commonStyle.confimrationModalContent, { backgroundColor: selectedTheme.formBackgroundColorPrimary }]}>
        {/* Optional Title */}
        {title && (
          <Text style={[commonStyle.confimrationModalTitle, { color: selectedTheme.textPrimary }]}>{title}</Text>
        )}

        {/* Message */}
        <Text style={[commonStyle.confimrationModalMessage, { color: selectedTheme.textSecondary }]}>{message}</Text>

        {/* Buttons */}
        <View style={[layoutStyle.columnsInside, { justifyContent: 'space-between', marginTop: 20 }]}>
          {/* Cancel Button */}
          <CustomButton
            title={cancelText}
            onPress={onClose}
            backgroundColor={cancelButtonColor || selectedTheme.buttonDanger}
            color={selectedTheme.textLight}
            style={[commonStyle.confimrationModalButton]}
          />

          {/* Confirm Button */}
          <CustomButton
            title={confirmText}
            onPress={() => {
              onConfirm();
              onClose(); // Close the modal after confirming
            }}
            backgroundColor={confirmButtonColor || selectedTheme.buttonPrimary}
            color={selectedTheme.textLight}
            style={[commonStyle.confimrationModalButton]}
          />
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmationModal;
