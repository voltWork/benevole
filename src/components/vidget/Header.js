import React from 'react';
import { View } from 'react-native';
import { globalStyle } from '/components/style/globalStyle.js';
import { BackButton } from '/components/vidget/BackButton.js';
import { useNavigation } from '@react-native/navigation';

export const Header = () => {
    return <View style={globalStyle.Header} />;
};
