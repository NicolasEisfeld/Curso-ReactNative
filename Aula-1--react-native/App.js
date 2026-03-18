import { StyleSheet, Text, View } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.Titulo} class="Titulo">Aula 1 de React Native</Text>
      <Text style={styles.Nome}>Nicolas Eisfeld Ferreira</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  Titulo:{
    padding: 40,
    fontSize: 40,
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: 'bold'
  },
  Nome:{
    fontSize: 20,
    textAlign: 'left'
  }

});
