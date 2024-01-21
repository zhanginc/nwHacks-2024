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
                variant === 'start' && styles.getStarted // Conditional styling for 'special'
              ]}
              onPress={onPress}>
                <Text style={variant === 'journal' ? styles.journalButtonText : styles.getStartedText} >{buttonText}</Text> 
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
        getStarted: {
           marginTop: 5,
            borderRadius: 30,
            backgroundColor: "#ABE1E1",
            color: '#D6F8FA',
            padding: 20,
        },

        getStartedText: {
            fontFamily: 'Lexend, sans-serif',
            fontWeight:'300',
            fontSize:'20px',
            color: '#112945',
        },
        journalButton:{
            borderRadius: 10,
            backgroundColor: "#105268",
            color: 'white',
            padding: 20,
            height: 100,
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 20,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.5,
            shadowRadius: 20,
            

        }, 
        journalButtonText: {
            color: 'white',
            fontFamily: 'Lexend, sans-serif',
            fontWeight: '300',
            fontSize: '20px',
        },


    });
