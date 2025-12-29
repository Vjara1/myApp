import React, { useState, useLayoutEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, FlatList } from 'react-native';
import Container from '../components/Container';
//import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const categories = ['Breakfast', 'Lunch', 'Dinner', 'Dessert'];
const allRecipes = [
  // lista e recetave e njëjtë si më parë
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

export default function HomeScreen({ navigation }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'Home',
    });
  }, [navigation]);

  const filteredRecipes = selectedCategory === 'All' ? allRecipes : allRecipes.filter(r => r.category === selectedCategory);

  return (
    <Container>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <Text style={styles.heading}>Recipes</Text>
        <Text style={styles.subheading}>discover, cook & enjoy ✨</Text>

        {/* Category Scroll */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginVertical:20 }}>
          <TouchableOpacity style={[styles.categoryButton, selectedCategory==='All' && styles.activeCategory]} onPress={()=>setSelectedCategory('All')}>
            <Text style={[styles.categoryText, selectedCategory==='All' && styles.activeCategoryText]}>All</Text>
          </TouchableOpacity>
          {categories.map((cat, idx) => (
            <TouchableOpacity 
              key={idx} 
              style={[styles.categoryButton, selectedCategory===cat && styles.activeCategory]} 
              onPress={() => setSelectedCategory(cat)}
            >
              <Text style={[styles.categoryText, selectedCategory===cat && styles.activeCategoryText]}>{cat}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Recipe Cards */}
        <FlatList
          data={filteredRecipes}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={styles.card} 
              onPress={() => navigation.navigate('SingleRecipe', { recipe: item })}
              activeOpacity={0.85}
            >
              <Image source={item.image} style={styles.image} />
              <LinearGradient
                colors={['rgba(0,0,0,0.4)', 'rgba(0,0,0,0)']}
                style={styles.gradientOverlay}
              />
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <View style={styles.infoRow}>
                  <Text style={styles.infoText}>⏱ {item.time} min</Text>
                  <Text style={styles.infoText}>⭐ {item.difficulty}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          contentContainerStyle={{ paddingBottom:120 }} // lërë vend për floating button
        />
      </ScrollView>

      {/* Floating AddRecipe Button */}
   {/*   <LinearGradient
        colors={['#FF6F61','#FF9A76']}
        style={styles.floatingButton}
      >
        <TouchableOpacity
          style={{ flex:1, justifyContent:'center', alignItems:'center', width:'100%' }}
          onPress={() => navigation.navigate('AddRecipeModal')}
        >
          <Ionicons name="add" size={40} color="#fff" />
        </TouchableOpacity>
    </LinearGradient> */}
    </Container>
  );
}

const styles = StyleSheet.create({
  heading: { fontSize:28, fontWeight:'900', color:'#FF6F61', textAlign:'center' },
  subheading: { fontSize:16, color:'#FF6F61', textAlign:'center', marginBottom:15 },
  categoryButton: { backgroundColor:'#FFE8A1', paddingVertical:10, paddingHorizontal:18, borderRadius:25, marginRight:10, elevation:3 },
  activeCategory: { backgroundColor:'#FF6F61', elevation:6 },
  categoryText: { fontWeight:'700', color:'#FF6F61', fontSize:14 },
  activeCategoryText: { color:'#fff' },
  card: { backgroundColor:'#fff', borderRadius:20, marginBottom:20, elevation:10, shadowColor:'#000', shadowOffset:{width:0,height:5}, shadowOpacity:0.3, shadowRadius:8, overflow:'hidden' },
  image: { width:'100%', height:180 },
  gradientOverlay: { position:'absolute', left:0, right:0, top:0, height:80 },
  cardContent: { position:'absolute', bottom:15, left:15, right:15 },
  cardTitle: { fontSize:22, fontWeight:'bold', color:'#fff', textShadowColor:'#000', textShadowOffset:{width:0,height:2}, textShadowRadius:4, marginBottom:5 },
  infoRow: { flexDirection:'row', justifyContent:'space-between' },
  infoText: { fontSize:12, color:'#fff', fontWeight:'700', textShadowColor:'#000', textShadowOffset:{width:0,height:1}, textShadowRadius:2 },

  floatingButton: {
    position:'absolute',
    bottom:25,
    alignSelf:'center',
    width:80,
    height:80,
    borderRadius:40,
    justifyContent:'center',
    alignItems:'center',
    elevation:15,
    shadowColor:'#FF6F61',
    shadowOffset:{ width:0, height:7 },
    shadowOpacity:0.6,
    shadowRadius:10,
  },
});
