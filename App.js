/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  AsyncStorage,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  DatePickerAndroid,
  DatePickerIOS,
  View,
  Image
} from 'react-native';

import { DatePickerDialog } from 'react-native-datepicker-dialog'
import moment from 'moment';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      text: null,
      data: [],
      dateText: '',
      dateHolder: null
    }
  }

  componentWillMount(){
    this.getDataTodo()
  }

  showDatePicker(){
    let dateHolder = this.state.dateHolder

    if(!dateHolder || dateHolder == null){
      dateHolder = new Date()
      this.setState({
        dateHolder: dateHolder 
      })
    }

    this.refs.DatePickerDialog.open({
      date: dateHolder
    })
  }

  onDatePicked(date){
    this.setState({dateText: ''})
    const data = [
      ...this.state.data, 
      {
        title: this.state.text,
        date: moment(date).format('DD-MMM-YYYY'),
        isCheck: false
      }
    ]
    this.setState({
      dobDate: date,
      dateText: moment(date).format('DD-MMM-YYYY'),
      data: [
        ...this.state.data, 
        {
          title: this.state.text,
          date: moment(date).format('DD-MMM-YYYY'),
          isCheck: false
        }
      ],
    })

    this.saveDataTodo(data)
    this.setState({text: ''})
    //this.setState({dateText: ''})

  }

  addData(){
    this.showDatePicker()
  }

  checked(item){
    let array = this.state.data
    var index = array.indexOf(item)
    array[index].isCheck = !array[index].isCheck
    this.setState({data: array})
    this.saveDataTodo(array)
  }

  deleteData(item){
      let array = this.state.data
      var index = array.indexOf(item)
      array.splice(index, 1)
      this.setState({data: array })
      this.saveDataTodo(array)
  }

  async saveDataTodo(data){
    try {
      //alert(JSON.stringify(this.state.data))
      await AsyncStorage.setItem('dataTodo', JSON.stringify(data));
    } catch (error) {
      // Error saving data
    }
  }

  async getDataTodo(){
    try {
      const myArray = await AsyncStorage.getItem('dataTodo');
      if (myArray !== null) {
        // We have data!!
        this.setState({
          data: JSON.parse(myArray),
        })
      }
    } catch (error) {
      // Error retrieving data
    }
  }

  render() {
    //const { checked } = this.state
    const { data, dateText } = this.state
    return (
      <View style={styles.container}>
        <View 
          style={{
              flexDirection: 'row', 
              padding:10, }}
        >
          <TextInput
            style={{
                flex:1, 
                height: 40, 
                padding: 10, 
                borderColor: 'gray', 
                borderWidth: 1}}
            onChangeText={(text) => this.setState({text})}
            onSubmitEditing={() => this.addData()}
            placeholder='Input text here..'
            value={this.state.text}
            underlineColorAndroid='transparent'
          />
        </View>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <TaskItem 
              item={item.title}
              isCheck={item.isCheck} 
              deleteItem={() => this.deleteData(item)}
              checkedItem={() => this.checked(item)}
              dataDate={item.date}></TaskItem>
          )}
          extraData={this.state}
          keyExtractor={(item, index) => index}
        />
        
        <DatePickerDialog ref="DatePickerDialog" onDatePicked={this.onDatePicked.bind(this)} />
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 16,
    backgroundColor: '#F5FCFF',
  }, 
  header: {
    flexDirection: 'row'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

class TaskItem extends Component {
  constructor(props){
    super(props)
    this.state=({
      isCheck: false
    })
  }

  /* check(){
    this.setState({
      isCheck: !this.state.isCheck
    })
  } */

  componentWillMount(){
    this.check(this.props.isCheck)
    //alert(this.props.isCheck)
  }

  check(isCheck){
    this.setState({
      isCheck: isCheck
    })
  }

  render(){
    return(
      <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 5
        }}>
        <TouchableOpacity
          style={{
            flex: 0.1,
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onPress={() => {
              this.props.checkedItem() 
              this.check(!this.state.isCheck)
            }
          }
        >
          <Image 
            source={!this.state.isCheck? 
              require('./app/asset/image/checkbox-blank-outline.png') :
              require('./app/asset/image/checkbox-marked-outline.png')}
          />
        </TouchableOpacity>
        <View
          style={{
            flex: 0.8
          }}
        >
          {
            this.state.isCheck?
              <View>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight:'bold',
                    textDecorationLine:'line-through'
                  }}>
                  {this.props.item}
                </Text>
                <Text
                  style={{
                    textDecorationLine:'line-through'
                  }}>
                  {this.props.dataDate}
                </Text>
              </View>
              :
              <View>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight:'bold',
                  }}>
                  {this.props.item}
                </Text>
                <Text
                  style={{
                  }}>
                  {this.props.dataDate}
                </Text>
              </View>
          }
        </View>
        <TouchableOpacity
          style={{
            flex:0.1,
            alignItems:'center',
            justifyContent: 'center'
          }}
          onPress={() => this.props.deleteItem()}
        >
          <Image 
            source={require('./app/asset/image/delete-forever.png')}
          />
        </TouchableOpacity>

      </View>
    )
  }
}
