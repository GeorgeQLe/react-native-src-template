import { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import ColorContext from '../../state/ColorState';
import BottomBarOption from './BottomBarOption';

const MainScreenBottomBar = ({navigation, selectedScreen}) => {
  const {themeColors} = useContext(ColorContext);
  return (
    <View style={[styles.bottomButtonRow, themeColors.primaryBackground]}>
      <BottomBarOption icon="home-outline" iconSelected="home" navigation={navigation} screen="Home" selectedScreen={selectedScreen} />
    </View>
  );
};

const styles = StyleSheet.create({
  bottomButtonRow: {
    alignItems: "center",
    bottom: 30,
    flexDirection: "row",
    justifyContent: "space-evenly",
    position: "absolute",
    paddingTop: 5,
    width: "100%",
  },
});

export default MainScreenBottomBar;