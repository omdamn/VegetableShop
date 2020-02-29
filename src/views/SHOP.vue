<template>
  <div class="about">
    <div class="header">
      <h1><strong>Vegetable Shop</strong></h1>
    </div>
    <div class="container">
          <b-row cols="1" cols-sm="2" cols-md="3" cols-lg="5">
          <Product v-for="(item,key) in products" :key="key" :item='item' v-show="item.stock>0"  class="mb-3"/>             
          </b-row>
      </div>
  </div>
</template>

<script>
import Product from '@/components/Product.vue'
import { mapState } from 'vuex'

export default {
  name:'about',
  
  components:{
    Product
  },
  computed: mapState({
      products: state => state.product
  })
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Concert+One&display=swap');
.header {
  padding: 60px 60px 60px 60px;  
  background-image: url('../assets/background.png');
  background-color: #e9e9e9;
  color: #fdfdfd;
  text-shadow: rgb(36, 36, 36) 0em 0em 0.5em; /*right bottom */ 
  font-family: 'Concert One', ;
}
</style>