import React from "react";
import ChatBubble from 'react-native-chat-bubble';

import { StyleSheet, View, Text } from "react-native";


export const CardComponent = (chatText) => {
    return (
        <View style={styles.container}>
            <View style={styles.chatBubbleContainer}>
             <ChatBubble
                    bubbleColor='#fff'
                    tailColor='#FFFFFF'
                    withTail={true}
                    isOwnMessage={true}
                    maxWidth={900}

                    style={styles.chatBubble}
                >
                    <Text style={styles.chatBubbleText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin malesuada sem pulvinar auctor. Fusce vitae orci faucibus, congue metus vel, tempus tortor. Integer ac arcu euismod massa fermentum pulvinar at in felis. Morbi tincidunt dui sit amet neque placerat, quis tempor magna aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin malesuada sem pulvinar auctor. Fusce vitae orci faucibus, congue metus vel, tempus tortor. Integer ac arcu euismod massa fermentum pulvinar at in fel</Text>
                    {/* will switch this out with the chat text  */}
                </ChatBubble>
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
        width: "100%",
        height: 150,
        
        filter: ' drop-shadow(4px 7px 5px #13273F)',
    },
    chatBubble: {
        borderRadius: 10,
        width: '22rem',
        height:'20rem',

    },
    chatBubbleText: {
        padding:'.7rem',
        fontFamily: 'Lexend, sans-serif',
        fontWeight:'300',
        fontSize: 16,
        color: '#13171F', 

        textAlign: 'left'
      },
    chatBubbleContainer: {
      margin:'auto'   
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
