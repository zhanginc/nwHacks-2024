import React from "react";
import { StyleSheet, View } from "react-native";


export const CardComponent = () => {
    return(
        <View style={styles.container}>
          <View styled={styles.column}>
            Column 1 
          </View>
          <View styled={styles.column}>
            Column 2
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        elevation: 40,
        borderRadius: 30,
        height: 500,
        width: 300,
        backgroundColor: "#fffcf2",
        flexDirection: "row",
        width: "100%",
        height: 150,
        alignItems: "center",
       },
       column: {
           flexDirection: "column",
           width: "50%",
           height: "50%",
       },
   
       image: {
           width: "100%",
           height: "100%",
           borderRadius: 20,
       },
       imageContainer: {
           width: "60%",
           height: "100%",
           marginLeft: 50,
       },
})
