import React from "react";
import { StyleSheet, Pressable, View, Text, Dimensions } from "react-native";



const screenWidth = Dimensions.get('window').width;
buttonWidth = screenWidth - 120;

export const ButtonComponent = ({buttonText, onPress, variant}) => {
    return(
        <View>
            <Pressable
              style={[
                styles.container, 
                variant === 'journal' && styles.journalButton,
                variant === 'home' && styles.homeButton,
                variant === 'start' && styles.getStarted // Conditional styling for 'special'
              ]}
              onPress={onPress}>
                <Text style={[
                styles.container, 
                variant === 'journal' && styles.journalButtonText,
                variant === 'home' && styles.homeButtonText,
                variant === 'start' && styles.getStartedText // Conditional styling for 'special'
              ]} >{buttonText}</Text> 
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
        getStarted: {
           marginTop: 5,
            borderRadius: 30,
            backgroundColor: "#ABE1E1",
            textColor: '#112945',
            padding: 20,
        },
        homeButton: {
            marginTop: 5,
             borderRadius: 30,
             backgroundColor: "#112945",
             textColor: '#ABE1E1',
             padding: 20,
             filter: ' drop-shadow(4px 7px 5px #13273F)',
         },

         getStartedText: {
            fontFamily: 'Lexend, sans-serif',
            fontWeight:'300',
            fontSize:'20px',
            color: '#112945',
            
        },
        homeButtonText: {
            fontFamily: 'Lexend, sans-serif',
            fontWeight:'300',
            fontSize:'20px',
            color: '#ABE1E1',
            
        },
        journalButton:{
            borderRadius: 30,
            backgroundColor: "#ABE1E1",
            color: 'white',
            padding: 20,
            height: 100,
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center'

        }
        


    });
