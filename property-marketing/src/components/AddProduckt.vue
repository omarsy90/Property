<template>
    <div>
        <button type="button" class="btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal_produckt"
            id="prop-btn">
            اضافة عرض
        </button>
        <div class="modal fade" id="exampleModal_produckt" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">

                        <h5 class="modal-title" id="exampleModalLabel">new Produckt</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">


                        <div class="input-group mb-3">
                            <div class="input-group-text">
                                <input class="form-check-input mt-0" type="checkbox" value=""
                                    aria-label="Checkbox for following text input">
                            </div>
                            <input type="text" class="form-control" aria-label="Text input with checkbox"
                                placeholder="عنوان" v-model="location">
                        </div>

                        <div class="input-group">
                            <div class="input-group-text">
                                <input class="form-check-input mt-0" type="radio" value=""
                                    aria-label="Radio button for following text input">
                            </div>
                            <input type="number" class="form-control" aria-label="Text input with radio button"
                                placeholder="مساحة m2" v-model="area">
                        </div>
                        <br>
                        <div class="input-group">
                            <div class="input-group-text">
                                <input class="form-check-input mt-0" type="radio" value=""
                                    aria-label="Radio button for following text input">
                            </div>
                            <input type="text" class="form-control" aria-label="Text input with radio button"
                                placeholder="مزايا" maxlength="50" v-model="features">
                        </div>
                        <br>

                        <img src="../../public/img/delete.png" class="icon-delete" id="delete-uploaded-foto"
                            @click="remove($event)">
                        <section class="drag-area" @dragover="drag($event)" @dragleave="leave($event)"
                            @drop="drop($event)">
                            <img src="../../public/img/upload.png" class="upload-icon">
                            <header v-if="!file">يمكنك سحب و الافلات لتحميل صورة</header>
                            <span></span>
                            <img v-if="file" alt="image" id="img-added" :src="fileUrl">
                        </section>
                        <button id="choose-btn" @click="clickInput($event)">اختيار صورة</button>
                        <input type="file" id="input-file_produckt" @change="upload($event)"  hidden>
                        <div class="upload" v-if="file && location && area && features">
                            <button class="upload-btn" @click="addProduckt($event)">اضافة عرض</button>
                        </div>


                    </div>

                </div>
            </div>
        </div>

    </div>
</template>


<script>
    export default {

        data() {
            return {
                file: null,
                fileUrl: "" ,
                location :"",
                area:"",
                features:"",
                
            }
        },
        methods: {
            drag(event) {
                event.preventDefault();

            },

            leave(event) {
                event.preventDefault()
            },

            drop(event) {
                event.preventDefault();


                this.file = event.dataTransfer.files[0];
                this.showFile();

            },
            addProduckt(event) {
                 event.preventDefault();
                 

                const data = new FormData()
                data.append('upload', this.file);
                data.append('location',this.location) ;
                data.append("area",this.area) ;
                data.append('features',this.features) ;
                data.append('contact',"0034568938");
                this.$store.dispatch('addProduckt', data).then(() => {
                   if(this.$store.getters["success"]){
                       window.alert(this.$store.getters["success"]) ;
                       window.location.reload()
                   }else{
                       window.alert(this.$store.getters["error"]);
                   }

                })

            },

            showFile() {
                let fileType = this.file?.type; //getting selected file type
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
                    this.file =""
                    // dropArea.classList.remove("active");

                }


            },
            remove(event) {
                event.preventDefault();
                this.file = null;
                this.fileUrl = null;
            },

            clickInput(event) {
                event.preventDefault();
                const input = document.getElementById("input-file_produckt");
                input.click();

            },
            upload(event) {
                this.file = event.target.files[0];
                console.log(this.file)
                if(this.file){
                 this.showFile();
                }
                
            }
        },



    }
</script>

<style scoped lang="scss">
    .modal-body img.icon-delete {

        width: 20px;
        height: 20px;
        position: absolute;
        top: 190px;
        left: 15px;
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

    @mixin button-style {
      
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

    #choose-btn {
        @include button-style ;
        
    }

   

    div.upload .upload-btn {

        @include button-style ;
        margin-top: 10px;
        background-color: rgb(106, 106, 219);
    }

    .drag-area #img-added {

        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 1000000000;
    }
</style>