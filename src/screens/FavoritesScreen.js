import React, { useContext } from 'react';
import { View, Text, FlatList } from 'react-native';
import { RecipesContext } from '../context/RecipesContext';

export default function FavoritesScreen() {
  const { recipes } = useContext(RecipesContext);

  const favorites = recipes.filter(r => r.isFavorite);

  return (
    <View style={{ padding: 20 }}>
      <FlatList
        data={favorites}
        keyExtractor={item => item.id}
        ListEmptyComponent={<Text>no favorites yet</Text>}
        renderItem={({ item }) => (
          <Text style={{ fontSize: 18, marginBottom: 10 }}>
            ❤️ {item.title}
          </Text>
        )}
      />
    </View>
  );
}
