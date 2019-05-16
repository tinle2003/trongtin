import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
    TextInput
}from 'react-native';
import { Avatar } from 'react-native-elements';
import SingleCardView  from 'react-native-simple-card';
import Modal from 'react-native-modal';

// import class
import Styles from '../../style/Styles';
import { getUsername, deleteUsername, getToken } from '../../AsyncStorage/AsyncStorage';
import { Change_Password_Member } from '../../networking/register_network';
const {width,height} = Dimensions.get('window');


export default class Manga_Hot_Component extends Component{

    static navigationOptions = {
        tabBarLabel:"Tài khoản",
        tabBarIcon:()=>(
            <Image source={require("../../image/user_icon.png")} style={Styles.icon_bottom} />
        )
    }

    constructor(props){
        super(props);
        this.state = {
            username:"",
            token:"",
            visibleModal:false,
            oldPassword:'',
            NewPassword:'',
            ReNewPassword:''
        }
    }

    componentDidMount =()=>{
        this._getUsername();
        this._getToken();
    }

    _getUsername=()=>{
        getUsername().then((user)=>{
            this.setState({username:user});
        });
    }
    _getToken=()=>{
        getToken().then((tokens)=>{
            this.setState({token:tokens});
        });
    }

    _onShowModalChangePass = ()=>{
        this.setState({
            visibleModal: true
        })
    }

    _hideModal = ()=>{
        this.setState({
            visibleModal: false
        })
    }

    _logout = ()=>{
        deleteUsername().then(()=>{
            this.props.navigation.navigate("Login");
        })
        
    }

    _ChangePassword = ()=>{

        var {username,token,oldPassword,NewPassword,ReNewPassword} = this.state;
        Change_Password_Member(username,token,oldPassword,NewPassword,ReNewPassword).then((res)=>{
            if(res.status == 0){
                alert("Thay đổi mật khẩu thành công");
            }else if(res.status == 1){
                alert("Vui lòng kiểm tra thông tin");
            }else if(res.status == 2){
                alert("mật khẩu không trùng khớp");
            }else{
                alert("Vui lòng thử lại sau");
            }
        });
    }
    renderModalContent = () => (
        <View style={Styles.modalContent}>
            <View style={{width:width,alignItems:'center'}}>
                <Text style={{color:'rgba(223,53,57,0.8)',fontSize:22}}>Đổi mật khẩu</Text>
            </View>
          <TextInput
                    onChangeText={(value)=>{this.setState({oldPassword:value})}} 
                    placeholder={"Vui lòng nhập mật khẩu cũ"} 
                    secureTextEntry={true}/>

          <TextInput onChangeText={(value)=>{this.setState({NewPassword:value})}} 
                    placeholder={"Vui lòng nhập mật khẩu mới"} 
                    secureTextEntry={true}/>

          <TextInput onChangeText={(value)=>{this.setState({ReNewPassword:value})}} 
                    placeholder={"Vui lòng nhập lại mật khẩu mới"} 
                    secureTextEntry={true}/>
            
            <View style={{alignItems:'center',backgroundColor:'blue',width:width-width*20/100,padding:10,borderRadius:20}}>
            <TouchableOpacity style={{width:width-width*20/100,alignItems:'center'}} onPress={this._ChangePassword.bind(this)}>
                <Text style={{color:'white'}}>
                    Đổi mật khẩu
                </Text>
            </TouchableOpacity>
            </View>

        </View>
      );

