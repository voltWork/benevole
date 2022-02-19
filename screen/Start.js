import React from 'react';
import {View, Button} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import { LOGIN_SCREEN, REGISTRATION_SCREEN } from '../Navigation_index';

export const startFun = () => {
    const navigation = useNavigation();

    const Reg = () => {
        navigation.navigate(REGISTRATION_SCREEN);
    };
    const Log = () => {
        navigation.navigate(LOGIN_SCREEN)
    };



return (
    <View>
    <Button style={gStyle.TextButton} onPress={Reg}/>
    <Button style={gStyle.TextButton} onPress={Log}/>
    <Button style={gStyle.TextButton} onPress={Vk}/>
    </View>
    );
}


