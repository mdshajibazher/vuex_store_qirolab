<template>
    <div>
  <ul class="nav bg-light justify-content-center">
  <li class="nav-item">
     <router-link class="nav-link" to="/">Home</router-link>
  </li>
  <li class="nav-item">
     <router-link class="nav-link" to="/about">About</router-link>
  </li>
    <li @click="$event.stopPropagation()">
        
        <mini-cart/>
    </li>
</ul>

</div>

</template>

<script>
import MiniCart from './MiniCart'

export default {
    components: {
        MiniCart
    }
}
</script>

<style>

</style>