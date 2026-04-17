import { StyleSheet } from 'react-native';

export const ISO_COLORS = {
      bg: '#000000',
      card: '#121212',
      primary: '#FFFFFF',
      secondary: '#A3A3A3',
      accent: '#10B981',
      error: '#EF4444',
      border: '#262626',
};

// Centralized Font Scale
export const ISO_FONT_SIZES = {
      xs: 10,
      sm: 12,
      md: 14,
      lg: 18,
      xl: 22,
};

export const globalStyles = StyleSheet.create({
      container: { flex: 1, backgroundColor: ISO_COLORS.bg },
      inner: { flex: 1, paddingHorizontal: 20, paddingTop: 50 },
      card: {
            backgroundColor: ISO_COLORS.card,
            borderRadius: 12,
            padding: 15,
            borderWidth: 1,
            borderColor: ISO_COLORS.border,
            marginBottom: 12,
      },
      // Apply the new scale here
      title: {
            fontSize: ISO_FONT_SIZES.lg,
            fontWeight: '800',
            color: ISO_COLORS.primary,
            letterSpacing: -0.5,
      },
      subtitle: {
            fontSize: ISO_FONT_SIZES.sm,
            color: ISO_COLORS.secondary,
      }
});