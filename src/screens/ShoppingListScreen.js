import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Checkbox } from 'react-native-paper';

const ACCENT = '#FF6F61';
const SECONDARY = '#FF6F61';

const initialItems = [
  { id: '1', name: 'Apple', category: 'Fruits', imageName: 'molle.png', bought: false },
  { id: '2', name: 'Banana', category: 'Fruits', imageName: 'banane.png', bought: false },
  { id: '3', name: 'Kiwi', category: 'Fruits', imageName: 'kivi.png', bought: false },
  { id: '4', name: 'Strawberries', category: 'Fruits', imageName: 'Luleshtrydhe.png', bought: false },
  { id: '5', name: 'Tomatoes', category: 'Vegetables', imageName: 'domate.png', bought: false },
  { id: '6', name: 'Onion', category: 'Vegetables', imageName: 'qepa.png', bought: false },
  { id: '7', name: 'Pepper', category: 'Vegetables', imageName: 'spece.jpg', bought: false },
  { id: '8', name: 'Carrot', category: 'Vegetables', imageName: 'karrote.png', bought: false },
  { id: '9', name: 'Water', category: 'Drinks', imageName: 'uje.png', bought: false },
  { id: '10', name: 'Milk', category: 'Drinks', imageName: 'qumesht.png', bought: false },
  { id: '11', name: 'Orange Juice', category: 'Drinks', imageName: 'portokall.png', bought: false },
  { id: '12', name: 'White Cheese', category: 'Dairy', imageName: 'djathe.jpg', bought: false },
  { id: '13', name: 'Cottage Cheese', category: 'Dairy', imageName: 'gjize.jpg', bought: false },
  { id: '14', name: 'Cream', category: 'Dairy', imageName: 'pana.jpg', bought: false },
  { id: '15', name: 'Chicken', category: 'Meat', imageName: 'pule.jpg', bought: false },
  { id: '16', name: 'Beef', category: 'Meat', imageName: 'vici.jpg', bought: false },
  { id: '17', name: 'Ham', category: 'Meat', imageName: 'proshute.png', bought: false },
  { id: '18', name: 'Salt', category: 'Spices', imageName: 'kripe.png', bought: false },
  { id: '19', name: 'Black Pepper', category: 'Spices', imageName: 'piper.jpg', bought: false },
  { id: '20', name: 'Olive Oil', category: 'Spices', imageName: 'vaj.png', bought: false },
];

const imageMap = {
  'molle.png': require('../../assets/images/molle.png'),
  'banane.png': require('../../assets/images/banane.png'),
  'kivi.png': require('../../assets/images/kivi.png'),
  'Luleshtrydhe.png': require('../../assets/images/Luleshtrydhe.png'),
  'domate.png': require('../../assets/images/domate.png'),
  'qepa.png': require('../../assets/images/qepa.png'),
  'spece.jpg': require('../../assets/images/spece.jpg'),
  'karrote.png': require('../../assets/images/karrote.png'),
  'uje.png': require('../../assets/images/uje.png'),
  'qumesht.png': require('../../assets/images/qumesht.png'),
  'portokall.png': require('../../assets/images/portokall.png'),
  'djathe.jpg': require('../../assets/images/djathe.jpg'),
  'gjize.jpg': require('../../assets/images/gjize.jpg'),
  'pana.jpg': require('../../assets/images/pana.jpg'),
  'pule.jpg': require('../../assets/images/pule.jpg'),
  'vici.jpg': require('../../assets/images/vici.jpg'),
  'proshute.png': require('../../assets/images/proshute.png'),
  'kripe.png': require('../../assets/images/kripe.png'),
  'piper.jpg': require('../../assets/images/piper.jpg'),
  'vaj.png': require('../../assets/images/vaj.png'),
};

const categoryEmoji = {
  Fruits: '🍎',
  Vegetables: '🥦',
  Drinks: '🥤',
  Dairy: '🧀',
  Meat: '🥩',
  Spices: '🧂',
};

export default function ShoppingListScreen() {
  const [items, setItems] = useState(initialItems);

  const toggleBought = (id) => {
    setItems(items.map(i => i.id === id ? { ...i, bought: !i.bought } : i));
  };

  const categories = [...new Set(items.map(i => i.category))];
  const boughtTotal = items.filter(i => i.bought).length;

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
      {/* HEADER */}
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Shopping List</Text>
          <Text style={styles.headerSubtitle}>Track your groceries easily</Text>
        </View>
        <View style={styles.headerBadge}>
          <Text style={styles.badgeText}>{boughtTotal}/{items.length}</Text>
        </View>
      </View>

      {/* CATEGORIES */}
      {categories.map(cat => {
        const catItems = items.filter(i => i.category === cat);
        const boughtCount = catItems.filter(i => i.bought).length;

        return (
          <View key={cat} style={styles.categoryCard}>
            <View style={styles.categoryHeader}>
              <Text style={styles.categoryTitle}>
                {categoryEmoji[cat]} {cat}
              </Text>
              <Text style={styles.progress}>{boughtCount}/{catItems.length}</Text>
            </View>

            {catItems.map(i => (
              <TouchableOpacity
                key={i.id}
                style={[styles.itemRow, i.bought && styles.itemRowBought]}
                onPress={() => toggleBought(i.id)}
                activeOpacity={0.7}
              >
                <Image source={imageMap[i.imageName]} style={styles.image} />
                <Text style={[styles.itemText, i.bought && styles.boughtText]}>
                  {i.name}
                </Text>
                <Checkbox
                  status={i.bought ? 'checked' : 'unchecked'}
                  color={ACCENT}
                  onPress={() => toggleBought(i.id)}
                />
              </TouchableOpacity>
            ))}
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    padding: 16,
  },

  /* header */
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 12,
    shadowOffset: {width:0,height:5},
    elevation: 4,
  },

  headerTitle: {
    fontSize: 26,
    fontWeight: '700',
    color: '#FF6F61',
  },

  headerSubtitle: {
    fontSize: 13,
    color: '#666',
    marginTop: 2,
  },

  headerBadge: {
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 18,
  },

  badgeText: {
    color: ACCENT,
    fontWeight: '700',
  },

  /* category card */
  categoryCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 15,
    shadowOffset: { width:0, height:6 },
    elevation: 5,
    borderLeftWidth: 6,
    borderLeftColor: SECONDARY,
  },

  categoryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },

  categoryTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#222',
  },

  progress: {
    backgroundColor: '#E8F5E9',
    color: ACCENT,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 12,
    fontWeight: '600',
    fontSize: 12,
  },

  /* item row */
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
    borderRadius: 12,
    marginBottom: 6,
  },

  itemRowBought: {
    opacity: 0.7,
    backgroundColor: '#F0F0F0',
    borderRadius: 12,
  },

  image: {
    width: 44,
    height: 44,
    borderRadius: 10,
    marginRight: 12,
  },

  itemText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },

  boughtText: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
});
