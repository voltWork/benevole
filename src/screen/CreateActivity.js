import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { TextInput, View, Button } from 'react-native';
import { SUCCESSFUL_CREATE_SCREEN } from '../NavigationIndex';

export const CreateActivity = () => {
    const navigation = useNavigation();
    const CheckText = message => {
        const Input = alert('Заполните все поля');
        if (message === null) {
            return Input;
        } else {
            navigation.navigate(SUCCESSFUL_CREATE_SCREEN);
        }
    };
    return (
        <View>
            <TextInput title='Название ' />
            <TextInput title='Описание' />
            <TextInput title='Местоположение' />
            <TextInput title='Необдимые материалы' />
            <TextInput title='Срок' />
            <Button title='Создать активность' onPress={CheckText} />
        </View>
    );
};
