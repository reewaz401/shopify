<template>
<div class="card">
    <h3>{{product.product_name}}</h3>

    <h5 class = "price"> Prix: € {{product.price.toFixed(2)}}</h5>
    <p class="description">Description: {{product.description}}</p>
    <p class ="text-muted">{{product.category}}</p>
    <button class ="view-product-button" @click="$emit('view-product',product)">
        Affiche
    </button>
</div>


</template>

<script>


    export default{
        props:["product"]
    }
</script>

<style lang="scss">
@import "./productsSummaryCard.scss"
</style>