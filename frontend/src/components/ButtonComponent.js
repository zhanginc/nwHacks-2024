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
                <Text style={styles.getStartedText} >{buttonText}</Text> 
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
            borderRadius: 30,
            backgroundColor: "#ABE1E1",
            color: 'white',
            padding: 20,

        }


    });
