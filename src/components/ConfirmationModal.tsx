import React from 'react';
import { View, Text } from 'react-native';
import Modal from 'react-native-modal';
import { useAppSelector } from '../hooks/reduxHooks';
import { compStyles } from './styles/componentStyles'; // Import your style
import { baseStyles } from '../styles/baseStyles';
import { theme as appTheme } from '../styles/theme';
import CustomButton from './CustomButton'; // Import CustomButton

const MODAL_BACKDROP_OPACITY = 0.3;
const BUTTON_ROW_MARGIN_TOP = 20;
const MODAL_BUTTON_TEXT_SIZE = 14;
const MODAL_BUTTON_BORDER_RADIUS = 0;

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
  const myTheme = appTheme[themeType];
  const compStyle = compStyles(themeType); // This is fine
  const baseStyle = baseStyles(themeType);

  const handleConfirmPress = () => {
    onConfirm();
    onClose();
  };

  return (
    <Modal
      isVisible={visible}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      style={compStyle.centeredConfimrationModal}
      backdropOpacity={MODAL_BACKDROP_OPACITY}
    >
      <View
        style={[
          compStyle.confimrationModalContent,
          { backgroundColor: myTheme.cardBackground },
        ]}
      >
        {/* Optional Title */}
        {title && (
          <Text
            style={[
              compStyle.confimrationModalTitle,
              { color: myTheme.text1st },
            ]}
          >
            {title}
          </Text>
        )}

        {/* Message */}
        <Text
          style={[
            compStyle.confimrationModalMessage,
            { color: myTheme.text2nd },
          ]}
        >
          {message}
        </Text>

        {/* Buttons */}
        <View
          style={[
            baseStyle.columnsInside,
            { justifyContent: 'space-between', marginTop: BUTTON_ROW_MARGIN_TOP },
          ]}
        >
          {/* Cancel Button */}
          <CustomButton
            title={cancelText}
            onPress={onClose}
            backgroundColor={cancelButtonColor || myTheme.buttonDanger}
            color={myTheme.buttonText1st}
            textSize={MODAL_BUTTON_TEXT_SIZE}
            borderRadius={MODAL_BUTTON_BORDER_RADIUS}
          />

          {/* Confirm Button */}
          <CustomButton
            title={confirmText}
            onPress={handleConfirmPress}
            backgroundColor={confirmButtonColor || myTheme.button1st}
            color={myTheme.buttonTextDelete}
            textSize={MODAL_BUTTON_TEXT_SIZE}
            borderRadius={MODAL_BUTTON_BORDER_RADIUS}
          />
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmationModal;
