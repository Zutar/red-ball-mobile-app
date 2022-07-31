import React from 'react';
import {StatusBar,} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import BottomNavigation from "navigations/BottomNavigation";

const App = () => {
    return (
        <NavigationContainer>
            <StatusBar backgroundColor="#0072b5"/>
            <BottomNavigation/>
        </NavigationContainer>
    );
};

export default App;
