import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LOGIN_SCREEN, REGISTRATION_SCREEN } from '../NavigationIndex';
import { globalStyle } from '../components/styles/globalStyle';
import { Button, VStack, Stack } from 'native-base';

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
            <VStack w='100%' space={4} px='2' mt='4' alignItems='center' justifyContent='center'>
                <Button
                    title='зарегистрироваться'
                    borderWidth={1}
                    size='sm'
                    marginTop={10}
                    variant='outline'
                    bgColor={'transparent'}
                    onPress={Reg}
                />
                <Button
                    title='Авторизоваться'
                    borderWidth={1}
                    size='sm'
                    marginTop={50}
                    variant='outline'
                    onPress={Log}
                />
            </VStack>
        </View>
    );
};
