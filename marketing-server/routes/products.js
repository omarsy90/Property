import express from "express"
import fs from "fs"
import upload from "../uploadphto.js"
const router = express.Router();

import qs from "qs"






router.use((req, res, next) => {
    req.type = "produckt";
    next();
})


import authenticated from "../authorization.js";

import Produckt from "../model/produckts.js"





router.get("/", (req, res) => {

    Produckt.find({}, "", (error, result) => {
        if (result) {
            return res.status(200).json({
                ok: true,
                produckts: result.reverse()
            })
        }
    })
})


const validation = (req, res, next) => {
             
            const data = qs.parse(req.headers.data) ;
            console.log(data)
           
    if (!(data.location && data.area && data.features && data.contact)) {

        return res.status(400).json({
            ok: false,
            message: "one or more of the information given is not filled"
        })
    }


    if (isNaN(data.area)) {
        return res.status(400).json({
            ok: false,
            message: "the area feld muss be number"
        })
    }

    next()
}


router.post("/", authenticated

    , validation, upload.array("upload", 1), (req, res) => {

        if (!req.file) {
            return res.status(400).json({
                ok: false,
                message: "foto muss not be epmty "
            });

        } else if (!req.fileAcceptable) {

            return res.status(400).json({
                ok: false,
                message: "the extention of file muss be only png , jpg, jpeg"
            })
        }

             const data = qs.parse( req.headers.data ) ;
            const produckt = new Produckt({
            imgUrl: "./uploads/produckts/" + req.files[0].fullname,
            location: data.location,
            area: data.area,
            features: data.features,
            contact: data.contact,

        });

        produckt.save((error, result) => {

            if (result) {
                res.status(201).json({
                    ok:true,
                    produckt
                })
            }

        })
    });



    const checkIdproduckt = (req, res, next) => {
        if (!req.params.id) {
            return res.status(400).json({
                ok: false,
                message: "the Id parameter is null"
            })
        }
    
        Produckt.find({
            _id: req.params.id
        }, "", (error, result) => {
            if ( result?.length<1 || error) {
                return res.status(400).json({
                    ok: false,
                    message: "the produckt with id given is not exist"
                });
    
            }
            else{
                next()
            }
    
           
        })
    }



router.delete("/:id", authenticated,checkIdproduckt ,(req, res) => {
    
     Produckt.find({_id: req.params.id},"",(err,result)=>{
         if(result?.length <1 || err){
             return res.status(400).json({
                 ok:false,
                 message:"the prodeuct with id given is not exist"
             })
         }

         if(result?.length >0){
             try{
                fs.unlinkSync(result[0].imgUrl)
             }catch(err){
             console.log(err)
             }
             
         }
     })
    Produckt.deleteOne({_id:req.params.id},(err,result)=>{
        if(err){
            return req.status(400).json({
                ok:false,
                message:"the produckt with id given is not exist"
            })
        }

        if(result){

            return res.status(200).json({
                ok:true,
                message:"produckt has been deleted"
            })
        }
    })

  
});



router.put("/:id", authenticated, checkIdproduckt,validation ,upload.array("upload", 1), (req, res) => {

    if (!req.file) {
        return res.status(400).json({
            ok: false,
            message: "foto muss not be epmty "
        });

    } else if (!req.fileAcceptable) {

        return res.status(400).json({
            ok: false,
            message: "the extention of file muss be only png , jpg, jpeg"
        })
    }

    // remove foto
    Produckt.find({
        _id: req.params.id
    }, "", (err, result) => {
        if (err) {
            return req.status(400).json({
                ok: false,
                message: " the produckt is not exist"
            });
        }

        if (result?.length > 0) {
            fs.unlinkSync(result[0].imgUrl);
        }
    })

    const updateProdukct = {
        imgUrl: "./uploads/produckts/" + req.file.fullname,
        location: req.headers.location,
        area: req.headers.area,
        features: req.headers.feature,
        contact: req.headers.Produckt
    }

    Produckt.updateOne({
        _id: req.params.id
    }, {
        $set: updateProdukct
    }, (error, result) => {
        if (result?.matchedCount > 0) {
            return res.status(200).json({
                ok: true,
                message: "the produckt has been updated"
            })
        }
    })
});


router.post("/deleteall",(req,res)=>{
   Produckt.deleteMany({},(err,result)=>{
       res.status(200).json({
           ok:true,
           result
       })
   })

});


export default router;