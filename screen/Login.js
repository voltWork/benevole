import React, { useState } from 'react';
import { View, Text, Button, FlatList, Image } from 'react-native';

export const Login= ()=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return(
        <View>
        <TextInput onChangeText={email => setEmail(email)}></TextInput>
        <TextInput onChangeText={password => setPassword(password)}></TextInput>
        </View>
    );
} 