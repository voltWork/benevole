import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { TextInput, View, Text } from 'react-native';
import { globalStyle } from '../components/styles/globalStyle';
import { SUCCESSFUL_CREATE_SCREEN } from '../NavigationIndex';
import { Button, VStack } from 'native-base';
import firestore from '@react-native-firebase/firestore';

export const CreateActivity = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [location, setLocation] = useState('');
    const [material, setMaterial] = useState('');
    const [deadline, setDeadline] = useState('');
    const navigation = useNavigation();



    const CheckText = message => {
        const Input = alert('Заполните все поля');
        if (message === null) {
            return Input;
        } else {
            firestore()
                .collection('Activity')
                .add({
                    name: name,
                    message: message,
                    location: location,
                    material: material,
                    deadline: deadline,
                })
                .then(() => {
                    navigation.navigate(SUCCESSFUL_CREATE_SCREEN);
                });
        }
    };
    return (
        <View style={globalStyle.NonAuthBackground}>
            <TextInput placeholder='Название ' value={name} onChangeText={setName} />
            <TextInput placeholder='Описание' value={message} onChangeText={setMessage} />
            <TextInput placeholder='Местоположение' value={location} onChangeText={setLocation} />
            <TextInput placeholder='Необдимые материалы' value={material} onChangeText={setMaterial} />
            <TextInput placeholder='Срок' value={deadline} onChangeText={setDeadline} />
            <VStack w='100%' space={4} px='2' mt='4' alignItems='center' justifyContent='center'>
                <Button size='sm' variant='outline' onPress={CheckText}>
                    <Text>Создать активность</Text>
                </Button>
            </VStack>
        </View>
    );
};
