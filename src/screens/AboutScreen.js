import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import Container from '../components/Container';
import { LinearGradient } from 'expo-linear-gradient';

export default function AboutScreen() {
  const { isDark } = useTheme();

  const bg = isDark ? '#121212' : '#FAFAFA';
  const card = isDark ? '#1E1E1E' : '#FFFFFF';
  const text = isDark ? '#EAEAEA' : '#222';

  return (
    <Container>
      <ScrollView style={{ backgroundColor: bg }}>

        {/* top */}
        <View style={styles.top}>
          <Text style={styles.title}>Recipe App</Text>
          <Text style={[styles.subtitle, { color: text }]}>
            Simple recipes. Clean experience.
          </Text>
        </View>

        {/* Highlight Card */}
        <LinearGradient
          colors={['#FF6F61', '#FFA07A']}
          style={styles.highlightCard}
        >
          <Text style={styles.highlightText}>
            🍳 Discover, Cook & Enjoy!  
            Your kitchen companion, all in one app.
          </Text>
        </LinearGradient>

        {/* Quote */}
        <View style={styles.quoteContainer}>
          <Text style={styles.quoteText}>
            "Cooking is like love. It should be entered into with abandon or not at all." 
          </Text>
        </View>

        {/* section */}
        <View style={[styles.section, { backgroundColor: card }]}>
          <Text style={styles.sectionTitle}>What is this app?</Text>
          <Text style={[styles.text, { color: text }]}>
            This app helps you discover and cook delicious recipes without distractions.
          </Text>
        </View>

        {/* Gradient Divider */}
        <LinearGradient
          colors={['#FF6F61', '#FFA07A']}
          style={styles.divider}
        />

        {/* section */}
        <View style={[styles.section, { backgroundColor: card }]}>
          <Text style={styles.sectionTitle}>Why use it?</Text>
          <Text style={[styles.text, { color: text }]}>
            Clean design, easy navigation and recipes you actually want to cook.
          </Text>
        </View>

        {/* Gradient Divider */}
        <LinearGradient
          colors={['#FF6F61', '#FFA07A']}
          style={styles.divider}
        />

        {/* Made for with shapes */}
        <View style={[styles.section, { backgroundColor: card }]}>
          <Text style={styles.sectionTitle}>Made for</Text>
          <View style={styles.shapesRow}>
            <View style={[styles.shapeCard, { backgroundColor: '#FF6F61' }]}>
              <Text style={styles.shapeText}>Beginners</Text>
            </View>
            <View style={[styles.shapeCard, { backgroundColor: '#FFA07A' }]}>
              <Text style={styles.shapeText}>Home cooks</Text>
            </View>
            <View style={[styles.shapeCard, { backgroundColor: '#FFB996' }]}>
              <Text style={styles.shapeText}>Food lovers</Text>
            </View>
          </View>
        </View>

        <Text style={[styles.footer, { color: text }]}>
          Recipe app • version 1.0
        </Text>

      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  top: {
    alignItems: 'center',
    paddingVertical: 40,
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#FF6F61',
    marginBottom: 6,
  },

  subtitle: {
    fontSize: 14,
    opacity: 0.7,
  },

  highlightCard: {
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 8,
  },

  highlightText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
  },

  quoteContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 20,
    borderRadius: 20,
    backgroundColor: '#FFE8E1',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
  },

  quoteText: {
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#FF6F61',
    fontWeight: '600',
  },

  section: {
    marginHorizontal: 20,
    marginBottom: 15,
    padding: 20,
    borderRadius: 14,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
    color: '#FF6F61',
  },

  text: {
    fontSize: 15,
    lineHeight: 22,
  },

  divider: {
    height: 3,
    marginHorizontal: 40,
    marginVertical: 10,
    borderRadius: 3,
  },

  shapesRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },

  shapeCard: {
    width: 100,
    height: 100,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
  },

  shapeText: {
    color: '#fff',
    fontWeight: '700',
    textAlign: 'center',
  },

  footer: {
    textAlign: 'center',
    fontSize: 12,
    opacity: 0.5,
    marginVertical: 25,
  },
});
