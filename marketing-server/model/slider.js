import mongoose from "mongoose" ;


const slidSchema = mongoose.Schema({
       slideUrl:String
}) ;


 export default  mongoose.model('Slide',slidSchema) ;