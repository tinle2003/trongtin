import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    Dimensions,
    ScrollView
} from 'react-native';

import Styles from '../../style/Styles';

const {width,height} = Dimensions.get('window');
export default class Manga_Info extends Component{
    static navigationOptions ={
        tabBarLabel:"Thông tin"
    }
    constructor(props){
        super(props);
        
        const {params} = this.props.navigation.state;

        this.state= {
            name:params.nameManga,
            id:params.id,
            cover:params.cover,
            genres:params.genres,
            description:params.description,
            chapter:params.chapter,
            authors:params.authors,
            genres:params.genres,

        }
    }
    render(){

        return(
            <ScrollView style={Styles.container}>
                {/* View dọc */}
                <View style={{width:width,height:200,margin:10,padding:5,flexDirection:'row'}}>
                    <Image resizeMode={'stretch'} source={{uri:this.state.cover}} style={{width:width/4,height:150}}></Image>
                    <View style={{width:width-width/3.5,marginLeft:10,flexDirection:'column'}}>
                        <Text style={{color:"white",fontWeight:'bold',fontSize:18}}>
                            Tên Truyện: {this.state.name}
                        </Text>
                        <Text style={{color:'white'}}>
                            Chapter: {this.state.chapter}
                        </Text>
                        <Text style={{color:'white'}}>
                            Tác giả: {this.state.authors}
                        </Text>
                        <Text style={{color:'white'}}>
                            Thể loại: {this.state.genres}
                        </Text>
                    </View>
                </View>

                {/* View  nội dung*/}
                <View>
                    <Text style={{fontSize:24,color:'#6b52ae',fontWeight:'bold'}}>Thông tin truyện</Text>
                    <Text style={{color:'white'}}>
                        {this.state.description}
                    </Text>
                </View>
            </ScrollView>
        )
    }
}