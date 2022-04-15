import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { globalStyle } from '../components/styles/globalStyle';
import { useNavigation } from '@react-navigation/core';
import { CREATE_ACTIVITY_SCREEN } from '../NavigationIndex';
import firestore from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/AntDesign';
import { ListItems } from '../components/vidget/ListItems';

export const ChooseActivity = () => {
    const [short, setShort] = useState(null);
    const navigation = useNavigation();

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

    const lookActivity = () => {
        navigation.navigate(CREATE_ACTIVITY_SCREEN);
    };
    return (
        <View syle={globalStyle.Authbackground}>
            {short && short.length > 0 && <ListItems elements={short} />}
            <TouchableOpacity style={globalStyle.Pluscircle}>
                <Icon name='pluscircle' onPress={lookActivity} />
            </TouchableOpacity>
        </View>
    );
};
