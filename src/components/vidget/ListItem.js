import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView, Image, Text } from 'react-native';
import { ACTIVITY_SCREEN } from '../../NavigationIndex.js';
import { globalStyle } from '../styles/globalStyle.js';

export const ListItem = ({ el }) => {
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

    const currentItem = el[current];

    return (
        <View>
            <TouchableOpacity onPress={clickBack}>
                <View style={globalStyle.swipeViewLeft} />
            </TouchableOpacity>
            <Image
                source={{
                    uri: currentItem.img,
                }}
            />
            <Text>{currentItem.title}</Text>
            <Text>{currentItem.message}</Text>

            <TouchableOpacity onPress={clickNext}>
                <View style={globalStyle.swipeViewLeft} />
            </TouchableOpacity>
        </View>
    );
};
