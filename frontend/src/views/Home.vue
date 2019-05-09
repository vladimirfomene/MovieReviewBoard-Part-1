<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" /><br/>
		<button @click="login">Login</button>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import authService from "../../auth/authService";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  methods: {
    login() {
      authService.login();
    }
  }
};
</script>
