import mongoose from "mongoose";

const uri = "mongodb+srv://"+ process.env.MONGO_ATLAS_USERNAME + ":" + process.env.MONGO_ATLAS_PASSWORD + "@cluster0.pslrb.mongodb.net/myFirstDatabase"
mongoose.connect(uri,{
})
.then(db => console.log("DB is connected"))
.catch(error => console.log(error))

