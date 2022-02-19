import React, {useState} from 'react';
import { View, FlatList,Image } from 'react-native';

export const Scroll = () =>{
    const [short,setShort]=useState([
        {title: 'Покрасить лавочки в Чкаловске',
         img: 'https://bk55.ru/fileadmin/bkinform/bk_info_142304_big_1546944435.jpg', 
        message: 'В сквере около 45 школы и улицы Пономаренко 2 необходимо покрыть лаком лавочки'},
        {title: 'Покрасить лавочки в Чкаловске',
        img: 'https://bk55.ru/fileadmin/bkinform/bk_info_142304_big_1546944435.jpg', 
       message: 'В сквере около 45 школы и улицы Пономаренко 2 необходимо покрыть лаком лавочки'}
    ])


    return(
    <View>
        <FlatList data={short} renderItem={({item}) => (
        <View>
            <Image source={{uri: item.img}}/>
        <Text>{item.title}</Text>
        <Text>{item.message}</Text>
        </View>
    
    )}/>
    </View>
        
    )
}