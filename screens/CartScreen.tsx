import { View, Text, StyleSheet } from "react-native"

export default function CartScreen(){
    return(
        <View style = {styles.conatiner}>
            <Text style = {styles.title}>My Cart</Text>
            <Text>Your Cart Items Will Appear Here</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    conatiner : {
        flex : 1,
        padding : 20,
        justifyContent : 'center',
        alignItems : 'center',
    },

    title : {
        fontSize : 24,
        fontWeight : 'bold',
        marginBottom : 15,
    },
})