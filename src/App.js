import { NativeBaseProvider } from 'native-base';
import { Navigation } from './Navigation';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
    return (
        <NativeBaseProvider>
            <SafeAreaProvider>
                <Navigation />
            </SafeAreaProvider>
        </NativeBaseProvider>
    );
}
