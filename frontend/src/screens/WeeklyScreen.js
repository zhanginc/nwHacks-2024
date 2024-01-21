import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button, Image, Pressable } from 'react-native';
import { ButtonComponent } from "../components/ButtonComponent";
import { CardComponent } from "../components/CardComponent";
import moment from 'moment';

export const WeeklyScreen = ({ navigation, dateText, emotion, quote, summary }) => {

let now = moment();

let weekStart = now.clone().startOf('isoWeek'); 
let weekEnd = now.clone().endOf('isoWeek'); 

let formattedStart = weekStart.format('MMM Do'); // e.g., "Jan 15th"
let formattedEnd = weekEnd.format('MMM Do'); // e.g., "Jan 21st"

let weekRange = `${formattedStart} - ${formattedEnd}`;
    return (
        <View style={styles.container}>
            <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>

            <Image
                source={require('../images/summarybg.svg')}
            />
            <TouchableOpacity style={styles.backbtn} onPress={() => navigation.navigate('Home')}>
                <Image
                    source={require('../images/chevron-left.png')}

                />
            </TouchableOpacity>
            <Text style={styles.headerText} >
                Weekly Summary
            </Text>
            <Text style={styles.dayText} >
                {weekRange}
                </Text>
            {/* will replace that with the dateText variable that will take in the date of the jouranl */}
            <View style={styles.overlayContainer}>
                <Image
                    style={styles.cat}
                    source={require('../images/cat_laying.svg')}
                />

                <Text style={styles.overlayText} >
                    This Week's Summary
                </Text>

                <CardComponent style={styles.chat} chatText={summary} >
                </CardComponent>

                <Text style={styles.overlayText2} >
                    Overall, you mainly felt emotion this week
                </Text>
                <Text style={styles.overlayTextQuote} >
                    Response like a quote or something about your emotion
                </Text>
                <Image
                style={styles.cat2}
                    source={require('../images/cat_sitting.svg')}
                />
                     <View style={styles.button}>
                    <ButtonComponent buttonText={"Go Home"} 
                        onPress={() => navigation.navigate('Home')}
                        variant={"home"}
                    />
                </View>

            </View>

        </View>


    );
}

const styles = StyleSheet.create({

    overlayContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        height: '80%',
        bottom: 0,
        borderRadius: 10,
        backgroundColor: 'rgb(16,82,104)',
        backgroundImage: 'linear-gradient(180deg, rgba(16,82,104,1) 58%, rgba(17,41,69,1) 100%)',
    },
    chat: {
    },
    cat: {
        position: 'absolute',
        right: 10,
        top: -40,

    },
    cat2: {
        position: 'absolute',
        right: 15,
        bottom: 100,

    },
    backbtn: {
        position: 'absolute',
        top: 15,
        left: 10,

    },
    container: {

        flex: 1,
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,

    },
    headerText: {
        fontFamily: 'Lexend, sans-serif',
        fontWeight: '200',
        fontSize: 25,
        color: '#D6F8FA',
        width: "60%",
        position: 'absolute',
        top: 50,
        left: 20,

        textAlign: 'left'
    },
    dayText: {
        fontFamily: 'Lexend, sans-serif',
        fontWeight: '400',
        fontSize: 33,
        color: '#D6F8FA',
        position: 'absolute',
        top: 80,
        left: 20,

        textAlign: 'left'
    },
    overlayText: {
        fontFamily: 'Lexend, sans-serif',
        fontWeight: '400',
        fontSize: 20,
        color: '#D6F8FA',
        alignContent: 'left',
        textAlign: 'left',
        margin: '1rem',
        marginLeft: '2rem'
    },
    overlayText2: {
        fontFamily: 'Lexend, sans-serif',
        fontWeight: '400',
        fontSize: 18,
        color: '#D6F8FA',
        alignContent: 'left',
        textAlign: 'left',
        margin: '.7rem',
        width: '45%',
        marginLeft: '2rem',
        marginTop: '12rem',
    },
    overlayTextQuote: {
        fontFamily: 'Lexend, sans-serif',
        fontWeight: '300',
        fontSize: 15,
        color: '#D6F8FA',
        alignContent: 'left',
        textAlign: 'left',
        margin: '0',
        width: '45%',
        marginLeft: '2rem',
    },
    button:{
        borderRadius: 30,
        backgroundColor: "#112945",
        color: '#ABE1E1',
        padding: 20,
      },
      button: {
        marginTop:'3rem',
        justifyContent: 'center',
        alignItems: 'center',
      },

})



