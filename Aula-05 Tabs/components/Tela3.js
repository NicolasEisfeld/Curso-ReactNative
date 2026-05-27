import React from 'react';
import { View, Button } from 'react-native';
import styles from './Styles';

export default function Tela3({ setCor, cor }) {
  return (
    <View style={[styles.container, { backgroundColor: cor }]}>

      <Button title="Branco" onPress={() => setCor('#FFFFFF')} />
      <Button title="Vermelho" onPress={() => setCor('#ff4d4d')} />
      <Button title="Verde" onPress={() => setCor('#4dff4d')} />
      <Button title="Azul" onPress={() => setCor('#4d4dff')} />
      <Button title="Amarelo" onPress={() => setCor('#ffff4d')} />

    </View>
  );
}