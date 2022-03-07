import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, View } from 'react-native';
import { Registration } from './screen/Registration';
import { Login } from './screen/Login';
import { Activity } from './screen/Activity';
import { Choose_Activity } from './screen/ChooseActivity';
import { Create_Activity } from './screen/CreateActivity';
import { Start } from './screen/Start';
import { globalStyle } from './components/styles/globalStyle';
import {
    LOGIN_SCREEN,
    REGISTRATION_SCREEN,
    CHOOSE_ACTIVITY_SCREEN,
    ACTIVITY_SCREEN,
    CREATE_ACTIVITY_SCREEN,
    START_SCREEN,
} from './NavigationIndex';

export const Navigation = () => {
    const isLogin = false;
    if (isLogin) {
        return <AuthStackSrceens />;
    } else {
        return <NonAuthStackScreens />;
    }
};

const AuthStack = createNativeStackNavigator();
const NonAuthStack = createNativeStackNavigator();
const NonAuthStackScreens = () => {
    return (
        <NonAuthStack.Navigator>
            <NonAuthStack.Screen name={START_SCREEN} component={Start} />
            <NonAuthStack.Screen name={REGISTRATION_SCREEN} component={Registration} />
            <NonAuthStack.Screen name={LOGIN_SCREEN} component={Login} />
        </NonAuthStack.Navigator>
    );
};
const AuthStackSrceens = () => {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name={CHOOSE_ACTIVITY_SCREEN} component={Choose_Activity} />
            <AuthStack.Screen name={ACTIVITY_SCREEN} component={Activity} />
            <AuthStack.Screen name={CREATE_ACTIVITY_SCREEN} component={Create_Activity} />
        </AuthStack.Navigator>
    );
};
