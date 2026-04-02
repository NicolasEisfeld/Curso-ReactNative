import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';


// or any files within the Snack
import Button from './components/Button.js';
import ButtonHighlight from './components/ButtonHighlight.js';

export default function App() {
  const [corBorda, setCorBorda] = useState('blue');
  const [title, setTitle] = useState('Opa');

  const alterarCorETitulo = (title, cor) => {
    setCorBorda(cor);
    setTitle(title);
  };


  return (
    <View style={styles.container}>
      

      <View style={styles.row}>
        <Button title="Opção A" color="red" onPress={() => alterarCorETitulo('Vermelho', 'red')} />
        <Button title="Opção B" color="#FFBF00" onPress={() => alterarCorETitulo('Amarelo', '#FFBF00')} />
      </View>

      <View style={styles.centro}>
        <ButtonHighlight
        cor={corBorda}
        title={title}
        />
      </View>

      <View style={styles.row}>
        <Button title="Opção C" color="#0085FF" onPress={() => alterarCorETitulo('Azul','#0085FF')} />
        <Button title="Opção D" color="green" onPress={() => alterarCorETitulo('Verde', 'green')} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#ecf0f1',
  },
  centro: {
    justifyContent:'center',
    alignItems:'center'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});