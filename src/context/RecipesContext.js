import React, { createContext, useState } from 'react';
import defaultImage from '../../assets/images/default_recipe.png';

export const RecipesContext = createContext();

export const RecipesProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([
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

  ]);

  const addRecipe = (newRecipe) => {
    setRecipes(prev => [
      ...prev,
      {
        ...newRecipe,
        id: Date.now().toString(),
        image: newRecipe.image || defaultImage,
      },
    ]);
  };

  return (
    <RecipesContext.Provider value={{ recipes, addRecipe }}>
      {children}
    </RecipesContext.Provider>
  );
};
