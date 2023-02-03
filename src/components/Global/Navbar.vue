<template>
  <div class="dash-nav">
    <div class="nav d-flex justify-content-center">
      <h1 class="mt-3">Amit</h1>
      <p class="circle mt-3"></p>
      <div
        class="navbar-collapse d-flex justify-content-center mt-5"
        id="navbarNav"
      >
        <ul class="navbar-nav" @click="clickedlink">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link dafault-link">
              <i class="fa-regular fa-chart-bar fa-fw me-2"></i
              ><span>Dashboard</span>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/settings" class="nav-link">
              <i class="fa-solid fa-gear fa-fw me-2"></i>
              <span>Settings</span>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/profile" class="nav-link">
              <i class="fa-regular fa-user fa-fw me-2"></i>
              <span>Profile</span>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/projects" class="nav-link"
              ><i class="fa-solid fa-diagram-project fa-fw me-2"></i>
              <span>Projects</span>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/courses" class="nav-link"
              ><i class="fa-solid fa-graduation-cap fa-fw me-2"></i>
              <span>Courses</span>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/friends" class="nav-link"
              ><i class="fa-regular fa-circle-user fa-fw me-2"></i>
              <span>Friends</span></RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink to="/files" class="nav-link">
              <i class="fa-regular fa-file fa-fw me-2"></i>
              <span>Files</span></RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink to="/plans" class="nav-link"
              ><i class="fa-regular fa-credit-card fa-fw me-2"></i>
              <span>Plans</span>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDefault: true,
    };
  },
  methods: {
    clickedlink(e) {
      this.isDefault = !this.isDefault;
      e.target.classList.add("active");
      let default_link = document.querySelector(".dafault-link");
      if (!this.isDefault) {
        default_link.classList.remove("active");
      }
    },
  },
  mounted() {
    let default_link = document.querySelector(".dafault-link");
    if (this.isDefault) {
      default_link.classList.add("active");
    }
    // this.$router.replace({ path: "/" });
    this.isDefault = true;
  },
};
</script>

<style scoped>
@import "../../assets/main.css";

.nav {
  position: fixed;
  left: 0;
  top: 0;
  width: 17%;
}
.nav .circle {
  position: absolute;
  background-color: black;
  width: 10px;
  height: 10px;
  top: 50px;
  border-radius: 50%;
  outline: 2px solid rgb(250, 246, 246);
}
.nav .circle::before {
  position: absolute;
  content: "";
  border-bottom: 1px solid black;
  width: 50px;
  top: 4px;
  right: 0px;
  z-index: -1;
}
.nav .circle::after {
  position: absolute;
  content: "";
  border-bottom: 1px solid black;
  width: 50px;
  top: 4px;
  left: 0px;
  z-index: -1;
}
.navbar-nav .nav-item .nav-link {
  padding: 10px 50px 10px 10px;
  margin-bottom: 5px;
  border-radius: 4px;
}
.navbar-nav .nav-item .nav-link.active {
  background-color: var(--grey-color);
}
@media (max-width: 820px) {
  .navbar-nav .nav-item span {
    display: none;
  }
  .navbar-nav .nav-item .nav-link {
    padding: 0;
  }
}
/* @media (max-width: 540px) {
  .nav {
    display: none !important;
  }
} */
</style>
