<template>
  <section class="ads">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      fill="currentColor"
      class="bi bi-chevron-compact-down"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"
      />
    </svg>

    <div class="contant"></div>
  </section>
</template>

<script>
export default {
  mounted() {
    const faqs = document.querySelectorAll(".ads");
    faqs.forEach((faq) => {
      faq.addEventListener("click", () => {
        faq.classList.toggle("active");
      });
    });
  },
  // methods:{
  //   AbsAction(){

  //   }
  //}
};
</script>

<style>
.ads {
  position: fixed;
  bottom: 0px;

  width: 100%;
  /* z-index: 100; */
  z-index: 1;

  display: flex;
  flex-direction: column;
  align-items: start;

  animation: fade 2s ease-in;
}

.contant {
  background-color: #eaedef;
  height: 130px;
  width: 100%;
  max-height: 130px;
}

.ads.active .contant {
  max-height: 0px;
  overflow: hidden;
  transition: max-height 2s ease-out;
}

.ads.active svg {
  transform: rotate(180deg);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.ads svg path {
  fill: black;
}

.ads svg {
  width: 60px;

  transition: transform 0.5 ease-in;
  background-color: #eaedef;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding: 0px 20px;
}

@keyframes fade {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>
