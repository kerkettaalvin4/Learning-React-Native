import { useState } from "react";
import {View,Text,TextInput,StyleSheet, Button, Alert } from "react-native";

import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ActivityIndicator } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import { Keyboard } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';

export default function LoginScreen(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleLogin = async () => {

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

        setLoading(true);

        try {
            await new Promise(resolve => setTimeout(resolve, 2000));

            Alert.alert('Success', 'Login successful!');
        } finally {
            setLoading(false);
        }
    }

    return(
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior="padding"
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
                editable={!loading}
            />

            {emailError !== '' &&(
                <Text style = {{color: 'red'}}>{emailError}</Text>
            )
            
            }

            <View style = {{
                flexDirection: 'row',
                alignItems: 'center',
            }}>

                <TextInput
                placeholder = "Enter Your Password" 
                value = {password}
                onChangeText = {(text) => {
                    setPassword(text)
                    setPasswordError('')
                }}
                secureTextEntry = {!showPassword}
                editable={!loading}
                
                />

                <Pressable onPress={() => setShowPassword(!showPassword)} disabled={loading}>
                    <Ionicons
                        name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                        size={24}
                        color="gray"
                    />
                </Pressable>

            </View>

            {passwordError !== '' &&(
                <Text style = {{color: 'red'}}>{passwordError}</Text>
            )
            }
            
            <Button 
                title={loading? 'Logging in...' : 'Login'} 
                onPress={handleLogin}
                disabled = {loading}
            />
            {loading && <ActivityIndicator size="large" color="blue"/>}

        </View>
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
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