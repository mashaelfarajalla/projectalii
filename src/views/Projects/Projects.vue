<template>
  <div id="" class="projectpage container-fluid">
    <div class="row">
      <h2>RECENT WORKS</h2>
      <p class="p mb-3">
        It has survived not only five centuries, but also the leap scrambled it
        to make a type.
      </p>
      <!-- <div style="justify-content: center" class="row">
        <div
          class="col-1 inline d-none d-lg-inline mx-3 mt-1"
          style="border-color: #999999"
        ></div>
        <div class="col-1 mb-4" id="circle"></div>
        <div
          class="col-1 inline d-none d-lg-inline mx-3 mt-1"
          style="border-color: #999999"
        ></div>
      </div> -->
      <ul class="">
        <li class="d-inline active" data-class="all"><a href="#all">ALL</a></li>
        <span class="margin">/</span>
        <li class="d-inline" data-class=".print">
          <a href="#print">PRINT DESIGN</a>
        </li>
        <span class="margin">/</span>
        <li class="d-inline" data-class=".animation">
          <a href="#animation">ANIMATION</a>
        </li>
        <span class="margin">/</span>
        <li class="d-inline" data-class=".art"><a href="#art">ART</a></li>
        <span class="margin">/</span>
        <li class="d-inline" data-class=".web">
          <a href="#web">WEB DESIGN</a>
        </li>
        <span class="margin">/</span>
        <li class="d-inline" data-class=".photography">
          <a href="#photography">PHOTOGRAPHY</a>
        </li>
        <span class="margin">/</span>
        <li class="d-inline" data-class=".video"><a href="#video">VIDEO</a></li>
      </ul>
      <div class="container-fluid">
        <div class="shuffle-images">
          <div class="row">
            <div class="web col-6 col-md-3 p-0">
              <div class="port position">
                <img src="../../../public/images/1.png" class="img-fluid" />
                <div class="overlay">
                  <div class="text text1">
                    <div class="borderline"></div>
                    <h5>bootstrap4</h5>
                    <p>web / t-shirt</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="art col-6 col-md-3 p-0">
              <div class="port position">
                <img src="../../../public/images/2.png" class="img-fluid" />
                <div class="overlay">
                  <div class="text text1">
                    <div class="borderline"></div>
                    <h5>T-SHIRT DESIGN</h5>
                    <p>art / t-shirt</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="photography col-6 col-md-3 p-0">
              <div class="port position">
                <img src="../../../public/images/3.png" class="img-fluid" />
                <div class="overlay">
                  <div class="text text1">
                    <div class="borderline"></div>
                    <h5>Note Bools</h5>
                    <p>photography / books</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="web col-6 col-md-3 p-0">
              <div class="port position">
                <img src="../../../public/images/4.png" class="img-fluid" />
                <div class="overlay">
                  <div class="text text1">
                    <div class="borderline"></div>
                    <h5>responsive</h5>
                    <p>web / mobile</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="animation col-6 col-md-3 p-0">
              <div class="port position">
                <img src="../../../public/images/5.png" class="img-fluid" />
                <div class="overlay">
                  <div class="text text1">
                    <div class="borderline"></div>
                    <h5>carving</h5>
                    <p>animation / carving</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="print col-6 col-md-3 p-0">
              <div class="port position">
                <img src="../../../public/images/6.png" class="img-fluid" />
                <div class="overlay">
                  <div class="text text1">
                    <div class="borderline"></div>
                    <h5>Books</h5>
                    <p>print / news</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="print col-6 col-md-3 p-0">
              <div class="port position">
                <img src="../../../public/images/7.png" class="img-fluid" />
                <div class="overlay">
                  <div class="text text1">
                    <div class="borderline"></div>
                    <h5>Catalogs</h5>
                    <p>print / t-mobiles</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="video col-6 col-md-3 p-0">
              <div class="port position">
                <img src="../../../public/images/8.png" class="img-fluid" />
                <div class="overlay">
                  <div class="text text1">
                    <div class="borderline"></div>
                    <h5>Show</h5>
                    <p>video / screens</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    // Start portfolio

    $(".projectpage ul li").on("click", function () {
      $(this).addClass("active").siblings().removeClass("active");

      if ($(this).data("class") === "all") {
        $(".shuffle-images .col-md-3").delay(300).fadeIn();
      } else {
        $(".shuffle-images .col-md-3").fadeOut();
        $($(this).data("class")).delay(300).fadeIn();
      }
    });

    // End portfolio

    $(".portfolio.port").hover(
      function () {
        $(this).children(".overlay").fadeIn();
      },
      function () {
        $(this).children(".overlay").fadeOut();
      }
    );
  },
};
</script>

<style></style>
