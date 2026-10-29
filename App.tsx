
import { StyleSheet, Text, View } from 'react-native';
import ProductCard from './components/ProductCard';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>My Tech Store</Text>
        <Text style={styles.subtitle}>
          Welcome back! Find something you love.
        </Text>
      </View>

      <ProductCard name='Wireless Mouse' price={1200}/>
      <ProductCard name='Gaming Keyboard' price={2500}/>
      <ProductCard name='Running Shoes' price={3000}/>
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
