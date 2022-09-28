<template>
  <n-card title="Messages">
    <n-list hoverable clickable v-for="(message, i) in messages" v-bind:key="i">
      <n-list-item>
        <n-li>
          {{ message }}
        </n-li>
      </n-list-item>
    </n-list>
  </n-card>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      messages: [],
    };
  },
  async created() {
    this.emitter.on("updateMessages", (message) => {
      this.messages.push(message);
    });
    this.messages = (await axios.get("http://localhost:3000/messages")).data;
  },
};
</script>
