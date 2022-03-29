import React, { useState, useCallback } from 'react';
import { View, TextInput, Text } from 'react-native';
import { CHOOSE_ACTIVITY_SCREEN } from '../NavigationIndex';
import { useNavigation } from '@react-navigation/native';
import { Navigation } from '../Navigation';
import { globalStyle } from '../components/styles/globalStyle';
import auth from '@react-native-firebase/auth';
import { Button, VStack } from 'native-base';

export const Registration = () => {
    const navigation = useNavigation();
    // const [form, setForm] = useState({
    // email: '',
    // password: '',
    // repassword: '',
    // });
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');

    // const handleChangeForm = useCallback(
    // type => text => {
    // setForm(prev => ({ ...prev, [type]: text }));
    // },
    // [],
    // );
    const checkPas = form => {
        if (password === repassword) {
            auth()
                .createUserWithEmailAndPassword(email, password)
                .then(() => {
                    console.log('User account created & signed in!');
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
        } else {
            const ErrorPas = alert('Пароли не совпадают');
            return ErrorPas;
        }
    };

    return (
        <View style={globalStyle.NonAuthBackground}>
            <TextInput value={email} onChangeText={setEmail} placeholder='Введите почту' />
            <TextInput value={password} onChangeText={setPassword} placeholder='Введите пароль' />
            <TextInput value={repassword} onChangeText={setRepassword} placeholder='Повторите пароль' />
            {/* <TextInput onChangeText={handleChangeForm('repassword')} placeholder='Повторите пароль' /> */}
            <VStack w='100%' space={4} px='2' mt='4' alignItems='center' justifyContent='center'>
                <Button size='sm' variant='outline' onPress={checkPas}>
                    <Text>Зарегистрироваться</Text>
                </Button>
            </VStack>
        </View>
    );
};
