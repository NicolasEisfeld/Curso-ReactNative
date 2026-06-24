// Theme Configuration - Paleta branco e preto (Gerado por IA)
export const theme = {
  colors: {
    white: '#fff',
    black: '#000',
    darkGray: '#1a1a1a',
    mediumGray: '#333',
    lightGray: '#f5f5f5',
    borderGray: '#666',
  },

  fontFamily: {
    primary: 'System', // Sistema padrão sans-serif
  },

  sizes: {
    fontSmall: 14,
    fontRegular: 16,
    fontTitle: 24,
    fontHeaderTitle: 18,
    fontLarge: 28,
  },

  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    xxl: 24,
    xxxl: 30,
  },

  borderRadius: {
    small: 4,
    medium: 6,
    large: 8,
  },
};

export const navigationTheme = {
  headerStyle: {
    backgroundColor: theme.colors.black,
  },
  headerTintColor: theme.colors.white,
  headerTitleStyle: {
    fontWeight: '600',
    fontSize: theme.sizes.fontHeaderTitle,
    fontFamily: theme.fontFamily.primary,
  },
  headerBackTitleVisible: false,
};

