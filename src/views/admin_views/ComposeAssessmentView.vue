<template>
    <div class="wrapper">
        <AdminSideMenu />
        <div class="container">
            <div class="header">
                    <h1 class="title">Compose Assessment</h1>
            </div>
            <div class="main">
                <div class="logo">
                    <img src="@/assets/svgs/timer-logo.svg" alt="timer-logo">
                </div>
                <div class="notification">
                    <p>Set Timer for Assessment</p>
                </div>
                <div class="timer">
                    <p>Set Time</p>
                    <div class="time">
                        <span>00<sub>min</sub></span>
                        <div class="polygon"><img src="@/assets/svgs/polygon-logo.svg" alt="polygon-logo"/></div>
                        <span>000<sub>sec</sub></span>
                        <div class="polygon"><img src="@/assets/svgs/polygon-logo.svg" alt="polygon"/></div>
                    </div>
                </div>
            </div>
        </div>
    </div>



</template>

<script>
import AdminSideMenu from '@/components/AdminSideMenu.vue'
export default {
    name: 'ComposeAssessmentView',
    data() {
        return{
            min:60,
            sec:60
        }
    },
    components: {
        AdminSideMenu,
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
    margin: 90px 0 86px 292px;
    width: 100%;
    padding: 0 47px;

}

.header {
    display: flex;
    justify-content: space-between;
    margin-left: 47px;
    margin-bottom: 120px;
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
    justify-content: center;
    align-items: center;
    margin-bottom:381px;
    height: 100%;
}

.logo {
    width: 124px;
    height: 124px;
    margin-bottom: 16px;
}

.logo img {
    width: 100%;
    height: 100%;
}

.notification {
    width: 514px;
    height: 69px;
    background-color:#D9D9D9;
    color:#2B3C4E;
    position:relative;
    margin-bottom:32px;
    text-align:center;
    
}
.notification p{
    position: absolute;
    font-style: normal;
    font-weight: 300;
    width: 100%;
    font-size: 43.5555px;
    line-height: 52px;
    letter-spacing: -0.02em;
    margin: 8px auto;
}

.timer {
    display: flex;
    flex-direction: column;
    margin-right: 98px;
}

.timer p {
    font-style: normal; 
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #2B4E2E;
}

/* .time {
    display: flex;
} */


.timer {
    display: flex;
    flex-direction: column;
}

.timer p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #4F4F4F;
    margin-bottom: 10px;
}

.time {
    display: flex;
    align-items:center;
}

.time span {
    font-style: normal;
    font-weight: 300;
    font-size: 48px;
    color: #2B3C4E;
}

.time sub {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: #4F4F4F;
    margin-right: 5px;
}
.polygon{
    width: 12px;
    height: 12px;
    margin-left: 12px;
    margin-right: 25px;
}
.polygon img{
    width:100%;
    height:100%;
}
</style>