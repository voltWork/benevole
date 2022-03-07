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
        marginRight: 30,
        marginTop: 20,
        backgroundColor: '',
    },
    ScrollChoose: {
        flex: 2,
        flexDirection: 'row',
    },
    NonAuthBackground: {
        backgroundColor: '00FFFF',
    },
});
