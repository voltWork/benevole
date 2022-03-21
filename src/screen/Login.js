import { useNavigation } from '@react-navigation/native';
import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, Image, TextInput } from 'react-native';
import { CHOOSE_ACTIVITY_SCREEN } from '../NavigationIndex';
import { Button, VStack } from 'native-base';
import { isLogin, UserProvider } from '../Navigation';
import { globalStyle } from '../components/styles/globalStyle';

export const Login = () => {
    const navigation = useNavigation();
    const [form, setForm] = useState({
        email: '',
        password: '',
    });
    const isLo = true;
    const handleChangeForm = useCallback(
        type => text => {
            setForm(prev => ({ ...prev, [type]: text }));
        },
        [],
    );
    const TruthAuth = () => {
        <isLogin.Provider value={isLo} />;
        navigation.navigate(CHOOSE_ACTIVITY_SCREEN);
    };
    return (
        <View style={globalStyle.NonAuthBackground}>
            <TextInput onChangeText={handleChangeForm('email')} placeholder='Введите почту' testID='loginFormEmail' />
            <TextInput onChangeText={handleChangeForm('password')} placeholder='Введите пароль' />
            <VStack w='100%' space={4} px='2' mt='4' alignItems='center' justifyContent='center'>
                <Button size='sm' variant='outline' onPress={TruthAuth}>
                    <Text>Войти</Text>
                </Button>
            </VStack>
        </View>
    );
};
