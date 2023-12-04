import mongoose from "mongoose" ;

const producktSchema = mongoose.Schema({
    imgUrl:String,
    location: String,
    area:Number,
    features:String ,
    contact :
String}) ;

export default mongoose.model("Produckt",producktSchema);
