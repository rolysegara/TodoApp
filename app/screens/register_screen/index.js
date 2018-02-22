
import React, { Component } from 'react';
import { View, Platform, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { 
    Container, 
    Content,
    Form,
    Label,
    Icon,
    Item,
    Input,
    Button,
    Text,
    Right,
    Picker,
    Thumbnail
} from 'native-base';
import { DatePickerDialog } from 'react-native-datepicker-dialog'
import moment from 'moment';

//const Item = Picker.Item; 

export default class RegisterScreen extends React.Component {

    static navigationOptions = {
        title: 'Register',
        headerStyle: {
            backgroundColor: '#7c83f7',
        },
        headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
        },
    };

    constructor(props) {
        super(props);
        this.state = {
          selected2: undefined,
          dateText: '',
          dateHolder: null
        };
      }
      
    onValueChange2(value: string) {
    this.setState({
        selected2: value
    });
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
        this.setState({
          dobDate: date,
          dateText: moment(date).format('DD-MMM-YYYY'),
        })  
    }

    render() {
        return (
            <LinearGradient 
                start={{x: 0.0, y: 0.25}} end={{x: 0.7, y: 1.0}}
                locations={[0,0.4,0.75]}
                colors={['#a9aefc', '#7c83f7', '#5a64f7']}
                style={{
                        height: '100%',
                        flex: 1, 
                        flexDirection: 'column'}} >
                <Container>
                    <View 
                        style={{
                            flex: 1,
                            backgroundColor: 'rgba(255, 255, 255, 0.3)',
                            flexDirection: 'column',
                            margin: 20,
                            padding: 20,
                            borderRadius: 20,
                            justifyContent: 'center'}}>
                        <Form>    
                            <Item 
                                rounded 
                                style={{
                                    marginBottom: 20,
                                    backgroundColor: 'rgba(255, 255, 255, 0.75)'}}>
                                <Icon 
                                    active name='mail'
                                    style={{color:'rgba(101, 31, 255, 0.75)'}} />
                                <Input 
                                    placeholder='E-mail'/>
                            </Item>
                            <Item 
                                rounded
                                style={{
                                    marginBottom: 20,
                                    backgroundColor: 'rgba(255, 255, 255, 0.75)'}}>
                                <Icon
                                    active name='contact'
                                    style={{color:'rgba(101, 31, 255, 0.75)'}} />
                                <Input 
                                    placeholder='Username'/>
                            </Item>
                            <Item 
                                rounded
                                style={{
                                    marginBottom: 20,
                                    backgroundColor: 'rgba(255, 255, 255, 0.75)'}}>
                                <Icon
                                    active name='key'
                                    style={{color:'rgba(101, 31, 255, 0.75)'}} />
                                <Input 
                                    placeholder='Password'/>
                            </Item>
                            <Item 
                                rounded
                                style={{
                                    marginBottom: 20,
                                    backgroundColor: 'rgba(255, 255, 255, 0.75)'}}>
                                <Icon
                                    active name='md-male'
                                    style={{color:'rgba(101, 31, 255, 0.75)'}} />
                                <Picker
                                    mode='dialog'
                                    placeholder='Select Your Gender'
                                    note={false}
                                    selectedValue={this.state.selected2}
                                    onValueChange={this.onValueChange2.bind(this)}
                                    style={{ width:(Platform.OS === 'ios') ? undefined : '90%' }}
                                    >
                                    <Item label='Male' value='Male' />
                                    <Item label='Female' value='Female' />
                                </Picker>
                            </Item>
                            <Item 
                                rounded                               
                                onPress={() => this.showDatePicker()}
                                style={{
                                    marginBottom: 20,
                                    backgroundColor: 'rgba(255, 255, 255, 0.75)'}}>
                                <Icon
                                    active name='calendar'
                                    style={{color:'rgba(101, 31, 255, 0.75)'}} />

                                <Input 
                                    placeholder='Date of Birth'
                                    editable={false}>
                                    {this.state.dateText}    
                                </Input>
                            </Item>
                            <Button 
                                rounded 
                                style={{
                                    width: '100%',
                                    marginTop: 20,
                                    backgroundColor:'#651FFF'}}>
                                <Text 
                                    style={{
                                        width: '100%',
                                        textAlign:'center'
                                }}>
                                    Register
                                </Text>
                            </Button>
                            <Button 
                                transparent 
                                primary
                                style={{alignSelf: 'flex-end'}}
                                onPress={() => {
                                    this.props.navigation.navigate('LoginScreen')
                                }}
                                >
                                <Text 
                                    style={{color:'#fff'}}>
                                    Cancel
                                </Text>
                            </Button>
                        </Form>
                    </View>

                </Container>

                <DatePickerDialog ref="DatePickerDialog" onDatePicked={this.onDatePicked.bind(this)} />      
            </LinearGradient>
        )
    }
}
