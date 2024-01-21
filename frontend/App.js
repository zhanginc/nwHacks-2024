import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { HomeScreen } from './src/screens/HomeScreen';
import { TranscribeScreen } from './src/screens/TranscribeScreen';
import { SignInScreen } from './src/screens/SignInScreen';
import { WelcomeScreen } from './src/screens/WelcomeScreen';
import { JournalScreen } from './src/screens/JournalScreen';
import { SummaryScreen } from './src/screens/SummaryScreen';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />  
      <Stack.Screen name="Sign in" component={SignInScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Transcribe" component={TranscribeScreen} />
      <Stack.Screen name="Journals" component={JournalScreen} />
      <Stack.Screen name="Summary" component={SummaryScreen} />
      
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
