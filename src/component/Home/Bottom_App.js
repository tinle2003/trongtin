import {createBottomTabNavigator,createAppContainer} from 'react-navigation';

// import class
import HomeComponent from './HomeComponent';
import Manga_Hot_Component from './AccountComponent';



const BottomNavigation = createAppContainer(createBottomTabNavigator({
    TrangChu:{
        screen:HomeComponent,
    },
    MangaHot:{
        screen:Manga_Hot_Component,
    }
},{
    initialRouteName:'TrangChu',
    tabBarOptions:{
        activeTintColor:'tomato',
        inactiveTintColor:'gray',
        activeBackgroundColor:'white',
        showIcon:true,
        labelStyle:{
            fontWeight:'bold'
        },
    },
}));


export default BottomNavigation;