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
                variant === 'journalDay' && styles.journalDayButton,
                variant === 'home' && styles.homeButton,
                variant === 'start' && styles.getStarted // Conditional styling for 'special'
              ]}
              onPress={onPress}>
                <Text style={[
                styles.container, 
                variant === 'journal' && styles.journalButtonText,
                variant === 'journalDay' && styles.journalDayButtonText,
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
            filter: ' drop-shadow(4px 7px 5px #13273F)',

            padding: 20,
        },
        homeButton: {
            marginTop: 5,
             borderRadius: 30,
             backgroundColor: "#105268",
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
            borderRadius: 10,
            // backgroundColor: "#105268",
            backgroundColor: 'rgb(16,82,104)',
            backgroundImage: 'linear-gradient(180deg, rgba(16,82,104,1) 28%, rgba(43,136,142,1) 100%)',
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
            fontWeight: '200',
            fontSize: '25px',
        },
        journalDayButton:{
            borderRadius: 10,
            // backgroundColor: "#105268",
            backgroundColor: 'rgb(44,117,141)',
            backgroundImage: 'linear-gradient(180deg, rgba(44,117,141,1) 49%, rgba(60,172,158,1) 100%)',
            color: 'white',
            padding: 15,
            height: 60,
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
        journalDayButtonText: {
            color: 'white',
            fontFamily: 'Lexend, sans-serif',
            fontWeight: '300',
            fontSize: '20px',
        },


    });
