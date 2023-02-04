<template>
  <div class="main-content ps-4 py-2">
    <h2 class="mt-3">Dashboard</h2>
    <div class="border-heading"></div>
    <div class="cards mt-3 me-2">
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-12">
          <welcome_box />
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <quick_box />
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <yearly_box />
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-12">
          <tickets_box />
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <latest_news />
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <latest_tasks />
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-12">
          <top_search />
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <latest_upload />
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <latest_progress />
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-12">
          <reminders_box />
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <latest_post />
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <social_box />
        </div>
      </div>
    </div>
    <profile_box />
  </div>
</template>

<script setup>
import welcome_box from "../components/DashboardItems/welcomebox.vue";
import quick_box from "../components/DashboardItems/quickbox.vue";
import yearly_box from "../components/DashboardItems/yearlybox.vue";
import tickets_box from "../components/DashboardItems/ticketsbox.vue";
import latest_news from "../components/DashboardItems/latestnewsbox.vue";
import latest_tasks from "../components/DashboardItems/latesttaskbox.vue";
import top_search from "../components/DashboardItems/topsearchbox.vue";
import latest_upload from "../components/DashboardItems/latestuploadsbox.vue";
import latest_progress from "../components/DashboardItems/latestprogressbox.vue";
import reminders_box from "../components/DashboardItems/remindersbox.vue";
import latest_post from "../components/DashboardItems/latestpostbox.vue";
import social_box from "../components/DashboardItems/socialbox.vue";
import profile_box from "../components/DashboardItems/profilebox.vue";
</script>
