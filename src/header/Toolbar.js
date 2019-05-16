// import lib react
import React,{Component} from 'react';
import {
    View,
    Text,

} from 'react-native';
// import component
import ActionBar from 'react-native-action-bar';

export default class Toolbar extends Component{
    render(){
        return(
            <View>
                <ActionBar
                backgroundColor='blue'
                title={this.props.Title}
                leftIconName={this.props.leftIconName}
                onLeftPress={this.props.functionIconLeft}
                ></ActionBar>
            </View>
        )
    }
}