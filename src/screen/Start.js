import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LOGIN_SCREEN, REGISTRATION_SCREEN } from '../NavigationIndex';
import { globalStyle } from '../components/styles/globalStyle';
import { Button, VStack, Stack, Container, Card, CardItem, Content } from 'native-base';

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
                <Button style={globalStyle.RegistrationButton} marginTop={70} onPress={Reg}>
                    <Text>зарегистрироваться</Text>
                </Button>
                <Button style={globalStyle.RegistrationButton} marginTop={100} onPress={Log}>
                    <Text>Авторизоваться</Text>
                </Button>
            </VStack>
        </View>
    );
};
