import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { ButtonComponent } from "../components/ButtonComponent";

export const SignInScreen = ({navigation}) => {
    return(
        <View>
            <ButtonComponent buttonText={"Sign in"} 
                onPress={() => navigation.navigate('Home')}/>
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



