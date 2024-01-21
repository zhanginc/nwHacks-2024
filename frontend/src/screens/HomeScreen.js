import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { ButtonComponent } from "../components/ButtonComponent";
import { CardComponent } from "../components/CardComponent";

export const HomeScreen = ({navigation}) => {
    return(
<<<<<<< HEAD
        <View style={{
            flexDirection:'column',
            flex:1
          }}>
            <ButtonComponent buttonText={"Today's Journal"} onPress={() => navigation.navigate('Transcribe')}/>

            <ButtonComponent buttonText={"This Weeks Journal"} onPress={() => navigation.navigate('Journals')}/>
            <ButtonComponent buttonText={"Weekly Summary"} onPress ={() => navigation.navigate("Summary")}/>
            <ButtonComponent buttonText={"Your Archive"}/>
            
=======
        <View style={styles.container}>
            <CardComponent />
            <CardComponent />
>>>>>>> main
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        flexDirection: "row",
<<<<<<< HEAD
        gap: 20,
        padding: 10
=======
        gap: 50,
        backgroundColor: "orange",
>>>>>>> main
        
       }
})


