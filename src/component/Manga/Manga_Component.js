import React,{Component} from 'react';

import {createMaterialTopTabNavigator,createAppContainer,NavigationActions} from 'react-navigation';
import Manga_Info from './Manga_Info';
import Manga_Chapter from './Manga_Chapter';
import Toolbar from '../../header/Toolbar';

const Manga_navigation_Top = createAppContainer(createMaterialTopTabNavigator({
    MangaInfo:{
        screen: Manga_Info
    },
    MangaChapter:{
        screen: Manga_Chapter,
    }
},{
    swipeEnabled:true,
    tabBarPosition:'top',
    tabBarOptions:{
        tabStyle:{
            backgroundColor:'#6b52ae'
        },
    },
}
));



Manga_navigation_Top.navigationOptions= {
    header:(props)=>{
    return(
        <Toolbar leftIconName={"back"} functionIconLeft={()=>{props.navigation.navigate("App")}}></Toolbar>
    )
}
}

export default Manga_navigation_Top;

