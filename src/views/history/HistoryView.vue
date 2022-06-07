<template>
<canvas id="myChart" width="400" height="400"></canvas>

<table class="table">
  <thead>
    <tr>
      <th scope="col">Sn.</th>
      <th scope="col">Id</th>
      <th scope="col">Product</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col">Buy Date</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(product, index) in items" :key="index"> 
      <th scope="row">{{index}}</th>
      <td>{{product.product_id}}</td>
      <td>{{product.product_name}}</td>
      <td>{{product.price}}</td>
      <td>{{product.quantity}}</td>
      <td>{{product.buy_date}}</td>
    </tr>
  </tbody>
</table>
</template>

<script>

import showBarChart from "../../controller/graph_controller";
import fetchHistoryProducts from "../../controller/history_controller";
export default{
  async  mounted(){
 let response = await fetchHistoryProducts();
 console.log(response);
 if(response.data.status==200){
     this.items=response.data.data
 }else{
     this.items=[];
 }
 //showing chart
   const ctx = document.getElementById("myChart");
   showBarChart(ctx,this.items)

    },

data (){
  return{
items:[]
  }
},
}
</script>

<style lang="scss">
canvas {
  max-height: 40vh;

}</style>