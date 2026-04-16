import React, { useState, useEffect } from 'react';
import {
      StyleSheet, View, TextInput, Text, TouchableOpacity,
      SafeAreaView, KeyboardAvoidingView, Platform, StatusBar, Alert, Keyboard, ScrollView
} from 'react-native';

const ISO_COLORS = {
      bg: '#F4F1DE',      // Relaxing Sand
      primary: '#E27D60', // Terracotta Orange
      text: '#3D405B',    // Steel Blue
      card: '#FFFFFF',
      border: '#D1D1D1'
};

export default function App() {
      const [identifier, setIdentifier] = useState('');
      const [accessKey, setAccessKey] = useState('');
      const [isLoggedIn, setIsLoggedIn] = useState(false);
      const [notes, setNotes] = useState([]);
      const [currentInput, setCurrentInput] = useState('');

      // --- THE LOGOUT LOGIC ---
      const handleLogout = (message = 'Vault Secured.') => {
            setIsLoggedIn(false);
            setAccessKey('');
            Alert.alert('Locked', message);
      };

      // --- THE GUARD (AUTO-LOCK LOGIC) ---
      useEffect(() => {
            let guardTimer;
            if (isLoggedIn) {
                  // 10 minutes timer
                  guardTimer = setTimeout(() => {
                        handleLogout('The Guard locked the vault due to inactivity.');
                  }, 600000);
            }
            return () => {
                  if (guardTimer) clearTimeout(guardTimer);
            };
      }, [isLoggedIn, notes, currentInput]);

      const handleLogin = () => {
            if (identifier.trim().toLowerCase() === 'test' && accessKey === 'test') {
                  setIsLoggedIn(true);
            } else {
                  Alert.alert('Access Denied', 'Invalid Identifier or Access Key.');
            }
      };

      const addNote = () => {
            if (currentInput.trim().length > 0) {
                  setNotes([...notes, { id: Date.now().toString(), text: currentInput }]);
                  setCurrentInput('');
                  Keyboard.dismiss();
            }
      };

      // --- SCREEN 2: THE DASHBOARD (INSIDE THE VAULT) ---
      if (isLoggedIn) {
            return (
                  <SafeAreaView style={styles.container}>
                        <View style={styles.inner}>
                              <Text style={styles.title}>Vault Dashboard</Text>
                              <Text style={styles.subtitle}>Secure Ecosystem Active</Text>

                              <View style={styles.card}>
                                    <Text style={styles.label}>New Vault Entry</Text>
                                    <TextInput
                                          style={styles.input}
                                          placeholder="Type a secret..."
                                          value={currentInput}
                                          onChangeText={setCurrentInput}
                                          autoCorrect={false}
                                    />

                                    <TouchableOpacity
                                          style={[styles.btn, { marginBottom: 20 }]}
                                          onPress={addNote}
                                    >
                                          <Text style={styles.btnText}>+ ADD TO VAULT</Text>
                                    </TouchableOpacity>

                                    <View style={{ maxHeight: 250, width: '100%', marginVertical: 10 }}>
                                          <ScrollView
                                                showsVerticalScrollIndicator={true}
                                                indicatorStyle="black"
                                                contentContainerStyle={{ paddingRight: 10 }}
                                          >
                                                {notes.map((note) => (
                                                      <View key={note.id} style={styles.noteItem}>
                                                            <Text style={styles.noteText}>• {note.text}</Text>
                                                      </View>
                                                ))}
                                          </ScrollView>
                                    </View>

                                    <TouchableOpacity
                                          style={[styles.btn, { backgroundColor: ISO_COLORS.text, marginTop: 10 }]}
                                          onPress={() => handleLogout()}
                                    >
                                          <Text style={styles.btnText}>SECURE & LOCK</Text>
                                    </TouchableOpacity>
                              </View>
                        </View>
                  </SafeAreaView>
            );
      }

      // --- SCREEN 1: THE LOGIN (OUTSIDE THE VAULT) ---
      return (
            <SafeAreaView style={styles.container}>
                  <StatusBar barStyle="dark-content" />
                  <KeyboardAvoidingView
                        behavior={Platform.OS === "ios" ? "padding" : "height"}
                        style={{ flex: 1 }}
                  >
                        <View style={styles.inner}>
                              <View style={styles.header}>
                                    <Text style={styles.title}>ISO Vault</Text>
                                    <Text style={styles.subtitle}>Secure Ecosystem Login</Text>
                              </View>

                              <View style={styles.card}>
                                    <Text style={styles.label}>Identifier</Text>
                                    <TextInput
                                          style={styles.input}
                                          placeholder="Enter ID"
                                          value={identifier}
                                          onChangeText={setIdentifier}
                                          autoCapitalize="none"
                                    />

                                    <Text style={styles.label}>Access Key</Text>
                                    <TextInput
                                          style={styles.input}
                                          placeholder="Enter Key"
                                          secureTextEntry
                                          value={accessKey}
                                          onChangeText={setAccessKey}
                                    />

                                    <TouchableOpacity style={styles.btn} onPress={handleLogin}>
                                          <Text style={styles.btnText}>INITIALIZE ACCESS</Text>
                                    </TouchableOpacity>
                              </View>
                        </View>
                  </KeyboardAvoidingView>
            </SafeAreaView>
      );
}

const styles = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: ISO_COLORS.bg
      },
      inner: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            padding: 25
      },
      header: {
            alignItems: 'center',
            width: '100%',
            marginBottom: 40
      },
      title: {
            fontSize: 32,
            fontWeight: 'bold',
            color: ISO_COLORS.text,
            textAlign: 'center'
      },
      subtitle: {
            color: '#8D99AE',
            marginTop: 5,
            marginBottom: 20,
            textAlign: 'center'
      },
      card: {
            backgroundColor: ISO_COLORS.card,
            padding: 30,
            borderRadius: 20,
            width: '100%',
            shadowColor: '#000',
            borderWidth: 1,
            borderColor: ISO_COLORS.primary,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 10,
            elevation: 5
      },
      label: {
            fontSize: 12,
            fontWeight: 'bold',
            color: ISO_COLORS.text,
            marginBottom: 8,
            textTransform: 'uppercase'
      },
      input: {
            borderBottomWidth: 1,
            borderBottomColor: ISO_COLORS.border,
            marginBottom: 25,
            paddingVertical: 8,
            fontSize: 16,
            color: ISO_COLORS.text
      },
      btn: {
            backgroundColor: ISO_COLORS.primary,
            padding: 18,
            borderRadius: 12,
            alignItems: 'center'
      },
      btnText: {
            color: '#FFF',
            fontWeight: 'bold',
            letterSpacing: 1
      },
      noteItem: {
            padding: 12,
            backgroundColor: '#FFFFFF',
            borderRadius: 8,
            marginBottom: 8,
            borderLeftWidth: 4,
            borderLeftColor: ISO_COLORS.primary,
      },
      noteText: {
            color: ISO_COLORS.text,
            fontSize: 14,
      }
});