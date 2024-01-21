import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";





export const HeaderComponent = () => {
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image
                source={require('../images/chevron-left.png')}
            />
            </TouchableOpacity>
            <Text style={styles.subHeading}>
                Journal Entry
            </Text>
            <Text style={styles.heading}>
                Monday, January 20
            </Text>

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        backgroundColor: "#105268",
        padding: 20,
        rowGap: 10,
        borderRadius: 10,
    },

    heading: {
        fontSize: 30,
        marginTop: -1,
        color: "#D6F8FA",
        fontWeight: 400,
        fontFamily: 'Lexend, sans-serif',

    },
    
    subHeading: {
        fontSize: 20,
        color: "#D6F8FA",
        fontFamily: 'Lexend, sans-serif',
        fontWeight: 300,

    }

})
