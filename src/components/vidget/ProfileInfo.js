import React from 'react';
import { View, Button } from 'react-native';
import IconButton from 'react-native-vector-icons/dist/lib/icon-button';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/core';

export const ProfileInfo = () => {
    const navigation = useNavigation();
    const DrawerWork = () => {
        navigation.openDrawer();
    };

    return <IconButton name={'profile'} onPress={DrawerWork} />;
};
