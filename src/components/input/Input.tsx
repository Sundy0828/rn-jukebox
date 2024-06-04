import React, { useState } from "react";
import { View, TextInput, Animated, TextInputProps } from "react-native";
import useStyles from "../../utilities/useStyles";
import { customStyles } from "./Input.style";
import useColors from "../../utilities/useColors";

interface InputProps extends TextInputProps {
  label: string;
}

const Input: React.FC<InputProps> = ({ label, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [labelPosition] = useState(new Animated.Value(0));
  const styles = useStyles(customStyles);
  const colors = useColors();

  const handleFocus = () => {
    setIsFocused(true);
    Animated.timing(labelPosition, {
      toValue: -25,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = () => {
    if (props.value === "") {
      setIsFocused(false);
      Animated.timing(labelPosition, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <View style={styles.container}>
      <Animated.Text
        style={[
          styles.label,
          {
            top: labelPosition,
            color: isFocused ? colors.primary : colors.dark,
          },
        ]}
      >
        {label}
      </Animated.Text>
      <TextInput
        {...props}
        style={styles.input}
        onFocus={handleFocus}
        onBlur={handleBlur}
        underlineColorAndroid="transparent"
      />
      <View
        style={[
          styles.underline,
          { backgroundColor: isFocused ? colors.primary : colors.dark },
        ]}
      />
    </View>
  );
};

export default Input;
