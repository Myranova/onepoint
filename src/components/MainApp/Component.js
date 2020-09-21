import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
// import { connect } from 'redux';
import { connect }  from 'react-redux';
import { addElement } from '../../redux/actions'

import Input from '../Input';
import List from '../ListElement';

const App = ({addElement, list_element}) => {
  return (
    <View style={styles.container}>
      <Input addElement={addElement}/>
      <List list_element={list_element}/>
    </View>
  );
}

const mapStateToProps = state => {
  return {
    list_element : state.list_element,
  }
}

const mapDispatchToProps = dispatch => {
    return {
        addElement: (element) => {
            dispatch(addElement(element))
        }
    }
}

const WrappedApp = connect(mapStateToProps, mapDispatchToProps)(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default WrappedApp;