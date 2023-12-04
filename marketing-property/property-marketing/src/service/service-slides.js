import axios from "axios";
 const basicUrl ="http://localhost:3000/sliders"

 class Service{

   async getAllslides(){
      
     return   axios.get(`${basicUrl}`).then(res=>{
         return res.data
     })
    }

    async addSlide(dataform){
      const res= await  axios.post(`${basicUrl}`,{
          upload:dataform.get("upload")
      },{
          headers:{
            //  authorization:"Basic eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im9yd2ExOTg4IiwicGFzc3dvcmQiOiIxMTIzNTgxMyIsImlhdCI6MTY1MjAwNzU5N30.aEsJHKRNehMcF0qurrgRgFbJPQ_u2u7yqNr0fdT12HU11",
              "Content-Type" :"multipart/form-data"
          }
      }).catch(err=>{
          return err.response ;
      })

      return res.data
    }

    deleteSlide(id){
        axios.delete(`${basicUrl}/${id}`,{
            headers:{
               // authorization:"Basic eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im9yd2ExOTg4IiwicGFzc3dvcmQiOiIxMTIzNTgxMyIsImlhdCI6MTY1MjAwNzU5N30.aEsJHKRNehMcF0qurrgRgFbJPQ_u2u7yqNr0fdT12HU"
            }
        })
    }



 }

 const service = new Service()
 export default service

