import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import Login from './src/app/Login';
import Cadastro from './src/app/Cadastro';
import Main from './src/app/Index';
import AdicionarContato from './src/app/AdicionarContato';

const Stack = createNativeStackNavigator();

export default function App() {
  // A navegação por Stack é configurada através do componente NavigationContainer, que envolve toda a aplicação.
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#000',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: '600',
            fontSize: 18,
            fontFamily: 'System',
          },
          headerBackTitleVisible: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} options={{ title: 'Entrar', headerShown: false }} />
        <Stack.Screen name="Cadastro" component={Cadastro} options={{ title: 'Cadastro' }} />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ title: 'Contatos', headerBackVisible: false }}
        />
        <Stack.Screen
          name="AdicionarContato"
          component={AdicionarContato}
          options={{ title: 'Contato' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


