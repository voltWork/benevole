import React, { useState, useCallback } from 'react';
import { View, Text, Button, FlatList, Image, TextInput } from 'react-native';
import { Choose_Activity } from '/screen/Choose_Activity';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    const handleChangeEmail = useCallback(text => setEmail(text), []);
    const handleChangePassword = useCallback(text => setPassword(text), []);

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
