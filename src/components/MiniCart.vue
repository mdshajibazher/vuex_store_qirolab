<template>
<div>
<a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Cart <span class="badge bg-danger">{{totalcart}}</span></a>
   <ul class="dropdown-menu p-3">
      <li v-for="(item,index) in cart" :key="item.product.id"><strong>{{item.product.title}}</strong> <br> <p> {{item.qty}}x{{item.product.price}} <a @click.prevent="removeProductFromCart(item.product)" class="badge bg-danger">x</a></p> <hr></li>
      <li>
          <b>Total </b> : {{totalPrice}}
      </li>

    </ul>
</div>
</template>

<script>
export default {
    mounted(){
        this.$store.dispatch('getCartItem')
    },
    methods:{
        removeProductFromCart(product){
            this.$store.dispatch('removeProductFromCart',product)
        }
    },
    computed:{
        cart(){
            return this.$store.state.cart
        },

        totalcart(){
            return this.$store.getters.CartItemCount;
        },
        totalPrice(){
            return this.$store.getters.CartTotalPrice;
        }
    }
}
</script>

<style>

</style>