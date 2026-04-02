import { StyleSheet, Text, View } from 'react-native';


// or any files within the Snack
import Button from './components/Button.js';

export default function App() {
  return (
    <View style={styles.container}>     
      <View style={styles.column}>
        <Button title='Opção A' color='red'></Button>
        <Button title='Opção B' color='#FFBF00'></Button>
      </View>
      <View style={styles.column}>
        <Button title='Opção C' color='#0085FF'></Button>
        <Button title='Opção D' color='green'></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evently',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    marginTop: 10,
    marginBottom: 20,
  },
  column: {
    flex: 1,
    margin: 10,
    height: '100%',
  },
});
