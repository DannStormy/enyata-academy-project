<template>
    
    <div class="wrapper">
        <AdminSideMenu />
        <div class="container">
            <div class="header">
                <div class="assessment">
                    <h1 class="title">Compose Assessment</h1>
                </div>
                <TimeBarAdmin/>
            </div>
            <div class="main">
                <div class="assessment-1">
                    <p>{{questionIndex}}/30</p>
                    <div class="choose_file" :class="{'no-img': !image }">
                        <input type="file" name="assessment-file" id="assessment-file" accept="image/*" @change="previewImage" class="upload"> 
                        <img v-show="image" :src="preview" class="img-fluid" />
                        <div v-show="!image" class="no-img">
                            <span>+ Choose file</span>
                        </div>
                    </div>
                </div>
                <form>
                    <p><label for="question">Questions</label></p>
                    <textarea id="question" name="question" ></textarea>
                    <div class="options">
                       <div>
                            <p><label for="A">Option A</label></p>
                            <input type="text" id="A" name="A">
                       </div>
                       <div>
                            <p><label for="B">Option B</label></p>
                            <input type="text" id="B" name="B">
                        </div>
                        <div>
                            <p><label for="C">Option C</label></p>
                            <input type="text" id="C" name="C">
                        </div>
                        <div>
                            <p><label for="D">Option D</label></p>
                            <input type="text" id="D" name="D">
                        </div>
                    </div>
                </form>
                <div class="navigate">
                    <div class="buttons">
                        <button class="previous" v-on:click="prev" :disabled="checkPrev">Previous</button>
                        <button class="next" v-on:click="next" :disabled="checkNext">Next</button>
                    </div>
                    <router-link to="/successful">
                        <button class="finish" :disabled="checkFinish">Save</button>
                    </router-link>
                </div>

            </div>
        </div>
    </div>



</template>

<script>
import quiz from '@/quiz'
import AdminSideMenu from '@/components/AdminSideMenu.vue'
import TimeBarAdmin from '@/components/TimeBarAdmin.vue'

export default {
    name: 'ComposeAssessment2',
    data: () => ({
        isActive: false,
        preview: null,
        image: null,
        preview_list: [],
        image_list: [],
        questionIndex: 1,
        questions: quiz.questions[{}]
    }),
    methods: {
        createApplication() {
            this.isActive = true;
        },
        noConfirm() {
            this.isActive = false;
        },
        previewImage: function(event) {
            var input = event.target;
            if (input.files) {
                var reader = new FileReader();
                reader.onload = (e) => {
                    this.preview = e.target.result;
                }
                this.image=input.files[0];
                reader.readAsDataURL(input.files[0]);
            }
        },
        next: function() {
            this.questionIndex++;
        },
        prev: function() {
            this.questionIndex--;
        },
    },
    computed: {
        checkPrev: function(){
            return this.questionIndex > 1 ? false : true; 
        },
        checkNext: function(){
            // quiz.questions.length - 1 
            return this.questionIndex < 30 ? false : true; 
        },
        checkFinish: function(){
            return this.questionIndex == 30 ? false : true; 
        }
    },
    components: {
        AdminSideMenu,
        TimeBarAdmin
    }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap");

* {
    font-family: 'Lato', sans-serif;
    color: #2B3C4E;
    margin: 0;
    padding: 0;

}

.wrapper {
    display: flex;
}

.container {
    margin: 111px 93px 0px 292px;
    width: 876px;

}

.header {
    display: flex;
    justify-content: space-between;
    width:100%;
    margin-left: 47px;
    margin-bottom: 64px;
}

.assessment {
    align-items: center;
}

.title {
    font-style: normal;
    font-weight: 300;
    font-size: 43.5555px;
    line-height: 52px;
    letter-spacing: -0.02em;
    margin-bottom: 14px;
}


.main {
    display: flex;
    flex-direction: column;
    width: 876px;
    margin-left: 47px;
}
.assessment-1{
    margin-top: 62px;
}

.assessment-1 p {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #2B3C4E;
}

.choose_file {
    margin-top: 21px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 13px;
    cursor:pointer;
    height: 170px;
    border: 1.55172px dashed #2B3C4E;
    border-radius: 6.2069px;
    margin-bottom: 25px;
    overflow: hidden;
    position: relative;
}
.choose_file input.upload {
  position: absolute;
  top: 0;
  right: 0;
  margin: 0;
  padding: 0;
  font-size: 20px;
  cursor: pointer;
  opacity: 0;
  filter: alpha(opacity=0);
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.choose_file img{
    width: 100%;
    height: 100%;
    /* object-fit: cover; */
}
.no-img{
    width: 456px;
    height: 108px;
    align-items: center;
    display: flex;
    justify-content: center;
}
form{
    display: flex;
    flex-direction: column;
    padding:0;
}

.options{
    display:grid;
    grid-template-columns: auto auto;
    margin:0;
    column-gap: 60px;
}
textarea{
    width: 876px;
    border: 1.5px solid #2B3C4E;
    border-radius: 4px;
    height: 144px;
    margin-bottom:47px;
    padding: 15px;
}

.options input{
    border: 1.5px solid #2B3C4E;
    margin-bottom:47px;
    border-radius: 4px;
    height: 41px;
    width: 406px;
    padding: 15px;
}

input:focus,
    textarea:focus {
        outline: none !important;
        border: 1px solid #7557d3;
    }


label {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    margin-bottom:5px;
}

.active {
    width: 355.08px;
    height: 33px;
    background: #31D283;
}

.navigate {
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
    margin-top: 50px;
    justify-content: center;
    align-items: center;
}

.buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 50px;
    gap: 529px;
}

.previous,.next,.finish {
    border: 1px solid #00000040;
    width: 125px;
    height: 41px;
    /* margin-right: 529px; */
    background-color: #211F26;
    border-radius: 4px;
    color:white;
    cursor:pointer;
}

/* .next {
    width: 125px;
    height: 41px;
    background-color: #7557D3;
    color: white;
    border-radius: 4px;
    cursor: pointer;
    border: none;
} */


.previous:disabled, .next:disabled {
    /* width: 205px;
    height: 41px; */
    background-color: #CECECE;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: not-allowed;
    /* margin-bottom: 206px; */
}
.finish:disabled {
    width: 205px;
    height: 41px;
    background-color: #CECECE;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: not-allowed;
    margin-bottom: 206px;
}
</style>