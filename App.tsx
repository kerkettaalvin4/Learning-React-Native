
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { useState } from 'react';
import ProductCard from './components/ProductCard';

export default function App() {
  const products = [
  { id: 1, name: 'Wireless Mouse', price: 1200 },
  { id: 2, name: 'Gaming Keyboard', price: 2500 },
  { id: 3, name: 'Running Shoes', price: 3000 },
  { id: 4, name: 'Headphones', price: 1800 },
  { id: 5, name: 'Earphones', price: 1000 },
  { id: 6, name: 'Cooling Pad', price: 1800 },
  { id: 7, name: 'Chair', price: 3000 },
];

  const [cartCount, setCartCount] = useState(0);
  
  const addToCart = () => {
    setCartCount((previousCount) => previousCount + 1)
  }

  const removeFromCart = () => {
    if(cartCount==0){
      setCartCount(0)
    }
    else{
      setCartCount((previousCount) => previousCount-1)
    }
    
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>My Tech Store</Text>
        <Text style={styles.subtitle}>
          Cart: {cartCount}
        </Text>
      </View>
      
        {/* {
        products.map((product)=>(
        <ProductCard
        key={product.id}
        name={product.name}
        price={product.price}
        />
      ))} */}

      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductCard
            name={item.name}
            price={item.price}
            onAddToCart={addToCart}
            onRemoveFromCart={removeFromCart}
            isCartEmpty={cartCount===0}
          />
        )}
      />
      
    </View>
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
});
