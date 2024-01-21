import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button, Image, Pressable } from 'react-native';
import { ButtonComponent } from "../components/ButtonComponent";


export const WelcomeScreen = ({navigation}) => {
    return(
        
        <View style={styles.container}>
                  <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>

            <Image
                source={require('../images/Welcome_1.svg')}
            />
                <View style={styles.overlayTextContainer}>
                    <Text style={styles.overlayText} >
                        Welcome
                    </Text>
                    <Text style={styles.overlayTextMain} >
                        to Whispers
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
        left: 0,
        top: -90,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
      },

      content: {
        
        position: 'absolute',
        top: '55%', // Adjust the percentage as needed
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
      },

      overlayText: {
        fontFamily: 'Lexend, sans-serif',
        fontWeight:'500',
        fontSize: 40,
        color: '#D6F8FA', 
        width: "60%",
        textAlign: 'center'
      },

      overlayTextMain: {
        fontFamily: 'Lexend, sans-serif',
        fontWeight:'600',
        fontSize: '3rem',
        color: '#D6F8FA', 
        
        width:'fit-content',
        textAlign: 'center'
      },

      button:{

        borderRadius: 30,
        backgroundColor: "#ABE1E1",
        color: 'white',
        padding: 20,
      }
})



