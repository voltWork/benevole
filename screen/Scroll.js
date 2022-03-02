import React, { useState } from 'react';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { Button} from 'native-base';
import { TestCard } from '../../../../components/test';
import Icon from 'react-native-vector-icons/FontAwesome';
export const Scroll = () => {
    const [short, setShort] = useState([
        {
            title: 'Покрасить лавочки в Чкаловске',
            img: 'https://bk55.ru/fileadmin/bkinform/bk_info_142304_big_1546944435.jpg',
            message: 'В сквере около 45 школы и улицы Пономаренко 2 необходимо покрыть лаком лавочки',
        },
        {
            title: 'Покрасить лавочки в Чкаловске',
            img: 'https://bk55.ru/fileadmin/bkinform/bk_info_142304_big_1546944435.jpg',
            message: 'В сквере около 45 школы и улицы Пономаренко 2 необходимо покрыть лаком лавочки',
        },
    ]);

    const [current, setCurrent] = useState(0);

    const clickNext = () => {
        setCurrent(prev => {
            if (prev + 1 > short.length - 1) {
                return 0;
            } else {
                return prev + 1;
            }
        });
    };

    const clickBack = () => {
        setCurrent(prev => {
            if (prev - 1 > short.length + 1) {
                short.length;
            } else {
                return prev -1;
            }
        });
    };

    const currentItem = short[current];

    return (
        <View>
            <ScrollView horizontal={true}>
            <TouchableOpacity onPress={clickBack}>
                <View>
                    
                </View>
                </TouchableOpacity>
            <Image
                source={{
                    uri: currentItem.img,
                }}
            />
            <Text>{currentItem.title}</Text>
            <Text>{currentItem.message}</Text>
            
            </ScrollView>
            <TouchableOpacity onPress={clickNext}>
                <View>
                    
                </View>
                </TouchableOpacity>
            <View>
            <Icon.Button
            name="'Pluscircle"
            onPress={}></Icon.Button>
            </View>
            </View>
    );
};
