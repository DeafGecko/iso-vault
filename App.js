import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import your modular screens - Double check these names match your files!
import NotesScreen from './src/screens/NoteScreen';
import CategoryScreen from './src/screens/CategoryScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import { ISO_COLORS } from './src/styles/theme';

// This is the line that was missing or named 'Stack'
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={{ 
          tabBarActiveTintColor: ISO_COLORS.primary,
          tabBarInactiveTintColor: 'gray',
          headerShown: false, // Keeps it clean for your COBY theme
          tabBarStyle: { backgroundColor: ISO_COLORS.bg }
        }}
      >
        <Tab.Screen name="Notes" component={NotesScreen} />
        <Tab.Screen name="Categories" component={CategoryScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}