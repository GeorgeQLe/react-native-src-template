import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/home/HomeScreen";
import LoginScreen from "../screens/login/LoginScreen";
import SplashScreen from "../screens/SplashScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";

const Stack = createNativeStackNavigator();

const AuthStack = (
  <Stack.Group>
    <Stack.Screen name="Login" component={LoginScreen} />
  </Stack.Group>
);

const MainStack = (
  <Stack.Group>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Profile" component={ProfileScreen} />
  </Stack.Group>
);

const MainScreens = [
  {
    name: "Home",
    tabs: [],
  }
];

const StackNavigator = (
  <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{header: () => <></>}}>
    <Stack.Screen name="SplashScreen" component={SplashScreen} />
    {AuthStack}
    {MainStack}
  </Stack.Navigator>
);

export default StackNavigator;