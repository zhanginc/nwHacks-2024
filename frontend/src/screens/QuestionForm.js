import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import TypingText from 'react-native-typing-text';
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

    const handleQuestionSubmit = (e) => {
        e.preventDefault();
        setQuestionNumber(questionNumber + 1);
        setDisplayAnswer(true);
        setQuestionsAndAnswers((prev) => [...prev, { question: questions[questionNumber], answer: currentAnswer}]);
        setCurrentAnswer('');
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
        <>
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
        <form onSubmit={handleQuestionSubmit} style={styles.inputContainer} >
            <input
            type="text"
            value={currentAnswer}
            onChange={(e) => setCurrentAnswer(e.target.value)}
            placeholder="Draft"
            style={styles.answerInput}
            />
            <Button type="submit" onPr>Submit </Button>
            
        </form>        
        <View style={styles.voiceRecordContainer}>

        </View>
        </>
       
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
    },

    inputContainer: {
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#112945',

    },

    voiceRecordContainer:{
        flex: 1,
        backgroundColor: '#105268',
        position: 'absolute',
    }
    
})