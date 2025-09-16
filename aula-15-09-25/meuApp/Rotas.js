import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../components/Home';
import SplashScreen from '../components/SplashScreen';

const Stack = createStackNavigator();
export default function Rotas() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Splash" component = {SplashScreen} options = {{headerShown: false}} />
        <Stack.Screen name = "Home" component = {Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}