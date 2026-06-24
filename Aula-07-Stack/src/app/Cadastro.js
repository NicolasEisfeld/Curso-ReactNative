import { useState } from 'react';
import { View, Text, TextInput, Button, Alert, Platform, StyleSheet } from 'react-native';
import { salvarUsuario } from '../storage';

export default function Cadastro({ navigation }) {  
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  async function cadastrarUsuario() {
    if (!nome.trim() || !email.trim() || !senha) {
      mostrarMensagem("Preencha todos os campos");
      return;
    }
    if (senha !== confirmarSenha) {
      mostrarMensagem("As senhas tem que ser iguais");
      return;
    }
    try {
      await salvarUsuario({
        nome: nome.trim(),
        email: email.trim().toLowerCase(),
        password: senha,
      });
      mostrarMensagem("Conta criada com sucesso, acesse a página de login")
      navigation.navigate('Login')
    } catch (error) {
      mostrarMensagem("Erro ao criar a conta. Tente Novamente")
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
        <Text style={styles.title}>Cadastro</Text>
        <TextInput style={styles.input} placeholder="Nome" value={nome} onChangeText={setNome} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Confirmar Senha"
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
          secureTextEntry
        />
        <View style={styles.buttonContainer}>
          <Button title="Cadastrar" onPress={cadastrarUsuario} />
        </View>
        <View style={styles.spacer} />
        <View style={styles.buttonContainer}>
          <Button title="Voltar ao Login" onPress={() => navigation.navigate('Login')} />
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
