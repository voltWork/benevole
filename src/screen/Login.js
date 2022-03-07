import React, { useState, useCallback } from 'react';
import { View, Text, Button, FlatList, Image, TextInput } from 'react-native';
import { Choose_Activity } from './ChooseActivity';

export const Login = () => {
    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    const handleChangeForm = useCallback(
        type => text => {
            setForm(prev => ({ ...prev, [type]: text }));
        },
        [],
    );

    return (
        <View>
            <TextInput onChangeText={handleChangeForm('email')} placeholder='email' testID='loginFormEmail' />
            <TextInput onChangeText={handleChangeForm('password')} />
            <Button title='Зайти' onPress={Choose_Activity} />
        </View>
    );
};
