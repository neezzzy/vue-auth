<template>
  <n-card title="Message">
    <n-list>
      <n-list-item>
        <n-li>
          {{ messageBody }}
        </n-li>
      </n-list-item>
    </n-list>
  </n-card>
</template>
<script>
export default {
  data() {
    return {
      messageBody: "",
    };
  },
  async created() {
    const response = await this.$store.dispatch(
      "getMessage",
      this.$route.params.id
    );
    this.messageBody = response.data;
  },
};
</script>
<style></style>
