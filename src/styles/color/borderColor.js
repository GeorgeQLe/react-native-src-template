import { darkModeBorderColor, darkModeInvertBorderColor, darkModePrimaryBorderColor } from "./darkMode";
import { lightModeBorderColor, lightModeInvertBorderColor, lightModePrimaryBorderColor } from "./lightMode";

export function borderColor(isLightMode) {
  return isLightMode ? lightModeBorderColor : darkModeBorderColor;
};

export function invertBorderColor(isLightMode) {
  return isLightMode ? darkModeInvertBorderColor : lightModeInvertBorderColor;
};

export function primaryBorderColor(isLightMode) {
  return isLightMode ? lightModePrimaryBorderColor : darkModePrimaryBorderColor;
};