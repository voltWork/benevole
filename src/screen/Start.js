import React from 'react';
import { View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LOGIN_SCREEN, REGISTRATION_SCREEN } from '../NavigationIndex';
import { globalStyle } from '../components/styles/globalStyle';
import { Navigation } from '../Navigation';

export const Start = () => {
    const navigation = useNavigation();

    const Reg = () => {
        navigation.navigate(REGISTRATION_SCREEN);
    };
    const Log = () => {
        navigation.navigate(LOGIN_SCREEN);
    };

    return (
        <View style={globalStyle.NonAuthBackground}>
            <Button title='Зарегистрироваться' onPress={() => navigation.navigate(REGISTRATION_SCREEN)} />
            <Button title='Авторизоваться' onPress={Log} />
        </View>
    );
};
