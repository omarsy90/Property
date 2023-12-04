import Vue from "vue";
import Vuex from "vuex";

import serviceSlide from "../service/service-slides" ;
import serviceProduckt from "../service/service-produckt.js";

import authen from "../service/authentication.js";
console.log(serviceSlide)

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    slides:[],
    produckts:[],
    error:"",
    success:"",
    process: false
    
  },
  mutations: {
    slides(state,slides){
      state.slides = slides
    },

    produckts(state,produckts){
         state.produckts = produckts
    },
    error(state,error){
      state.error=error
    },
    success(state,msg){
      state.success=msg
    },
    process(state,isProcess){
      state.process=isProcess
    }
  },
  actions: {
    async slides(context){
      context.commit("process",true)
     const sildesArray =  await serviceSlide.getAllslides().then(
       data=>{return  data.slides}) ;
       context.commit('slides',sildesArray) ;
       context.commit("process",false)
    },

   async addSlide(context,payload){
     context.commit("process",true)
      const response= await serviceSlide.addSlide(payload);
      console.log("response in store is :",response)
      if(response.slide){
        context.commit("success","foto has been already uploaded")
        context.commit("error","")
      }else{
        context.commit("error",response.error.message);
        context.commit("success","");
      }

      context.commit("process",false);
    },

      async  deleteSlide(context,id){
           context.commit("process",true) ;
           await serviceSlide.deleteSlide(id) ;
            await context.dispatch("slides")
           context.commit("process",false);

        },
          
    async produckts(context){
      context.commit("process",true) ;
       const response = await serviceProduckt.getProcuckts();
       if(response?.ok ===true){
           context.commit("produckts",response.produckts) ;
       }
       context.commit("process",false) ;
     },

     async addProduckt(context,dataForm){
        context.commit("process",true)
       const res = await  serviceProduckt.addProduckt(dataForm)
           if(res?.ok === true){
               context.commit("success", "produckt has been uploaded");
               context.commit("error","");
           }else{
                context.commit("error",res.message);
                context.commit("success","");
           }

         
         context.commit("process",false) ;
      },

     async deleteProduckt(context,id){
        context.commit("process",true);
       const response = await serviceProduckt.deleteProduckt(id)
          console.log("respond from server is : ",response)
          if(response?.ok === true){
            context.commit("success"," the produckt has been deleted") ;
            context.commit("error","")
          }else{
            context.commit("error",response.message);
            context.commit("success","");
          }
       
      },

      async login(context,dataForm){
        context.commit("process",true) ;
        console.log("password is :",dataForm.get("password"))
        const response = await authen.login(dataForm.get("username"),dataForm.get("password"))
          if(response.status !==200){
            context.commit("error",response.data.msg)
          }
          context.commit("process",false);
          return response
      }
    
  },
  getters:{
       slides(state){
         return state.slides ;
       },
       error(state){
         return state.error ;
       },
       success(state){
         return state.success ;
       },
       process(state){
         return state.process ;
       },
       produckts(state){
         return state.produckts ;
       }
  },
  modules: {},
});
