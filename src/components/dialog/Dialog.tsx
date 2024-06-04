import React from "react";
import { Modal, View, Text, TouchableOpacity, ModalProps } from "react-native";
import useStyles from "../../utilities/useStyles";
import { customStyles } from "./Dialog.style";

interface DialogProps extends ModalProps {
  title: string;
  secondaryButtonText?: string;
  onSecondaryButton: () => void;
  primaryButtonText?: string;
  onPrimaryButton?: () => void;
  children?: React.ReactNode;
}

const Dialog: React.FC<DialogProps> = ({
  visible,
  title,
  children,
  secondaryButtonText = "Cancel",
  primaryButtonText = "Confirm",
  onSecondaryButton,
  onPrimaryButton,
}) => {
  const styles = useStyles(customStyles);
  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="fade"
      onRequestClose={onSecondaryButton}
    >
      <View style={styles.overlay}>
        <View style={styles.dialog}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.dialog}>{children}</View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={onSecondaryButton} style={styles.button}>
              <Text style={styles.buttonText}>{secondaryButtonText}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onPrimaryButton}
              style={[styles.button, styles.confirmButton]}
            >
              <Text style={[styles.buttonText, styles.confirmButtonText]}>
                {primaryButtonText}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Dialog;
