<template>
<div class="cart-item-card">
    <div class="header">
        <h3>{{product.product_name}}</h3>
        <h4>In Cart: {{product.quantity}}</h4>
        <h4>Total Cost: {{item_cost.toFixed(2)}}</h4>
    </div>
    <p>{{description}}</p>
</div>
</template>
<script>
export default{
    props:["product"],
    computed:{
description(){
    return this.product.description.substring(0,50);
},
        item_cost(){
            return this.product.price * this.product.quantity
        }
    }
}
</script>
<style lang="scss">
@import "./cartItemCard.scss";
@import "../products/productsSummaryCard.scss";
</style>