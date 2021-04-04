<template>
  <div class="row">
      <h4>Product List</h4>
      <product-card v-for="(product,index) in products" :key="product.id" :product="product"/>
  </div>
</template>

<script>
import ProductCard from './ProductCard'
export default {
    mounted(){
        this.$store.dispatch('getProducts')
    },
    components: {
        ProductCard
    },
    computed: {
        products(){
            return this.$store.state.products;
        }
    }
}
</script>

<style>

</style>
