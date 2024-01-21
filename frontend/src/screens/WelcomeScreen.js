import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { ButtonComponent } from "../components/ButtonComponent";

export const WelcomeScreen = ({navigation}) => {
    return(
        <View>
            <ButtonComponent buttonText={"Get Started"} variant = "start"
                onPress={() => navigation.navigate('Sign in')} />
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



