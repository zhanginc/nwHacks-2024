import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';
import { ButtonComponent } from "../components/ButtonComponent";
import { CardComponent } from "../components/CardComponent";


export const HomeScreen = ({navigation}) => {
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
                        Jan 21st, 2024
                    </Text>
                    <Image style={styles.kitty}
                    source={require('../images/Group_10.svg')} 
                    />
                </View>
            
                <View style={styles.content}>
                    <TouchableOpacity onPress={() => navigation.navigate('Sign in')} 
                                      style={styles.button}>
                        <ButtonComponent buttonText={"Today's Journal"} onPress={() => navigation.navigate('QuestionForm')}/>

                        <ButtonComponent buttonText={"This Weeks Journal"} onPress={() => navigation.navigate('Journals')}/>
                        <ButtonComponent buttonText={"Weekly Summary"} onPress ={() => navigation.navigate("Summary")}/>
                        <ButtonComponent buttonText={"Your Archive"}/>
                        
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
                fontSize: 40,
                color: '#D6F8FA', 
                width: "100%",
                textAlign: 'left',
                left: 40,
                top: 40,
                fontWeight: "light"
              },
              overlayText2: {
                fontWeight:1000,
                fontSize: 40,
                color: '#D6F8FA', 
                width: "100%",
                textAlign: 'left',
                left: 40,
                top: 40
              },
              overlayText3: {
                fontSize: 18,
                color: '#D6F8FA', 
                left: 40,
                width: "100%",
                textAlign: 'left',
                top: 40,
                marginBottom: 10
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