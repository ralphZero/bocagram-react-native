import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Main from '../screens/Main';
import Login from '../screens/Login';

const Tab = createBottomTabNavigator();

const NavigationBar = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='home' component={Main} />
                <Tab.Screen name='login' component={Login} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default NavigationBar;