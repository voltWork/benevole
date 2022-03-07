import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Listitem from './Videget/Listitem.js';

function List() {
    const [listOfItems, setListOfItems] = useState([
        { img: '', text: 'Починить забор у 75', message: 'Ветер сломал забор...', index: 1 },
        { img: '', text: 'Починить забор у 75', message: 'Ветер сломал забор...', index: 2 },
        { img: '', text: 'Починить забор у 75', message: 'Ветер сломал забор...', index: 3 },
    ]);
    return (
        <View>
            <FlatList data={listOfItems} renderItem={({ item }) => <Listitem el={item} />} />
        </View>
    );
}
