import React, { useContext, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, View } from 'react-native';
import { Registration } from './screen/Registration';
import { Login } from './screen/Login';
import { Activity } from './screen/Activity';
import { ChooseActivity } from './screen/ChooseActivity';
import { CreateActivity } from './screen/CreateActivity';
import { Start } from './screen/Start';
import { globalStyle } from './components/styles/globalStyle';
import { SuccessfullCreate } from './screen/SuccessfullCreate';
import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Account } from './screen/Account';
import { Settings } from './screen/Settings';

import {
    LOGIN_SCREEN,
    REGISTRATION_SCREEN,
    CHOOSE_ACTIVITY_SCREEN,
    ACTIVITY_SCREEN,
    CREATE_ACTIVITY_SCREEN,
    START_SCREEN,
    SUCCESSFUL_CREATE_SCREEN,
    ACCOUNT_SCREEN,
    PROFILE_COMPONENT,
    SETTINGS_SCREEN,
} from './NavigationIndex';
import { ExitButton } from './components/vidget/ExitButton';
import { ProfileInfo } from './components/vidget/ExitButton';

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
            <AuthStack.Screen
                name={CHOOSE_ACTIVITY_SCREEN}
                component={ChooseActivity}
                options={{
                    headerLeft: () => <ProfileInfo />,
                }}
            />
            <AuthStack.Screen name={ACTIVITY_SCREEN} component={Activity} />
            <AuthStack.Screen name={CREATE_ACTIVITY_SCREEN} component={CreateActivity} />
            <AuthStack.Screen name={SUCCESSFUL_CREATE_SCREEN} component={SuccessfullCreate} />
        </AuthStack.Navigator>
    );
};
export const DrawerStackScreens = () => {
    return (
        <Drawer.Navigator useLegacyImplementation initialRouteName={PROFILE_COMPONENT}>
            <Drawer.Screen name={ACCOUNT_SCREEN} component={Account} />
            <Drawer.Screen name={SETTINGS_SCREEN} ccomponent={Settings} />
            <Drawer.Screen name='exit' component={ExitButton} />
        </Drawer.Navigator>
    );
};
