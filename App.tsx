import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import { RootStackParamList } from './types/Navigation';

import { StyleSheet, Text, View, FlatList, TextInput, Button } from 'react-native';
import { useState, useEffect } from 'react';
import ProductCard from './components/ProductCard';
import { Product } from './types/Product';

const Stack = createNativeStackNavigator<RootStackParamList>();


export default function App() {
  return(
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={HomeScreen}
      />
      <Stack.Screen
        name='Details'
        component={DetailsScreen}
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F5F9',
    padding: 20,
    paddingTop: 60,
  },
  header: {
    marginBottom: 24,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#172554',
  },
  subtitle: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 6,
  },
  productName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#172554',
  },
  description: {
    fontSize: 15,
    color: '#64748B',
    marginTop: 8,
  },
  price: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#15803D',
    marginTop: 16,
  },
  searchInput: {
  backgroundColor: '#FFFFFF',
  padding: 14,
  borderRadius: 12,
  marginBottom: 20,
  fontSize: 16,
  borderWidth: 1,
  borderColor: '#CBD5E1',
  },
  emptyText: {
    textAlign:'center',
    fontSize: 16,
    fontWeight:  'bold',
  },
  emptyText2: {
    textAlign:'center',
    paddingTop: 5,
    fontSize: 13,
  },
});
