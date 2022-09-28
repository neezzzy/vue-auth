<template>
  <n-card title="Messages">
    <n-list
      hoverable
      clickable
      v-for="(message, index) in this.$store.state.messages"
      v-bind:key="index"
    >
      <n-list-item>
        <router-link :to="'message/' + index">
          <n-li>
            {{ message }}
          </n-li>
        </router-link>
      </n-list-item>
    </n-list>
  </n-card>
</template>

<script>
export default {
  async created() {
    this.$store.dispatch("getMessages");
  },
};
</script>
