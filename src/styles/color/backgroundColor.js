import { darkModeInvertBackground, darkModePrimaryBackground, darkModeQuaternaryBackground, darkModeQuinaryBackground, darkModeSecondaryBackground, darkModeTertiaryBackground } from "./darkMode";
import { lightModeInvertBackground, lightModePrimaryBackground, lightModeQuaternaryBackground, lightModeQuinaryBackground, lightModeSecondaryBackground, lightModeTertiaryBackground } from "./lightMode";

export function primaryBackground(isLightMode) {
  return isLightMode ? lightModePrimaryBackground : darkModePrimaryBackground;
};

export function secondaryBackground(isLightMode) {
  return isLightMode ? lightModeSecondaryBackground : darkModeSecondaryBackground;
};

export function tertiaryBackground(isLightMode) {
  return isLightMode ? lightModeTertiaryBackground : darkModeTertiaryBackground;
};

export function quaternaryBackground(isLightMode) {
  return isLightMode ? lightModeQuaternaryBackground : darkModeQuaternaryBackground;
};

export function quinaryBackground(isLightMode) {
  return isLightMode ? lightModeQuinaryBackground : darkModeQuinaryBackground;
};

export function invertBackground(isLightMode) {
  return isLightMode ? lightModeInvertBackground : darkModeInvertBackground;
}