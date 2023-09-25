import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {TransitionPresets} from '@react-navigation/stack';
import HomeScreen from '../screen/HomeScreen';
import Profile from '../screen/Profile';
import EditProfile from '../screen/EditProfile';
import Help from '../screen/Help';
import Feedback from '../screen/Feedback';
import About from '../screen/About';

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {backgroundColor: 'rgba(0,0,0,0.1)'},
          ...TransitionPresets.SlideFromRightIOS,
          gestureDirection: 'vertical',
        }}>
            <Stack.Screen name="Parent" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
            <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }} />
            <Stack.Screen name="Help" component={Help} options={{ headerShown: false }} />
            <Stack.Screen name="Feedback" component={Feedback} options={{ headerShown: false }} />
            <Stack.Screen name="About" component={About} options={{ headerShown: false }} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNav;
