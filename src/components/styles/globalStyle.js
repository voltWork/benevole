import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { Button } from 'native-base';

export const globalStyle = StyleSheet.create({
    Header: {
        paddingTop: 50,
        height: 100,
    },
    swipeViewLeft: {
        flexDirection: 'row',
        flex: 1,
        width: 20,
        height: 50,
        paddingLeft: 5,
    },
    swipeViewRight: {
        flexDirection: 'row',
        flex: 1,
        width: 20,
        height: 50,
        paddingRight: 10,
    },
    ScrollChoose: {
        flex: 2,
        flexDirection: 'row',
    },
    NonAuthBackground: {
        backgroundColor: 'rgba(0, 255, 255, 1.0)',
        height: Dimensions.get('screen').height,
        headerColor: 'rgba(0, 255, 255, 1.0)',
    },
    RegistrationButton: {
        backgroundColor: 'rgba(255, 255, 255, 1.0)',
        Color: 'rgba(0, 255, 255, 1.0)',
        size: 'sm',
        variant: 'outline',
    },
    Pluscircle: {
        backgroundcolor: 'rgba(0, 255, 255, 1.0).500',
        borderWidth: 1,
        borderColor: 'rgba(0, 255, 255, 1.0)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 20,
        height: 20,
        borderRadius: 10,
        size: 'md',
    },
    Authbackground: {
        headerColor: 'rgba(0, 255, 255, 1.0)',
    },
});
