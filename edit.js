import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';
import { globalStyles, ISO_COLORS } from '../styles/theme';

export default function NotesScreen() {
      const [notes, setNotes] = useState([{ id: '1', text: 'Welcome to your Vault' }]);

      const renderRightActions = () => (
            <View style={{ backgroundColor: ISO_COLORS.primary, justifyContent: 'center', width: 70, borderRadius: 8, marginBottom: 8 }}>
                  <Text style={{ color: '#fff', textAlign: 'center', fontWeight: 'bold' }}>DEL</Text>
            </View>
      );

      return (
            <GestureHandlerRootView style={{ flex: 1 }}>
                  <SafeAreaView style={globalStyles.container}>
                        <View style={{ padding: 20 }}>
                              <Text style={globalStyles.title}>Secure Notes</Text>
                              <ScrollView style={{ marginTop: 20 }}>
                                    {notes.map(note => (
                                          <Swipeable key={note.id} renderRightActions={renderRightActions}>
                                                <View style={{ padding: 15, backgroundColor: '#fff', borderRadius: 8, marginBottom: 8, borderLeftWidth: 4, borderLeftColor: ISO_COLORS.primary }}>
                                                      <Text>{note.text}</Text>
                                                </View>
                                          </Swipeable>
                                    ))}
                              </ScrollView>
                        </View>
                  </SafeAreaView>
            </GestureHandlerRootView>
      );
}