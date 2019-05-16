import React,{Component} from 'react';
import {
    View,
    Image,
    Dimensions,
    TextInput,
    Text,
    TouchableOpacity,
    ScrollView,
} from 'react-native';

import Styles from '../../style/Styles';
import {_getLogin} from '../../networking/login_network';
import { setUser_Token, getUsername } from '../../AsyncStorage/AsyncStorage';

const {width,height} = Dimensions.get('window');


export default class LoginComponent extends Component{

    static navigationOptions = {
        header:null,
        
    }
    constructor(props){
        super(props);
        this.state={
            UserName:'',
            PassWord:'',

        }
    }

    componentDidMount(){
        this._autoLogin();
    }

    _autoLogin = ()=>{
        getUsername().then((username)=>{
            if(username != null){
                this.props.navigation.navigate("Home");
            }
        })
    }
    _btnLogin =()=>{
        var {UserName,PassWord} = this.state;
            _getLogin(UserName,PassWord).then((result)=>{
                console.log(result.status);
                if(result.status == 0){
                    alert("Đăng nhập thất bại");
                }else if(result.status == 1){
                    alert("Đăng nhập thành công");
                    setUser_Token(UserName,result.token);
                    this.props.navigation.navigate('Home')
                }
            }).catch((Error)=>{
                console.log(Error);
            }); 
    }

    render(){
        return(
            <ScrollView style={Styles.container}>
                <View style={Styles.container_image}>
                <Image style={{width:width,height:150}} source={require('../../image/banner_poly.jpg')}></Image>
                </View>

                <View style={{margin:10}}>

                    {/* View Username */}
                    <View>
                        <Text style={Styles.text_login}>UserName</Text>
                        <TextInput onSubmitEditing={()=>this.password.focus()} onChangeText={(value)=>{this.setState({UserName:value})}} style={Styles.input_login} placeholderTextColor="#638f8d" placeholder="UserName"></TextInput>
                    </View>
                    
                    {/* View Password */}
                    <View>
                        <Text style={Styles.text_login}>Password</Text>
                        <TextInput ref={(input)=>{this.password = input}} onChangeText={(value)=>{this.setState({PassWord:value})}} style={Styles.input_login} placeholderTextColor="#638f8d" placeholder="Password" secureTextEntry={true}></TextInput>
                    </View> 

                    {/* View Button */}
                    <TouchableOpacity onPress={this._btnLogin.bind(this)} style={Styles.btn_login}>
                        <Text style={Styles.text_btn_login}>Login</Text>
                    </TouchableOpacity>

                    <View style={{justifyContent:'center',flexDirection:'row'}}>
                        <Text style={Styles.text_login}>Don't have an account? </Text>
                        <Text onPress={()=>{this.props.navigation.navigate("Register")}} style={[Styles.text_btn_login,{textDecorationLine:'underline'}]}>Sign Up</Text>
                    </View>


                </View>
            </ScrollView>
        )
    }
}