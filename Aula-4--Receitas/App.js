import React from 'react';
import { StyleSheet, View, Image, ScrollView, Pressable } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { Text } from './components/ui/Text';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from './components/Card';

const CARD_MIN_HEIGHT = 320;

export default function App() {
  const recipes = [
    {
      title: 'Cuscuz Paulista',
      description: 'Feito com farinha de milho, sardinha, ovos e ervilha, criticado pela mistura de ingredientes e textura.',
      image: require('./assets/cuscuz-paulista.jpg'),
      time: '30 min',
      difficulty: 'Fácil',
    },
    {
      title: 'Arroz com Pequi',
      description: 'Tradicional em Goiás, famoso pelo sabor marcante e caroços perigosos.',
      image: require('./assets/arroz-pequi.jpg'),
      time: '45 min',
      difficulty: 'Médio',
    },
    {
      title: 'Salada de Maionese',
      description: 'Prato comum de churrascos.',
      image: require('./assets/salada-maionese.jpg'),
      time: '20 min',
      difficulty: 'Fácil',
    },
    {
      title: 'Caldo de Mocotó',
      description: 'Caldo feito com patas de boi, com sabor intenso.',
      image: require('./assets/caldo-mocoto.webp'),
      time: '120 min',
      difficulty: 'Difícil',
    },
        {
      title: 'Caldo de Mocotó',
      description: 'Caldo feito com patas de boi, com sabor intenso.',
      image: require('./assets/caldo-mocoto.webp'),
      time: '120 min',
      difficulty: 'Difícil',
    },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <Text variant="h2" style={styles.pageTitle}>Receitas Tradicionais</Text>

      {recipes.map((recipe, index) => (
        <RecipeCard key={index} {...recipe} />
      ))}
    </ScrollView>
  );
}

function RecipeCard({ title, description, image, time, difficulty }: any) {
  return (
    <Card style={styles.card}>
      <View style={styles.cardContent}>
        <CardHeader>
          <CardTitle numberOfLines={1}>{title}</CardTitle>
          <CardDescription numberOfLines={3}>{description}</CardDescription>
        </CardHeader>

        <Image source={image} style={styles.cardImage} resizeMode="cover" />

        <CardFooter style={styles.cardFooter}>
          <View style={styles.footerInfo}>
            <Feather name="clock" size={16} color="#333" />
            <Text style={styles.footerText}>{time}</Text>

            <MaterialIcons name="whatshot" size={16} color="#e67e22" />
            <Text style={styles.footerText}>{difficulty}</Text>
          </View>

          <Pressable style={styles.button} onPress={() => alert(`Ver receita de ${title}`)}>
            <Text style={styles.buttonText}>Ver Receita</Text>
          </Pressable>
        </CardFooter>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  scrollContent: {
    padding: 16,
  },
  pageTitle: {
    marginTop: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  card: {
    minWidth: 300,
    maxWidth: 600,
    alignSelf: 'center',
    marginBottom: 20,
    minHeight: CARD_MIN_HEIGHT,
    borderRadius: 12,
    backgroundColor: '#fff',
    paddingVertical: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  cardContent: {
    flex: 1,
    justifyContent: 'space-between',
  },
  cardImage: {
    width: '100%',
    height: 150,
    borderRadius: 12,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 8,
  },
  footerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  footerText: {
    marginRight: 12,
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});