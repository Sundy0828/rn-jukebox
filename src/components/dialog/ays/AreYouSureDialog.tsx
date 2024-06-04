import React from "react";
import { Modal, View, Text, TouchableOpacity, ModalProps } from "react-native";
import useStyles from "../../../utilities/useStyles";
import { customStyles } from "./AreYouSureDialog.style";
import Dialog from "../Dialog";

interface AreYouSureDialogProps extends ModalProps {
  title: string;
  content: string;
  onClose: () => void;
  onConfirm: () => void;
}

const AreYouSureDialog: React.FC<AreYouSureDialogProps> = ({
  visible,
  title,
  content,
  onClose,
  onConfirm,
}) => {
  const styles = useStyles(customStyles);
  return (
    <Dialog
      visible={visible}
      title={title}
      onSecondaryButton={onClose}
      onPrimaryButton={onConfirm}
    >
      <Text>{content}</Text>
    </Dialog>
  );
};

export default AreYouSureDialog;
