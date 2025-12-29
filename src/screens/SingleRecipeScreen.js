import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function SingleRecipeScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { recipe } = route.params || {};

  return (
    <View style={styles.container}>

      {/* top */}
      <View style={styles.top}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>

        <Text style={styles.category}>{recipe.category}</Text>
        <Text style={styles.title}>{recipe.title}</Text>
      </View>

      {/* stats */}
      <View style={styles.stats}>
        <Text style={styles.stat}>⏰ {recipe.time} min</Text>
        <Text style={styles.stat}>👨‍🍳 {recipe.difficulty}</Text>
        <Text style={styles.stat}>🔥 350 kcal</Text>
      </View>

      {/* description */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>description</Text>
        <Text style={styles.desc} numberOfLines={3}>
          {recipe.body}
        </Text>
      </View>

      {/* ingredients */}
      <View style={[styles.card, { flex: 1 }]}>
        <Text style={styles.sectionTitle}>ingredients</Text>
        {recipe.ingredients.slice(0, 5).map((ing, i) => (
          <Text key={i} style={styles.ing}>• {ing}</Text>
        ))}
      </View>

      {/* button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>start cooking 🍳</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, backgroundColor:'#F7F7F7', padding:20 },

  top:{ marginBottom:12 },
  backButton:{ width:40, height:40, backgroundColor:'#fff', borderRadius:12, alignItems:'center', justifyContent:'center', marginBottom:8 },
  backArrow:{ fontSize:20 },

  category:{ backgroundColor:'#FF6F61', color:'#fff', alignSelf:'flex-start', paddingHorizontal:10, paddingVertical:4, borderRadius:10, fontSize:12, marginBottom:6 },
  title:{ fontSize:26, fontWeight:'bold' },

  stats:{ flexDirection:'row', justifyContent:'space-between', marginBottom:12 },
  stat:{ backgroundColor:'#fff', paddingVertical:10, paddingHorizontal:14, borderRadius:14, fontWeight:'600' },

  card:{ backgroundColor:'#fff', borderRadius:18, padding:14, marginBottom:12 },
  sectionTitle:{ fontSize:16, fontWeight:'bold', marginBottom:6 },
  desc:{ fontSize:14, color:'#555' },

  ing:{ fontSize:14, marginBottom:6 },

  button:{ backgroundColor:'#FF6F61', paddingVertical:16, borderRadius:22, alignItems:'center' },
  buttonText:{ color:'#fff', fontSize:18, fontWeight:'bold' }
});
