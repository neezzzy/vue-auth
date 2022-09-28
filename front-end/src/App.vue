<template>
  <n-config-provider>
    <n-menu
      v-model:value="activeKey"
      mode="horizontal"
      :options="menuOptions"
    />
    <n-grid :cols="1">
      <n-gi>
        <router-view />
      </n-gi>
    </n-grid>
  </n-config-provider>
</template>

<script>
import { defineComponent, h } from "vue";
import { RouterLink } from "vue-router";

const menuOptions = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: "/",
          },
        },
        { default: () => "Messages" }
      ),
    key: "messages",
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: "/new-message",
          },
        },
        { default: () => "New Message" }
      ),
    key: "new-message",
  },

  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: "/login",
          },
        },
        { default: () => "Login" }
      ),
    key: "login",
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: "/register",
          },
        },
        { default: () => "Register" }
      ),
    key: "register",
  },
];

export default defineComponent({
  setup() {
    return {
      menuOptions,
    };
  },
});
</script>