    render(){
        const {container_user_background,container_avatar} = Styles;
        return(

            <View style={{flex:1,width:width,height:height,backgroundColor:'rgba(183,183,183,0.7)'}}>

                <Modal
                    isVisible={this.state.visibleModal}
                    onBackdropPress={this._hideModal}
                    onBackButtonPress={this._hideModal}
                    backdropColor={'rgba(60,0,25,0.9)'}
                    backdropOpacity={1}
                    animationIn="zoomInDown"
                    animationOut="zoomOutUp"
                    animationInTiming={1000}
                    animationOutTiming={1000}
                    backdropTransitionInTiming={1000}
                    backdropTransitionOutTiming={1000}>

                {this.renderModalContent()}

                </Modal>

                <ImageBackground 
                source={require('../../image/banner_account.jpg')} 
                resizeMode={'stretch'} 
                style={container_user_background}
                imageStyle={{opacity:0.6}}>
                    
                    <View style={container_avatar}>

                        <View style={{alignItems:'center'}}>
                            <Avatar
                                size={'medium'} 
                                rounded
                                source={require('../../image/user_icon.png')}></Avatar>
                        </View>
                            
                        <Text style={{color:'grey',fontWeight:'bold'}}>
                            Xin chào {this.state.username}
                        </Text>

                    </View>
                            
                </ImageBackground>


                <View>
                        <SingleCardView
                            shadowColor={"tomato"}
                            shadowOpacity={1}
                            backgroundColor={"tomato"}
                            marginTop={10}
                            elevation={2}
                            borderRadius={0}
                            height={height/15}
                            width={width}
                        >
                            <TouchableOpacity 
                            style={{alignItems: 'center',
                                borderRadius:10,
                                flexDirection:'row',
                                paddingLeft:10,}}
                            onPress={this._onShowModalChangePass.bind(this)}>
                                    <Image style={{width:24,height:height/15}} 
                                    source={require("../../image/ic_changepass.png")} />
                                    
                                    <Text style={{marginLeft:5,color:'white',fontWeight:'bold'}}>Đổi mật khẩu</Text>        
                            </TouchableOpacity>   
                        </SingleCardView>
                        
                        <SingleCardView
                            shadowColor={"tomato"}
                            shadowOpacity={1}
                            backgroundColor={"tomato"}
                            marginTop={50}
                            elevation={2}
                            borderRadius={0}
                            height={height/15}
                            width={width}
                        >
                            <TouchableOpacity 
                            style={{alignItems: 'center',
                                borderRadius:10,
                                flexDirection:'row',
                                paddingLeft:10,}}>
                                
                                <Image style={{width:24,height:height/14}} 
                                source={require("../../image/ic_changepass.png")}/>

                                <Text style={{marginLeft:5,color:'white',fontWeight:'bold'}}>Yêu thích</Text>        
                            </TouchableOpacity>   
                        </SingleCardView>

                        <SingleCardView
                            shadowColor={"tomato"}
                            shadowOpacity={1}
                            backgroundColor={"tomato"}
                            marginTop={90}
                            elevation={2}
                            borderRadius={0}
                            height={height/15}
                            width={width}
                        >
                            <TouchableOpacity 
                            style={{alignItems: 'center',
                                borderRadius:10,
                                flexDirection:'row',
                                paddingLeft:10,}}>
                                <Image style={{width:24,height:height/15}} 
                                    source={require("../../image/ic_launcher.png")} />
                                <Text style={{marginLeft:5,color:'white',fontWeight:'bold'}}>Yêu thích</Text>        
                            
                            </TouchableOpacity>   
                        </SingleCardView>
                            

                        <SingleCardView
                            shadowColor={"tomato"}
                            shadowOpacity={1}
                            marginTop={160}
                            elevation={2}
                            borderRadius={0}
                            height={35}
                            width={width-width*3/100}
                        >
                            <TouchableOpacity 
                            style={{alignItems: 'center',
                                borderRadius:10,
                                paddingLeft:10,
                                height:height/15,
                                backgroundColor:'blue'}}
                            onPress={this._logout.bind(this)}>
                                    <View style={{flexDirection:'row'}}>
                                    <Image 
                                        source={require("../../image/icon_logout.png")} 
                                        style={{width:35,
                                                height:height/15,
                                                marginLeft:-20}}></Image>
                                    <Text style={{
                                    color:'white',
                                    textAlignVertical:'center',
                                    fontSize:20
                                    }}>
                                        Đăng xuất
                                    </Text> 
                                    </View>
                                           
                            </TouchableOpacity>   
                        </SingleCardView>
                </View>

                
            </View>
        )
    }
}
