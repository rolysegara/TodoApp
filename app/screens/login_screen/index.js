
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

import imageLogo from './../../asset/image/app_icon.png'


export default class LoginScreen extends React.Component {
    static navigationOptions = {
        header: null // !!! Hide Header
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
                            flex: 0.4,
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 20
                            }}>
                        <Thumbnail 
                            source={imageLogo} 
                            large
                            square />
                        <Text 
                            style={{
                                fontSize: 30,
                                fontWeight: '900',
                                marginTop: 20,
                                color: '#fff'
                            }}>Todo App</Text>
                    </View> 

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
                                    placeholder='Password' 
                                    secureTextEntry={true}/>
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
                                    Login
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
                                    Register
                                </Text>
                            </Button>
                        </Form>
                    </View>

                    <View 
                        style={{
                            flex:0.1,
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center'}}>
                        <Text
                            style={{
                                color: '#fff'
                            }}
                        > ~ Roly Segara ~ </Text>
                    </View>
                </Container>
            </LinearGradient>
        );
    }
}
