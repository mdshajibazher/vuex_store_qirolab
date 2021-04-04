<template>
  <div class="row">
      <div class="col-4">
          <img :src="product.image" alt="">
      </div>
      <div class="col-8">
          <h1>{{product.title}}</h1>
          <h3>Price: {{product.price}}</h3>
          <input type="text" class="text-center col-1 mr-2 p-1" />
          <button type="button" class="btn btn-success" @click="addToCart()">Add To Cart</button>
          <p class="mt-4">{{product.description}}</p>
      </div>

  </div>
</template>

<script>
export default {
    mounted(){
        this.$store.dispatch('getProduct',this.id)
    },
    props:["id"],
    computed:{
        product(){
            return this.$store.state.product
        }
    },

    methods:{
        addToCart(){
            this.$store.dispatch('addProductToCart',{
                product: this.product,
                qty: 1,
            })
        }
    }
}
</script>

<style>

</style>