<template>
    <div class="cart">        
        <div @click="showcart = !showcart">
            {{carts.length>0? carts.length:''}}
            <!-- <b-icon-bucket-fill scale="2" variant="light"></b-icon-bucket-fill> -->
            <img src="../assets/shopping-cart.png" />
        </div>    
        <transition name="slide-fade">
        <div :class="showcart? 'sidenav show':'sidenav' " >
            <b-icon-arrow-right scale="1.5" @click="showcart = !showcart"></b-icon-arrow-right>
            <div class="cartlist">      
                <CARTITEM v-for="(item,key) in carts" :key="key" class="cartitem mt-4" :item="item" :k="key"/>                         
                <hr style="background-color:#000000;">
            </div>
            <div class="cartlist">
                <h6 style="text-align:right;">Taxes:${{tax}}</h6>
                <h5 style="text-align:right;">Totals:${{cartTotal}}</h5>                
                <b-button v-show="cartTotal > 0" variant="success" class="form-control" @click="checkout">Check out</b-button>                
            </div>
        </div>
        </transition>
    </div>    
</template>

<script>
import { mapState, mapGetters, mapMutations} from 'vuex'
import CARTITEM from '@/components/cartitem.vue'

export default {
    name:'cart',
    components:{CARTITEM},
    data:function(){
        return{
            showcart:false            
        }
    },
    computed: {        
        ...mapState({
            carts: state => state.cart    
        }),

        ...mapGetters({
            cartTotal: 'cartTotal',
            tax: 'taxTotal'
        }),

        

    },   
    methods:{
        ...mapMutations({
            checkout: 'checkout'
        })
    }
}
</script>

<style>
.cart {
    width: 3.5rem;
    height: 3rem;
    color: rgb(65, 57, 57);
    position: fixed;
    top: 15px;
    right: 15px;
    border-radius: 50%;
    z-index: 1;
    transition-property: width, height;
    transition-duration: .3s;
}

.cart svg {
    margin-top: 15px;
    margin-left: 13px;
}



.sidenav {
     background:#d3e0d3;
     box-shadow:2px 2px 6px 6px rgba(0,0,0,.3);
     display:block;
     font-size:16px;
     font-weight:400;
     height:100%;
     right:0;
     position:fixed;
     overflow:auto;
     transition-duration:.5s;
     transition-property: width;
     transform:translate(0,0);     
     top:0;
     width:0px;
     z-index:999;
}

.sidenav.show {
    width:280px;
    transition-duration:.5s;
    transition-property: width; 
}

.cartitem {
    display: flex;
    align-items: center;
    margin-top: 10px;
}

.cartlist {
    padding: 15px;
}




</style>