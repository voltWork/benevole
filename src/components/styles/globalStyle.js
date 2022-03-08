import React from 'react';
import { StyleSheet } from 'react-native';

export const globalStyle = StyleSheet.create({
    Header: {
        paddingTop: 50,
        height: 100,
    },
    swipeViewLeft: {
        flexDirection: 'row',
        flex: 1,
        marginLeft: 30,
        marginTop: 20,
        backgroundColor: '',
    },
    swipeViewRight: {
        flexDirection: 'row',
        flex: 1,
        paddingRight: 30,
        paddingTop: 20,
        backgroundColor: '#00ffff',
    },
    ScrollChoose: {
        flex: 2,
        flexDirection: 'row',
    },
    NonAuthBackground: {
        Color: '#00ffff',
    },
    RegistrationButton: {
        Color: '#ffffff',
    },
});
