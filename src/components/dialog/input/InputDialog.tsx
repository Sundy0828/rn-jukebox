import React, { useState } from "react";
import { Modal, View, Text, TouchableOpacity, ModalProps } from "react-native";
import useStyles from "../../../utilities/useStyles";
import { customStyles } from "./InputDialog.style";
import Input from "../../input/Input";
import Dialog from "../Dialog";

interface InputDialogProps extends ModalProps {
  title: string;
  placeholder: string;
  onClose: () => void;
  onSubmit: (value: string) => void;
}

const InputDialog: React.FC<InputDialogProps> = ({
  visible,
  title,
  placeholder,
  onClose,
  onSubmit,
}) => {
  const styles = useStyles(customStyles);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    onSubmit(inputValue);
    setInputValue("");
  };
  return (
    <Dialog
      visible={visible}
      title={title}
      onSecondaryButton={onClose}
      onPrimaryButton={handleSubmit}
    >
      <Input
        style={styles.input}
        label={placeholder}
        onChangeText={setInputValue}
        value={inputValue}
      />
    </Dialog>
  );
};

export default InputDialog;
