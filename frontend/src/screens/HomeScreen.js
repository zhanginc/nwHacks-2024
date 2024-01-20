import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { CardComponent } from "../components/CardComponent";



export const HomeScreen = () => {
    return(
        <View>
            <CardComponent />
            <CardComponent />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        gap: 20,
        
       }
})
