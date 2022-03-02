import React from 'react';
import { View } from 'react-native';
import {globalStyle} from '/components/style/globalStyle.js';
import {BackButton} from '/components/vidget/BackButton.js'
import {useNavigation} from '@react-native/navigation'

export const Header = () => {
    const isFocused = useIsFocused();
    const back = () =>{
        if(isFocused=='ACTIVTIY_SCREEN'){
        return(<BackButton/>);
        }
        
        
    }
    return(
    <View style={gstyle.Header}>
    </View>
    );
}

