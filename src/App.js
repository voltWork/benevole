import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import { Navigation } from './Navigation';

export default function App() {
    return (
        <NavigationContainer>
            <NativeBaseProvider>
                <Navigation />
            </NativeBaseProvider>
        </NavigationContainer>
    );
}
