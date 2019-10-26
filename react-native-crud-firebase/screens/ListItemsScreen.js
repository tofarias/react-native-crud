
import React, {Component} from 'react';
import { View, ScrollView, Text, StyleSheet} from 'react-native';

import firebase from 'firebase';
import ItemComponent from '../components/ItemComponent';

export default class ListItemsScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
		 itemsFbase: []
    }
  }


  componentDidMount() {
    firebase.database().ref('/items').once('value').then(snapshot => {
      this.setState({ itemsFbase: snapshot.val() });
    })
}

  render() {
    const { itemsFbase } = this.state;
    var items = [];
    Object.keys(itemsFbase).forEach(function(key) {
      items.push(itemsFbase[key]);
    });
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.itemsList}>
          {
            Object.keys(items).length > 0
              ? <ItemComponent items={items} />
              : <Text>Nao existem itens</Text>
          }

              </View>
      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  getStartedContainer: {
      alignItems: 'center',
      marginHorizontal: 50,
    },
  });
