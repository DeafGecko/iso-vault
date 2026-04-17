import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles, ISO_COLORS } from '../styles/theme';

// This 'export default' is what tells App.js: "I am a valid component!"
export default function SettingsScreen() {
      return (
            <View style={globalStyles.container}>
                  <View style={globalStyles.inner}>
                        <Text style={globalStyles.title}>Settings</Text>
                        <Text style={{ marginTop: 20, color: ISO_COLORS.primary }}>
                              Storage: Supabase (Coming Soon)
                        </Text>
                  </View>
            </View>
      );
}