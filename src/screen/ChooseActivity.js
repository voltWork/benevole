import React, { useState, useEffect } from 'react';
import { View, FlatList, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { globalStyle } from '../components/styles/globalStyle';
import { useNavigation } from '@react-navigation/core';
import { ACTIVITY_SCREEN, CREATE_ACTIVITY_SCREEN } from '../NavigationIndex';
import { IconButton } from 'native-base';
import { ListItem } from '../components/vidget/ListItem';
import firestore from '@react-native-firebase/firestore';
import { ProfileInfo } from '../components/vidget/ProfileInfo';

export const ChooseActivity = () => {
    const [short, setShort] = useState(null);
    const navigation = useNavigation();
    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => <ProfileInfo />,
        });
    }, [navigation]);

    useEffect(() => {
        const subscriber = firestore()
            .collection('Activity')
            .onSnapshot(querySnapshot => {
                if (!querySnapshot.empty) {
                    const data = [];
                    querySnapshot.forEach(documentSnapshot => {
                        data.push(documentSnapshot.data());
                    });
                    setShort(data);
                }
            });

        // Stop listening for updates when no longer required
        return () => subscriber();
    }, []);

    const LookActivity = () => {
        navigation.navigate(CREATE_ACTIVITY_SCREEN);
    };
    return (
        <View syle={globalStyle.Authbackground}>
            <ScrollView horizontal={true} />
            <ListItem elements={short} />
            <TouchableOpacity style={globalStyle.Pluscircle}>
                <Icon name='pluscircle' onPress={LookActivity} />
            </TouchableOpacity>
        </View>
    );
};
