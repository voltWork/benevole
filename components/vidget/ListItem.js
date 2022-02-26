import React, { useState } from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';
import Activity from './Screen/Activity.js';

export default function SladeItem({ el }) {
    <View onPress={Activity}>
        <TouchableOpacity>
            <Text>{el.title}</Text>
            <Text>{el.img}</Text>
            <Text>{el.message}</Text>
        </TouchableOpacity>
    </View>;
}
