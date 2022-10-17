<template>
  <div class="flex-container">
    <AdminSideMenu />
    <div class="container">
      <div class="header">
          <label for="cars">Results - </label>
          <div class="select">
              <select id="batch" name="batchlist" form="batchform">
                  <option value="batch1">Batch 1</option>
                  <option value="batch2" selected>Batch 2</option>
                  <option value="batch3">Batch 3</option>
              </select>
          </div>
          <p class="header-title">Comprises of all that applied for batch 2</p>
      </div>
      <form action="">
          <table class="table" width="100px">
              <tbody>
                  <tr class="header-row">
                  <th>Name</th>
                  <th>Email</th>
                  <th>DOB - Age<img src="../../assets/svgs/sort-arrow.svg" alt="icon for sort"></th>
                  <th>Address</th>
                  <th>University</th>
                  <th>CGPA<img src="../../assets/svgs/sort-arrow.svg" alt="icon for sort"></th>
                  <th colspan="2">Test Scores <img src="../../assets/svgs/sort-arrow.svg" alt="icon for sort"></th>
              </tr>
              <tr class="table-data">
                  <td>
                      <input type="checkbox" id="username1" name="username" value="Ify Chinke">
                      <label for="username">Ify Chinke</label><br>
                  </td>
                  <td>ify@enyata.com</td>
                  <td>12/09/19 - 22</td>
                  <td>3 Sabo Ave, Yaba, Lagos</td>
                  <td>University of Nigeria</td>
                  <td>5.0</td>
                  <td class="scores"><span>15 </span><button><img src="../../assets/svgs/three-dots.svg" alt="send bulk email"></button></td>
              </tr>
              <tr class="table-data">
                  <td>
                      <input type="checkbox" id="username1" name="username" value="Ify Chinke">
                      <label for="username">Ify Chinke</label><br>
                  </td>
                  <td>ify@enyata.com</td>
                  <td>12/09/19 - 22</td>
                  <td>3 Sabo Ave, Yaba, Lagos</td>
                  <td>University of Nigeria</td>
                  <td>5.0</td>
                  <td class="scores"><span>15 </span><button><img src="../../assets/svgs/three-dots.svg" alt="send bulk email"></button></td>
              </tr>
              <tr class="table-data">
                  <td>
                      <input type="checkbox" id="username1" name="username" value="Ify Chinke">
                      <label for="username">Ify Chinke</label><br>
                  </td>
                  <td>ify@enyata.com</td>
                  <td>12/09/19 - 22</td>
                  <td>3 Sabo Ave, Yaba, Lagos</td>
                  <td>University of Nigeria</td>
                  <td>5.0</td>
                  <td class="scores"><span>15 </span><button><img src="../../assets/svgs/three-dots.svg" alt="send bulk email"></button></td>
              </tr>
              </tbody>
              
          </table>
      </form>
      </div>
  </div>
</template>

<script>
import AdminSideMenu from "@/components/AdminSideMenu.vue";
export default {
  name: "ResultsView",
  components: {
      AdminSideMenu,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap");
* {
  font-family: "Lato", sans-serif;
  color: #2b3c4e;
  box-sizing: border-box;
}
.flex-container {
  display: flex;
}
.container {
  margin: 107px 93px 86px 290px;
  padding: 0 58px;
}
.header, select{
  font-weight: 300;
  font-size: 43.5555px;
  line-height: 52px;
  letter-spacing: -0.02em;
}
select>option{
  font-size: 16px;
}
select{
  border: none;
  outline: none;
}
select {
      -webkit-appearance:none;
      -moz-appearance:none;
      -ms-appearance:none;
      appearance:none;
      outline:0;
      box-shadow:none;
      border:0!important;
      background: #ffffff;
      background-image: none;
      flex: 1;
      cursor:pointer;
  }
  select::-ms-expand {
      display: none;
  }
  .select {
      position: relative;
      display: inline-flex;
        width: 20em;
        height: 3em;
      line-height: 3;
      background: #5c6664;
      overflow: hidden;
        border-radius: .25em;
  }
  .select::after {
      content: '\25BC';
      position: absolute;
      right: 0;
      cursor:pointer;
      pointer-events:none;
      transition:.25s all ease;
  }
.header-title{
  font-style: italic;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;  
  margin-bottom: 38px
}
.table{
  border-collapse: collapse;
  min-width: 1042px;
  padding: 0 15px;
  border: none;
}
.header-row{
  background-color: #2B3C4E;
  border: none;
  outline: none;
}
.header-row>th{
  font-size: 14px;
  line-height: 17px;
  color: #FFFFFF;
}
th {
  padding: 15px 4px;
}

td {
  padding: 15px 4px;
  margin-right: 40px;
  text-align: center;
  width:fit-content;
}
th img{
  margin-left: 7px;
}
input{
  margin-right: 4px;
}
table button{
  background-color: #FFFFFF;
  border: none;
  outline: none;
}
  /* tr{
    border-collapse:collapse;
    border-spacing:0 15px;
  } */
.table-data{
  padding: 22px 18px;
    margin-top: 32px;
    background: #FFFFFF;
  border-left: 7px solid #FFFFFF;
  border-spacing: 30px;
  border-radius: 8px;
   
}
.table-data:hover{
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
    border-top-left-radius: 8px;
    border-left: 7px solid #7557D3;
  transition: 0.2s;
}
.scores>button>img{
  margin-left: 16px;
  /* width: 100%; */
  height: 100%
}
  
</style>