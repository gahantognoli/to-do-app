import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import styles from './style';

const List = ({ tasks, updateTask }) => {

    return (
        <FlatList
            data={tasks}
            renderItem={({ item }) => {
                const taskDone = item.done ? 'done' : 'undone';
                const done = Boolean(item.done);
                return <>
                    <View style={styles.checkboxContainer}>
                        <CheckBox
                            disabled={false}
                            value={done}
                            onChange={() => updateTask(item.id)}                            
                            />
                        <Text style={[styles.textTask, styles[taskDone]]}>{item.description}</Text>
                    </View>
                </>
            }}
            keyExtractor={item => item.id}>
        </FlatList>
    )
}

export default List;