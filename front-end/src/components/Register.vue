<template>
  <n-card title="Register">
    <n-form>
      <n-form-item>
        <n-input v-model:value="userName" placeholder="Type your username" />
      </n-form-item>
      <n-form-item>
        <n-input v-model:value="password" placeholder="Type your password" />
      </n-form-item>
      <div style="display: flex; justify-content: flex-start">
        <n-button round type="primary" @click="register">Register</n-button>
      </div>
    </n-form>
  </n-card>
</template>
<script>
export default {
  data() {
    return {
      userName: "",
      password: "",
    };
  },
  methods: {
    async register() {
      this.$store.dispatch("register", {
        username: this.userName,
        password: this.password,
      });
    },
  },
};
</script>
<style></style>
