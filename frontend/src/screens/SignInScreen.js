import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button, Image, TextInput } from 'react-native';
import { ButtonComponent } from "../components/ButtonComponent";


export const SignInScreen = ({navigation}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return(
        <View style={styles.container}>
            <Image
                source={require('../images/Welcome_1.svg')}
            />
                <View style={styles.overlayTextContainer}>
                    <Text style={styles.overlayText} >
                        Sign in
                    </Text>
                </View>
                <View style={styles.input}>
                    <TextInput
                    style={styles.inputField}
                    value={username} 
                    onChangeText={setUsername}
                    placeholder="Username"
                    />
                    <TextInput
                    style={styles.inputField}
                    value={password} 
                    onChangeText={setPassword}
                    placeholder="Password"
                    />
                </View>

                <View style={styles.content}>
                    <ButtonComponent 
                        buttonText={"Sign in"} 
                        onPress={() => navigation.navigate('Home')}
                        variant={"start"}
                    />
                </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#102945',
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        
    },
    overlayTextContainer: {
        position: 'absolute',
        top: "35%",
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
      },

      content: {
        position: 'absolute',
        top: '60%',
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
      },

      overlayText: {
        fontSize: 40,
        color: 'white', 
        width: "60%",
        textAlign: 'center'
      },

      button:{
        borderRadius: 30,
        backgroundColor: "#ABE1E1",
        color: 'white',
        padding: 20,
      },

      input: {
        position: 'absolute',
        top: '45%', // Adjust the percentage as needed
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,

      },

      inputField: {
        width: '80%',
        height: 40,
        backgroundColor: 'white',
        borderRadius: 8,
        paddingLeft: 10,
        backgroundColor: "#D6F8FA"

      },
})



