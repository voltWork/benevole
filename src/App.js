import { NativeBaseProvider } from 'native-base';
import { Navigation } from './Navigation';
import React from 'react';
import { SafeAreaViewBase } from 'react-native';

export default function App() {
    console.log('test');
    return (
        <NativeBaseProvider>
            <SafeAreaViewBase>
                <Navigation />
            </SafeAreaViewBase>
        </NativeBaseProvider>
    );
}
