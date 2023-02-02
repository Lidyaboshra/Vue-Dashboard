<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "../src/components/Global/Navbar.vue";
import Searchbar from "../src/components/Global/Searchbar.vue";
</script>

<template>
  <div class="row">
    <div class="col-lg-2">
      <Navbar />
    </div>
    <div class="col-lg-10">
      <div class="row">
        <div class="col-lg-12"><Searchbar /></div>
        <div class="col-lg-12"><RouterView /></div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
