<template>
  <div class="container">
    <div class="row">
      <div></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      project: [],
    };
  },
  async mounted() {
    let result = await axios.get(
      "http://localhost:3000/projects/" + this.$route.params.id
    );
    this.project = result.data;
    console.log(this.project);
  },
};
</script>

<style></style>
