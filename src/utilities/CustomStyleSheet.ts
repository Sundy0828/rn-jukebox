// CustomStyleSheet.ts

import { StyleSheet } from "react-native";
import useColors, { Theme } from "./useColors";

// Define the type for the styles function
type StylesFunc = (theme: Theme) => { [key: string]: any };

// Create the custom StyleSheet
const create = (stylesFunc: StylesFunc) => {
  const theme = useColors(); // Make sure this is not called outside a functional component
  return StyleSheet.create(stylesFunc(theme));
};

const CustomStyleSheet = { create };

export default CustomStyleSheet;
