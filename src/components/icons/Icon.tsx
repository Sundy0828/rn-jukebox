import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import Svg, { Path } from "react-native-svg";
import IconEnum from "./IconEnum";

interface IconProps {
  color?: string;
  style?: StyleProp<ViewStyle>;
  name: keyof typeof IconEnum;
}

const Icon: React.FC<IconProps> = ({ color = "#000", style, name }) => {
  const path = IconEnum[name];

  return (
    <View style={style}>
      <Svg width={24} height={24} viewBox="0 -960 960 960" fill="none">
        <Path d={path} fill={color} />
      </Svg>
    </View>
  );
};

export default Icon;
