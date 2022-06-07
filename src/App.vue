<template>
  <div id="nav">
    <router-link :class="{active: $route.name === 'Home'}" to="/">Home</router-link> |
    <router-link :class="{active: $route.name === 'Cart'}" to="/cart">Cart</router-link>|
    <router-link :class="{active: $route.name === 'History'}" to="/history">History</router-link>
  </div>
  <router-view/>
</template>

<script>
export default{
  mounted(){
    this.$store.commit('updateCartFromLocalStorage');
  }
}
</script>


<style lang="scss">
@import './App.scss';
</style>
