import React, {useState} from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from './Styles';
import { encrypt } from './crypto';

export default function Tela2(cor) {
  const [texto, setTexto] = useState('');
  const [resultado, setResultado] = useState('');

  return (
    <View style={[styles.container, { backgroundColor: cor }]}>
      <Text>Digite um texto:</Text>

      <TextInput
        style={styles.input}
        value={texto}
        onChangeText={setTexto}
        placeholder="Digite aqui..."
      />
      <Button 
        title="Criptografar"
        onPress={() => setResultado(encrypt(texto))}
      />

      <Text style={{ marginTop: 20 }}>Resultado:</Text>
      <Text>{resultado}</Text>
    </View>
  );
}