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
import { register_member } from '../../networking/register_network';

const {width,height} = Dimensions.get('window');

export default class RegisterComponent extends Component{

    constructor(props){
        super(props);
        this.state={
            UserName:'',
            PassWord:'',
            email:'',
        }
    }

    _btnRegister =()=>{
        let {UserName,PassWord,email} = this.state;
        register_member(UserName,PassWord,email).then((res)=>{
            if(res.status == 1){
                alert("Đăng ký thành công");
            }else if(res.status == 0){
                alert("Username đã có người sử dụng");
            }else if(res.status == 3){
                alert("Email đã có người sử dụng");
            }else{
                alert("Lỗi đăng ký, vui lòng thử lại sau!");
            }
        })
    }
    
    render(){
        return(
            <ScrollView style={Styles.container}>
                <View style={Styles.container_image}>
                    <Image style={{width:width,height:150}} source={require('../../image/banner_poly.jpg')}></Image>
                </View>

                <View style={{margin:10}}>
                    
                    <View>
                        <Text style={Styles.text_login}>UserName</Text>
                        <TextInput onChangeText={(value)=>this.setState({UserName:value})} style={Styles.input_login} placeholderTextColor="#638f8d" placeholder="UserName"></TextInput>
                    </View>
                    
                    <View>
                        <Text style={Styles.text_login}>Email</Text>
                        <TextInput onChangeText={(value)=>this.setState({email:value})} style={Styles.input_login} placeholderTextColor="#638f8d" placeholder="Email"></TextInput>
                    </View>
                    
                    <View>
                        <Text style={Styles.text_login}>Password</Text>
                        <TextInput onChangeText={(value)=>this.setState({PassWord:value})} style={Styles.input_login} placeholderTextColor="#638f8d" placeholder="Password" secureTextEntry={true}></TextInput>
                    </View>

                    <TouchableOpacity onPress={this._btnRegister.bind(this)} style={Styles.btn_login}>
                        <Text style={Styles.text_btn_login}>Sign Up</Text>
                    </TouchableOpacity>

                    <View style={{justifyContent:'center',flexDirection:'row'}}>
                        <Text style={Styles.text_login}>Have an account?</Text>
                        <Text onPress={()=>{this.props.navigation.goBack()}} style={[Styles.text_btn_login,{textDecorationLine:'underline'}]}>Login</Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
}