const global = require('../global/global');

async function register_member(username,password,email){
    apiRegister = global.website + "/register?username="+username+"&password="+password+"&email="+email;
    try{
        let respone = await fetch(apiRegister);
        let ResponsiveJson = await respone.json();
        return ResponsiveJson;
    }catch(err){
        console.log(err);
    }
}

async function Change_Password_Member(username,token,oldPassword,NewPassword,ReNewpassword){
    apiRegister = global.website + "/changepass?username="+username+"&token="+token+"&oldpass="+oldPassword+"&newpass="+NewPassword+"&renewpass="+ReNewpassword;
    try{
        let respone = await fetch(apiRegister);
        let ResponsiveJson = await respone.json();

        return ResponsiveJson;
    }catch(err){
        console.log(err);
    }
}

export {register_member,Change_Password_Member};