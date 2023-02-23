/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useRef } from 'react';
import type {PropsWithChildren} from 'react';
import FastImage from 'react-native-fast-image';
import {DataTable} from 'react-native-paper';
import Login from './components/login';

import {
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import TodaysGame from './components/today-game';
import Profile from './components/profile';
import RBSheet from 'react-native-raw-bottom-sheet';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from './components/home-page';
 // import { Provider } from 'react-redux';
import store from './redux/store';
import { Provider } from 'react-redux';
import SplashScreen from './components/splash-screen';
// import { AppRegistry } from 'react-native/Libraries/ReactNative/AppRegistry';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  
  };


  
   const Stack = createNativeStackNavigator();

  return (

   <Provider store={store}> 
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SplashScreen' screenOptions={{
       headerShown: false
      }} >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="SplashScreen" component={SplashScreen}/>
        <Stack.Screen name="TodaysGame" component={TodaysGame} />
        <Stack.Screen name="Profile" component={Profile} />
        
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
    
    
  );
}



export default App;

