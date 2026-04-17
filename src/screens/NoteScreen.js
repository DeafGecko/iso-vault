import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';
import { globalStyles, ISO_COLORS, ISO_FONT_SIZES } from '../styles/theme';

export default function NoteScreen() {
      const [notes, setNotes] = useState([
            { id: '1', text: 'zer09ine labs: Obsidian Vault' },
            { id: '2', text: 'System encryption active' }
      ]);

      // The "Swipe Action" UI (Red delete button)
      const renderRightActions = (id) => (
            <TouchableOpacity
                  onPress={() => setNotes(notes.filter(n => n.id !== id))}
                  style={styles.deleteButton}
            >
                  <Text style={styles.deleteText}>DELETE</Text>
            </TouchableOpacity>
      );

      return (
            <GestureHandlerRootView style={{ flex: 1 }}>
                  <SafeAreaView style={globalStyles.container}>
                        <View style={globalStyles.inner}>

                              {/* Obsidian Header with Neon Green Badge */}
                              <View style={styles.header}>
                                    <Text style={globalStyles.title}>Secure Vault</Text>
                                    <View style={styles.statusBadge}>
                                          <Text style={styles.statusText}>● SYSTEM ENCRYPTED</Text>
                                    </View>
                              </View>

                              <ScrollView style={{ marginTop: 10 }}>
                                    {notes.map(note => (
                                          <Swipeable
                                                key={note.id}
                                                renderRightActions={() => renderRightActions(note.id)}
                                          >
                                                <View style={globalStyles.card}>
                                                      <Text style={styles.noteText}>{note.text}</Text>
                                                </View>
                                          </Swipeable>
                                    ))}
                              </ScrollView>

                        </View>
                  </SafeAreaView>
            </GestureHandlerRootView>
      );
}

const styles = StyleSheet.create({
      header: {
            marginBottom: 30,
            marginTop: 20
      },
      noteText: {
            color: ISO_COLORS.primary,
            fontSize: ISO_FONT_SIZES.md,
            fontWeight: '500'
      },
      statusText: {
            color: ISO_COLORS.accent,
            fontSize: ISO_FONT_SIZES.xs, // Ultra-small for that tech look
            fontWeight: '900',
      }, // <--- THIS COMMA WAS MISSING!
      statusBadge: {
            backgroundColor: 'rgba(16, 185, 129, 0.1)',
            paddingHorizontal: 10,
            paddingVertical: 4,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: ISO_COLORS.accent,
            alignSelf: 'flex-start',
            marginTop: 8,
      },
      deleteButton: {
            backgroundColor: ISO_COLORS.error,
            justifyContent: 'center',
            alignItems: 'center',
            width: 80,
            height: '85%',
            borderRadius: 12,
            marginLeft: 10,
      },
      deleteText: {
            color: '#FFF',
            fontWeight: 'bold',
            fontSize: 12
      }
});