import React from "react";
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  TouchableOpacityProps,
} from "react-native";
import useStyles from "../../../utilities/useStyles";
import { customStyles } from "./BasicButton.style";
import useColors from "../../../utilities/useColors";
import IconEnum from "../../icons/IconEnum";
import { Icon } from "../..";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  loading?: boolean;
  icon: keyof typeof IconEnum;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  loading = false,
  icon,
  ...props
}) => {
  const theme = useColors();
  const styles = useStyles(customStyles);

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: theme.primary }]}
      onPress={onPress}
      disabled={loading}
      {...props}
    >
      {loading ? (
        <ActivityIndicator color={theme.light} />
      ) : (
        <>
          {icon ? <Icon name={icon} color={theme.white} /> : null}
          <Text style={styles.buttonText}>{title}</Text>
        </>
      )}
    </TouchableOpacity>
  );
};

export default Button;
