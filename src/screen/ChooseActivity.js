import React, { useState } from 'react';
import { View, FlatList, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Create_Activity } from './Create_Activity';
import { globalStyle } from '../components/styles/globalStyle';
import { useNavigation } from '@react-navigation/core';
import { ACTIVITY_SCREEN } from '../NavigationIndex';
import { IconButton } from 'native-base';
import { ListItem } from '../components/vidget/ListItem';

export const ChooseActivity = () => {
    const [short, setShort] = useState([
        {
            title: 'Покрасить лавочки в Чкаловске',
            img: 'https://bk55.ru/fileadmin/bkinform/bk_info_142304_big_1546944435.jpg',
            message: 'В сквере около 45 школы и улицы Пономаренко 2 необходимо покрыть лаком лавочки',
        },
        {
            title: 'Покрасить лавочки в Чкаловске',
            img: 'https://bk55.ru/fileadmin/bkinform/bk_info_142304_big_1546944435.jpg',
            message: 'В сквере около 45 школы и улицы Пономаренко 2 необходимо покрыть лаком лавочки',
        },
    ]);
    const LookActivity = () => {
        const navigation = useNavigation();
        navigation.navigate(ACTIVITY_SCREEN);
    };
    return (
        <View>
            <View>
                <ScrollView horizontal={true} />
                <ListItem el={short} />
                <Icon.Button name='Pluscircle' onPress={LookActivity} />
            </View>
        </View>
    );
};
