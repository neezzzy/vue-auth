<template lang="">
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
import axios from "axios";
export default {
  data() {
    return {
      newMessage: "",
    };
  },
  methods: {
    async submit() {
      try {
        let msg = await axios.post("http://localhost:3000/messages", {
          message: this.newMessage,
        });

        msg = msg.data;
        this.emitter.emit("updateMessages", msg);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style lang=""></style>
