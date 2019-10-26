// ItemComponent.js

import React, {Component} from 'react';
import {  View, ScrollView, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import { Table, Row, Rows } from 'react-native-table-component';

const styles = StyleSheet.create({
    itemsList: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    itemtext: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    head: {
      height: 40,
      backgroundColor: '#f1f8ff',
    },
    text: {
      margin: 6,
    },
});

export default class ItemComponent extends Component {

  static propTypes = {
       items: PropTypes.array.isRequired
  };

  render() {
    var tableData = [];
    var tableHead = ['Primeiro Nome', 'Último Nome','Turma','Ano'];
    this.props.items.map((Item, index) => {
      var item_ar =  [
         [Item.firstname],
         [Item.lastname],
         [Item.classn],
         [Item.grade],
       ];
         tableData.push(item_ar);
    });

    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

        <View style={styles.container}>
          <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
            <Row data={tableHead} style={styles.head} textStyle={styles.text} />
            <Rows data={tableData} textStyle={styles.text} />
          </Table>
        </View>
      </ScrollView>
    );
  }
}
