import React, { useState } from 'react';
import { TextInput, View, Button, StyleSheet } from 'react-native';

const Input = ({addElement}) => {

    const [value, onChangeText] = useState('');

    const onPressAddElement = () => {
        addElement(value);
        onChangeText('');
    }


    return (
        <View style={styles.container}>
            <TextInput
                style={{ height : 40, borderColor: 'gray', borderWidth : 1}}
                placeholder='type your element name'
                onChangeText={text => onChangeText(text)}
                value={value}
            />
            <Button
                title="Add Element"
                style={{ height : 40, borderColor : 'black', borderWidth : 1}}
                onPress={onPressAddElement}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        justifyContent : 'center',
        marginTop : 40,
    }
})

export default Input;