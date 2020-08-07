<template>
  <div>
    <h1>Connexion </h1>
    <input name="email" id="email" class="btn btn-primary" type="text" v-model="email">
    <br>
    <input name="password" id="password" class="btn btn-primary" type="password" v-model="password">
    <button @click="login" type="submit">Soumettre</button>
    <h4 class="error" v-html="error"> </h4>
      
  </div>
</template>

<script>
  import AuthService from '../services/AuthServices';

export default {
  data(){
    return {
      email : 'abc@gmail.com',
      password:'1234aaaa',
      error:'--'}
  },
  methods:{
    async login(e){
      e.preventDefault();
        try {
          const response = await AuthService.login({email:this.email,password:this.password});
          const {user,token} = response.data;
          console.log("Le token est : ",token);

          this.$store.dispatch('setToken',token);
          this.$store.dispatch('setUser',user);
        } catch (result) {
          this.error = result.response.data.error
          console.log("The value ",result.response.data.error);
          
        }
    },
  },
  watch : {
    email(value){
      console.log("L'email a changé ",value);
    }
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
.error{
  color:red;
}
</style>
