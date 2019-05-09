<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="callAPI">Call API</button>
    <h2>{{ greeting }}</h2>
  </div>
</template>

<script>
import axios from "axios";
import authService from "../../auth/authService";

export default {
  name: "about",
  data() {
    return {
      greeting: "",
      accessToken: null
    };
  },
  created() {
    this.accessToken = authService.accessToken;
  },
  methods: {
    callAPI() {
      axios({
        method: "GET",
        url: "http://localhost:8888/helloworld",
        headers: { authorization: `Bearer ${this.accessToken}` }
      })
        .then(resp => {
          this.greeting = resp.data;
        })
        .catch(err => {
          this.greeting = err;
        });
    }
  }
};
</script>
