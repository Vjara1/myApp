import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { RecipesContext } from '../context/RecipesContext';

export default function AddRecipeScreen() {
  const { addRecipe } = useContext(RecipesContext);

  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');

  const handleAdd = () => {
    if (!title) return;

    addRecipe({
      id: Date.now().toString(),
      title,
      ingredients: ingredients.split(','),
      isFavorite: false,
    });

    setTitle('');
    setIngredients('');
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>recipe title</Text>
      <TextInput
        value={title}
        onChangeText={setTitle}
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />

      <Text>ingredients (comma separated)</Text>
      <TextInput
        value={ingredients}
        onChangeText={setIngredients}
        style={{ borderWidth: 1, marginBottom: 20, padding: 8 }}
      />

      <TouchableOpacity onPress={handleAdd}>
        <Text style={{ fontSize: 18, color: '#FF6F61' }}>add recipe</Text>
      </TouchableOpacity>
    </View>
  );
}
