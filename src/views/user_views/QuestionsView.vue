<template>
    <div class="wrapper">
        <SideMenu />
        <div class="container">
            <div class="header">
                <div class="assessment">
                    <h1 class="title">Take Assessment</h1>
                    <p class="description">Click the button below to start assessment, you have limited time for this
                        test</p>
                </div>
                <TimerBar :displayMinutes="displayMinutes"       
                          :displaySeconds="displaySeconds"/>
            </div>
            <div class="main" v-for="(question, index) in quiz.questions" :key="question.numb" v-show="index === questionIndex">
                <div class="question">
                    <p>Question {{question.numb}}</p>
                    <span>{{question.question}}</span>
                    <div :class="{'active': isActive}" v-for="option in question.options" :key="option.correct">     
                        <label :for="index">
                            <input type="radio" :id="index" :name="question.question" :value="option.correct" v-model="userResponses[index]"/>{{option.text}}
                        </label>
                        <!-- <input type="radio" id="B" name="question" value="B" />
                        <label for="B">B. To speed up 3D rendering performance.</label><br>
                        <input type="radio" id="C" name="question" value="C" />
                        <label for="C">C. To support higher video resolutions.</label><br>
                        <input type="radio" id="D" name="question" value="D" />
                        <label for="D">D. To display more colors in images and videos</label> -->
                    </div>
                    <div class="navigate">
                        <div class="buttons">
                            <button class="previous" v-on:click="prev" :disabled="checkPrev">Previous</button> 
                            <button class="next" v-on:click="next" :disabled="checkNext">Next</button>
                        </div>
                        <router-link to="/success" >
                            <button class="finish" :disabled="checkFinish" @click="stop">Finish</button>
                        </router-link>
                        <p>Total score: {{ score() }} / {{ quiz.questions.length }}</p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>



</template>

<script>
import quiz from '@/quiz'
import SideMenu from '@/components/SideMenu.vue'
import TimerBar from '@/components/TimerBar.vue'
    export default{
        name: 'QuestionsView',
        data: () => ({
            isActive:false,
            isRunning: true,
            timerInstance: null,
            totalSeconds: 60 * 60,
            currentTimer: 0,
            quiz: quiz,
            questionIndex: 0,
            userResponses: Array(quiz.questions.length).fill(false)
        }),

        methods: {
            formatTime(time) {
                if (time < 10) {
                    return '0' + time
                }
                return time.toString()
            },
            start() {
                this.isRunning = true;
            },
            stop() {
                this.isRunning = false;
                clearInterval(this.timerInstance)
            },
            next: function () {
                this.questionIndex++;
            },
            prev: function () {
                this.questionIndex--;
            },
            score: function () {
                return this.userResponses.filter(function (val) { return val }).length;
            }
        },
        computed: {
            displayMinutes() {
                const minutes = Math.floor(this.totalSeconds / 60);
                return this.formatTime(minutes);
            },
            displaySeconds() {
                const seconds = this.totalSeconds % 60;
                return this.formatTime(seconds)

            },
             checkPrev: function () {
                return this.questionIndex > 0 ? false : true;
            },
            checkNext: function () {
                return this.questionIndex < quiz.questions.length - 1 ? false : true;
            },
            checkFinish: function () {
                return this.questionIndex == quiz.questions.length - 1 ? false : true;
            }
        },
        watch:{
            
        },
        mounted() {
            this.timerInstance = setInterval(() => {
                if (this.totalSeconds <= 0) {
                    this.stop()
                    return
                }
                this.totalSeconds -= 1
            }, 1000)
            },
        components:{
            SideMenu,
            TimerBar
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
    margin: 111px 0 8px 292px;
    width: 100%;
}

.header {
    display: flex;
    justify-content: space-between;
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

.description {
    font-style: italic;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
}

.main {
    display: flex;
    flex-direction: column;
    height: 299px;
    margin-left: 47px;
    margin-bottom:206px;
}
.main p{
    font-style: italic;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    width: 65px;
    height: 17px;
    margin-bottom:14px;
}
.main span{
    display:inline-block;
    width: 406px;
    height: 29px;
    font-style: italic;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    margin-bottom:48px;
}

input{
    width: 8px;
    height: 8px;
    margin-right:42px;
    border: 1px solid #2B3C4E;
    margin-bottom: 37px;
}

label{
    font-style: italic;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    width: 252px;
    height: 20px;
    color: #2B3C4E;
}

.active{
    width: 355.08px;
    height: 33px;
    background: #31D283;
}
.navigate{
    display: flex;
    flex-direction:column;
    margin-bottom:80px;
    margin-top:80px;
    justify-content:center;
    align-items: center;
}
.buttons{
    display:flex;
    flex-direction:row;
    align-items:center;
    margin-bottom:80px;
    gap: 220px;
}
button{
    font-weight: 700;
}
button:hover{
    cursor: pointer
}
.next:disabled, .previous:disabled{
    border: 1px solid #00000040;
    width: 125px;
    height: 41px;
    color:#211F26;
    background-color: #fff;
    cursor: not-allowed;
}
.previous, .next{
    width: 125px;
    height: 41px;
    background-color:#7557D3;
    color:white;
    border-radius:4px;
    border:none;
    /* margin-right:220px; */
}
 .finish{
    width: 205px;
    height: 41px;
    background-color:#7557D3;
    color:white;
    border-radius:4px;
    border:none;
    /* margin-right:220px; */
}

.finish:disabled{
    width: 205px;
    height: 41px;
    background-color: #CECECE;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: not-allowed;
}
</style>