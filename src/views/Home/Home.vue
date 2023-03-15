<template>
  <section1Vue />
  <section2Vue />
  <section3Vue />
  <section5Vue />
  <section4Vue />

  <FormVue />
</template>

<script>
import section1Vue from "./Section1.vue";
import section2Vue from "./Section2.vue";
import section3Vue from "./Section3.vue";
import section4Vue from "./Section4.vue";
import section5Vue from "./Section5.vue";
import FormVue from "./Form.vue";

export default {
  components: {
    section1Vue,
    section2Vue,
    section3Vue,
    section4Vue,
    section5Vue,
    FormVue,
  },
};
</script>

<style></style>
