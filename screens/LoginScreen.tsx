import { useState } from "react";
import {View,Text,TextInput,StyleSheet, Button, Alert } from "react-native";

export default function LoginScreen(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const handleLogin = () => {

        //EMPTY FIELDS
        if (email.trim() === '' || password.trim() === '') {
            Alert.alert('Error', 'Please enter both email and password');
            return;
        }

        //INVALID EMAIL
        if (!email.includes('@') || !email.includes('.')) {
            setEmailError("Please enter a valid email")
            return;
        }

        //PASSWORD LENGTH
        if (password.length < 6) {
            setPasswordError("Password must be atleast 6 characters")
            return;
        }

        Alert.alert('Success', 'Login form submitted successfully!');
    }

    return(
        <View style = {styles.container}>

            <Text style={styles.title}>Welcome Back</Text>

            <TextInput
                placeholder = "Enter Your Email"
                value = {email}
                onChangeText={(text) => {
                    setEmail(text)
                    setEmailError('')
                }} 
                autoCapitalize="none"
                keyboardType="email-address"
            />

            {emailError !== '' &&(
                <Text style = {{color: 'red'}}>{emailError}</Text>
            )
            
            }

            <TextInput
                placeholder = "Enter Your Password" 
                value = {password}
                onChangeText = {(text) => {
                    setPassword(text)
                    setPasswordError('')
                }}
                secureTextEntry = {true}
            />

            {passwordError !== '' &&(
                <Text style = {{color: 'red'}}>{passwordError}</Text>
            )
            }
            
            <Button title="Login" onPress={handleLogin}/>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 10,
    },
})