<template>
    <div class="wrapper">
        <SideMenu/>
        <div class="container">
            <div class="header">
                <div class="assessment">
                    <h1 class="title">Take Assessment</h1>
                    <p class="description">Click the button below to start assessment, you have limited time for this test</p>
                </div>
                
            </div>
            <div class="main">
                <div class="logo">
                    <img :src="picture" alt="TimeSand-logo">
                </div>
                <p class="notification">We have 4 days left until the next assessment
                Watch this space</p>
                <button>Take Assessment</button>
            </div>
        </div>
    </div>


   
</template>

<script>
import SideMenu from '@/components/SideMenu.vue'
    export default{
        name: 'TakeAssessment',
        data() {
            return {
                picture:'../assets/svgs/hourglass-logo.png'
            }
        },
        components:{
            SideMenu
        }
    }
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap");
    
         * {
             font-family: 'Lato', sans-serif;
             color: #2B3C4E;
             margin:0;
             padding:0;
             
         }

        .wrapper{
          display:flex;  
        }
        .container{
            margin: 107px 0 86px 294px;
            width:1148px;
            padding: 0 47px;
            
        }
        .header{
            display:flex;
            justify-content: space-between;
            margin-left:47px;
        }
        .assessment{
            align-items:center;
        }
        .title{
            font-style: normal;
            font-weight: 300;
            font-size: 43.5555px;
            line-height: 52px;
            letter-spacing: -0.02em;
            margin-bottom:14px;
        }
        .description{
            font-style: italic;
            font-weight: 500;
            font-size: 16px;
            line-height: 19px;
        }

        .timer{
            display:flex;
            flex-direction:column;
            margin-right:98px;
        }

        .timer p{
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
            text-align: center;
            color: #4F4F4F;
        }
        .time{
            display:flex;
        }
        .time h1{
            font-style: normal;
            font-weight: 300;
            font-size: 48px;
            line-height: 58px;
            text-align: center;
            color: #2B3C4E;
            position:relative;
        }

        .time span{
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 14px;
            text-align: center;
            color: #4F4F4F;
            position:absolute;
            
        }
</style>