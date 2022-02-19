import React from 'react';
import { View } from 'react-native';
import {globalStyle} from '/components/style/globalStyle.js';
import {BackButton} from '/components/vidget/BackButton.js'

export const Header = () => {
    const back = () =>{
        <BackButton/>
    }
    return(
    <View style={gstyle.Header}>
    </View>
    );
}

