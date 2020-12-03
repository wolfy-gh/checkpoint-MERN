const mongoose= require("mongoose")

const connect_db = async()=>{
    try {
        await mongoose.connect(process.env.URI_DB,{ useNewUrlParser: true ,useUnifiedTopology: true })
        console.log("connected to database")
    } catch (error) {
        console.log(`there is an error connecting to database ${error}`)
    }
}

module.exports= connect_db