import { AppProvider } from './src/state/AppState';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import { PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <AppProvider>
        <NavigationContainer>
          {StackNavigator}
        </NavigationContainer>
      </AppProvider>
    </PaperProvider>
  );
};