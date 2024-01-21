import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { ButtonComponent } from "../components/ButtonComponent";
import { CardComponent } from "../components/CardComponent";

export const JournalScreen = ({navigation}) => {
    return(
        <View style={{
            flexDirection:'column',
            flex:1
          }}>
            <ButtonComponent buttonText={"Monday"}/>
            <ButtonComponent buttonText={"Tuesday"}/>
            <ButtonComponent buttonText={"Wednesday"}/>
            <ButtonComponent buttonText={"Thursday"}/>
            <ButtonComponent buttonText={"Friday"}/>
            <ButtonComponent buttonText={"Saturday"}/>
            <ButtonComponent buttonText={"Sunday"}/>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        gap: 20,
        padding: 10
        
       }
})


