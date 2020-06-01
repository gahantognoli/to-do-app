import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

import styles from './style';

const Form = (props) => {

    const [task, setTask] = useState('');
    //let taskInput = null;

    const addTask = async () => {
        try {
            await props.addTask(task);
            //taskInput.clear();
            setTask('');
        } catch (error) {
            console.warn(error);
        }
    }

    return (
        <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter a task you have to do"
                    onChangeText={text => setTask(text)} />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Save"
                    onPress={addTask} />
            </View>
        </View>
    )
}

export default Form;