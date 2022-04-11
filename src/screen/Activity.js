import React, { useState } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { InsteadButtonComponent } from '../components/vidget/InsteadButtonComponent';
import { Button, VStack } from 'native-base';

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

    const [disabled, setDisabled] = useState(true);
    const Press = () => {
        setDisabled(false);
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

                        <Text title='Название'>{item.title}</Text>
                        <Text title='Описание'>{item.message}</Text>
                        <Text title='Местоположение'>{item.locate}</Text>
                        <Text title='Материалы'>{item.materials}</Text>
                        <Text>{item.data}</Text>
                    </View>
                )}
            />
            <View>
                {disabled ? (
                    <VStack w='100%' space={4} px='2' mt='4' alignItems='center' justifyContent='center'>
                        <Button size='sm' variant='subtle' onPress={Press}>
                            <Text>Взять активность</Text>
                        </Button>
                    </VStack>
                ) : (
                    <InsteadButtonComponent />
                )}
            </View>
        </View>
    );
};
