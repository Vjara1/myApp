import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Container from '../components/Container';

const allRecipes = [
  {
    id: '1',
    title: 'Pancakes',
    category: 'Breakfast',
    image: require('../../assets/images/pancakes.jpg'),
    body: 'Fluffy pancakes with maple syrup.',
    ingredients: ['2 Eggs', '1 cup Milk', '1 cup Flour', '2 tbsp Sugar', '1 tsp Baking Powder'],
    time: 20,
    difficulty: 'Easy',
  },
  {
    id: '2',
    title: 'Omelette',
    category:'Breakfast',
    image: require('../../assets/images/omlette.jpg'),
    body: 'Egg omelette with cheese and veggies.',
    ingredients: ['3 Eggs', '50g Cheese', '1 Tomato', '1 tsp Butter'],
    time: 10,
    difficulty: 'Easy',
  },
  {
    id: '3',
    title: 'Spaghetti',
    category:'Lunch',
    image: require('../../assets/images/spaghetti.jpg'),
    body: 'Classic Italian spaghetti with tomato sauce.',
    ingredients: ['200g Spaghetti', '100g Tomato Sauce', '50g Parmesan', '2 Garlic Cloves'],
    time: 30,
    difficulty: 'Medium',
  },
  {
    id: '4',
    title: 'Grilled Chicken',
    category:'Lunch',
    image: require('../../assets/images/grilled_chicken.jpg'),
    body: 'Grilled chicken breast with salad.',
    ingredients: ['200g Chicken Breast', 'Lettuce', 'Tomato', 'Olive Oil', 'Spices'],
    time: 25,
    difficulty: 'Medium',
  },
  {
    id: '5',
    title: 'Steak',
    category:'Dinner',
    image: require('../../assets/images/steak.jpg'),
    body: 'Juicy steak with mashed potatoes.',
    ingredients: ['250g Beef Steak', 'Potatoes', 'Butter', 'Salt', 'Pepper'],
    time: 40,
    difficulty: 'Hard',
  },
  {
    id: '6',
    title: 'Salmon',
    category:'Dinner',
    image: require('../../assets/images/salmon.jpg'),
    body: 'Baked salmon with lemon and herbs.',
    ingredients: ['200g Salmon', 'Lemon', 'Dill', 'Olive Oil', 'Salt'],
    time: 35,
    difficulty: 'Medium',
  },
  {
    id: '7',
    title: 'Chocolate Cake',
    category:'Dessert',
    image: require('../../assets/images/chocolate_cake.jpg'),
    body: 'Rich and moist chocolate cake.',
    ingredients: ['200g Flour', '150g Sugar', '100g Cocoa Powder', '3 Eggs', '100g Butter'],
    time: 60,
    difficulty: 'Hard',
  },
  {
    id: '8',
    title: 'Ice Cream',
    category:'Dessert',
    image: require('../../assets/images/ice_cream.jpg'),
    body: 'Vanilla ice cream with toppings.',
    ingredients: ['500ml Milk', '100g Sugar', '1 Vanilla Bean', '200ml Cream'],
    time: 50,
    difficulty: 'Medium',
  },
  {
    id: '9',
    title: 'French Toast',
    category: 'Breakfast',
    image: require('../../assets/images/french_toast.jpg'),
    body: 'Golden french toast with honey and fruits.',
    ingredients: ['2 Eggs', '1/2 cup Milk', '4 Bread Slices', 'Honey', 'Butter'],
    time: 15,
    difficulty: 'Easy',
  },
  {
    id: '10',
    title: 'Chicken Wrap',
    category: 'Lunch',
    image: require('../../assets/images/chicken_wrap.jpg'),
    body: 'Grilled chicken wrap with fresh vegetables.',
    ingredients: ['Tortilla', '150g Chicken', 'Lettuce', 'Tomato', 'Yogurt Sauce'],
    time: 20,
    difficulty: 'Easy',
  },
  {
    id: '11',
    title: 'Caesar Salad',
    category: 'Lunch',
    image: require('../../assets/images/caesar_salad.jpg'),
    body: 'Classic caesar salad with chicken and parmesan.',
    ingredients: ['Chicken Breast', 'Lettuce', 'Parmesan', 'Croutons', 'Caesar Sauce'],
    time: 20,
    difficulty: 'Easy',
  },
  {
    id: '12',
    title: 'Pizza Margherita',
    category: 'Dinner',
    image: require('../../assets/images/pizza.jpg'),
    body: 'Classic Italian pizza with tomato and mozzarella.',
    ingredients: ['Pizza Dough', 'Tomato Sauce', 'Mozzarella', 'Basil'],
    time: 45,
    difficulty: 'Medium',
  },
  {
    id: '13',
    title: 'Chicken Soup',
    category: 'Dinner',
    image: require('../../assets/images/chicken_soup.jpg'),
    body: 'Warm homemade chicken soup.',
    ingredients: ['Chicken', 'Carrot', 'Potato', 'Onion', 'Salt'],
    time: 50,
    difficulty: 'Easy',
  },
  {
    id: '14',
    title: 'Fruit Salad',
    category: 'Dessert',
    image: require('../../assets/images/fruit_salad.jpg'),
    body: 'Fresh fruit salad with honey and lemon.',
    ingredients: ['Apple', 'Banana', 'Orange', 'Grapes', 'Honey'],
    time: 10,
    difficulty: 'Easy',
  },
];

