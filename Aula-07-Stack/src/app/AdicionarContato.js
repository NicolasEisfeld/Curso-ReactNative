import { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { getContatos, salvarContatos } from '../storage';

function gerarId() {
  return Date.now().toString();
}

export default function AdicionarContato({ navigation, route }) {
  const { usuarioEmail, contato } = route.params;
  const editando = Boolean(contato);

  const [nome, setNome] = useState(contato?.nome ?? '');
  const [telefone, setTelefone] = useState(contato?.telefone ?? '');
  const [emailContato, setEmailContato] = useState(contato?.emailContato ?? '');

  async function salvarUsuario() {
    if (!nome.trim() || !telefone.trim()) {
      Alert.alert('Atenção', 'Nome e telefone são obrigatórios');
      return;
    }

    const lista = await getContatos(usuarioEmail);
    const novoContato = {
      id: contato?.id ?? gerarId(),
      nome: nome.trim(),
      telefone: telefone.trim(),
      emailContato: emailContato.trim(),
    };

    let novaLista;
    if (editando) {
      novaLista = lista.map((c) => (c.id === contato.id ? novoContato : c));
    } else {
      novaLista = [...lista, novoContato];
    }

    await salvarContatos(usuarioEmail, novaLista);
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>{editando ? 'Alterar contato' : 'Adicionar contato'}</Text>
        <TextInput style={styles.input} placeholder="Nome" value={nome} onChangeText={setNome} />
        <TextInput
          style={styles.input}
          placeholder="Telefone"
          value={telefone}
          onChangeText={setTelefone}
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="Email (opcional)"
          value={emailContato}
          onChangeText={setEmailContato}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <View style={styles.buttonContainer}>
          <Button title={editando ? 'Salvar alterações' : 'Salvar'} onPress={salvarUsuario} />
        </View>
        <View style={styles.spacer} />
        <View style={styles.buttonContainer}>
          <Button title="Cancelar" onPress={() => navigation.goBack()} />
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
    fontSize: 24,
    marginBottom: 24,
    fontWeight: '600',
    color: '#000',
    fontFamily: 'System',
    textAlign: 'center',
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
