<template>
  <div>Loading.............</div>
</template>

<script>
import eventBus from "../../event-bus";
import authService from "../../auth/authService";

export default {
  name: "callback",
  methods: {
    handleLogin() {
      this.$router.push("/about");
    }
  },
  created() {
    authService.handleAuthentication();
    eventBus.$on("login", () => this.handleLogin());
  }
};
</script>

<style scoped></style>
