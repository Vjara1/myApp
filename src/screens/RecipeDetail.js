import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import Container from '../components/Container';

export default function RecipeDetail({ route }) {
  const { recipe } = route.params;

  return (
    <Container>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Image source={{ uri: recipe.image }} style={styles.image} />
        <Text style={styles.title}>{recipe.title}</Text>
        <Text style={styles.body}>{recipe.body}</Text>

        <Text style={styles.heading}>Ingredients:</Text>
        {recipe.ingredients.map((item, index) => (
          <Text key={index} style={styles.ingredient}>• {item}</Text>
        ))}
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  scroll: { padding: 20, paddingBottom: 40 },
  image: { width: '100%', height: 220, borderRadius: 12, marginBottom: 20 },
  title: { fontSize: 26, fontWeight: '700', marginBottom: 10, color: '#FF6F61' },
  body: { fontSize: 16, lineHeight: 24, marginBottom: 20, color: '#555' },
  heading: { fontSize: 20, fontWeight: '700', marginBottom: 10, color: '#333' },
  ingredient: { fontSize: 16, marginBottom: 4 },
});
