import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gaming Keyboard</Text>
      <Text style={styles.price}>Price: 2500</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'lightyellow',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title:{
    fontSize:28,
    fontWeight: 'bold',
    color: '#222222',
  },
  price:{
    fontSize:18,
    color: 'blue',
    marginTop: 10,
  },
});
