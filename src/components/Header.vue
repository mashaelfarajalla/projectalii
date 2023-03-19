<template>
  <nav class="navbar menuSection navbar-expand-lg navbar-light p-0">
    <div class="container-fluid bg-white">
      <a class="navbar-brand" href="#"
        ><img class="logo" src="../../public/images/logo.png" style=""
      /></a>
      <ul class="navbar-nav d-sm-flex flex-row d-lg-none">
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
      </ul>
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
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-5 mb-2 mb-lg-0">
          <li v-for="item in navbars" :key="item.id" class="nav-item">
            <router-link
              :to="{ name: item.router }"
              class="nav-link active"
              aria-current="page"
              href="#"
              >{{ item.navbar }}</router-link
            >
          </li>
        </ul>
        <form class="d-flex align-items-center justify-content-center">
          <input
            class="form-control me-2"
            type="search"
            placeholder="البحث عن الوظيفة"
            aria-label="Search"
          />

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
      ],
    };
  },
};
</script>
