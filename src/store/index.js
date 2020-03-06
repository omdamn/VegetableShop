import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {  //這裡放狀態
    product:[
     {'id':'1','name':'玉米','price':25,'stock':5 ,'src':'./src/assets/1.jpg'}
    ,{'id':'2','name':'蘆筍','price':50,'stock':50,'src':'../assets/2.jpg'}
    ,{'id':'3','name':'紅蘿蔔','price':10,'stock':12,'src':'../assets/3.jpg'}
    ,{'id':'4','name':'蘋果','price':15,'stock':25 ,'src':'../assets/4.jpg'}
    ,{'id':'5','name':'花椰菜','price':40,'stock':3 ,'src':'../assets/5.jpg'}
    ,{'id':'6','name':'土豆','price':12,'stock':30 ,'src':'../assets/6.jpg'}
  ],
    cart:[],
    cartSubTotal: 0,
    cartTax: 0
  },
  mutations: { //這裡放觸發狀態改變的方法   只能是同步
    addToCart(state,data){
      var p = data['p']
      var qty = data['qty']
      var in_cart = false
      for(var i=0; i<state.cart.length; i++){
        if (state.cart[i].id === p.id){
            var q = qty + state.cart[i].qty;
            if (q > state.cart[i].stock) {
              alert('超過庫存量');
              in_cart = true;
              break;
            }
            var added_itno = state.cart[i];
            added_itno['qty'] = q;            
            Vue.set(state.cart, i, added_itno); //還可以寫成app.$set(app.cartItem, i, added_itno)  /  this.$set(app.cartItem, i, added_itno)
            in_cart = true;
            break;
        }
      }

      if (!in_cart){
        state.cart.push({id:p.id, name:p.name , price:p.price , qty:qty, stock:p.stock, src:p.src });
      }
    },

    removeFromCart(state,key){
      state.cart.splice(key, 1)
    },

    checkout(state){
      alert('購買成功');     
      // const pid = Object.values(state.product).map(item => item.id);      
      for(var i=0; i<state.cart.length; i++){
        var pid =state.product.find((item) => {
          return item.id == state.cart[i].id
        })
        pid.stock = pid.stock - state.cart[i].qty
      }
      state.cart = []
    }
  },
  actions: {  //類似mutations，但它提交的是mutation，不是state，且它可以異步操作
  },
  modules: {
  },
  getters: {  //可以想成store的computed
    cartTotal(state){
      let total = 0
      for(var i=0; i<state.cart.length; i++){
        total += state.cart[i].qty*state.cart[i].price*1.05
      }
      return total
    },
    taxTotal(state){
      let tax = 0
      for(var i=0; i<state.cart.length; i++){
        tax += state.cart[i].qty*state.cart[i].price*0.05
      }
      return tax
    }
  }
  
})
