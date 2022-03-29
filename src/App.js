import React from 'react';

import { NativeBaseProvider } from 'native-base';
import { Navigation } from './Navigation';
import { SafeAreaViewBase } from 'react-native';

export default function App() {
    return (
        <NativeBaseProvider>
            <SafeAreaViewBase>
                <Navigation />
            </SafeAreaViewBase>
        </NativeBaseProvider>
    );
}
