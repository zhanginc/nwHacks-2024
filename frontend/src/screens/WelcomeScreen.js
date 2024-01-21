import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button, Image, Pressable } from 'react-native';
import { ButtonComponent } from "../components/ButtonComponent";


export const WelcomeScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Image
                source={require('../images/Welcome_1.svg')}
            />
                <View style={styles.overlayTextContainer}>
                    <Text style={styles.overlayText} >
                        Welcome to Whispers
                    </Text>
                </View>
            
                <View style={styles.content}>
                    <ButtonComponent buttonText={"Get Started"} 
                        onPress={() => navigation.navigate('Sign in')}
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
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
      },

      content: {
        position: 'absolute',
        top: '60%', // Adjust the percentage as needed
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
      }
})



