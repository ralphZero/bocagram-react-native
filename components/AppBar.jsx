import React, { useContext } from 'react';
import {View, Text} from 'react-native';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { appBarStyles } from '../assets/styles';
import { useFonts } from 'expo-font';
import { UserContext } from '../contexts/UserContext';

const AppBar = () => {

    const [loaded] = useFonts({
        Billabong: require('../assets/billabong.ttf')
    });

    const brandStyle = loaded ? {...appBarStyles.appBarTitle, fontFamily: 'Billabong'} : appBarStyles.appBarTitle;
    const { logOut } = useContext(UserContext);
    return (
        <View style={appBarStyles.appBar}>
            <Text style={brandStyle}>Bocagram</Text>
            <Icon onPress={logOut} name='log-out' size={20} type='feather' />
        </View>
    );
}

export default AppBar;