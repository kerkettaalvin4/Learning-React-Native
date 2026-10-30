import {StyleSheet, View, Text, Button } from "react-native";

type productCardProps = {
    name:string,
    price:number,
    onAddToCart: () => void,
}

export default function ProductCard({
    name,
    price,
    onAddToCart,
}:productCardProps){

    return(
        <View style={styles.card}>
            <Text style = {styles.name}>{name}</Text>
            <Text style = {styles.price}>₹{price}</Text>
            <Button 
            title='Add to cart'
            onPress={onAddToCart}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#E8F0FE',
        padding:20,
        borderRadius: 16,
        marginBottom: 12,
    },

    name: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#172554',
    },

    price: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#15803D',
        marginTop: 8,
    },

})