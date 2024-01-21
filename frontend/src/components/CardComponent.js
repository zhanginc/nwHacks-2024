import React from "react";
import { StyleSheet, View, Text } from "react-native";


export const CardComponent = () => {
    return(
        <View style={styles.container}>
          <View styled={styles.column}>
            <Text>
            Column 1 
            </Text>
          </View>
          <View styled={styles.column}>
            <Text>
                Column 2 
            </Text>
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
