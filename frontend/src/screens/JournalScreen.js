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
                <View style={styles.container}>
                    <TouchableOpacity  style={styles.button}>
                        <ButtonComponent buttonText={"Monday"} onPress={() => navigation.navigate('Summary')} variant='journal'/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                        <ButtonComponent buttonText={"Tuesday"} onPress={() => navigation.navigate('Summary')} variant='journal'/>
                    </TouchableOpacity>

                    <TouchableOpacity  style={styles.button}>
                        <ButtonComponent buttonText={"Wednesday"} onPress={() => navigation.navigate("Summary")} variant='journal'/>
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.button}>
                        <ButtonComponent buttonText={"Thursday"} onPress={() => navigation.navigate('Summary')} variant='journal'/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                        <ButtonComponent buttonText={"Friday"} onPress={() => navigation.navigate('Summary')} variant='journal'/>
                    </TouchableOpacity>

                    <TouchableOpacity  style={styles.button}>
                        <ButtonComponent buttonText={"Saturday"} onPress={() => navigation.navigate("Summary")} variant='journal'/>
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.button}>
                        <ButtonComponent buttonText={"Sunday"} onPress={() => navigation.navigate("Summary")} variant='journal'/>
                    </TouchableOpacity>

                
            </View>
                </View>

        </View>
       
    );

        }



        const styles = StyleSheet.create({
            container: {
                flex: 1,
                width: "100%",
                flexDirection: "column",
                gap: 20,
        
                
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
                top: '18%', 
                left: 0,
                right: 0,
                marginBottom: 10
              },
        
              overlayText: {
                fontSize: 18,
                color: '#D6F8FA', 
                fontFamily: 'Lexend, sans-serif',
                width: "100%",
                textAlign: 'left',
                left: 40,
                top: 50,
                fontWeight: "light"
              },
              overlayText1: {
                fontWeight:1000,
                fontFamily: 'Lexend, sans-serif',
                fontSize: 25,
                color: '#D6F8FA', 
                width: "100%",
                textAlign: 'left',
                left: 40,
                top: 50
              },
        
             button:{
                
                borderRadius: 10,
               
                
                backgroundColor: "transparent",
                color: 'white',
                
    
              },
        })
            


