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
                <Text>{buttonText}</Text> 
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
        getStarted: {
            borderRadius: 30,
            backgroundColor: "#ABE1E1",
            color: 'white',
            padding: 20,
        },
        journalButton:{
            borderRadius: 30,
            backgroundColor: "#ABE1E1",
            color: 'white',
            padding: 20,

        }


    });
