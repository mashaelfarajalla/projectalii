<template>
  <div class="mx-auto mt-5 backgroundcolor">
    <div class="container" style="position: relative">
      <div class="row">
        <div class="col">
          <h1>كن على تواصل معنا</h1>
        </div>
      </div>
      <div class="row mt-5 justify-content-center">
        <div class="col-auto">
          <h3 class="text-center">إرسال استفسار</h3>
          <p class="p">
            الأسئلة والتعليقات هي مهمة بالنسبة لنا. يرجى ملء النموذج أدناه
          </p>
        </div>
      </div>
      <div class="row">
        <div class="card">
          <form class="form-card" onsubmit="event.preventDefault()">
            <div class="row justify-content-between text-left">
              <div class="form-group col-sm-6 flex-column d-flex">
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  class="px-3"
                  placeholder="الاسم الكامل *"
                  onblur="validate(1)"
                />
              </div>
              <div class="form-group col-sm-6 flex-column d-flex">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder=" البريد الالكتروني *"
                  onblur="validate(2)"
                />
              </div>
            </div>
            <div class="row justify-content-between text-left">
              <div class="form-group col-sm-6 flex-column d-flex">
                <select
                  class="form-select"
                  aria-label="Default select example"
                  onblur="validate(3)"
                >
                  <option selected>بلد الاقامة</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div class="form-group col-sm-6 flex-column d-flex">
                <input
                  type="text"
                  id="mob"
                  name="mob"
                  placeholder=" الهاتف *"
                  onblur="validate(4)"
                />
              </div>
            </div>

            <div class="row justify-content-between text-left">
              <div class="form-group col-sm-6 flex-column d-flex">
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="العنوان"
                  onblur="validate(5)"
                />
              </div>
              <div class="form-group col-sm-6 flex-column d-flex">
                <input
                  type="text"
                  id="job"
                  name="job"
                  placeholder="الفعالية"
                  onblur="validate(5)"
                />
              </div>
            </div>

            <div class="row justify-content-between text-left">
              <div class="form-group col-sm-6 flex-column d-flex">
                <!-- <textarea id="message" class="form-input" placeholder="الرسالة*"  type="text"> الرسالة</textarea> -->
                <input
                  type="text"
                  id="ans"
                  name="ans"
                  class="height"
                  placeholder="الرسالة*"
                  onblur="validate(5)"
                />
              </div>
            </div>

            <div class="row justify-content-end">
              <div
                class="form-group col-sm-6 d-flex align-items-center justify-content-center"
              >
                <button type="submit" class="btn btn-block btn-light">
                  ارسال
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      information: [
        { id: 1, icon: "fa-solid fa-location-dot", title: "فلسطين" },
        { id: 2, icon: "fa-solid fa-envelope", title: "فلسطين" },
        { id: 3, icon: "fa-solid fa-phone-flip", title: "فلسطين" },
      ],
    };
  },
};
</script>

<style>
@media screen and (min-width: 992px) {
  .backgroundcolor {
    padding: 120px 45px;
  }
}

@media screen and (max-width: 767px) {
}

@media screen and (min-width: 768px) and (max-width: 991px) {
}

.backgroundcolor h3,
.backgroundcolor .p {
  color: rgb(1, 6, 60);
}

.backgroundcolor .card {
  padding: 30px 40px;
  margin-top: 60px;
  margin-bottom: 60px;
  border: none !important;
  background-color: #3a4665;
  box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.2);
}

.height {
  height: 90px;
}

.backgroundcolor .form-control-label {
  margin-bottom: 0;
}

.backgroundcolor button {
  padding: 8px 15px;
  border-radius: 5px !important;
  margin: 5px 0px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  font-size: 18px !important;
  font-weight: 300;
  /* background-color: white; */
}

.backgroundcolor input,
.backgroundcolor textarea {
  color: white;
  padding: 8px 15px;
  background-color: transparent;
  border-radius: 5px !important;
  margin: 5px 0px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  font-size: 18px !important;
  font-weight: 300;
}

.backgroundcolor input::placeholder {
  color: white;
}

.backgroundcolor .form-select {
  border-radius: 5px !important;
  margin: 5px 0px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  font-size: 18px !important;
  font-weight: 300;
  border-radius: 5px !important;
  padding: 8px 15px;
  color: white;
  background-color: transparent;
}

.backgroundcolor option {
  /* background-color: black; */
  background-color: white;
  color: #3a4665;
}

.backgroundcolor input:focus,
.backgroundcolor textarea:focus {
  -moz-box-shadow: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  border: 1px solid #00bcd4;
  outline-width: 0;
  font-weight: 400;
}

.backgroundcolor .btn-block {
  text-transform: uppercase;
  font-size: 15px !important;
  font-weight: 400;
  height: 48px;
  cursor: pointer;
  width: 102px;
}

.backgroundcolor .btn-block:hover {
  color: #fff !important;
  background-color: black;
  border: black;
}

.backgroundcolor button:focus {
  -moz-box-shadow: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  outline-width: 0;
}
</style>
