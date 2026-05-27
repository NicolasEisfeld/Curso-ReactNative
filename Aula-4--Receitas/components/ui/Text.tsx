import React from 'react';
import {
  Text as RNText,
  StyleSheet,
  type TextProps,
  type TextStyle,
} from 'react-native';

// Estilização feita por IA
type Variant =
  | 'default'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'p'
  | 'blockquote'
  | 'code'
  | 'lead'
  | 'large'
  | 'small'
  | 'muted';

type Props = TextProps & {
  variant?: Variant;
  style?: TextStyle | TextStyle[];
};

function Text({ variant = 'default', style, ...props }: Props) {
  return (
    <RNText
      {...props}
      style={[styles.base, variantStyles[variant], style]}
    />
  );
}

const styles = StyleSheet.create({
  base: {
    fontSize: 16,
    color: '#111',
  },
});

const variantStyles: Record<Variant, TextStyle> = {
  default: {},

  h1: {
    fontSize: 32,
    fontWeight: '800',
    textAlign: 'center',
  },

  h2: {
    fontSize: 28,
    fontWeight: '600',
  },

  h3: {
    fontSize: 24,
    fontWeight: '600',
  },

  h4: {
    fontSize: 20,
    fontWeight: '600',
  },

  p: {
    lineHeight: 22,
  },

  blockquote: {
    borderLeftWidth: 2,
    paddingLeft: 8,
    fontStyle: 'italic',
  },

  code: {
    fontFamily: 'monospace',
    fontSize: 14,
  },

  lead: {
    fontSize: 18,
    color: '#666',
  },

  large: {
    fontSize: 18,
    fontWeight: '600',
  },

  small: {
    fontSize: 12,
  },

  muted: {
    fontSize: 12,
    color: '#666',
  },
};

export { Text };