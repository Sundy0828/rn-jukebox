// useStyles.ts

import { useColorScheme } from "react-native";
import { lightTheme, darkTheme } from "./Colors.style";
import { Theme } from "./useColors";

// Define the type for the styles function
type StylesFunc = (theme: Theme) => { [key: string]: any };

const useStyles = (stylesFunc: StylesFunc) => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? darkTheme : lightTheme;
  return stylesFunc(theme);
};

export default useStyles;
