<template>
    <ScrollBar/>
    <div class="confirmation-container" v-if="isActive">
        <div class="confirmation-box">
            <form class="question-box" @submit.prevent>
                <div class="que">Are you sure you want to approve this application?</div>
                <div class="buttons">
                    <button>Yes</button>
                    <button @click="noConfirm">No</button>
                </div>
            </form>
        </div>
    </div>
    <div class="wrapper">
    <div class="container">
        <div class="profile-picture">
            <img src="@/assets/svgs/dummy-logo.svg" alt="dummy-logo" />
        </div>
        <p class="details">Personal details</p>
        <form action="">
            <div class="options">
                <div>
                    <p><label for="name" >Name</label></p>
                    <input type="text" id="name" name="name" placeholder="Ify Chineke">
                </div>
                <div>
                    <p><label for="email">Email</label></p>
                    <input type="text" id="email" name="email" placeholder="ify@enyata.com">
                </div>
                <div>
                    <p><label for="address">Address</label></p>
                    <input type="text" id="address" name="address" placeholder="3 Sabo Ave, Yaba, Lagos">
                </div>
                <div>
                    <p><label for="university">University</label></p>
                    <input type="text" id="university" name="university" placeholder="University of Nigeria Nsukka">
                </div>
                <div>
                    <p><label for="course">Course of study</label></p>
                    <input type="text" id="course" name="course" placeholder="Computer Science">
                </div>
                <div>
                    <p><label for="dob">Date of birth</label></p>
                    <input type="text" id="dob" name="dob" placeholder="12/09/19 - 22">
                </div>
                <div>
                    <p><label for="cgpa">CGPA</label></p>
                    <input type="text" id="cgpa" name="cgpa" placeholder="5.0">
                </div>
                <div>
                    <p><label for="cv">CV</label></p>
                    <!-- <input type="text" id="cgpa" name="cgpa" placeholder="5.0"> -->
                </div>
            </div>
        </form>
        <div class="decide">
            <button class="approve" @click="createApplication">Approve</button>
            <button class="decline">Decline</button>
        </div>
    </div>
    </div>
</template>

<script>
    import ScrollBar from "@/components/ScrollBar.vue";
        export default{
        data: () => ({
            isActive: false,
        }),
            methods: {
            createApplication() {
                this.isActive = true;
            },
            noConfirm() {
                this.isActive = false;
            },
        },
        components: { ScrollBar }
    }

</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap");

* {
    font-family: 'Lato', sans-serif;
    color: #7D7D7D;
    margin: 0;
    padding: 0;

}

.confirmation-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: -100px;
    margin-left: -250px;
    z-index: 30;
}

.confirmation-box {
    width: 477px;
    height: 300px;
    border-radius: 4px;
    background: #ffffff;
    border-radius: 4px;
    overflow: hidden;
    filter: blur(0);
    display: flex;
    align-items: center;
    justify-content: center;
}

.question-box {
    width: 257px;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.que {
    font-weight: 500;
    font-size: 18px;
    line-height: 150%;
    text-align: center;
    color: #4f4f4f;
    margin-bottom: 48px;
}

.buttons button {
    width: 128.5px;
    height: 48px;
    color: black;
    background: white;
    cursor: pointer;
    border-radius: 4px;
    border: none;
}
.active {
    background: rgb(25, 13, 74, 0.2);
    filter: blur(2px);
}

.buttons button:hover {
    background: #7557d3;
    color: white;
}

.wrapper{
        width: 600px;
        float: right;
        height: auto;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        border-bottom-left-radius: 10px;
        border-top-left-radius: 10px;
    }
.container{
        margin-left: 48px;
        margin-right: 58px;
    }

    .profile-picture{
        width: 179px;
        height:179px;
        margin-top:94px;
        margin-bottom:43px;
    }
    .profile-picture img{
        width:100%;
        height:100%;
    }
    .details{
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        margin-bottom: 47px;
        color: #7D7D7D;
    }
    .options {
        display: grid;
        grid-template-columns: auto auto;
        column-gap: 32px;
    }
    label{
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: #B1B1B1;
        width: 37px;
        height: 17px;
        margin-bottom:8px;
    }
    input{
        width: 231px;
        height: 48px;
        border: 1px solid #CDCFD6;
        border-radius: 4px;
        margin-bottom:36px;
        padding:14px 18px;
    }
    input:focus,
    textarea:focus {
        outline: none !important;
        border: 1px solid #7557d3;
    }
    .decide{
        display:flex;
        justify-content:center;
        align-items:center;
        margin:36px 108px;
    }
    .approve{
        width: 125px;
        height: 48px;
        border-radius: 4px;
        border: 1px solid #CDCFD6;
        color: #CECECE;
        cursor:pointer;
    }
    .decline{
        width: 125px;
        height: 48px;
        border: 1px solid #CDCFD6;
        border-radius: 4px;
        cursor: pointer;
        color:#CECECE;
        margin-left:24px
    }
    button:hover{
        background: #7557D3;
        color: white;
    }
</style>