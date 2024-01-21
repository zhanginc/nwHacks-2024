import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { ButtonComponent } from "../components/ButtonComponent";
import { CardComponent } from "../components/CardComponent";

export const HomeScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <ButtonComponent 
                variant='journal'
                buttonText={"Today's Journal"} 
                onPress={() => navigation.navigate('QuestionForm')}/>
            <ButtonComponent 
            variant='journal'
            buttonText={"This Weeks Journal"} onPress={() => 
            navigation.navigate('Journals')}
            />
            <ButtonComponent 
            variant='journal'
            buttonText={"Weekly Summary"} 
            onPress ={() => navigation.navigate("Summary")}
            />
            <ButtonComponent 
            variant='journal'
            buttonText={"Your Archive"}
            onPress ={() => navigation.navigate("Summary")}
            />
            
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        flexDirection: "column",
        gap: 20,

        
       }
})


