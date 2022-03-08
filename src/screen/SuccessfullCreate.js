import { View, Text, Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { CHOOSE_ACTIVITY_SCREEN, CREATE_ACTIVITY_SCREEN } from '../NavigationIndex';

export const SuccessfullCreate = () => {
    const navigation = useNavigation();
    const goToChooseActivity = () => {
        navigation.navigate(CHOOSE_ACTIVITY_SCREEN);
    };
    const yetCreateActivity = () => {
        navigation.navigate(CREATE_ACTIVITY_SCREEN);
    };
    return (
        <View>
            <Text>Активность успешно создана!!</Text>
            <Button title='Выбор активности' onPress={goToChooseActivity} />
            <Button title='Создать еще активность' onPress={yetCreateActivity} />
        </View>
    );
};
