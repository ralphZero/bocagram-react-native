import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import Main from '../screens/Main';
import Login from '../screens/Login';

const Stack = createNativeStackNavigator();

const Navigation = () => {

    const { isLoggedIn } = useContext(UserContext);

    return (
        <Stack.Navigator>
        {
          isLoggedIn ? (
            <Stack.Screen name='home' component={Main}  options={{ headerShown: false, }} />
          ) : (
            <Stack.Screen name='login' component={Login} options={{ headerShown: false }} />
          )
        }
        </Stack.Navigator>
    );
}

export default Navigation;
