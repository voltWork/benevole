import React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Registration } from '/screen/Registration';
import { Login } from '/screen/Login';
import { Activity } from '/screen/Activity';
import { Choose_Activity } from '/screen/Choose_Activity';
import { Create_Activity } from '/screen/Create_Activity';
import {
    LOGIN_SCREEN,
    REGISTRATION_SCREEN,
    CHOOSE_ACTIVITY_SCREEN,
    ACTIVITY_SCREEN,
    CREATE_ACTIVITY_SCREEN,
} from '/components/Navigation_index';
import { useNavigation } from 'react-navigation/native';

export const NavigationProvider = () => {
    return (
        <NavigationContainer>
            <NavigationContent />
            <Navigation />
        </NavigationContainer>
    );
};
const NavigationContent = () => {
    const isLogin = true;
    if (isLogin) {
        return <AuthStackSrceens />;
    } else {
        return <NonAuthStackScreens />;
    }
};

export const Navigation = () => {
    const navigation = useNavigation();
    const Reg = () => {
        navigation.navigate(REGISTRATION_SCREEN);
    };
    const Log = () => {
        navigation.navigate(LOGIN_SCREEN);
    };

    return (
        <>
            <View>
                <Button onPress={Reg} />
                <Button onPress={Log} />
            </View>
        </>
    );
};
const AuthStack = createNativeStackNavigator();
const NonAuthStack = createNativeStackNavigator();
const NonAuthStackScreens = () => {
    return (
        <NonAuthStack.Navigator>
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
