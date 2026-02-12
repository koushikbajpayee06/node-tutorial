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
const validateProfileEditData = (req)=>{
    const allowedEditFields = [
        "firstName",
        "lastName",
        "photoUrl",
        "gender",
        "age",
        "about",
        "skills"
    ];
    const isEditAllowed = Object.keys(req.body).every((field)=>
        allowedEditFields.includes(field)
    );
    return isEditAllowed

}
module.exports = {validateSignUpData,validateProfileEditData}