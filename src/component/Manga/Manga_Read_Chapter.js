import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,Dimensions
} from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';


import Styles from '../../style/Styles';
import { getChapterImage } from '../../networking/manga_network';

const {width,height} = Dimensions.get('window')
export default class Manga_Read_Chapter extends Component{
    constructor(props){
        super(props);
        const {params} = this.props.navigation.state;
        this.state ={
            idChapter:params.idChapter,
            Data:[],
            Content:[],
            contentImage: "",

        }
    }

    componentDidMount(){
        this._refreshDataFromServer();

    }
    _refreshDataFromServer = ()=>{
        getChapterImage(this.state.idChapter).then((Data)=>{

            this.setState({
                Data:this.state.Data.concat(Data),
                Content:this.state.Content.concat(Data[0].content.split("https://")),
                
            });
        })
    }

    
    _splitImage =()=>(
            
            this.state.Content.map((Content)=>{
            if(Content != ''){
                var imageLink = 'https://'+Content;
                return(
                    <ImageZoom
                    cropWidth={width-10}
                    cropHeight={height}
                    imageWidth={width-15}
                    imageHeight={height}
                    key={Content}>
                        <Image source={{uri:imageLink}} style={{flex:1,width:width-15,height:height,margin:5}} ></Image>
                    </ImageZoom>
                )}
            })
        )
    render(){
        return(
            <ScrollView style={Styles.container}>
                {this._splitImage()}
            </ScrollView>
        )
    }
}