import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';
import { ButtonComponent } from "../components/ButtonComponent";
import { CardComponent } from "../components/CardComponent";
import moment from 'moment';

export const JournalScreen = ({navigation}) => {
    let now = moment();

    let weekStart = now.clone().startOf('isoWeek'); 
    let weekEnd = now.clone().endOf('isoWeek'); 

    let formattedStart = weekStart.format('M/D'); 
    let formattedEnd = weekEnd.format('M/D'); 
    
    let weekRange = `${formattedStart} - ${formattedEnd}`;
    

    return(

        <View style={styles.container}>
            <Image
                source={require('../images/journals_of_the_week_1.svg')}
            />
            
       
                <View style={styles.overlayTextContainer}>
                <TouchableOpacity style={styles.backbtn} onPress={() => navigation.navigate('Home')}>
                <Image
                    source={require('../images/chevron-left.png')}
                
                />
            </TouchableOpacity>
                    <Text style={styles.overlayText} >
                        {weekRange}
                    </Text>
                   
                    <Text style={styles.overlayText1} >
                        This week's journals
                    </Text>
                    
                </View>
            
                <View style={styles.content}>
                <View style={styles.container}>
                    <TouchableOpacity  style={styles.button}>
                        <ButtonComponent buttonText={"Monday"} onPress={() => navigation.navigate('Summary')} variant='journalDay'/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                        <ButtonComponent buttonText={"Tuesday"} onPress={() => navigation.navigate('Summary')} variant='journalDay'/>
                    </TouchableOpacity>

                    <TouchableOpacity  style={styles.button}>
                        <ButtonComponent buttonText={"Wednesday"} onPress={() => navigation.navigate("Summary")} variant='journalDay'/>
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.button}>
                        <ButtonComponent buttonText={"Thursday"} onPress={() => navigation.navigate('Summary')} variant='journalDay'/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                        <ButtonComponent buttonText={"Friday"} onPress={() => navigation.navigate('Summary')} variant='journalDay'/>
                    </TouchableOpacity>

                    <TouchableOpacity  style={styles.button}>
                        <ButtonComponent buttonText={"Saturday"} onPress={() => navigation.navigate("Summary")} variant='journalDay'/>
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.button}>
                        <ButtonComponent buttonText={"Sunday"} onPress={() => navigation.navigate("Summary")} variant='journalDay'/>
                    </TouchableOpacity>

                
            </View>
                </View>
                <Image style={styles.cat}
                source={require('../images/cat_playing.svg')}
            />

        </View>
       
    );

        }



        const styles = StyleSheet.create({
            container: {
                flex: 1,
                width: "100%",
                flexDirection: "column",
                gap: 15,
        
                
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
                fontWeight: 300,
                color: '#D6F8FA', 
                fontFamily: 'Lexend, sans-serif',
                width: "100%",
                textAlign: 'left',
                left: 20,
                top: 50,
                fontWeight: "light"
              },
              overlayText1: {
                fontWeight:400,
                fontFamily: 'Lexend, sans-serif',
                fontSize: 30,
                color: '#D6F8FA', 
                width: "100%",
                textAlign: 'left',
                left: 20,
                top: 50
              },
        
             button:{
                
                borderRadius: 10,
               
                
                backgroundColor: "transparent",
                color: 'white',
                
    
              },
              cat: {
                position: 'absolute',
                height: '18%',
                marginLeft:'25%',
                bottom:20,
        
            },
              backbtn: {
                position: 'absolute',
                top: 15,
                left: 10,
        
            },
            chev:{
                padding: 20,
                position: 'absolute',
                top: 15,
                left: 5,
        
            }
        })
            


