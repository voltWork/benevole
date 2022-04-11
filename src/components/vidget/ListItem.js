import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView, Image, Text, Dimensions } from 'react-native';
import { Navigation } from '../../Navigation.js';
import { ACTIVITY_SCREEN } from '../../NavigationIndex.js';
import { globalStyle } from '../styles/globalStyle.js';
import Carousel from 'react-native-snap-carousel';

export const ListItem = ({ el }) => {
    const navigation = useNavigation();
    const [current, setCurrent] = useState(0);

    const clickNext = () => {
        setCurrent(prev => {
            if (prev + 1 > el.length - 1) {
                return 0;
            } else {
                return prev + 1;
            }
        });
    };

    const clickBack = () => {
        setCurrent(prev => {
            if (prev - 1 > el.length + 1) {
                el.length;
            } else {
                return prev - 1;
            }
        });
    };
    const selectActivity = () => {
        navigation.navigate(ACTIVITY_SCREEN);
    };

    const currentItem = el[current];
    const renderChoose = () => {
        <View>
            <Text>{el.text}</Text>
            <Text>{el.message}</Text>
        </View>;
    };

    return (
        <Carousel
            ref={c => {
                this.carousel = c;
            }}
            data={el}
            renderItem={renderChoose}
            sliderWidth={Dimensions.get('window').width}
            onPress={selectActivity}
        />
    );
};
