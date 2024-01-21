import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';
import { ButtonComponent } from "../components/ButtonComponent";
import { CardComponent } from "../components/CardComponent";

export const JournalScreen = ({navigation}) => {
    return(

        <View style={styles.container}>
            <Image
                source={require('../images/journals_of_the_week_1.svg')}
            />
       
                <View style={styles.overlayTextContainer}>
                    <Text style={styles.overlayText} >
                        1/20 - 1/27
                    </Text>
                   
                    <Text style={styles.overlayText1} >
                        This week's journals
                    </Text>
                    
                </View>
            
                <View style={styles.content}>
                    <TouchableOpacity onPress={() => navigation.navigate('Sign in')} 
                                      style={styles.button}>
                        <ButtonComponent buttonText={"Monday"}/>
                        <ButtonComponent buttonText={"Tuesday"}/>
                        <ButtonComponent buttonText={"Wednesday"}/>
                        <ButtonComponent buttonText={"Thursday"}/>
                        <ButtonComponent buttonText={"Friday"}/>
                        <ButtonComponent buttonText={"Saturday"}/>
                        <ButtonComponent buttonText={"Sunday"}/>
                        
                    </TouchableOpacity>
                
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
              },
        
              content: {
                position: 'absolute',
                top: '50%', // Adjust to 30
                left: 0,
                right: 0,
              },
        
              overlayText: {
                fontSize: 18,
                color: '#D6F8FA', 
                width: "100%",
                textAlign: 'left',
                left: 40,
                top: 50,
                fontWeight: "light"
              },
              overlayText1: {
                fontWeight:1000,
                fontSize: 30,
                color: '#D6F8FA', 
                width: "100%",
                textAlign: 'left',
                left: 40,
                top: 50
              },
        
              button:{
                borderRadius: 30,
                backgroundColor: "#ABE1E1",
                color: 'white',
    
              },
              kitty:{
                left: 205,
                top: -60
              }
        })
            


