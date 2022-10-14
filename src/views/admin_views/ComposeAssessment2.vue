<template>
    <div class="wrapper">
        <AdminSideMenu />
        <div class="container">
            <div class="header">
                <div class="assessment">
                    <h1 class="title">Compose Assessment</h1>
                    <p class="description">0/30</p>
                </div>
                <TimeBarAdmin/>
            </div>
            <div class="main">
                <form>
                    <p><label for="question">Questions</label></p>
                    <textarea id="question" name="question"></textarea>
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
                        <button class="previous">Previous</button>
                        <button class="next">Next</button>
                    </div>
                    <router-link to="/successful">
                        <button class="finish">Save</button>
                    </router-link>
                </div>

            </div>
        </div>
    </div>



</template>

<script>
import AdminSideMenu from '@/components/AdminSideMenu.vue'
import TimeBarAdmin from '@/components/TimeBarAdmin.vue'

export default {
    name: 'ComposeAssessment2',
    data() {
        return {
            isActive: false
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

.description {
    font-style: italic;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
}

.main {
    display: flex;
    flex-direction: column;
    width: 876px;
    margin-left: 47px;
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
}

.previous {
    border: 1px solid #00000040;
    width: 125px;
    height: 41px;
    margin-right: 529px;
    background-color: #211F26;
    border-radius: 4px;
    color:white;
    cursor:pointer;
}

.next {
    width: 125px;
    height: 41px;
    background-color: #7557D3;
    color: white;
    border-radius: 4px;
    cursor: pointer;
    border: none;
}


.finish {
    width: 205px;
    height: 41px;
    background-color: #CECECE;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-bottom: 206px;
}
</style>