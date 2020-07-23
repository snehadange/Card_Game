import React from 'react';
//import App from './App/App';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import FirstScreen from './App/Screens/FirstScreen';
import LoginScreen from './App/Screens/LoginScreen';
import StartScreen from './App/Screens/StartScreen';
import ProfileScreen from './App/Screens/ProfileScreen';
import Registration from './App/Screens/Registration';

const Stack = createStackNavigator();

function MyStack(){
    return (
        <Stack.Navigator screenOptions={{
          headerShown:false
        }}>
          <Stack.Screen name="FirstScreen" component={FirstScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
          <Stack.Screen name="Registration" component={Registration} />
        </Stack.Navigator>
      );
}

export default function App() {
    return (
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    );
  }
