import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Form from '../views/Form';
import Home from '../views/Home';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
        <Stack.Screen name="Form" component={Form} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
