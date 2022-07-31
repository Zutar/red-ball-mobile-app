import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './components/Home';

const Stack = createStackNavigator();

function StackNavigator() {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#0072b5',
                    elevation: 0,
                    shadowOpacity: 0,
                },
            }}
        >
            <Stack.Screen
                name="Home"
                component={Home}
                options={{title: ''}}
            />
        </Stack.Navigator>
    );
}

export default StackNavigator;
