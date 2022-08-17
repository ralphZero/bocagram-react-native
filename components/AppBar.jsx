import React from 'react';
import {View, Text} from 'react-native';
import { loginStyles } from '../assets/styles';

const AppBar = () => {
    return (
        <View style={loginStyles.appBar}>
            <Text style={loginStyles.appBarTitle}>BocaCodeGram</Text>
        </View>
    );
}

export default AppBar;