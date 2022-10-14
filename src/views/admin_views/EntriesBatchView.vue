<template>
    <div class="wrapper">
        <AdminSideMenu />
        <div class="container">
            <div class="header">
                <div class="assessment">
                    <div class="title">
                        <p>Results - Batch 2</p>
                    </div>
                    <div class="logo">
                        <img src="@/assets/svgs/dropdown-logo.svg" alt="DropDown-logo">
                    </div>
                </div>
                    <p class="description">Comprises of all that applied for batch 2</p>
            </div>
            <div class="table">
                <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>DOB-Age</th>
              <th>Address</th>
              <th>University</th>
              <th>CGPA</th>
              <th>Test Score</th>
            </tr>
          </thead>
          <tbody>
            <tr class="table-row active">
              <td class="active">Ify Chinke</td>
              <td>ify@enyata.com</td>
              <td>12/09/19 - 22</td>
              <td>3 Sabo Ave, Yaba, Lagos</td>
              <td>University of Nigeria</td>
              <td>5.0</td>
            </tr>
            <tr class="table-row">
                <td>Ify Chinke</td>
                <td>ify@enyata.com</td>
                <td>12/09/19 - 22</td>
                <td>3 Sabo Ave, Yaba, Lagos</td>
                <td>University of Nigeria</td>
                <td>5.0</td>
            </tr>
            <tr class="table-row">
                <td>Ify Chinke</td>
                <td>ify@enyata.com</td>
                <td>12/09/19 - 22</td>
                <td>3 Sabo Ave, Yaba, Lagos</td>
                <td>University of Nigeria</td>
                <td>5.0</td>
            </tr>
          </tbody>
        </table>                                                            
            </div>
        </div>
    </div>



</template>

<script>
import AdminSideMenu from '@/components/AdminSideMenu.vue'
export default {
    name: 'EntriesBatchView',
    data() {
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
    margin-top: 111px;
    margin-left: 334px;
    width: 800px;
}

.header {
    margin-left: 47px;
}

.assessment {
    display: flex;
    align-items:center;
}

.title {
    font-style: normal;
    font-weight: 300;
    font-size: 43.5555px;
    line-height: 52px;
    letter-spacing: -0.02em;
}

.description {
    font-style: italic;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
}

.logo {
    width: 12px;
    height: 12px;
    margin-left:14px;
    cursor:pointer;
}

.logo img {
    width: 100%;
    height: 100%;
}

.table {
    width: 100%;
    margin-right:64px;
    margin-left: 47px;
    height: 476px;
    background: #ffffff;
    box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
    border-radius: 8px;
    padding: 30px;
}

table {
    border-collapse: collapse;
    width: 100%;
    text-align: center;
    border-spacing: 0 7px;
}

th,
td {
    padding: 20px;
    border-top: 10px solid white;
}

tr {
    cursor: pointer;
}

tr.active {
    background: white;
    box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
    /* border-radius: 8px; */
    border-left: 6px solid #7557d3;
}

thead {
    width: 736px;
    height: 42px;
    background: #2b3c4e;
    color: white;
    border-top: 1em solid transparent;
}
</style>