<template>
    <div>
        <button type="button" class="btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"
                id="prop-btn">
                اضافة صورة
            </button>
         <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">upload foto</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">

                    <img src="../../public/img/delete.png" class="icon-delete" id="delete-uploaded-foto"  @click="remove($event)">
                    <section class="drag-area"  @dragover="drag($event)" @dragleave="leave($event)"   @drop="drop($event)"  >
                        <img src="../../public/img/upload.png" class="upload-icon">
                        <header  v-if="!file">يمكنك سحب و الافلات لتحميل صورة</header>
                        <span></span>
                        <img   v-if="file"  alt="image"  id="img-added"  :src="fileUrl" >
                    </section>
                    <button id="choose-btn" @click="clickInput($event)">اختيار صورة</button>
                    <input type="file" id="input-file" @change="upload($event)" hidden>
                    <div class="upload"  v-if="file">
                        <button class="upload-btn" @click="addFoto($event)" >تحميل صورة</button>
                    </div>

                    
                </div>

            </div>
        </div>
    </div>

    </div>
</template>

<script>
   

   export default {
       name:"AddSlide",
        data(){
            return{
                file:null ,
                fileUrl:null
            }
        },
        computed:{
              
        },
        methods: {
               drag(event){
                   event.preventDefault() ;
                    
               },

               leave(event){
                      event.preventDefault()
               },

               drop(event){
                   event.preventDefault();
                   
                  
                  this.file = event.dataTransfer.files[0];
                   this.showFile();
                   
               },
               addFoto(event){
                   event.preventDefault();
              
               const data = new FormData()
               data.append('upload',this.file);
               this.$store.dispatch('addSlide',data).then(()=>{
                   this.$store.dispatch('slides').then(()=>{
                       if(this.$store.getters['success']){
                           window.alert(this.$store.getters['success'])
                       }
                       if(this.$store.getters["error"]){
                           window.alert(this.$store.getters["error"])
                       }
                   }) ;
                
               })
               
               },

            showFile() {
            let fileType = this.file.type; //getting selected file type
            let validExtensions = ["image/jpeg", "image/jpg",
                "image/png"
            ]; //adding some valid image extensions in array
            if (validExtensions.includes(fileType)) { //if user selected file is an image file
                let fileReader = new FileReader(); //creating new FileReader object
                fileReader.onload = () => {
                this.fileUrl = fileReader.result;
                   
                     //passing user file source in fileURL variable
                    // UNCOMMENT THIS BELOW LINE. I GOT AN ERROR WHILE UPLOADING THIS POST SO I COMMENTED IT
                    //adding that created img tag inside dropArea container

                }

                fileReader.readAsDataURL(this.file);

                

            } else {
                alert("This is not an Image File!");
               // dropArea.classList.remove("active");
                
            }

            
        },
        remove(event){
            event.preventDefault();
            this.file = null ;
            this.fileUrl = null ;
        },

        clickInput(event){
            event.preventDefault();
            const input = document.getElementById("input-file");
            input.click();

        },
        upload(event){
            this.file = event.target.files[0];
            
           this.showFile();
        }
        },

        mounted() {
            
        },
        
   }

</script>

<style scoped lang="scss">

.modal-body img.icon-delete {

            width: 20px;
            height: 20px;
            position: absolute;
            top: 5px;
            left: 5px;
            cursor: pointer;
            z-index: 1;
        }

section.drag-area {

            background-color: rgb(87, 85, 224);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 0 auto;

            cursor: pointer;
            width: 400px;
            height: 400px;
            margin: 0 auto;

            border: 2px dashed white;

            position: relative;



        }

        section.drag-area .upload-icon {
            transition: 1s linear;
            transform: translate(0px, -60px);

        }

        section.drag-area .upload-icon {

            width: 50px;
            height: 50px;
            margin: 0 auto;

        }

        section.drag-area header {

            font-size: 20px;
            font-weight: bold;
            color: #fff;
            text-transform: capitalize;

        }

        section.drag-area span {
            font: size 20px;
            font-weight: bold;
            color: #fff;
            margin-top: 5px;
        }



        div.upload {

            width: 100%;
            height: 100px;
            text-align: center;
            
            
        }
        @mixin button-style{
             
            width: 50%;
            height: 50px;
            border: none;
            border-radius: 3px;
            font-size: 20px;
            font-weight: bold;
            color: rgb(65, 66, 66);
            cursor: pointer;
            
            background-color: rgb(102, 99, 99);
        }

        
        #choose-btn{
            @include button-style ;
            
        }


        div.upload .upload-btn{
         
         @include button-style ;
         margin-top: 10px;
         background-color: rgb(86, 86, 235);
         
            
        }

        .drag-area #img-added {

            width: 100%;
            height: 100%;
            position: absolute;
            z-index: 1000000000;
        }


</style>
