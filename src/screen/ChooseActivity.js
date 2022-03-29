import React, { useState } from 'react';
import { View, FlatList, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { globalStyle } from '../components/styles/globalStyle';
import { useNavigation } from '@react-navigation/core';
import { ACTIVITY_SCREEN, CREATE_ACTIVITY_SCREEN } from '../NavigationIndex';
import { IconButton } from 'native-base';
import { ListItem } from '../components/vidget/ListItem';

export const ChooseActivity = () => {
    const navigation = useNavigation();
    const [short, setShort] = useState([
        {
            title: 'Покрасить лавочки в Чкаловске',
            img: 'https://bk55.ru/fileadmin/bkinform/bk_info_142304_big_1546944435.jpg',
            message: 'В сквере около 45 школы и улицы Пономаренко 2 необходимо покрыть лаком лавочки',
        },
        {
            title: 'kk',
            img: 'https://bk55.ru/fileadmin/bkinform/bk_info_142304_big_1546944435.jpg',
            message: 'kkkkВ сквере около 45 школы и улицы Пономаренко 2 необходимо покрыть лаком лавочки',
        },
    ]);
    const LookActivity = () => {
        navigation.navigate(CREATE_ACTIVITY_SCREEN);
    };
    return (
        <View syle={globalStyle.Authbackground}>
            <ScrollView horizontal={true} />
            <ListItem el={short} />
            <TouchableOpacity style={globalStyle.Pluscircle}>
                <Icon name='pluscircle' onPress={LookActivity} />
            </TouchableOpacity>
        </View>
    );
};
