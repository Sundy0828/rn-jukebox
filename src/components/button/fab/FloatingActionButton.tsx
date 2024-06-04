import { GestureResponderEvent, TouchableOpacity } from "react-native";
import Icon from "../../icons/Icon";
import useStyles from "../../../utilities/useStyles";
import { customStyles } from "./FloatingActionButton.style";
import useColors from "../../../utilities/useColors";
import IconEnum from "../../icons/IconEnum";

interface FloatingActionButtonProps {
  icon: keyof typeof IconEnum;
  onPress: (event: GestureResponderEvent) => void;
}

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
  onPress,
}) => {
  const styles = useStyles(customStyles);
  const colors = useColors();

  return (
    <TouchableOpacity style={styles.fab} onPress={onPress}>
      <Icon name="ADD" color={colors.light} />
    </TouchableOpacity>
  );
};

export default FloatingActionButton;
