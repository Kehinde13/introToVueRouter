
<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link :to="{name: 'About'}">About</router-link>
    <router-link :to="{name: 'Jobs'}">Jobs</router-link>
  </div>

  <button @click="forward">Go Forward</button>
  <button @click="redirect">Redirect</button>
  <button @click="backward">Go Back</button>
  <router-view/>
</template>

<script>
   export default {
     methods: {
      forward(){
        this.$router.go(1)
      },
      redirect(){
        this.$router.push({name: 'Home'})
      },
      backward(){
        this.$router.go(-1)
      }
     }
   }
</script>

<style>

  #app{
    text-align: center;
  }
   #nav {
    padding: 30px;
   }

   #nav a{
    font-weight: bold;
    color: black;
    text-decoration: none;
    padding: 10px;
    border-radius: 4px;
   }

   #nav a.router-link-exact-active{
    color: white;
    background: crimson;
   }
</style>
