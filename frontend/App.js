import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { HomeScreen } from './src/screens/HomeScreen';
import { SignInScreen } from './src/screens/SignInScreen';
import { WelcomeScreen } from './src/screens/WelcomeScreen';
import { JournalScreen } from './src/screens/JournalScreen';
import { SummaryScreen } from './src/screens/SummaryScreen';
import { WeeklyScreen } from './src/screens/WeeklyScreen';

import { QuestionForm } from './src/screens/QuestionForm';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    
    <NavigationContainer>
      <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />  
      <Stack.Screen name="Sign in" component={SignInScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Journals" component={JournalScreen} />
      <Stack.Screen name="Summary" component={SummaryScreen} />
      <Stack.Screen name="QuestionForm" component={QuestionForm} />

      <Stack.Screen name="Weekly" component={WeeklyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
