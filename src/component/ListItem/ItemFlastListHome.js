import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions,
}from 'react-native';

import Styles from '../../style/Styles';

const {width,height} = Dimensions.get('window');

export default class ItemFlastListHome extends Component{
    // navigation = this.props.context.props.navigation;
    
    constructor(props){
        super(props);
        this.state={
            NameManga: this.props.item.name,
            cover: this.props.item.cover,
        }
    }

    _onpress = ()=>{
        this.props.context.props.navigation.navigate('Manga',{
            id:this.props.item.id,
            nameManga: this.props.item.name,
            cover:this.props.item.cover,
            chapter:this.props.item.last_chapter,
            authors:this.props.item.authors,
            genres:this.props.item.genres,
            description:this.props.item.description,
            slug:this.props.item.slug,
        });
    }

   _loadingCoverManga = ()=>{
        if(this.state.cover.includes("http://")||this.state.cover.includes("https://")){
            return {uri: this.state.cover};
        }else{
            return require('../../image/hot_icon.png');
        }
   } 
    render(){
        return(
            <TouchableOpacity onPress={this._onpress.bind()} style={[Styles.container_manga,{height:150,margin:5,padding:5}]}>
                <View style={[Styles.container_manga]}>
                    <Image resizeMode={'stretch'} source={this._loadingCoverManga()}  style={Styles.img_manga}></Image>
                    <Text style={Styles.name_manga} numberOfLines={1}>
                            {this.state.NameManga}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
}
