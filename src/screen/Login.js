import { useNavigation } from '@react-navigation/core';
import React, { useState, useCallback } from 'react';
import { View, Text, Button, FlatList, Image, TextInput } from 'react-native';
import { CHOOSE_ACTIVITY_SCREEN } from '../NavigationIndex';
import { Choose_Activity } from './ChooseActivity';

export const Login = () => {
    const navigation = useNavigation();
    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    const handleChangeForm = useCallback(
        type => text => {
            setForm(prev => ({ ...prev, [type]: text }));
        },
        [],
    );
    const TruthAuth = () => {
        navigation.navigate(CHOOSE_ACTIVITY_SCREEN);
    };
    return (
        <View>
            <TextInput onChangeText={handleChangeForm('email')} placeholder='email' testID='loginFormEmail' />
            <TextInput onChangeText={handleChangeForm('password')} />
            <Button title='Зайти' onPress={TruthAuth} />
        </View>
    );
};
