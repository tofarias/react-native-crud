import React, { Component } from 'react';
import ValidationComponent from 'react-native-form-validator';
// import ValidationComponent from '../components/ValidationComponent';

import { View,
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Alert,
  YellowBox} from 'react-native';
import firebase from 'firebase';

export default class AddItemsScreen extends React.Component {
  constructor(props) {
    super(props);
    var config = {
       apiKey: "AIzaSyBu7u1NXsPTLkjEV4NGRtxGqLt9BcgiQt0",
       authDomain: "react-native-crud-firebasedb.firebaseapp.com",
       databaseURL: "https://react-native-crud-firebasedb.firebaseio.com",
       projectId: "react-native-crud-firebase",
       storageBucket: "react-native-crud-firebase.appspot.com",
       messagingSenderId: "620823788564"
    };
    if (!firebase.apps.length){
      this.db = firebase.initializeApp(config);
    }
    this.state = {
		 firstname: '',
     lastname: '',
     classn: '',
     grade: '',
		 error: false,
     items:[]
    }
  }

  handleSubmit = () => {
    
      if(this.state.firstname == "" || this.state.lastname == "" ||
            this.state.classn == "" || this.state.grade == ""){
        Alert.alert(
        'Preencha todos os campos'
        );
        return false;
      }
      
      var regex = /^[0-9\b]+$/; 
        if( !regex.test(this.state.classn) ){
          Alert.alert(
          'Inform um numero para a turma'
          );
          return false;
        }
           this.addItem(this.state.firstname,
             this.state.lastname,
             this.state.classn,
             this.state.grade);
             Alert.alert(
             'Item salvo com sucesso!'
           );

  }

  addItem =  (firstname,lastname,classn,grade) => {
    let dbCon = this.db.database().ref('/items');
     dbCon.push({
         firstname: firstname,
         lastname: lastname,
         classn: classn,
         grade: grade,
       });
  }

  render() {
    return (
       <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
         <View style={styles.main}>
           <Text style={styles.title}>Primeiro Nome</Text>
           <TextInput
             name='firstname'
             ref="firstname"
             style={styles.itemInput}
             onChangeText={(text) => this.setState({firstname:text})}
             value={this.state.firstname}
           />
           <Text style={styles.title}>Último Nome</Text>
           <TextInput
             name='lastname'
             ref="lastname"
             style={styles.itemInput}
             onChangeText={(text) => this.setState({lastname:text})}
             value={this.state.lastname}
           />
           <Text style={styles.title}>Turma</Text>
           <TextInput
             name='classn'
             style={styles.itemInput}
             onChangeText={(text) => this.setState({classn:text})}
             value={this.state.classn}
           />
           <Text style={styles.title}>Ano</Text>
           <TextInput
             name='grade'
             style={styles.itemInput}
             onChangeText={(text) => this.setState({grade:text})}
             value={this.state.grade}
           />
           <TouchableHighlight
             style = {styles.button}
             underlayColor= "white"
             onPress = {this.handleSubmit}
           >
             <Text
               style={styles.buttonText}>
               Adicionar
             </Text>
           </TouchableHighlight>
         </View>

       </ScrollView>
    );
  }
}

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
