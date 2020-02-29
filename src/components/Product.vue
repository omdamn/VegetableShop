<template>
    <div id="product">
        <!-- <b-container class="bv-example-row">
            <b-row cols="1" cols-sm="2" cols-md="3" cols-lg="5"> -->
            <!-- <b-col v-for="(item,key) in products" :key="key"  class="mb-3" > -->
            <b-col class="mb-3">
                <img class="productimg" :src="require(`@/assets/${item.id}.jpg`)" />
                <p><strong>{{item.name}}</strong></p>
                <strong>$ {{item.price}}</strong>
                <p>Stock：{{item.stock}}</p>
                <b-form-spinbutton class="mt-2" v-model="qty" min="1" :max="item.stock" size="sm"></b-form-spinbutton>
                <b-button @click="addToCart(item, qty)" class="mt-2 form-control" variant="success" size="sm">Add to Cart</b-button>          
            </b-col>
            <!-- </b-row>
        </b-container> -->
    </div>    
</template>


<script>
// import {  mapMutations } from 'vuex'

export default {
    name: 'product',
    // computed: mapState({
    //     products: state => state.product
    // }),
    props:['item'],
    data:function(){
        return{ qty:1 }
    },
    methods: {
        // ...mapMutations([ //也可用這方法
        //     'addToCart'
        // ])
        addToCart(item, qty){
            this.$store.commit('addToCart',{p:item, qty:qty})
        }
    }
}
</script>

<style>
.productimg {
    opacity: 1;
    display: block;
    width: 100%;
    height: auto;
}
</style>