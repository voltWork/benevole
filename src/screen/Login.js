import { useNavigation } from '@react-navigation/native';
import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, Image, TextInput } from 'react-native';
import { CHOOSE_ACTIVITY_SCREEN } from '../NavigationIndex';
import { Button, VStack } from 'native-base';
import { globalStyle } from '../components/styles/globalStyle';
import auth from '@react-native-firebase/auth';

export const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const TruthAuth = () => {
        auth()
            .SignInWithEmailAndPassword(email, password)
            .then(() => {
                navigation.navigate(CHOOSE_ACTIVITY_SCREEN);
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

                console.error(error);
            });
    };

    return (
        <View style={globalStyle.NonAuthBackground}>
            <TextInput value={email} onChangeText={setEmail} placeholder='Введите почту' testID='loginFormEmail' />
            <TextInput value={password} onChangeText={setPassword} placeholder='Введите пароль' />
            <VStack w='100%' space={4} px='2' mt='4' alignItems='center' justifyContent='center'>
                <Button size='sm' variant='outline' onPress={TruthAuth}>
                    <Text>Войти</Text>
                </Button>
            </VStack>
        </View>
    );
};
