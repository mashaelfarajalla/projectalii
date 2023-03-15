<template>
  <div class="container px-1 py-5 mx-auto backgroundcolor mt-5">
    <div class="row d-flex justify-content-center">
      <div class="col-xl-10 col-lg-8 col-md-9 col-11 text-center">
        <h3>إرسال استفسار</h3>
        <p class="p">
          الأسئلة والتعليقات هي مهمة بالنسبة لنا. يرجى ملء النموذج أدناه
        </p>
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
              <div class="form-group col-sm-6">
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
export default {};
</script>

<style></style>
