import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { CardComponent } from "../components/CardComponent";



export const HomeScreen = () => {
    return(
        <View style={styles.container}>
            <CardComponent />
            <CardComponent />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        flexDirection: "row",
        gap: 50,
        backgroundColor: "orange",
        
       }
})
