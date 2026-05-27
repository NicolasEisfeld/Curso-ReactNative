import React, { useState } from 'react';
import TabsNavegacao from './components/tabsnavegacao';

export default function App() {
  // Utiliza states no App para poder utilizar o mesmo texto na Tela1 e Tela2
  const [texto, setTexto] = useState('');
  const [cor, setCor] = useState('#ffffff');

  return (
    <TabsNavegacao 
      texto={texto}
      setTexto={setTexto}
      setCor={setCor}
      cor={cor}
    />
  );
}