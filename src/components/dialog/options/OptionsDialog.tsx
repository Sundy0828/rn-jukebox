import React from "react";
import { Modal, View, Text, TouchableOpacity, ModalProps } from "react-native";
import useStyles from "../../../utilities/useStyles";
import { customStyles } from "./OptionsDialog.style";
import Dialog from "../Dialog";

interface OptionsDialogProps extends ModalProps {
  title: string;
  options: string[];
  onClose: () => void;
  onSelect: (option: string) => void;
}

const OptionsDialog: React.FC<OptionsDialogProps> = ({
  visible,
  title,
  options,
  onClose,
  onSelect,
}) => {
  const styles = useStyles(customStyles);
  return (
    <Dialog visible={visible} title={title} onSecondaryButton={onClose}>
      {options.map((option) => (
        <TouchableOpacity
          key={option}
          onPress={() => onSelect(option)}
          style={styles.option}
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
    </Dialog>
  );
};

export default OptionsDialog;
