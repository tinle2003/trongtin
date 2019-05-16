const global = require('../global/global');

async function _getLogin(username,password){
    apiLogin =global.website+"/login?username="+username+"&password="+password;
    try{
        let response = await fetch(apiLogin);
        let responseJson = await response.json();
        return responseJson;
    }catch(error){
        console.log(`error is: ${error}`);
        alert("kết nối tới server bị lỗi")
    }
}

export {_getLogin};