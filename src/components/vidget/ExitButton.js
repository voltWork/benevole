import React from 'react';
import { View, Button, Text } from 'react-native';
import auth from '@react-native-firebase/auth';

export const ExitButton = () => {
    const Exit = () => {
        auth()
            .signOut()
            .then(() => console.log('User signed out!'));
    };
    return (
        <View>
            <Button>
                <Text>Выход</Text>
            </Button>
        </View>
    );
};
