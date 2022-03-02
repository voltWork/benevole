import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList, Image } from 'react-native';
import { Registration } from './screen/Registration';
import { NativeBaseProvider } from 'native-base';

export default function App() {
    return (
        <NativeBaseProvider>
            <Registration />
        </NativeBaseProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
