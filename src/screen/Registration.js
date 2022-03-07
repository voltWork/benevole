import React, { useState, useCallback } from 'react';
import { View, Button, TextInput } from 'react-native';
import { ACTIVITY_SCREEN } from '../NavigationIndex';
import { useNavigation } from '@react-navigation/native';

export const Registration = () => {
    const navigation = useNavigation();
    const [form, setForm] = useState({
        email: '',
        password: '',
        repassword: '',
    });
    const handleChangeForm = useCallback(
        type => text => {
            setForm(prev => ({ ...prev, [type]: text }));
        },
        [],
    );
    const checkPas = (password, repassword) => {
        if (password === repassword) {
            navigation.navigate(ACTIVITY_SCREEN);
        }
    };
    return (
        <View>
            <TextInput onChangeText={handleChangeForm('email')} />
            <TextInput onChangeText={handleChangeForm('password')} />
            <TextInput onChangeText={handleChangeForm('repassword')} />
            <Button title='Далее' onPress={checkPas} />
        </View>
    );
};
