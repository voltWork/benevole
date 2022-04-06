import React from 'react';
import { View, Button } from 'react-native';
import IconButton from 'react-native-vector-icons/dist/lib/icon-button';
import { createDrawerNavigator } from '@react-navigation/drawer';
import auth from '@react-native-firebase/auth';
import { ACCOUNT_SCREEN, PROFILE_COMPONENT, SETTINGS_SCREEN } from '../../NavigationIndex';
import { Account } from '../screen/Account';
import { Settings } from '../screen/Settings';
import { useNavigation } from '@react-navigation/core';

export const ProfileInfo = () => {
    const navigation = useNavigation();
    const ExitUser = () => {
        auth()
            .signOut()
            .then(() => console.log('User signed out!'));
    };
    const DrawerWork = () => {
        navigation.openDrawer();
    };
    const Drawer = createDrawerNavigator();

    return (
        <View>
            <IconButton name={'profile'} onPress={DrawerWork} />
            <Drawer.Navigator useLegacyImplementation initialRouteName={PROFILE_COMPONENT}>
                <Drawer.Screen name={ACCOUNT_SCREEN} component={Account} />
                <Drawer.Screen name={SETTINGS_SCREEN} ccomponent={Settings} />
                <Drawer.Screen name='exit' component={ExitUser} />
            </Drawer.Navigator>
        </View>
    );
};
