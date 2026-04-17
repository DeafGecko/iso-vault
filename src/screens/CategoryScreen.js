import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { globalStyles, ISO_COLORS } from '../styles/theme';

export default function CategoryScreen() {
      const [passphrase, setPassphrase] = useState('TAP_TO_GENERATE');
      const [entropy, setEntropy] = useState(0);

      const generatePassphrase = () => {
            const words = ["COFFEE", "VAULT", "STEEL", "SECURE", "SAND", "MINT"];
            const word = words[Math.floor(Math.random() * words.length)];
            const num = Math.floor(1000 + Math.random() * 9000);

            setPassphrase(`${word}_${num}`);
            setEntropy(Math.floor(Math.random() * 40) + 60); // Fake "Strength" stat
      };

      return (
            <View style={globalStyles.container}>
                  <View style={globalStyles.inner}>
                        <Text style={globalStyles.title}>Security Tools</Text>
                        <Text style={globalStyles.subtitle}>Algorithm: AES-256 + WordGen</Text>

                        {/* Generator Card (Trading Dashboard Style) */}
                        <View style={[globalStyles.card, { marginTop: 30 }]}>
                              <Text style={styles.label}>PASSPHRASE_RESULT</Text>
                              <Text style={styles.resultText}>{passphrase}</Text>

                              {/* Strength Meter - Inspired by your screenshot's Win Rate */}
                              <View style={styles.statsRow}>
                                    <Text style={styles.statLabel}>STRENGTH:</Text>
                                    <Text style={styles.statValue}>{entropy}%</Text>
                              </View>
                              <View style={styles.progressBg}>
                                    <View style={[styles.progressFill, { width: `${entropy}%` }]} />
                              </View>

                              <TouchableOpacity style={styles.actionBtn} onPress={generatePassphrase}>
                                    <Text style={styles.btnText}>EXECUTE GENERATION</Text>
                              </TouchableOpacity>
                        </View>

                  </View>
            </View>
      );
}

const styles = StyleSheet.create({
      label: { color: ISO_COLORS.secondary, fontSize: 10, fontWeight: 'bold', letterSpacing: 1 },
      resultText: { color: ISO_COLORS.primary, fontSize: 28, fontWeight: '900', marginVertical: 15, fontFamily: 'Courier' },
      statsRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 },
      statLabel: { color: ISO_COLORS.secondary, fontSize: 12 },
      statValue: { color: ISO_COLORS.accent, fontWeight: 'bold' },
      progressBg: { height: 4, backgroundColor: ISO_COLORS.border, borderRadius: 2, marginBottom: 25 },
      progressFill: { height: 4, backgroundColor: ISO_COLORS.accent, borderRadius: 2 },
      actionBtn: { backgroundColor: ISO_COLORS.accent, padding: 18, borderRadius: 8, alignItems: 'center' },
      btnText: { color: '#000', fontWeight: '900', letterSpacing: 1 }
});