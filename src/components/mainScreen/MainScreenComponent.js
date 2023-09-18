import { useContext } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';

import ColorContext from '../../state/ColorState';
import MainScreenHeader from './MainScreenHeader';
import MainScreenBottomBar from './MainScreenBottomBar';

const MainScreenComponent = ({children, headerIcon, headerSize, headerText, isTab=false, navigation, rightIcon="", rightAction, rightLabel="", selectedScreen, tabNavigate, tabParentTitle=""}) => {
  const {barStyle, themeColors} = useContext(ColorContext);
  return (
    <View style={[styles.container, themeColors.primaryBackground]}>
      <StatusBar barStyle={barStyle}/>
      <MainScreenHeader headerIcon={headerIcon} headerSize={headerSize} headerText={headerText} isTab={isTab} navigation={navigation} rightIcon={rightIcon} rightAction={rightAction} rightLabel={rightLabel} tabNavigate={tabNavigate} tabParentTitle={tabParentTitle} />
      {children}
      <MainScreenBottomBar navigation={navigation} selectedScreen={selectedScreen}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 120,
    paddingTop: 60,
  },
  tabContainer: {
    flex: 1,
    paddingBottom: 120,
    paddingTop: 40,
  }
});

export default MainScreenComponent;