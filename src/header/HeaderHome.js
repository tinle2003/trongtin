// import lib react
import React,{Component} from 'react';
import {
    View,
    Text,

} from 'react-native';
// import component
import ActionBar from 'react-native-action-bar';
import { SearchMangas } from '../networking/manga_network';


export default class HeaderHome extends Component{
    constructor(props){
        super(props);
        this.state = {
            dataSearch: [],
            nameMangas:"",
        }
    }


    render(){
        return(

            <View>
                <ActionBar  
                    title={this.props.title}
                    rightIcons={[
                        {
                            image:require('../image/search_icon.png'),
                            onPress:()=>this.props.context.navigate("SearchManga")
                        }
                    ]}
                />
            </View>
        )
    }
}
