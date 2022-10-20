<template>
    <div class="timer">
        <p>Timer</p>
        <div class="time">
            <span>{{displayMinutes}}<sub>min</sub></span>
            <span>{{displaySeconds}}<sub>sec</sub></span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TimerBar',
    props:['displayMinutes', 'displaySeconds' ],

    computed: {
        formatTime(time) {

            if (time < 10) {
                return '0' + time
            }
            return localStorage.getItem('countTimer', time.toString()) 
        },
    },
    
}
</script>
<style scoped>
.timer {
    display: flex;
    flex-direction: column;
    margin-right: 98px;
}

.timer p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    color: #4F4F4F;
    width: 37px;
    height: 17px;
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
</style>