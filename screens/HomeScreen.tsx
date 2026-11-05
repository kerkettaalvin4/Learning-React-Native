import { Text, View, StyleSheet, Button, FlatList, Pressable } from "react-native";

import { CompositeScreenProps } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList, RootTabParamList } from '../types/Navigation';

type Props = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, 'Home'>,
  NativeStackScreenProps<RootStackParamList>
>;

export default function HomeScreen({navigation}:Props){

    const products = [
    { id: 1, name: 'Wireless Mouse', price: 1200, description : 'A comfortable wireless mouse for everyday use' },
    { id: 2, name: 'Gaming Keyboard', price: 2500, description : 'A mechanical keyboard designed for gaming' },
    { id: 3, name: 'Headphones', price: 1800, description : 'High-quality headphones with clear sound' },
    ];

    return(
        <View style = {styles.container}>
            <Text style = {styles.title}>Welcome To My Tech Store!</Text>

            <FlatList 
                data={products}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => (
                    <Pressable
                        style = {styles.product} 
                        onPress={() => 
                            navigation.navigate('Details', {productName: item.name , price : item.price, description: item.description} )
                        }
                    >
                        <Text>{item.name}</Text>
                        <Text>{item.price}</Text>
                    </Pressable>
                )}
            />
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
        paddingTop: 30,
        fontSize : 20,
        fontWeight : 'bold',
        marginBottom : 20
    },
    textStyle : {
        marginBottom: 20,
        fontStyle: 'italic'
    },
    product : {
        borderRadius : 8,
        padding : 15,
        margin : 10,
        borderWidth : 1,
        width : '90%',
    },
})