<template>
  <div
    class=""
    style="
      position: fixed;
      top: 225px;
      left: 0px;
      display: flex;
      flex-direction: column;
    "
  >
    <a
      href="#"
      class="mt-1"
      v-for="item in SocialContact"
      :key="item.id"
      style="background: #151719; color: white; padding: 8px"
    >
      <i :class="item.icon" style="font-size: 15px"></i
    ></a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      SocialContact: [
        { id: 1, icon: "fa-brands fa-facebook-f" },
        { id: 2, icon: "fa-brands fa-twitter" },
        { id: 3, icon: "fa-brands fa-instagram" },
      ],
    };
  },
};
</script>

<style></style>
