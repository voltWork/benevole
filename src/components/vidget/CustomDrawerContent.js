import React from 'react';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { View, Button, Text } from 'react-native';
import auth from '@react-native-firebase/auth';

export const CustomDrawerContent = props => {
    const handleLogout = () => {
        auth()
            .signOut()
            .then(() => console.log('User signed out!'));
    };
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem label='Logout' onPress={handleLogout} />
        </DrawerContentScrollView>
    );
};