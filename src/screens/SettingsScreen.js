import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import Container from '../components/Container';
import { Ionicons } from '@expo/vector-icons';

const ACCENT = '#FF6F61';

export default function SettingsScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  const toggleNotifications = () => {
    setNotificationsEnabled(prev => !prev);
  };

  return (
    <Container style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
      <View style={styles.header}>
        <Text style={styles.heading}>Settings</Text>
      </View>

      {/* Notifications */}
      <View style={[styles.card, { borderLeftColor: ACCENT }]}>
        <View>
          <Text style={styles.optionText}>Notifications</Text>
          <Text style={styles.subText}>Enable or disable app notifications</Text>
        </View>
        <Switch
          value={notificationsEnabled}
          onValueChange={toggleNotifications}
          trackColor={{ false: '#ccc', true: ACCENT }}
          thumbColor="#fff"
        />
      </View>

      {/* Language */}
      <View style={[styles.card, { borderLeftColor: ACCENT }]}>
        <View style={styles.optionRow}>
          <Ionicons name="language-outline" size={24} color={ACCENT} style={{ marginRight: 10 }} />
          <Text style={styles.optionText}>Language</Text>
        </View>
        <Text style={styles.subText}>English</Text>
      </View>

      {/* App Version */}
      <View style={[styles.card, { borderLeftColor: ACCENT }]}>
        <View style={styles.optionRow}>
          <Ionicons name="information-circle-outline" size={24} color={ACCENT} style={{ marginRight: 10 }} />
          <Text style={styles.optionText}>App Version</Text>
        </View>
        <Text style={styles.subText}>1.0.0</Text>
      </View>

      {/* Privacy Policy */}
      <TouchableOpacity style={[styles.card, { borderLeftColor: ACCENT }]}>
        <View style={styles.optionRow}>
          <Ionicons name="lock-closed-outline" size={24} color={ACCENT} style={{ marginRight: 10 }} />
          <Text style={styles.optionText}>Privacy Policy</Text>
        </View>
        <Ionicons name="chevron-forward-outline" size={20} color={ACCENT} />
      </TouchableOpacity>

      {/* Terms & Conditions */}
      <TouchableOpacity style={[styles.card, { borderLeftColor: ACCENT }]}>
        <View style={styles.optionRow}>
          <Ionicons name="document-text-outline" size={24} color={ACCENT} style={{ marginRight: 10 }} />
          <Text style={styles.optionText}>Terms & Conditions</Text>
        </View>
        <Ionicons name="chevron-forward-outline" size={20} color={ACCENT} />
      </TouchableOpacity>

   
    </Container>
  );
}

const styles = StyleSheet.create({
  header: { padding: 20 },
  heading: { fontSize: 26, fontWeight: 'bold', marginBottom: 10, color: '#222' },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 15,
    padding: 15,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    borderLeftWidth: 5,
  },
  optionText: { fontSize: 16, fontWeight: '600', color: '#333' },
  subText: { fontSize: 12, color: '#888', marginTop: 2 },
  optionRow: { flexDirection: 'row', alignItems: 'center' },
  helpButton: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    backgroundColor: ACCENT,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: 'center',
    elevation: 6,
    shadowColor: ACCENT,
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
  },
  helpText: { color: '#fff', fontWeight: '700', marginLeft: 10, fontSize: 16 },
});
