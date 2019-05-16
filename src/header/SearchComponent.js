// import lib react
import React,{Component} from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableHighlight,
} from 'react-native';

import Styles from '../style/Styles';
import SearchBar from 'react-native-searchbar';
import { SearchMangas } from '../networking/manga_network';

export default class SearchComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[],
            
        }
    }


    _refreshDataSearchFromServer = (value)=>{
        if(value!==""){
            SearchMangas(value).then((DataSearch)=>{
                this.setState({data:DataSearch});
            })
        }
    }

    _loadDataSearch = ()=>{
            return(
                this.state.data.map((data)=>(
                    <TouchableHighlight 
                    key={data.id+"abc"}
                    onPress={()=>{this.props.navigation.navigate("Manga",{
                        id:data.id,
                        name:data.name,
                        cover:data.cover,
                        genres:data.genres,
                        description:data.description,
                        authors:data.authors,
                        genres:data.genres,
                        chapter:data.last_chapter,
                        slug:data.slug
                        })}}>
                        <View  style ={{borderBottomColor:'grey',borderBottomWidth:1,flexDirection:'row'}}>
                            <Image source={{uri:data.cover}} style={{width:60,height:60,margin:5}}></Image>
                            <View>
                                <Text style={{color:'white',textAlignVertical:'center',marginLeft:10}}>{data.name}</Text>
                                <Text style={{color:'white',textAlignVertical:'center',marginLeft:10}}>Chapter: {data.last_chapter}</Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                ))
            )
    }

    render(){
        return(
            <View style={Styles.container}>
                <View style={{height:65}}>
                    <SearchBar
                        data = {this.state.data}
                        ref={(ref) => this.searchBar = ref}
                        showOnLoad
                        onBack={()=>this.props.navigation.goBack()}
                        handleChangeText={(value)=>{this._refreshDataSearchFromServer(value)}}
                    />
                </View>
                <ScrollView>
                    {this._loadDataSearch()}

                </ScrollView>
            </View>
        )
    }
}