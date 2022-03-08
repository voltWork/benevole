import React from 'react';
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
import {
    LOGIN_SCREEN,
    REGISTRATION_SCREEN,
    CHOOSE_ACTIVITY_SCREEN,
    ACTIVITY_SCREEN,
    CREATE_ACTIVITY_SCREEN,
    START_SCREEN,
    SUCCESSFUL_CREATE_SCREEN,
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
const AuthStackSrceens = () => {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name={CHOOSE_ACTIVITY_SCREEN} component={ChooseActivity} />
            <AuthStack.Screen name={ACTIVITY_SCREEN} component={Activity} />
            <AuthStack.Screen name={CREATE_ACTIVITY_SCREEN} component={CreateActivity} />
            <AuthStack.Screen name={SUCCESSFUL_CREATE_SCREEN} component={SuccessfullCreate} />
        </AuthStack.Navigator>
    );
};