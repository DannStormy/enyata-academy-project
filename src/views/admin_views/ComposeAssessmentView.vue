<template>
    <div class="wrapper">
        <AdminSideMenu />
        <div class="container">
            <div class="header">
                    <h1 class="title">Compose Assessment</h1>
                    <TimeBarAdmin/>
            </div>
            <div class="main">
                <div class="logo">
                    <img src="@/assets/svgs/timer-logo.svg" alt="timer-logo">
                </div>
                <div class="notification">
                    <p>Set Timer for Assessment</p>
                </div>
            </div>
            
        </div>
    </div>
   



</template>

<script>
import AdminSideMenu from '@/components/AdminSideMenu.vue'
import TimeBarAdmin from '@/components/TimeBarAdmin.vue'
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
    margin: 111px 0 86px 292px;
    width: 100%;
}

.header {
    margin-left: 47px;
}
.title {
    font-style: normal;
    font-weight: 300;
    font-size: 43.5555px;
    line-height: 52px;
    letter-spacing: -0.02em;
    margin-bottom: 120px;
}
.main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin-left: 47px;
}
.notification {
    width: 514px;
    height: 69px;
    background-color: #D9D9D9;
    color: #2B3C4E;
    position: relative;
    text-align: center;

}

.notification p {
    position: absolute;
    font-style: normal;
    font-weight: 300;
    width: 100%;
    font-size: 43.5555px;
    line-height: 52px;
    letter-spacing: -0.02em;
    margin: 8px auto;
}
</style>