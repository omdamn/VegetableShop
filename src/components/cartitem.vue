<template>
    <div>
        <div class="container">
            <div @click="removeFromCart(k)">
                <img class="cartimg" :src="require(`@/assets/${item.id}.jpg`)" width="50em" height="50em" />{{item.name}}
                <div class="middle">
                        <div role="button"><b-icon-x scale="3"></b-icon-x></div>
                    </div>
                </div>
            </div>
            <div style="display:flex;">                        
                <b-select size="sm" v-model="item.qty" style="width:5em;" class="mr-4" :options="options(item.stock)" :stock="item.stock">                                 
                </b-select>                     
            </div>
        <div>${{item.price}}</div>                           
    </div>    
</template>

<script>

import {mapMutations} from 'vuex'

export default {
    name:'cartItem',
    props:['item','k'],
    computed: {  
        options(){
            return function(stock){                   
                var s = [];
                for (var i=1; i<=stock; i++){
                    s.push({ value:i, text: i.toString()})
                }
                return s
            }            
        },

        

    },
    methods:{
        ...mapMutations({
            removeFromCart:'removeFromCart'
        })
    }
    
   
}
</script>

<style>


.cartimg {
    opacity: 1;

    display: block;
    width: 100%;
    height: auto;
    transition: .5s ease;
    backface-visibility: hidden;
}


.container {
  position: relative;
  width: 20%;
}

.middle {
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 40%;
  left: 45%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}

.container:hover .cartimg {
  opacity: 0.3;
}

.container:hover .middle {
  opacity: 1;
}

.text {
  background-color: rgb(76, 175, 80);
  color: white;
  font-size: 16px;
  padding: 16px 32px;
}
</style>