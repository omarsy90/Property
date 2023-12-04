console.log('hallow world !!') ;
import express from "express" ;
import mongoose from "mongoose";
import cors from "cors"


import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);

// 👇️ "/home/john/Desktop/javascript"
const dirname = path.dirname(__filename);




const app = express();
 const PORT  = 3000;

// middleware  (use it!)------------------------------------
app.use(cors())
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());


app.get('/uploads/slides/:name', function (req, res) {
    
    res.sendFile(dirname+"/uploads/slides/"+req.params.name);
})


app.get('/uploads/produckts/:name',(req,res)=>{

    res.sendFile(dirname+"/uploads/produckts/"+req.params.name);

})

 import producktsRouter  from "./routes/products.js" ;
 import slidersRouter from "./routes/sliders.js";

 import jwt from "jsonwebtoken";
 import {jwt_secret} from "./secret-key.js"



 app.get('/',(req,res)=>{
     res.send('hallow world !!')
 }) ;


 


   mongoose.connect('mongodb://localhost/marketing_db',(err)=>{
     
   if(err){
       console.log(err)
   }

    console.log('connected to DB')

   }) ;


   const credential = {
    username:"orwa1988" ,
    password:"11235813"
}

 app.post('/login',(req,res)=>{
            
    
console.log(req.body.username);
console.log(req.body.password)
    if( !!!(req.body?.username && req.body?.password) ){
              
                   res.status(400).json({
                       msg:"username or password is empty"
                   })
    }
    else if(req.body.username === credential.username && req.body.password === credential.password){
        
      let token =  jwt.sign({
            username:req.body.username ,
            password: req.body.password
        },jwt_secret) ;

        res.status(200).json({token}) ;

    }else{
        
        
        res.status(400).json({msg:"username or password is wrong"}) ;

    }

 })

 app.use("/sliders",slidersRouter) ;
 app.use("/produckts",producktsRouter);

 

app.listen(PORT,()=>{
    console.log(`server is running in port ${PORT} ...`)
})

