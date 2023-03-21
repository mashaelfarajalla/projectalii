<template>
  <nav class="navbar menuSection navbar-expand-lg navbar-light p-0">
    <div class="container-fluid bg-white">
      <a class="navbar-brand" href="#"
        ><img class="logo" src="../../public/images/logo.png" style=""
      /></a>
      <!-- <ul class="navbar-nav d-sm-flex flex-row d-lg-none">
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="fa-solid fa-globe"></i>
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="fa-regular fa-circle-user"></i>
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
          </ul>
        </li>
      </ul> -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-center"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav me-5 mb-2 mb-lg-0">
          <li v-for="item in navbars" :key="item.id" class="nav-item mx-2">
            <router-link
              :to="{ name: item.router }"
              class="nav-link active"
              aria-current="page"
              href="#"
              >{{ item.navbar }}</router-link
            >
          </li>
        </ul>
        <form
          class="d-flex align-items-center justify-content-center"
          style="position: relative"
        >
          <input
            class="form-control col-md-3 col-lg-4 me-2"
            type="search"
            placeholder=""
            aria-label="Search"
          />
          <span>البحث عن الوظيفة</span>

          <!-- <button class="btn btn-outline-success" type="submit">Search</button> -->
          <!-- <ul class="navbar-nav none">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fa-solid fa-globe"></i>
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="../../public/indexArt.html"
                    >Arabic
                  </a>
                </li>
                <li><a class="dropdown-item" href="#">English</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fa-regular fa-circle-user"></i>
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
              </ul>
            </li>
          </ul> -->
        </form>

        <button class="btn btn-outline-success" type="submit">ابدأ الان</button>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      navbars: [
        { id: 1, navbar: "الرئيسية", router: "Home" },
        { id: 2, navbar: "المشاريع", router: "Home" },
        { id: 3, navbar: "المستقلين", router: "FreeLancer" },
        { id: 4, navbar: "من نحن", router: "About" },
        { id: 5, navbar: "المجموعات", router: "Home" },
        { id: 6, navbar: "تواصل معنا", router: "CountactUs" },
      ],
    };
  },
};
</script>
<style>
.menuSection.fixed-top {
  box-shadow: 0 4px 23px 3px #e0e0e0;
}

nav.navbar div.container-fluid {
  padding: 20px 25px;
}

nav form input.form-control {
  border: 1px solid #ced4da;
  border-radius: 25px !important;
  outline: none;
  color: #03114c;
}

nav form span {
  color: rgb(177 177 177);
  position: absolute;
  left: auto;
  right: 10px;
  pointer-events: none;
  padding: 14px 17px;
  transition: 0.5s;
  font-size: 1em;
}

nav form input:focus ~ span {
  color: #03114c;
  font-weight: bold;
  transform: translateX(10px) translateY(-7px);
  padding: 0 17px;
  top: 0px;
  right: 35px;
  background-color: white;
}

.navbar .navbar-nav .nav-link {
  color: #796d6d;
  font-weight: 400;
  font-size: 18px;
}

.navbar .navbar-nav a:hover,
.navbar .navbar-nav a.router-link-exact-active {
  color: #1436c8 !important;
}

nav button.btn-outline-success:hover,
.homesection1 button.btn-outline-success:hover {
  background-color: white;
  border: 2px solid #03114c;
  color: #03114c;
}

nav i {
  font-size: 20px;
  margin: 0 10px;
  color: #03114c;
}

nav ul.dropdown-menu {
  border: 2px solid rgba(0, 0, 0, 0.15);
  border-radius: 25px;
}

@media screen and (min-width: 992px) {
  nav .logo {
    width: 190px;
    height: 50px;
  }
}

@media screen and (max-width: 767px) {
  /* form .none {
    display: none;
  } */

  .navbar-nav .dropdown-menu {
    position: absolute;
    left: -30px;
  }

  nav .logo {
    width: 105px;
    height: 35px;
  }
  nav button.btn-outline-success {
    margin: 10px auto !important;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

@media screen and (min-width: 768px) and (max-width: 991px) {
  nav .logo {
    width: 190px;
    height: 50px;
  }

  /* form .none {
    display: none;
  } */

  .navbar-nav .dropdown-menu {
    position: absolute;
    left: -30px;
  }
  nav button.btn-outline-success {
    margin: 20px auto !important;
    justify-content: center;
    display: flex;
  }
}
</style>
