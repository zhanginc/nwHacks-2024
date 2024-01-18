// transcribe page
import React from "react";
import { Button, View, StyleSheet, ScrollView, Image } from "react-native";
import { RootStackParamList } from "src/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";


type Props = NativeStackScreenProps<RootStackParamList, "transcribe">;

export default function TranscribeScreen({navigation}: Props) {
    return (
        <View style={styles.container}>
          transcribe
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
    },
})