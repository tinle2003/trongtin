import {AsyncStorage} from 'react-native';


async function setUser_Token(username,token){
    try{
        await AsyncStorage.setItem("username",username);
        await AsyncStorage.setItem("token",token);
    }catch(err){
        alert(err);
    };
}

async function getToken(){
    try{
        const value = AsyncStorage.getItem("token");
        return value;
        
    }catch(err){
        alert(err);
    }
}

async function getUsername(){
    try{
        const value = AsyncStorage.getItem("username");
        return value;
    }catch(err){
        alert(err);
    }
}

async function deleteUsername(){
    try{
        const username = AsyncStorage.getItem("username");
        const token = AsyncStorage.getItem("token");

        if(username != null&& token != null){
            AsyncStorage.removeItem("username","");
            AsyncStorage.removeItem("token","");
        }
    }catch(err){
        alert(err);
    }
}

export {setUser_Token,getToken,getUsername,deleteUsername};