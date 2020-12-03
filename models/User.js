const mongoose = require("mongoose")
const schema = mongoose.Schema

const userSchema = new schema({
    firstName : {
        type:String,
        required:true
    },
    lastName : {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    phone:String,
    age:String,
    adress:String
})

module.exports=User = mongoose.model("user",userSchema)