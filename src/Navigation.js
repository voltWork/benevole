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
import { SuccessCreate } from './screen/SuccessCreate';
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

const AuthStack = createDrawerNavigator();
const NonAuthStack = createNativeStackNavigator();

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
        <AuthStack.Navigator
            initialRouteName={CHOOSE_ACTIVITY_SCREEN}
            drawerContent={props => <CustomDrawerContent {...props} />}
        >
            <AuthStack.Screen name={CHOOSE_ACTIVITY_SCREEN} component={ChooseActivity} />
            <AuthStack.Screen name={ACCOUNT_SCREEN} component={Account} />
            <AuthStack.Screen name={SETTINGS_SCREEN} component={Settings} />
            <AuthStack.Screen name={ACTIVITY_SCREEN} component={Activity} />
            <AuthStack.Screen name={CREATE_ACTIVITY_SCREEN} component={CreateActivity} />
            <AuthStack.Screen name={SUCCESSFUL_CREATE_SCREEN} component={SuccessCreate} />
        </AuthStack.Navigator>
    );
};
