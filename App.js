import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider, useTheme } from './src/context/ThemeContext';

import TabNavigator from './src/navigation/TabNavigator';
import SingleRecipeScreen from './src/screens/SingleRecipeScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}

function MainApp() {
  const { isDark } = useTheme();

  return (
    <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tabs" component={TabNavigator} />
        <Stack.Screen name="SingleRecipe" component={SingleRecipeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
