import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, TextInput, Pressable, Image } from 'react-native';
import { Button } from "react-native-web";
import { HeaderComponent } from "../components/HeaderComponent";


export const QuestionForm = () => {
    // these are the set of Questions we are asking 
    const [questionsAndAnswers, setQuestionsAndAnswers] = useState([]);
    const [questionNumber, setQuestionNumber] = useState(0);
    const [questions, setQuestions] = useState([
        "Who did you interact with today?",
        "What did you guys do?",
        "This is generic question 3?",
        "This is generic question 4?",
        "This is generic question 5?",
    ]);
    const [currentAnswer, setCurrentAnswer] = useState('');
    const [displayAnswer, setDisplayAnswer] = useState(false);
    const scrollViewRef = useRef(null); 

    useEffect(() => {
        // Scroll to the bottom whenever questionsAndAnswers or currentAnswer changes
        scrollViewRef.current.scrollToEnd({ animated: true });
    }, [questionsAndAnswers, currentAnswer]);

    const handleQuestionSubmit = () => {
        setQuestionNumber(questionNumber + 1);
        setDisplayAnswer(true);
        setQuestionsAndAnswers((prev) => [...prev, { question: questions[questionNumber], answer: currentAnswer}]);
        setCurrentAnswer('');
        console.log()
    };

    const QuestionAnswerComponent = ({question, answer}) => {
        return(
            <>
            <View style={styles.container}>
                <Text style={styles.questionAnswerContainer}>
                    {question}
                </Text>
            </View>

           
            {displayAnswer ? <Text style={styles.questionAnswerContainer}>{answer}</Text> : null}

            </>
        );
    }


    return(
        <View style={styles.containerMain}>
        <HeaderComponent />
         <ScrollView style={styles.scrollContainer}
                     ref={scrollViewRef}
                     onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}>
            <View>
                {questionsAndAnswers.map((qa, index) => (
                <QuestionAnswerComponent key={index} question={qa.question} answer={qa.answer} />
                ))}

                <QuestionAnswerComponent question={questions[questionNumber]} answer={currentAnswer} />
            </View>

        </ScrollView>
        <View style={styles.voiceRecordContainer}>
            <Pressable style={styles.recordButton}>
                <Image
                    source={require('../images/Group.png')}
                />
            </Pressable>
            <View style={styles.inputContainer} >
                <TextInput
                type="text"
                value={currentAnswer}
                onChange={(e) => setCurrentAnswer(e.target.value)}
                placeholder="Draft"
                style={styles.answerInput}
                />
                <Pressable style={styles.button} onPress={() => handleQuestionSubmit()}>
                    <Text>
                        Enter
                    </Text>
                </Pressable>
            </View> 
                
        </View>
        </View>
       
    );
     
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        backgroundColor: '#112945',
        padding: 10
    },

    container: {
        flex: 1,
        width: "100%",
        flexDirection: "column",
        justifyContent: 'flex-end',
        alignContent: 'flex-end',
        alignItems:'flex-end',
        
    },
    containerMain: {
        backgroundColor:  '#112945',
    },

    questionAnswerContainer: {
        width: "45%",
        textAlign: "center",
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10
    },

    answerInput: {
        width: "70%",
        borderRadius: 20,
        padding: 5,
        backgroundColor: "white"
    },

    inputContainer: {
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        gap: 20

    },

    voiceRecordContainer:{
        flex: 1,
        backgroundColor: '#105268',
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: '100%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },

    button :{
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 20
    },

    recordButton:{
        borderRadius: 60,
        width: 60,
        height: 60,
        backgroundColor: '#112945',
        alignItems: 'center',
        justifyContent: 'center',

    },
    recordText:{
        color: 'white'

    }
    
})