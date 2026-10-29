
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>My Tech Store</Text>
        <Text style={styles.subtitle}>
          Welcome back! Find something you love.
        </Text>
      </View>

      <View style={styles.productCard}>
        <Text style={styles.productName}>Gaming Keyboard</Text>
        <Text style={styles.description}>
          Comfortable and reliable for everyday use.
        </Text>
        <Text style={styles.price}>₹2,500</Text>
      </View>
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
  productCard: {
    backgroundColor: '#E8F0FE',
    padding: 20,
    borderRadius: 16,
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
