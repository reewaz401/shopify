<template>
<canvas id="myChart" width="400" height="400"></canvas>
<div class="table-responsive">
<table class="table">
  <thead>
    <tr>
      <th scope="col">Sn.</th>
      <th scope="col">Id</th>
      <th scope="col">Item</th>
      <th scope="col">Prix</th>
      <th scope="col">Quantité</th>
      <th scope="col">Date du commande</th>
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
</div>
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
table{
  width:100vw;
}

canvas {
  max-height: 40vh;

}</style>