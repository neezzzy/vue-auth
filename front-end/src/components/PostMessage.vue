<template>
  <n-card title="New Message">
    <n-form>
      <n-form-item>
        <n-input v-model:value="newMessage" placeholder="Message" />
      </n-form-item>
      <div style="display: flex; justify-content: flex-start">
        <n-button round type="primary" @click="submit">Submit</n-button>
      </div>
    </n-form>
  </n-card>
</template>
<script>
export default {
  data() {
    return {
      newMessage: "",
    };
  },
  methods: {
    async submit() {
      try {
        this.$store.dispatch("newMessage", this.newMessage);
        this.newMessage = "";
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style></style>
