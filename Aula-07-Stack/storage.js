import AsyncStorage from '@react-native-async-storage/async-storage';

const usuarios_KEY = '@contatos:usuarios';

function contactsKey(usuarioEmail) {
  return `@contatos:lista:${usuarioEmail}`;
}

export async function getUsuarios() {
  const data = await AsyncStorage.getItem(usuarios_KEY);
  return data ? JSON.parse(data) : [];
}

export async function salvarUsuario(usuario) {
  const usuarios = await getUsuarios();
  const jahExiste = usuarios.some((u) => u.email === usuario.email);
  if (jahExiste) {
    throw new Error('Email já cadastrado');
  }
  usuarios.push(usuario);
  await AsyncStorage.setItem(usuarios_KEY, JSON.stringify(usuarios));
}

export async function logarUsuario(email, password) {
  const usuarios = await getUsuarios();
  const usuario = usuarios.find((u) => u.email === email && u.password === password);
  if (!usuario) {
    throw new Error('Email ou senha inválidos');
  }
  return usuario;
}

export async function getContatos(usuarioEmail) {
  const data = await AsyncStorage.getItem(contactsKey(usuarioEmail));
  return data ? JSON.parse(data) : [];
}

export async function salvarContatos(usuarioEmail, contacts) {
  await AsyncStorage.setItem(contactsKey(usuarioEmail), JSON.stringify(contacts));
}
