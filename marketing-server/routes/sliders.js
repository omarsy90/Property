import express, {
    json
} from "express";

import fs, { appendFile } from "fs"
const router = express.Router();
import upload from "../uploadphto.js";
import authenticated from "../authorization.js";
import Slide from '../model/slider.js';



router.get("/", (req, res) => {
    Slide.find({}, '_id slideUrl', (error, result) => {

        if (error) {
            console.log("error while getting all slides :", error);
            res.status(500).json({
                error
            });
            return
        }
        res.status(200).json({
            slides: result.reverse()
        })

    })

})

router.post("/", authenticated, upload.array("upload",1),(req, res) => {
         console.log(req.body)
    if (!!!req.file) {
        res.status(400).json({
            error: {
                ok:false,
                message: "you muss send foto"
            }
        });

        return
    }

    if(req.file && req.fileAcceptable ===false){
        return res.status(400).json({
            ok:false ,
            message: "file muss have only one of these extenation  png , jpg , jpeg"
        })
    }

    const slide = new Slide({
        slideUrl: "./uploads/slides/"+req.file.fullname
    });
    slide.save((error, result) => {
        if (error) {
            console.log('error while inserting slide in db : ', error);
            res.status(500).json({
                error
            })
            return
        }

        res.status(201).json({
            slide
        });
    })


});

router.delete('/:id', authenticated, (req, res) => {
       
   const  id = req.params.id ;

      Slide.find({_id: id},"",(error,result)=>{
          if(result?.length <1 || error){
             
           return    res.status(400).json({ok:false , message:"id given is not exist"}) ;
               
          }
            
          if(result?.length >0){
              
            Slide.deleteOne({_id:id},(error,result)=>{
                  
                return res.status(200).json({ok:true,message:"the slide with given id is deleted "});
            }) ;
            fs.unlinkSync(result[0].slideUrl);
          }

          
      })

   

});
  const checkId = (req,res,next)=>{
    
    Slide.find({_id : req.params.id},"",(error,result)=>{
         if(result?.length <1 ||error){
             
             req.notSaved = true ;
            
         } ;
         
         if(result?.length>0){
            req.oldFotoDirectory = result[0].slideUrl
         }
         
         next()
        
    }) ;

    
}

router.put("/:id", authenticated,checkId,upload.array('upload',1), (req, res,next) => {

  
    

    if (!!!req.file) {
        return res.status(400).json({
            error: {
                ok:false ,
                message: "alternative foto muss not be empty and nuss be on of extention png,jpg,jpeg "
            }
        });
    }

    
    const updateSlide = {
        slideUrl: "./uploads/slides/"+req.file.fullname
    }
    const id = req.params.id
    

    Slide.updateOne({
        _id: id
    }, {
        $set: updateSlide
    }, (error, result) => {
        
        if (result?.matchedCount < 1  || error) {
           
             
            
            return res.status(404).json({
                error: {
                    message: "the slide with id sent not existed"
                }
            });
        }
        
        if(result?.matchedCount >0 ){
            
            fs.unlinkSync(req.oldFotoDirectory+"")

            res.status(200).json({
                slide: updateSlide
            })
        }
       
    })
});



 
router.post("/deleteallslides",(req,res)=>{

    Slide.deleteMany({},(error,result)=>{
        if(error){
            console.log('error while deleting')
        }
        if(result){
            console.log('all thing is ok ')
        }
    })
})

export default router;