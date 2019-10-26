/**
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { View,
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Alert,
  YellowBox} from 'react-native';
import { createMaterialTopTabNavigator  } from 'react-navigation';
import firebase from 'firebase';
import HomeScreen from './screens/HomeScreen';
import AddItemsScreen from './screens/AddItemsScreen';
import ListItemsScreen from './screens/ListItemsScreen';

export default createMaterialTopTabNavigator ({
  Inicio: HomeScreen,
  Adicionar: AddItemsScreen,
  Listar: ListItemsScreen,
});

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#2a8ab7'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center'
  },
  itemInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor:'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});
