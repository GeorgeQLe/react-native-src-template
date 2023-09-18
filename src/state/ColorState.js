import { createContext, useEffect, useState } from 'react';
import { Appearance } from 'react-native';
import { invertBackground, primaryBackground, quaternaryBackground, quinaryBackground, secondaryBackground, tertiaryBackground } from '../styles/color/backgroundColor';
import { alertColor, blackColor, colorForTertiaryBackground, invertColor, primaryColor, quaternaryColor, quinaryColor, rawInvertColor, rawPrimaryColor, rawQuaternaryColor, rawQuinaryColor, rawSecondaryColor, rawTertiaryColor, secondaryColor, tertiaryColor, whiteColor } from '../styles/color/color';
import { borderColor, invertBorderColor, primaryBorderColor } from '../styles/color/borderColor';
import { shadowColor } from '../styles/color/shadowColor';

const ColorContext = createContext({});
export default ColorContext;

export const ColorProvider = ({children}) => {
  const [isLightMode, setIsLightMode] = useState(Appearance.getColorScheme() === 'light');
  const [barStyle, setBarStyle] = useState(isLightMode ? 'dark-content' : 'light-content');

  const backgroundColors = {
    primaryBackground: primaryBackground(isLightMode),
    secondaryBackground: secondaryBackground(isLightMode),
    tertiaryBackground: tertiaryBackground(isLightMode),
    quaternaryBackground: quaternaryBackground(isLightMode),
    quinaryBackground: quinaryBackground(isLightMode),
    invertBackground: invertBackground(isLightMode),
  };

  const borderColors = {
    borderColor: borderColor(isLightMode),
    invertBorderColor: invertBorderColor(isLightMode),
    primaryBorderColor: primaryBorderColor(isLightMode),
  };

  const colors = {
    primaryColor: primaryColor(isLightMode),
    rawPrimaryColor: rawPrimaryColor(isLightMode),
    secondaryColor: secondaryColor(isLightMode),
    rawSecondaryColor: rawSecondaryColor(isLightMode),
    tertiaryColor: tertiaryColor(isLightMode),
    rawTertiaryColor: rawTertiaryColor(isLightMode),
    quaternaryColor: quaternaryColor(isLightMode),
    rawQuaternaryColor: rawQuaternaryColor(isLightMode),
    quinaryColor: quinaryColor(isLightMode),
    rawQuinaryColor: rawQuinaryColor(isLightMode),
    invertColor: invertColor(isLightMode),
    rawInvertColor: rawInvertColor(isLightMode),
    alertColor: alertColor(isLightMode),
    colorForTertiaryBackground: colorForTertiaryBackground(isLightMode),
    whiteColor: whiteColor(),
    blackColor: blackColor(),
  };

  const shadowColors = {
    shadowColor: shadowColor(isLightMode),
  };

  const themeColors = {
    ...backgroundColors,
    ...borderColors,
    ...colors,
    ...shadowColors,
  };

  const statusBarStyle = {
    barStyle: barStyle,
  };

  useEffect(() => {
    setBarStyle(isLightMode ? 'dark-content' : 'light-content');
  }, [isLightMode]);

  return (
    <ColorContext.Provider
      value={{
        isLightMode,
        setIsLightMode,
        statusBarStyle,
        themeColors,
      }}
    >
      {children}
    </ColorContext.Provider>
  )
}