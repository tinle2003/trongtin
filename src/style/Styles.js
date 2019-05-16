import {StyleSheet,Dimensions} from 'react-native';

const {width,height} = Dimensions.get('window');

const Styles = StyleSheet.create({
    icon_bottom:{
        width:22,
        height:22,
        tintColor:'gray',
    },container:{
        flex: 1,
        flexDirection: 'column',
        width:width,
        height:height,
        backgroundColor:'#142b36',
    },
    container_image:{
        width:width,
        height:180,
    },container_manga:{
        width:width/4,
        flexDirection: 'column',
        flex:1,
        backgroundColor: 'white',
    },
    text_login:{
        fontSize:18,
        color:'#284e53',
    },
    input_login:{
        color:'#638f8d',
        fontSize:16
    },
    btn_login:{
        margin: 10,
        padding: 10,
        backgroundColor:'#39c0e7',
    },
    text_btn_login:{
        color:'white',
        textAlign:'center',
        fontSize:18,
    },
    name_manga:{
        backgroundColor:'#0D1E1E1E',
        fontSize:14,
        fontWeight:'bold',
        textAlign:'center',
        position:'absolute',
        bottom:0,
        width:width/3.3,
        left:-4,
    },
    img_manga:{
        height:120,
        width:width/3.6
    },
    container_user_background:{
        width:width,
        height:130,
        alignItems:'center',
    },
    container_avatar:{
        flex:3,
        alignSelf:'center',
        marginTop:45,
    },
    text_user:{
        width:width,
        height:100,
        textAlignVertical:'bottom'
    },
    modalContent: {
        
        backgroundColor: "white",
        padding: 25,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        borderColor: "rgba(0, 0, 0, 0.1)",
      },
})

export default Styles;