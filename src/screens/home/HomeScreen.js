import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ColorContext from '../../state/ColorState';

import MainScreenComponent from '../../components/mainScreen/MainScreenComponent';

const HomeScreen = ({navigation}) => {
  const {themeColors} = useContext(ColorContext);
  return (
    <MainScreenComponent
      headerIcon="home"
      headerSize={30}
      headerText="Home"
      navigation={navigation}
      selectedScreen="home"
    >
      <View>
        <Text style={[styles.prompt, themeColors.alertColor]}>Home Screen</Text>
      </View>
    </MainScreenComponent>
  );
};

const styles = StyleSheet.create({
  prompt: {
    fontSize: 20,
  }
});

export default HomeScreen;