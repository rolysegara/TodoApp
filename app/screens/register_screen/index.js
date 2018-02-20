
import React, { Component } from 'react';
import { View } from 'react-native'
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
    Thumbnail
} from 'native-base';

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
                            flex: 0.5,
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
                                    backgroundColor: '#FFC107'}}>
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
                                    backgroundColor: '#FFC107'}}>
                                <Icon
                                    active name='key'
                                    style={{color:'rgba(101, 31, 255, 0.75)'}} />
                                <Input 
                                    placeholder='Password'/>
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
                                    this.props.navigation.navigate('RegisterScreen')
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
            </LinearGradient>
        )
    }
}
