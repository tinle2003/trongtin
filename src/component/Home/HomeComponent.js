import React,{Component} from 'react';
import {
    View,
    Image,
    Text,
    FlatList,
}from 'react-native';
import Styles from '../../style/Styles';
import { getManga } from '../../networking/manga_network';
import ItemFlastListHome from '../ListItem/ItemFlastListHome';
import HeaderHome from '../../header/HeaderHome';

export default class HomeComponent extends Component{
    
    static navigationOptions = {
        header:null,
        tabBarLabel:"Trang chủ",
        tabBarIcon:()=>(
            <Image source={require("../../image/home_icon.png")} style={Styles.icon_bottom}></Image>
        ),
    }

    constructor(props){
        super(props);
        this.state = {
            dataManga: [],
            isLoading: true,
        }
    }

    componentDidMount(){
        this._getAllManga();
    }

    _getAllManga =()=>{
        getManga().then((dataMangas)=>{
            this.setState({dataManga:this.state.dataManga.concat(dataMangas),isLoading:false});
        })
    }

    render(){
        return(
            <View style={{backgroundColor:'gray'}}>
                <HeaderHome title={"Trang chủ"} context={this.props.navigation}></HeaderHome>

                <FlatList
                    numColumns={3}
                    data={this.state.dataManga}
                    renderItem = {({item,index})=>{
                        return(
                        <ItemFlastListHome context={this} item={item} index={index} ></ItemFlastListHome>
                    
                    )}} 
                    keyExtractor={(item)=>item.id}
                    ></FlatList>

            </View>
        )
    }
}