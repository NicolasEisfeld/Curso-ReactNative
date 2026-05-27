import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from './Styles';

export default function InputScreen({ texto, setTexto, cor }) {

  const mostrarAlerta = () => {
    alert(`Bom dia, ${texto}`);
  };

  return (
      <View style={[styles.container, { backgroundColor: cor }]}>
        <Text>Digite seu nome:</Text>

        <TextInput
          style={styles.input}
          value={texto}
          onChangeText={setTexto}
          placeholder="Digite aqui..."
        />

      <View style={{ marginTop: 20 }}>
        <Button 
          title="Mostrar Alert"
          onPress={mostrarAlerta}
        />
      </View>
    </View>
  );
}