import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';
import { ButtonComponent } from "../components/ButtonComponent";
import { CardComponent } from "../components/CardComponent";
import moment from 'moment';


export const HomeScreen = ({navigation}) => {
    let currentDate = moment().format('MMM Do, YYYY');
    return(

        <View style={styles.container}>
            <Image
                source={require('../images/Home_Page.svg')}
            />
                
                <View style={styles.overlayTextContainer}>
                    <Text style={styles.overlayText} >
                        Welcome Back!
                    </Text>
                    <Text style={styles.overlayText2} >
                        Name
                    </Text>
                    <Text style={styles.overlayText3} >
                       {currentDate}
                    </Text>
                    <Image style={styles.kitty}
                    source={require('../images/Group_10.svg')} 
                    />
                </View>
            
                <View style={styles.content}>
                <View style={styles.container}>
                    <TouchableOpacity  style={styles.button}>
                        <ButtonComponent buttonText={"Today's Journal"} onPress={() => navigation.navigate('QuestionForm')} variant='journal'/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                        <ButtonComponent buttonText={"This Weeks Journals"} onPress={() => navigation.navigate('Journals')} variant='journal'/>
                    </TouchableOpacity>

                    <TouchableOpacity  style={styles.button}>
                        <ButtonComponent buttonText={"Weekly Summary"} onPress={() => navigation.navigate("Weekly")} variant='journal'/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                        <ButtonComponent buttonText={"Your Archive"} variant='journal'/>
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
                top: '25%', // Adjust to 30
                left: 0,
                right: 0,
                marginBottom: 10
              },
        
              overlayText: {
                fontSize: 40,
                fontWeight:10,
                fontFamily: 'Lexend, sans-serif',
                color: '#D6F8FA', 
                
                textAlign: 'left',
                left: 40,
                top: 40,
              },
              overlayText2: {
                fontFamily: 'Lexend, sans-serif',
                fontWeight:500,
                fontSize: 40,
                color: '#D6F8FA', 
                width: "100%",
                textAlign: 'left',
                left: 40,
                top: 40
              },
              overlayText3: {
                fontWeight: 150,
                fontFamily: 'Lexend, sans-serif',
                fontSize: 18,
                color: '#D6F8FA', 
                left: 40,
                width: "100%",
                textAlign: 'left',
                top: 40,
                marginBottom: 10
              },
        
              button:{
                
                borderRadius: 10,
               
                
                backgroundColor: "transparent",
                color: 'white',
                
                
    
              },
              kitty:{
                left: 205,
                top: -60
              }
        })