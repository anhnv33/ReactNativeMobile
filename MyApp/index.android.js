/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';

import {
    AppRegistry,
    View,
} from 'react-native';

import {
    Container,
    Header,
    Title,
    Content,
    Footer,
    FooterTab,
    Button,
    Left,
    Right,
    Body,
    Icon,
    Text,
    StyleProvider,
    Card,
    CardItem,
    Form, Item, Input,Label
} from 'native-base';

import {Col, Row, Grid} from 'react-native-easy-grid';

import styles from './style';


class MyApp extends Component {
    render() {
        const customB = this.props.style;
        return (
            <View style={{backgroundColor: 'white'}}>
            <View style={{height: '100%', marginLeft: 50, marginRight: 50}}>
                <View>
                    <Button block bordered success style={styles.myButton}>
                        <Icon active name="logo-facebook"/>
                        <Text>Đăng nhập với FaceBook</Text>
                    </Button>
                    <Button block bordered success style={styles.myButton}>
                        <Icon active name="logo-googleplus"/>
                        <Text>Đăng nhập với Gmail</Text>
                    </Button>
                </View>
                <View style={{flexDirection: 'column',
                    alignItems: 'center', marginTop: 50}}>
                    <View style={{ width: '100%', height: 1, backgroundColor: '#5cb85c'}}>

                    </View>
                    <Text style={{position: 'relative', top: -15, backgroundColor: 'white', width: 100, textAlign: 'center', fontSize: 18, color: "#5cb85c"}}>hoặc</Text>


                </View>
                <View style={{position: 'relative'}}>
                    <Form>
                        <Item floatingLabel last>
                            <Label style={{color: "#5cb85c"}}>Username</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last>
                            <Label style={{color: "#5cb85c"}}>Password</Label>
                            <Input />
                        </Item>
                    </Form>
                    <Button block bordered success style={styles.myButton}>
                        <Text>Đăng nhập</Text>
                    </Button>
                    <Button transparent success><Text>Quên mật khẩu</Text></Button>
                </View>
                <View style={{flexDirection: 'column',
                    alignItems: 'center', marginTop: 50}}>
                    <View style={{ width: '100%', height: 1, backgroundColor: '#5cb85c'}}>

                    </View>

                    <Button transparent success style={{marginTop: 10}}><Text>đăng kí tài khoản mới</Text></Button>

                </View>
            </View>

            </View>
        );
    }
}


class Test extends Component {
    render() {
        const customTheme = this.props.style;
        return (
            <StyleProvider style={buttonTheme(customTheme)}>
                <Button bordered success>
                    <Text>Custom Button</Text>
                </Button>
            </StyleProvider>
        );
    }
}
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: 'green',
//     },
//     textContent: {
//         fontSize: 20,
//         color: 'red',
//     },
// });

// const styles = {
//     customb: {
//         marginLeft: 50,
//     }
// };

const customB = {
    marginLeft: 50,
};

const customTheme = {
    'NativeBase.Button': {
        '.customStyleProp': {
            marginLeft: 50,
            marginTop: 50,
            marginBottom: 50,
        }
    }
};

// export default connectStyle('NativeBase.Button', styles)(Button);
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#F5FCFF',
//     },
//     welcome: {
//         fontSize: 20,
//         textAlign: 'center',
//         margin: 10,
//     },
//     instructions: {
//         textAlign: 'center',
//         color: '#333333',
//         marginBottom: 5,
//     },
//     button_login: {
//         backgroundColor: 'red',
//     },
//     bigblue: {
//         color: 'blue',
//         fontWeight: 'bold',
//         fontSize: 30,
//     },
//     red: {
//         color: 'red',
//     },
// });


AppRegistry.registerComponent('MyApp', () => MyApp);
