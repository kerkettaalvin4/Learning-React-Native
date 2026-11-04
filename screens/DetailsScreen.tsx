import { Text, View, StyleSheet } from "react-native";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/Navigation";

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>

export default function DetailsScreen({route} : Props){
    const { productName, price, description } = route.params;

    return(
        <View style = {styles.container}>
            <Text style = {styles.title}>
                Product Details
            </Text>
            <Text>Product: {productName}</Text>
            <Text>Price: ₹{price}</Text>
            <Text>Description: {description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
    },

    title : {
        fontWeight : 'bold',
        fontSize : 20,
        marginBottom : 15,
    },
})