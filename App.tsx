import React from 'react';
import {View, Text} from 'react-native';
import MyVideoPlayer from './src/screens/VideoPlayer';
import Splash from './src/screens/Splash';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//import VideoPlayer from './src/screens/Player';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="MyVideoPlayer" component={MyVideoPlayer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
