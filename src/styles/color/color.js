import { darkModeAlertColor, darkModeInvertColor, darkModePrimaryColor, darkModeQuaternaryColor, darkModeQuinaryColor, darkModeSecondaryColor, darkModeTertiaryColor } from "./darkMode";
import { lightModeAlertColor, lightModeInvertColor, lightModePrimaryColor, lightModeQuaternaryColor, lightModeQuinaryColor, lightModeSecondaryColor, lightModeTertiaryColor } from "./lightMode";

export function primaryColor(isLightMode) {
  return isLightMode ? lightModePrimaryColor : darkModePrimaryColor;
};

export function rawPrimaryColor(isLightMode) {
  return isLightMode ? lightModePrimaryColor.color : darkModePrimaryColor.color;
};

export function secondaryColor(isLightMode) {
  return isLightMode ? lightModeSecondaryColor : darkModeSecondaryColor;
};

export function rawSecondaryColor(isLightMode) {
  return isLightMode ? lightModeSecondaryColor.color : darkModeSecondaryColor.color;
};

export function tertiaryColor(isLightMode) {
  return isLightMode ? lightModeTertiaryColor : darkModeTertiaryColor;
};

export function rawTertiaryColor(isLightMode) {
  return isLightMode ? lightModeTertiaryColor.color : darkModeTertiaryColor.color;
};

export function quaternaryColor(isLightMode) {
  return isLightMode ? lightModeQuaternaryColor : darkModeQuaternaryColor;
};

export function rawQuaternaryColor(isLightMode) {
  return isLightMode ? lightModeQuaternaryColor.color : darkModeQuaternaryColor.color;
};

export function quinaryColor(isLightMode) {
  return isLightMode ? lightModeQuinaryColor : darkModeQuinaryColor;
};

export function rawQuinaryColor(isLightMode) {
  return isLightMode ? lightModeQuinaryColor.color : darkModeQuinaryColor.color;
};

export function invertColor(isLightMode) {
  return isLightMode ? lightModeInvertColor : darkModeInvertColor;
};

export function rawInvertColor(isLightMode) {
  return isLightMode ? lightModeInvertColor.color : darkModeInvertColor.color;
};

export function alertColor(isLightMode) {
  return isLightMode ? lightModeAlertColor : darkModeAlertColor;
};

export function colorForTertiaryBackground(isLightMode) {
  return isLightMode ? lightModeInvertColor : darkModePrimaryColor;
};

export function whiteColor() {
  return {color: '#FFFFFF'};
};

export function blackColor() {
  return {color: '#000000'};
};