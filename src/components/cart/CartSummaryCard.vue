<template>
<div class="cart-item-card">
    <div class="cart-summary">
          <h3>Card Total: ${{cart_total.toFixed(2)}}</h3>
    <button class="view-product-button" @click="requestHere()"> {{isDone}}</button>

    </div>
</div>
</template>
<script>
import requestToCheckout from '../../controller/cart_controller';
export default{
   methods:{
async requestHere(){
let res= await requestToCheckout(this.$store)
if(res){
    this.isDone="Done"
}else{
    this.isDone="Cannot complete"
}
   }
},
 computed:{
        cart_total(){
return this.$store.getters.cartTotal;
        }
    },
data (){
return{
isDone:"Pay",
}
}
}
</script>

<style lang="scss">
@import "./cartItemCard.scss";
@import "../products/productsSummaryCard.scss";
</style>