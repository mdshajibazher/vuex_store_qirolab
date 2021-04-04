<template>
    <div class="col-3">
        <div class="card text-left">
  <img :src="product.image" class="card-img-top" alt="">
  <div class="card-body">
    <h5 class="card-title"><router-link :to="{name: 'Product', params: {id: product.id}}">{{product.title}}</router-link></h5>
    <p class="card-text">{{product.description}}</p>
    <button class="btn btn-primary" @click="addToCart()">Add To Cart</button>
  </div>
</div>
</div>
</template>

<script>
export default {
  props:['product'],
  methods:{
    addToCart(){
      this.$store.dispatch('addProductToCart',{
        product: this.product,
        qty: 1,
        }
      )
    }
  }
}
</script>

<style>

</style>