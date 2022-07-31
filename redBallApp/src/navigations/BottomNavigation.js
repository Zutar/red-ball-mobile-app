import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigation from 'screens/Home/HomeNavigation';
import FontAwesomeIcons from "react-native-vector-icons/FontAwesome";

const BottomNavigation = createBottomTabNavigator();

function BottomNavigationTabs() {
    return (
        <BottomNavigation.Navigator screenOptions={{ headerShown: false }}>
            <BottomNavigation.Screen
                name="Home"
                component={HomeNavigation}
                options={{
                    tabBarLabel: 'Главная',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesomeIcons name="home" color={color} size={size} />
                    ),
                }}
            />
            <BottomNavigation.Screen
                name="Activity"
                component={HomeNavigation}
                options={{
                    tabBarLabel: 'Активность',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesomeIcons name="history" color={color} size={size} />
                    ),
                }}
            />
            <BottomNavigation.Screen
                name="Info"
                component={HomeNavigation}
                options={{
                    tabBarLabel: 'Информация',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesomeIcons name="info-circle" color={color} size={size} />
                    ),
                }}
            />
            <BottomNavigation.Screen
                name="Settings"
                component={HomeNavigation}
                options={{
                    tabBarLabel: 'Настройки',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesomeIcons name="gear" color={color} size={size} />
                    ),
                }}
            />
        </BottomNavigation.Navigator>
    );
}

export default BottomNavigationTabs;
