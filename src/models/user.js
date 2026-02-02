const mongoose =require('mongoose');
const { Schema } = mongoose;
const validator = require("validator")

const userSchema = new Schema({
    firstName:{
        type:String,
        required:true,
        minLength:4,
        maxLength:50
    },
    lastName:{
        type:String,
    },
    emailId:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email Address" + value);
            }
        }    },
    password:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isStrongPassword(value)){
                throw new Error("Enter a strong password"+ value);
            }
        }
    },
    age:{
        type:Number,
        min:18,
    },
    gender:{
        type:String,
        validate(value){
            if(!["male","female","others"].includes(value)){
                throw new Error("Gender data is not valid");
            }
        }
    },
    photoUrl:{
        type:String,
        default:"https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png",
        validate(value){
            if(!validator.isURL(value)){
                throw new Error("Invalid photo Url")
            }
        }
    },
    about:{
        type:String,
        default:"This is a default about of the user"
    },
    skills:{
        type:[String]
    }
},{
    timestamps:true
})

const User = mongoose.model("User",userSchema);
module.exports = User;