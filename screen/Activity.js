import React, { useState } from 'react';
import { View, Text, Button, FlatList, Image } from 'react-native';
import InsteadButtonComponent from '/components/vidget/InsteadButtonComponent';

export const Activity = () => {
    const [form, setForm] = useState([
        {
            title: 'Покрасить лавочки в Чкаловске',
            img: 'https://bk55.ru/fileadmin/bkinform/bk_info_142304_big_1546944435.jpg',
            message: 'В сквере около 45 школы и улицы Пономаренко 2 необходимо покрыть лаком лавочки',
            locate: 'Сквер на улицах Пономаренко и Ермолаево',
            materials: 'Сторительный лак в балонах по 1 л около 4 штук, средства защиты выдадут на месте',
            data: 'До 30 июня 2022 г.',
        },
    ]);

    const [click, setClick] = useState(true);
    const Cl = click => {
        setClick(false);
    };

    return (
        <View>
            <FlatList
                data={form}
                renderItem={({ item }) => (
                    <View>
                        <Image
                            source={{
                                uri: item.img,
                            }}
                        />

                        <Text>{item.title}</Text>
                        <Text>{item.message}</Text>
                        <Text>{item.locate}</Text>
                        <Text>{item.materials}</Text>
                        <Text>{item.data}</Text>
                    </View>
                )}
            />
            <View>{click ? <Button title='принять' onPress={Cl} /> : <InsteadButtonComponent />}</View>
        </View>
    );
};
