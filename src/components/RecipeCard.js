import React from 'react';
import { View, Text, Image, TouchableOpacity, Button, StyleSheet } from 'react-native';

export default function RecipeCard({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(item)}>
      <Image source={{ uri: item.image }} style={styles.cardImage} />
      <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardMeta}>{item.duration} • {item.category}</Text>
        <View style={styles.cardButtons}>
          <TouchableOpacity style={styles.ghostButton} onPress={() => alert('Saved: ' + item.title)}>
            <Text style={styles.ghostButtonText}>Save</Text>
          </TouchableOpacity>
          <Button title="Share" onPress={() => alert('Share: ' + item.title)} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#fff', borderRadius: 16, marginBottom: 16, overflow: 'hidden', elevation: 3 },
  cardImage: { width: '100%', height: 180, resizeMode: 'cover' },
  cardBody: { padding: 14 },
  cardTitle: { fontSize: 18, fontWeight: '700', color: '#222', textTransform: 'capitalize' },
  cardMeta: { fontSize: 13, color: '#777', marginTop: 6 },
  cardButtons: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 14 },
  ghostButton: { paddingVertical: 8, paddingHorizontal: 14, borderRadius: 10, borderWidth: 1, borderColor: '#ccc', backgroundColor: '#fafafa' },
  ghostButtonText: { fontSize: 12, fontWeight: '600', textTransform: 'uppercase', letterSpacing: 0.5 }
});
