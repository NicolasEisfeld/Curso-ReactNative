import React from 'react';
import { View, StyleSheet, ViewProps } from 'react-native';
import { Text } from './ui/Text';

function Card({ style, ...props }: ViewProps) {
  return <View style={[styles.card, style]} {...props} />;
}

function CardHeader({ style, ...props }: ViewProps) {
  return <View style={[styles.header, style]} {...props} />;
}

function CardTitle({ style, ...props }: React.ComponentProps<typeof Text>) {
  return <Text variant="h3" style={[styles.title, style]} {...props} />;
}

function CardDescription({ style, ...props }: React.ComponentProps<typeof Text>) {
  return <Text variant="muted" style={[styles.description, style]} {...props} />;
}

function CardContent({ style, ...props }: ViewProps) {
  return <View style={[styles.content, style]} {...props} />;
}

function CardFooter({ style, ...props }: ViewProps) {
  return <View style={[styles.footer, style]} {...props} />;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  header: {
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  title: {
    marginBottom: 4,
  },
  description: {
    color: '#666',
  },
  content: {
    paddingHorizontal: 16,
    marginVertical: 8,
  },
  footer: {
    paddingHorizontal: 16,
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
};