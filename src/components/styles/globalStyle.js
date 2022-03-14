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
        backgroundColor: '#00ffff',
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
        backgroundColor: 'rgba(0, 255, 255, 1.0)',
    },
    RegistrationButton: {
        backgroundColor: 'rgba(255, 255, 255, 1.0)',
        Color: 'rgba(0, 255, 255, 1.0)',
    },
});
