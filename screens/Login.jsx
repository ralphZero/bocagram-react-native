import React, { useContext } from 'react';
import {View, Text} from 'react-native';
import { SocialIcon } from 'react-native-elements/dist/social/SocialIcon';
import { loginStyles } from '../assets/styles';
import { useFonts } from 'expo-font';
import { UserContext } from '../contexts/UserContext';

const Login = () => {
    const { logIn } = useContext(UserContext);

    const [loaded] = useFonts({
        Billabong: require('../assets/billabong.ttf')
    });

    const brandStyle = loaded ? {...loginStyles.brand, fontFamily: 'Billabong'} : loginStyles.brand;

    return (
        <View style={loginStyles.container}>
            <Text style={brandStyle}>BocaGram</Text>
            <SocialIcon onPress={logIn} style={loginStyles.cta} button title='Fake Sign In With Google' type='google' raised={false} />
        </View>
    );
}

export default Login;
