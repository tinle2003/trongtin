import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    FlatList,
} from 'react-native';

import Styles from '../../style/Styles';
import { getChapter } from '../../networking/manga_network';

export default class Manga_Chapter extends Component{
    static navigationOptions ={
        tabBarLabel:"Chapter" 
    }

    constructor(props){
        super(props);
        const {params} = this.props.navigation.state;
        this.state ={
            manga:params.slug,
            Chapter:[],

            
        }
    }

    componentDidMount(){
        this._refreshChapterFromServer();

    }
    _refreshChapterFromServer = ()=>{
        getChapter(this.state.manga).then((Chapter)=>{
            this.setState({Chapter:this.state.Chapter.concat(Chapter)});
        })
    }

    // _listChapter = ()=>(
    //     this.state.Chapter.map((Chapter)=>
    //     <Text key={Chapter.id}>Chapter {Chapter.chapter}</Text>
    //     )
    // )

    // _btn_Read_Chapter=()=>{
    //     this.props.navigation.navigate('ReadManga',{
    //         idChapter:this.state.idChapter,
    //     })
    // }
    render(){
        return(
            <View style={Styles.container}> 
                <FlatList
                data={this.state.Chapter}
                renderItem = {({item,index})=>{
                    return(
                    <ItemFlastList context={this} item={item} index={index} ></ItemFlastList>
                )}} 
                keyExtractor={(item,index)=>index.toString()}
                ></FlatList>
            </View>
        )
    }
}

class ItemFlastList extends Component{
    constructor(props){
        super(props);
    }
    _btnReadChapter = ()=>{
        this.props.context.props.navigation.navigate('ReadManga',{
            idChapter:this.props.item.id,
        })

    }
    render(){
        return(
            <Text style={{color:'white',fontSize:20,padding:10,borderWidth:1,borderColor:'gray',fontWeight:'bold'}} onPress={this._btnReadChapter.bind()}>
                Chapter {this.props.item.chapter}
            </Text>
        )
    }
}