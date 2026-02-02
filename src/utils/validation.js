const validator = require('validator')
const validateSignUpData =(data)=>{
    const { firstName, lastName, emailId, password, gender, age, skills } = data;
    if (!firstName || !lastName ) {
        throw new Error("Name is not valid"); 
    }
    if(!emailId || !validator.isEmail(emailId)){
        throw new Error("Email is not Valid")
    }
    if(!password || !validator.isStrongPassword(password)){
        throw new Error("please enter a strong password")
    }

}
module.exports = {validateSignUpData}