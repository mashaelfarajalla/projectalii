<template>
  <div
    class="text-white startnow"
    style="background: linear-gradient(289deg, #5b5f6e, #021562)"
  >
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <div class="col-lg-4">
          <h4>تصفح المشاريع</h4>
          <p>ابدأ الان لرؤية المزيد من الخدمات</p>
        </div>
        <div class="col-lg-3">
          <button class="btn btn-outline-success" type="submit">
            ابدأ الان
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
@media screen and (min-width: 992px) {
  .startnow .container {
    padding: 132px 108px;
  }
}

@media screen and (max-width: 767px) {
  .startnow .container {
    padding: 132px 35px;
  }
}

@media screen and (min-width: 768px) and (max-width: 991px) {
  .startnow .container {
    padding: 132px 108px;
  }
}

.startnow .btn-outline-success {
  background: white;
  color: rgb(0, 0, 54);
  font-weight: bold;
  border: 2px solid rgb(0, 0, 54);
  border-radius: 15px;
  width: 160px;
  margin: 0 15px;
}
.startnow .btn-outline-success:hover {
  background: transparent;
  color: white;
  border: 2px solid white;
}
</style>
