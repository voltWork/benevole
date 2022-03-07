import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

export const BackButton = () => {
    return <Icon.Button name='Back' onPress={() => navigation.goBack()} />;
};
