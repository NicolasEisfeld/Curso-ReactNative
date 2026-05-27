import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Tela1 from './Tela1';
import Tela2 from './Tela2';
import Tela3 from './Tela3';

const Tab = createBottomTabNavigator();

export default function TabsNavegacao({ texto, setTexto, setCor, cor }) {
  return (
    <NavigationContainer key={cor}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          sceneContainerStyle: { backgroundColor: cor }
        }}
      >
      <Tab.Screen name="Tela1">
        {() => <Tela1 texto={texto} setTexto={setTexto} cor={cor} />}
      </Tab.Screen>

      <Tab.Screen name="Tela2">
        {() => <Tela2 texto={texto} setTexto={setTexto} cor={cor} />}
      </Tab.Screen>

      <Tab.Screen name="Tela3">
        {() => <Tela3 setCor={setCor} cor={cor} />}
      </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}