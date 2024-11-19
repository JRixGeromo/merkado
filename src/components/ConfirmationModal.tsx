import React from 'react';
import { View, Text } from 'react-native';
import Modal from 'react-native-modal';
import { useAppSelector } from '../hooks/reduxHooks';
import { compStyles } from './styles/componentStyles'; // Import your style
import { baseStyles } from '../styles/baseStyles';
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
  const myTheme = appTheme[themeType];
  const compStyle = compStyles(themeType); // This is fine
  const baseStyle = baseStyles(themeType);

  return (
    <Modal
      isVisible={visible}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      style={compStyle.centeredConfimrationModal}
      backdropOpacity={0.3}
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
            { justifyContent: 'space-between', marginTop: 20 },
          ]}
        >
          {/* Cancel Button */}
          <CustomButton
            title={cancelText}
            onPress={onClose}
            backgroundColor={cancelButtonColor || myTheme.buttonDanger}
            color={myTheme.buttonText1st}
            //style={[compStyle.confimrationModalButton]}
            textSize={14}
            borderRadius={0}
          />

          {/* Confirm Button */}
          <CustomButton
            title={confirmText}
            onPress={() => {
              onConfirm();
              onClose(); // Close the modal after confirming
            }}
            backgroundColor={confirmButtonColor || myTheme.button1st}
            color={myTheme.buttonTextDelete}
            //style={[compStyle.confimrationModalButton]}
            textSize={14}
            borderRadius={0}
          />
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmationModal;
