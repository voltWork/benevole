import { Dimensions, Pressable, Text } from 'react-native';

import { ACTIVITY_SCREEN } from '../../NavigationIndex.js';
import Carousel from 'react-native-snap-carousel';
import React from 'react';
import { globalStyle } from '../styles/globalStyle.js';
import { useNavigation } from '@react-navigation/core';

export const ListItem = ({ elements }) => {
    const navigation = useNavigation();

    const handleClick = item => () => {
        navigation.navigate(ACTIVITY_SCREEN, { item });
    };

    const renderChoose = ({ item }) => {
        <Pressable onPress={handleClick(item)}>
            <Text>{item.text}</Text>
            <Text>{item.message}</Text>
        </Pressable>;
    };

    return <Carousel data={elements} renderItem={renderChoose} sliderWidth={Dimensions.get('window').width} />;
};
