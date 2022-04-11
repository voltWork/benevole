import React from 'react';
import { View, Button } from 'react-native';
import IconButton from 'react-native-vector-icons/dist/lib/icon-button';

import auth from '@react-native-firebase/auth';
import { DrawerStackSreens } from '../../DrawerStackScreens';

import { useNavigation } from '@react-navigation/core';

export const ProfileInfo = () => {
    const navigation = useNavigation();
    const DrawerWork = () => {
        navigation.openDrawer();
    };

    return (
        <View>
            <IconButton name={'profile'} onPress={DrawerWork} />
            <DrawerStackSreens />
        </View>
    );
};