export default function SearchScreen({ navigation, isDark }) {
  const [searchText, setSearchText] = useState('');

  const filteredRecipes = allRecipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <Container style={{ flex: 1, backgroundColor: isDark ? '#121212' : '#f5f5f5' }}>
      <FlatList
        ListHeaderComponent={
          <View style={{ padding: 20 }}>
            <Text style={[styles.heading, { color: isDark ? '#fff' : '#FF6F61' }]}>
              Search recipes
            </Text>

            <TextInput
              style={[
                styles.input,
                {
                  backgroundColor: isDark ? '#1e1e1e' : '#fff',
                  color: isDark ? '#fff' : '#000',
                },
              ]}
              placeholder="Type recipe name..."
              placeholderTextColor={isDark ? '#aaa' : '#999'}
              value={searchText}
              onChangeText={setSearchText}
            />

            {filteredRecipes.length === 0 && (
              <Text style={[styles.notFound, { color: isDark ? '#aaa' : '#555' }]}>
                Recipe not found
              </Text>
            )}
          </View>
        }
        data={filteredRecipes}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.card,
              { backgroundColor: isDark ? '#1e1e1e' : '#fff' },
            ]}
            onPress={() => navigation.navigate('SingleRecipe', { recipe: item })}
            activeOpacity={0.85}
          >
            <View style={{ position:'relative' }}>
              <Image source={item.image} style={styles.image} />
              <View style={styles.imageOverlay} />
            </View>

            <Text style={[styles.cardTitle, { color: isDark ? '#fff' : '#FF6F61' }]}>
              {item.title}
            </Text>
            <Text style={[styles.cardBody, { color: isDark ? '#ccc' : '#555' }]}>
              {item.body}
            </Text>
            <View style={styles.detailsRow}>
              <Text style={[styles.details, { color: isDark ? '#aaa' : '#FF6F61' }]}>
                ⏱ {item.time} mins
              </Text>
              <Text style={[styles.details, { color: isDark ? '#aaa' : '#FF6F61' }]}>
                ⭐ {item.difficulty}
              </Text>
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={{ paddingBottom: 40, paddingHorizontal: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  heading: { fontSize: 28, fontWeight: '700', marginBottom: 20 },
  input: { 
    padding: 14, 
    borderRadius: 14, 
    marginBottom: 20, 
    elevation: 3, 
    shadowColor:'#000', 
    shadowOffset:{width:0,height:3}, 
    shadowOpacity:0.15, 
    shadowRadius:4 
  },
  card: { 
    borderRadius: 18, 
    marginBottom: 18, 
    elevation: 5, 
    shadowColor:'#000', 
    shadowOffset:{width:0,height:5}, 
    shadowOpacity:0.2, 
    shadowRadius:8, 
    padding:12 
  },
  image: { width:'100%', height:150, borderRadius:14, marginBottom:8 },
  imageOverlay: { 
    position:'absolute', top:0, left:0, right:0, bottom:0, 
    backgroundColor:'rgba(255,111,97,0.15)', 
    borderRadius:14 
  },
  cardTitle: { fontSize:18, fontWeight:'700', marginBottom:4 },
  cardBody: { fontSize:14, marginBottom:6 },
  detailsRow: { flexDirection:'row', justifyContent:'space-between' },
  details: { fontSize:13, fontWeight:'600' },
  notFound: { fontSize:18, textAlign:'center', marginTop:20 },
});