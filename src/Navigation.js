import {
    ACCOUNT_SCREEN,
    ACTIVITY_SCREEN,
    CHOOSE_ACTIVITY_SCREEN,
    CREATE_ACTIVITY_SCREEN,
    DRAWER_LIST_COMPONENT,
    EXIT_COMPONENT,
    LOGIN_SCREEN,
    PROFILE_COMPONENT,
    REGISTRATION_SCREEN,
    SETTINGS_SCREEN,
    START_SCREEN,
    SUCCESSFUL_CREATE_SCREEN,
} from './NavigationIndex';
import React, { useEffect, useState } from 'react';

import { Account } from './screen/Account';
import { Activity } from './screen/Activity';
import { ChooseActivity } from './screen/ChooseActivity';
import { CreateActivity } from './screen/CreateActivity';
import { CustomDrawerContent } from './components/vidget/CustomDrawerContent';
import { Login } from './screen/Login';
import { NavigationContainer } from '@react-navigation/native';
import { Registration } from './screen/Registration';
import { Settings } from './screen/Settings';
import { Start } from './screen/Start';
import { SuccessfullCreate } from './screen/SuccessfullCreate';
import { Text } from 'react-native';
import auth from '@react-native-firebase/auth';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const NavigationContent = () => {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    // Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    });

    if (initializing) return null;

    if (!user) {
        return <NonAuthStackScreens />;
    } else {
        return <AuthStackScreens />;
    }
};

export const Navigation = () => {
    return (
        <NavigationContainer>
            <NavigationContent />
        </NavigationContainer>
    );
};

const AuthStack = createNativeStackNavigator();
const NonAuthStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const NonAuthStackScreens = () => {
    return (
        <NonAuthStack.Navigator>
            <NonAuthStack.Screen name={START_SCREEN} component={Start} options={{ title: 'Стартовая страница' }} />
            <NonAuthStack.Screen
                name={REGISTRATION_SCREEN}
                component={Registration}
                options={{ title: 'Регистрация' }}
            />
            <NonAuthStack.Screen name={LOGIN_SCREEN} component={Login} />
        </NonAuthStack.Navigator>
    );
};
const AuthStackScreens = () => {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name={DRAWER_LIST_COMPONENT} component={DrawerStackScreens} />
            <AuthStack.Screen name={ACTIVITY_SCREEN} component={Activity} />
            <AuthStack.Screen name={CREATE_ACTIVITY_SCREEN} component={CreateActivity} />
            <AuthStack.Screen name={SUCCESSFUL_CREATE_SCREEN} component={SuccessfullCreate} />
        </AuthStack.Navigator>
    );
};

export const DrawerStackScreens = () => {
    return (
        <Drawer.Navigator
            initialRouteName={CHOOSE_ACTIVITY_SCREEN}
            drawerContent={props => <CustomDrawerContent {...props} />}
        >
            <Drawer.Screen name={CHOOSE_ACTIVITY_SCREEN} component={ChooseActivity} />
            <Drawer.Screen name={ACCOUNT_SCREEN} component={Account} />
            <Drawer.Screen name={SETTINGS_SCREEN} ccomponent={Settings} />
        </Drawer.Navigator>
    );
};
