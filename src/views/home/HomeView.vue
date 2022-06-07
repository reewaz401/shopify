
<template>
  <div class="home">
    <ProductDrawer
    :product="product"
    :active="active.product_drawer"
    v-on:close-product-drawer="closeProductDrawer()"
    />
  <div class="products-cards-container">
    <ProductSummaryCard 
    v-for="product in items"
    :key="product.id" 
    :product="product"
    v-on:view-product="viewProduct($event)"
    />
    
  </div>
  </div>
</template>

<script>
import ProductDrawer from "../../components/products/ProductDrawer.vue";
import ProductSummaryCard from "../../components/products/ProductsSummaryCard.vue";
import fetchAllProducts from '../../controller/home_controller';
//import items from "../../data/items"
import "./home.scss";


export default {

   mounted(){
  fetchAllProducts().then((rows)=> this.items=rows.data["data"]).catch(()=>this.items=[]);
  },
  name: 'HomeView',
  components: { 
ProductSummaryCard,
ProductDrawer
  },

data (){
  return{
items:[],
product:null,
active:{
  product_drawer:false
}
  }
},
methods:{
  
  viewProduct(product){
    this.product=product
    this.active.product_drawer=true
    
  },

  closeProductDrawer(){
    this.active.product_drawer=false;
  }
}


}
</script>
