// useColors.ts

import { useColorScheme } from "react-native";
import { lightTheme, darkTheme } from "./Colors.style";

// Define the type for the theme
export type Theme = typeof lightTheme;

const useColors = (): Theme => {
  const colorScheme = useColorScheme();
  return colorScheme === "dark" ? darkTheme : lightTheme;
};

export default useColors;
