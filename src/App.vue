<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "../src/components/Global/Navbar.vue";
import Searchbar from "../src/components/Global/Searchbar.vue";
</script>

<template>
  <div class="row">
    <div class="col-lg-2 col-sm-2 col-xs-2 nav-bar">
      <Navbar />
    </div>
    <div class="col-lg-10 col-sm-10 col-xs-10">
      <div class="row">
        <div class="col-lg-12"><Searchbar /></div>
        <div class="col-lg-12"><RouterView /></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nav-bar {
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
  z-index: 99;
}
@media (min-width: 0px) {
  .col-xs-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-xs-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }
}
</style>
