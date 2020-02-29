<template>
  <div id="app">
    <cart />
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<script>
import cart from './components/cart'
export default {
  components:{
    cart
  }
}
</script>

<style>
 @import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC|Trade+Winds&display=swap');

* {
  font-family: 'Noto Sans TC';
} 

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #424141;
  background-color: rgb(255, 255, 255);
}

#nav {
  padding: 30px;
  background-color: #0F1020;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
}

#nav a {
  font-weight: bold;
  color: #3C4080;
}

#nav a.router-link-exact-active {
  color: rgb(174, 178, 255);
}
</style>
