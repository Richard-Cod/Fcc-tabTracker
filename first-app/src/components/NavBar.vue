<template>
      <div style="width:100%;display:flex" id="nav">
        <div>
            <router-link v-if="true" to="/">Accueil</router-link> |
            <router-link v-if="true" to="/songs">Liste de songs</router-link> |
            <router-link v-if="true" to="/about">A propos</router-link>

        </div>
        <div style="margin:0 50px">
                <router-link v-if="$store.state.isUserLoggedIn"  to="/inscription">Inscription</router-link> |
                <router-link v-if="$store.state.isUserLoggedIn"  to="/connexion">Connexion</router-link> |
                <button @click="logout" v-if="$store.state.isUserLoggedIn">Se deconnecter</button>
        </div>


    </div>
</template>

<script>

export default {
  data(){
    return {
      email : 'abc@gmail.com'
      }
  },
  methods:{
    logout(){
          this.$store.dispatch('setToken',null);
          this.$store.dispatch('setUser',null);
          this.$router.push({
              name : "home"
          })
    }
  },
  watch : {
  },
  mounted(){
    setTimeout(() => {
      console.log("Le component est mounted ");
    }, 3000);
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
