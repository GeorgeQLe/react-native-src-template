import { darkModeShadowColor } from "./darkMode";
import { lightModeShadowColor } from "./lightMode";

export function shadowColor(isLightMode) {
  return isLightMode ? lightModeShadowColor : darkModeShadowColor;
};