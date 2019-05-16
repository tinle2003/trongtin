/** @format */
// import lib react
import React,{Component} from 'react';
import {
    AppRegistry,
    View,
} from 'react-native';
import {createStackNavigator,createAppContainer,createSwitchNavigator} from 'react-navigation';

// import component
import LoginComponent from './src/component/Login_Register/LoginComponent';
import Styles from './src/style/Styles';
import RegisterComponent from './src/component/Login_Register/RegisterComponent';
import BottomNavigation from './src/component/Home/Bottom_App';
import Manga_Read_Chapter from './src/component/Manga/Manga_Read_Chapter';
import SearchComponent from './src/header/SearchComponent';
import Manga_navigation_Top from './src/component/Manga/Manga_Component';
import Toolbar from './src/header/Toolbar';
import HeaderHome from './src/header/HeaderHome';
// screen Login to Home
const App = createSwitchNavigator({
    //createSwitchNavigator will not store your old screen in stack like createStackNavigator
    //So all the screen that comes in createSwitchNavigator will appear once in a whole session
      Login: { 
        screen: LoginComponent,
    },
      Home: { 
        screen: BottomNavigation,
        
    },
    },{
        initialRouteName:'Login',
    });

// between screen
const RootStack = createStackNavigator({
    App:{
        screen:App,
        navigationOptions:{
            header:null,
        }
    },
    Register: {
        screen: RegisterComponent,
        navigationOptions:{
            header:null,
        }
    },
    Manga:{
        screen:Manga_navigation_Top,
    },
    ReadManga:{
        screen:Manga_Read_Chapter,
        navigationOptions:{
            header:null,
        }
    },
    SearchManga:{
        screen:SearchComponent,
        navigationOptions:{
            header:null
        }
    },

},
    {
      initialRouteName: 'App',
    }
  );

  
  

const AppContainer = createAppContainer(RootStack);

export default class index extends Component{
    
    render(){
        return(
            <View style={Styles.container}>
                <AppContainer />
            </View>
        )
    }
}

AppRegistry.registerComponent('asm_fpoly_1', () => index);
