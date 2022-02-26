import React, { useState } from 'react';
import { View, Button, TextInput } from 'react-native';
import { ACTIVITY_SCREEN } from '/components/Navigation_index';
import { useNavigation } from '@react-navigation/native';

export const Registration = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');
    const checkPas = (password, repassword) => {
        if (password == repassword) {
            navigation.navigate(ACTIVITY_SCREEN);
        }
    };
    return (
        <View>
            <TextInput onChangeText={email => setEmail(email)}></TextInput>
            <TextInput onChangeText={password => setPassword(password)}></TextInput>
            <TextInput onChangeText={repassword => setRepassword(repassword)}></TextInput>
            <Button title='Далее' onPress={checkPas} />
        </View>
    );
};
