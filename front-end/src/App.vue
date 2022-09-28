<template>
  <n-grid x-gap="12" :cols="1">
    <n-gi style="margin: 10px">
      <PostMessage style="margin-bottom: 10px" />
      <MessagesList />
    </n-gi>
  </n-grid>
</template>

<script>
import MessagesList from "./components/MessagesList.vue";
import PostMessage from "./components/PostMessage.vue";

export default {
  components: {
    MessagesList,
    PostMessage,
  },
};
</script>
