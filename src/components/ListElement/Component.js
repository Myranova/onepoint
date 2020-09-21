import React from 'react';
import { FlatList, Text } from 'react-native';

const List = ({list_element}) => {
    return (
        <FlatList
            data={list_element}
            renderItem={(element) => <Text> {element.item} </Text> }
        />
    )
}

export default List;