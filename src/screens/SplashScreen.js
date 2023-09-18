import { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

import AppContext from '../state/AppState';
import ColorContext from '../state/ColorState';

const SplashScreen = ({navigation}) => {
  const {setAppValuesFromStorage} = useContext(AppContext);
  const {themeColors} = useContext(ColorContext);
  const [gotData, setGotData] = useState(false);

  function setInitialValues({app}) {
    console.log("Setting initial values from storage:", app);
    if(app !== null) {
      setAppValuesFromStorage(app);
    }
  };

  async function retrieveContextFromStorage() {
    try {
      const storedAppContext = await AsyncStorage.getItem('app');

      const storedAppContextJSON = JSON.parse(storedAppContext);

      setInitialValues({
        app: storedAppContextJSON,
      });
      if(storedAppContextJSON !== null) {
        setGotData(true);
      }
    } catch (error) {
      console.log("Error retrieving context from storage:", error);
    }
  }

  useEffect(() => {
    retrieveContextFromStorage();
  }, []);

  useEffect(() => {
    if(gotData) {
      navigation.navigate('Home');
    }
  }, [gotData]);
  
  return (
    <View style={[styles.container, themeColors.primaryBackground]}>
      <Text style={[styles.tempText, themeColors.primaryColor]}>Splash Screen Needs a Logo</Text>
      <TouchableHighlight
        activeOpacity={0.6}
        onPress={() => navigation.navigate('Home')}
        style={[styles.startButton, themeColors.tertiaryBackground]}
        underlayColor={themeColors.rawTertiaryColor}
      >
        <Text style={[styles.startText, themeColors.primaryColor]}>Get Started</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  startButton: {
    alignSelf: 'center',
    borderRadius: 10,
    bottom: 40,
    paddingVertical: 10,
    position: 'absolute',
    width: '90%',
  },
  startText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tempText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default SplashScreen;