<template>
        <div class="timer">
            <p>Set Time</p>
            <div class="time">
                <span>00<sub>min</sub></span>
                <div class="polygon"><img src="@/assets/svgs/polygon-logo.svg" alt="polygon-logo" /></div>
                <span>000<sub>sec</sub></span>
                <div class="polygon"><img src="@/assets/svgs/polygon-logo.svg" alt="polygon" /></div>
            </div>
        </div>
</template>

<script>
export default {
    name:'TimeBarAdmin'
}
</script>

<style>

.logo {
    width: 124px;
    height: 124px;
    margin-bottom: 16px;
}

.logo img {
    width: 100%;
    height: 100%;
}


.timer {
    display: flex;
    flex-direction: column;
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
    margin-bottom: 4px;
}

.time {
    display: flex;
    align-items: center;
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

.polygon {
    width: 12px;
    height: 12px;
    margin-left: 12px;
    margin-right: 25px;
    cursor: pointer;
}

.polygon img {
    width: 100%;
    height: 100%;
}
</style>