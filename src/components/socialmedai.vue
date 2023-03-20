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
      style="
        display: flex;
        background: rgb(255 255 255);
        color: blue;
        width: 41px;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        border: 3px solid #000e7f;
        height: 41px;
        box-shadow: 0px 0px 7px 0px #868687;
      "
    >
      <i :class="item.icon" style="font-size: 19px"></i
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
