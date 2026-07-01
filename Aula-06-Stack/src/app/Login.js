import { useState } from 'react';
import { View, Text, TextInput, Button, Alert, Platform, StyleSheet } from 'react-native';
import { logarUsuario } from '../../storage';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function fazerLogin() {
    if (!email.trim() || !senha) {
      mostrarMensagem("Preencha email e senha");
      return;
    }
    try {
      const usuario = await logarUsuario(email.trim().toLowerCase(), senha);
      navigation.reset({
        index: 0,
        routes: [{ name: 'Main', params: { usuarioEmail: usuario.email, usuarioName: usuario.nome } }],
      });
    } catch (error) {
      mostrarMensagem("Erro ao tentar fazer login, tente novamente");
    }
  }

  const mostrarMensagem = (mensagem) => {
    if (Platform.OS === 'web') {
      alert(mensagem);
    } else {
      Alert.alert(mensagem);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />
        <View style={styles.buttonContainer}>
          <Button title="Entrar" onPress={fazerLogin} />
        </View>
        <View style={styles.spacer} />
        <View style={styles.buttonContainer}>
          <Button title="Criar conta" onPress={() => navigation.navigate('Cadastro')} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  formContainer: {
    width: '100%',
    maxWidth: 320,
  },
  title: {
    fontSize: 28,
    marginBottom: 30,
    textAlign: 'center',
    fontWeight: '600',
    color: '#000',
    fontFamily: 'System',
  },
  input: {
    borderWidth: 2,
    borderColor: '#000',
    padding: 12,
    marginBottom: 16,
    borderRadius: 6,
    backgroundColor: '#fff',
    color: '#000',
    fontSize: 16,
    fontFamily: 'System',
  },
  buttonContainer: {
    overflow: 'hidden',
    borderRadius: 6,
  },
  spacer: { height: 12 },
});
