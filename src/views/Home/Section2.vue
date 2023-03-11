<template>
  <div
    class="bg-white homesection2 d-flex align-items-center justify-content-center"
  >
    <div class="container">
      <div class="row">
        <div class="col-lg-6 text-start">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut erat
            bibendum ornare urna, cursus eget convallis. Feugiat imperdiet
            posuere justo, ultrices interdum sed orci nunc, mattis. Ipsum
            viverra viverra neque adipiscing arcu, quam dictum. Dui mi viverra
            dui, sit accumsan, tincidunt massa. Dui cras magnis.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <router-link
            :to="(name = 'About')"
            class="d-flex align-items-center justify-content-end"
            ><div class="lineseeall mx-3"></div>
            See All
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
