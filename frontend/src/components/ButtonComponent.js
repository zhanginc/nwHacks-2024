import React from "react";
import { StyleSheet, TouchableOpacity, View, Text, Dimensions } from "react-native";

const screenWidth = Dimensions.get('window').width;
buttonWidth = screenWidth - 120;

export const ButtonComponent = ({buttonText, onPress, variant}) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity 
              style={[
                styles.container, 
                variant === 'journal' && styles.journalButton,
                variant === 'start' && styles.getStarted // Conditional styling for 'special'
              ]}
              onPress={onPress}>
                <Text>{buttonText}</Text> 
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
        container: {
            alignSelf: "center",
            elevation: 40,
            borderRadius: 5,
            backgroundColor: "gray",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: 'center',
            width: buttonWidth,
            height: 70,
            marginVertical: 10
        },
        column: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        getStarted: {
                backgroundColor:"blue"
        },
        journalButton:{

        }


    });
