import multer from 'multer' ;



const storage = multer.diskStorage({
   destination: function (req, file, cb) {
     if(req.type ==="produckt"){
      cb(null, './uploads/produckts')
     }
     else{
      cb(null, './uploads/slides')
     }
     
   },
   filename: function (req, file, cb) {
     const uniqueSuffix = Date.now() ;
     const str = file.originalname.split('.') ;
     const   extention =str[str.length-1];
     const filename = uniqueSuffix+"."+extention 
     cb(null, filename )
     file.fullname = filename ;
     
   }
 }) ;


const upload = multer({ storage: storage,
   fileFilter :(req,file,cd)=>{
         
       const str = file.originalname.split('.') ;
         const   extention =str[str.length-1]; 
          
         
       if( ( extention == 'png' || extention=='jpg' || extention=='jpeg')  ){
           
           cd(null,true) ;
           req.file = file ;
           req.fileAcceptable = true
       }
       else{
       
             cd(null,false);
             req.file= file;
             req.fileAcceptable= false
             
       }
   } ,
   
}) ;

  export default upload ;

   
//   app.post('/',upload.array('upload',2),(req,res)=>{
//   console.log(req.files) ;
//  // console.log(req.omar);
//    res.status(200).json({message: 'alles in ordnung !!'})
// })
