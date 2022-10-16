<template>
  <div class="wrapper">
    <AdminSideMenu />
    <div class="container">
    <div class="dashboard">
      <h1>Entries - Batch 2</h1>
      <p>Comprises of all that applied for batch 2</p>

      

      <div class="updates-and-assessment">
        
          <div class="entries">
            <div class="entry">
                <div class="main">
                    Name
                </div>
                <span>
                    <input type="checkbox" id="username1" name="username" value="Ify Chinke">
                    <label for="username">Ify Chinke</label>
                </span>
                <span>
                    <input type="checkbox" id="username1" name="username" value="Ify Chinke">
                    <label for="username">Ify Chinke</label>
                </span>
                <span>
                    <input type="checkbox" id="username1" name="username" value="Ify Chinke">
                    <label for="username">Ify Chinke
                    </label>
                </span>
                
            </div>
            <div class="entry">
                <div class="main">Email</div>
                <span>ify@enyata.com</span>
                <span>ify@enyata.com</span>
                <span>ify@enyata.com</span>
            </div>
            <div class="entry">
                <div class="main">DOB-Age<img src="../../assets/svgs/sort-arrow.svg" alt="icon for sort"></div>
                <span>12/09/19 -22</span>
                <span>12/09/19 -22</span>
                <span>12/09/19 -22</span>
            </div>
            <div class="entry">
                <div class="main">Address</div>
                <span>3 Sabo Ave, Yaba, Lagos</span>
                <span>3 Sabo Ave, Yaba, Lagos</span>
                <span>3 Sabo Ave, Yaba, Lagos</span>
            </div>
            <div class="entry">
                <div class="main">University</div>
                <span>University of Nigeria</span>
                <span>University of Nigeria</span>
                <span>University of Nigeria</span>
            </div>
            <div class="entry">
                <div class="main">CGPA <img src="../../assets/svgs/sort-arrow.svg" alt="icon for sort"></div>
                <span>5.0</span>
                <span>5.0</span>
                <span>5.0</span>
            </div>
            <div class="entry">
                <div class="main">Test scores <img src="../../assets/svgs/sort-arrow.svg" alt="icon for sort"></div>
                <span>15</span>
                <span>15</span>
                <span>15</span>
            </div>
          </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import AdminSideMenu from "@/components/AdminSideMenu.vue";
export default {
  components: {
    AdminSideMenu,
  },
};
</script>

<style scoped>

*{
margin:0;
padding:0;
}
.wrapper {
  display: flex;


}
.container{
    margin: 111px 93px 0px 292px;
    width:100%;
}
.dashboard h1 {
  font-family: "Lato";
  font-style: normal;
  font-weight: 300;
  font-size: 43.5555px;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: #2b3c4e;
}
.dashboard p{
  font-family: 'Lato';
font-style: italic;
font-weight: 400;
font-size: 13px;
line-height: 16px;
color: #4F4F4F;  
}


.updates-and-assessment {
  margin-top: 38px;
  width: 100%;
}
.entry span{
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #4F4F4F;
    display: grid;
    grid-template-rows: auto auto auto;
    align-items: center;
    border-radius: 8px 0px 0px 8px;
    align-items: center;
    text-align:center;

}

.entries{
    display:grid;
    grid-template-columns:auto auto auto auto auto auto auto;
    align-items:center;
    width: 100%;
}

.entry div{
    background: #2B3C4E;
    font-family: 'Lato';
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #FFFFFF;
    border-radius: 0;
    padding:8px 8px 8px 42px;
    width:100%;
}

.entry span{
    width: fit-content;
}
</style>