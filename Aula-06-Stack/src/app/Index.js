import { useCallback, useState } from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Platform,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { getContatos, salvarContatos } from '../../storage';


export default function Index({ navigation, route }) {
  const { usuarioEmail, usuarioName } = route.params;
  const [contatos, setContatos] = useState([]);
  const [selecionado, setSelecionado] = useState(null);

  const carregarContatos = useCallback(async () => {
    const lista = await getContatos(usuarioEmail);
    setContatos(lista);
    setSelecionado(null);
  }, [usuarioEmail]);

  useFocusEffect(
    useCallback(() => {
      carregarContatos();
    }, [carregarContatos])
  );

  function sairPagina() {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  }

  async function deletarContato() {
    if (!selecionado) {
      mostrarMensagem('Selecione um contato para deletar');
      return;
    }

    const novaLista = contatos.filter((c) => c.id !== selecionado.id);
    await salvarContatos(usuarioEmail, novaLista);
    await carregarContatos();
  }

  function alterarContato() {
    if (!selecionado) {
      mostrarMensagem('Selecione um contato para alterar');
      return;
    }
    navigation.navigate('AdicionarContato', {
      usuarioEmail,
      contato: selecionado,
    });
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
      <Text style={styles.title}>Olá, {usuarioName}</Text>
      <Text style={styles.subtitle}>Meus contatos</Text>

      <FlatList
        data={contatos}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text style={styles.empty}>Nenhum contato cadastrado</Text>}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.item, selecionado?.id === item.id && styles.itemSelected]}
            onPress={() => setSelecionado(item)}
          >
            <Text style={styles.itemNome}>{item.nome}</Text>
            <Text style={styles.itemDetail}>{item.telefone}</Text>
            {item.emailContato ? <Text style={styles.itemDetail}>{item.emailContato}</Text> : null}
          </TouchableOpacity>
        )}
        style={styles.lista}
      />

      <View style={styles.botoes}>
        <View style={styles.buttonWrapper}>
          <Button
            title="Adicionar"
            onPress={() => navigation.navigate('AdicionarContato', { usuarioEmail })}
          />
        </View>
        <View style={styles.gap} />
        <View style={styles.buttonWrapper}>
          <Button title="Alterar" onPress={alterarContato} />
        </View>
        <View style={styles.gap} />
        <View style={styles.buttonWrapper}>
          <Button title="Deletar" color="#FF0000" onPress={deletarContato} />
        </View>
        <View style={styles.gap} />
        <View style={styles.buttonWrapper}>
          <Button title="Sair" onPress={sairPagina} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'System',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 12,
    color: '#333',
    fontFamily: 'System',
  },
  lista: { flex: 1 },
  empty: {
    textAlign: 'center',
    marginTop: 40,
    color: '#666',
    fontFamily: 'System',
    fontSize: 16,
  },
  item: {
    padding: 14,
    borderWidth: 2,
    borderColor: '#000',
    marginBottom: 10,
    borderRadius: 6,
    backgroundColor: '#fff',
  },
  itemSelected: {
    borderColor: '#000',
    backgroundColor: '#f5f5f5',
  },
  itemNome: { 
    fontWeight: 'bold', 
    marginBottom: 6,
    color: '#000',
    fontSize: 16,
    fontFamily: 'System',
  },
  itemDetail: {
    color: '#333',
    fontSize: 14,
    fontFamily: 'System',
    marginBottom: 2,
  },
   botoes: {
     marginTop: 16,
     marginBottom: 40,
     alignItems: 'center',
   },
   buttonWrapper: {
     overflow: 'hidden',
     borderRadius: 6,
     width: '100%',
     maxWidth: 320,
   },
   gap: { height: 4 },
});

