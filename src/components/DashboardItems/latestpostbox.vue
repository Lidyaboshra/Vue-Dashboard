<template>
  <div class="latest-post box">
    <div class="heading d-flex">
      <div class="text">
        <h6 class="fw-bold">Latest Post</h6>
      </div>
    </div>
    <div class="latest-post-box">
      <div class="latest-post-info px-3 d-flex">
        <div class="latest-post-img">
          <img src="../../assets/img/avatar.png" alt="img" />
        </div>
        <div class="latest-post-contact ms-2">
          <h6>Osama Elzero</h6>
          <p>About 3 Hours Ago</p>
        </div>
      </div>
      <div class="latest-post-text px-3">
        <p>
          You can fool all of the people some of the time, and some of the
          people all of the time, but you can't fool all of the people all of
          the time.
        </p>
      </div>
      <div class="latest-post-icons px-3 d-flex justify-content-between">
        <div class="latest-icon-react">
          <i class="fa-regular fa-heart"></i>1.8k
        </div>
        <div class="latest-icon-comment">
          <i class="fa-regular fa-comments"></i>500
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.latest-post-img {
  width: 40px;
  height: 40px;
}
.latest-post-img img {
  width: 100%;
  height: 100%;
}
.latest-post-info {
  border-bottom: 2px solid rgb(252, 248, 248);
  margin: 10px 0;
}
.latest-post-contact h6 {
  margin: 0;
  font-size: 15px;
  font-weight: bold;
}
.latest-post-contact p {
  opacity: 0.5;
  font-size: 12px;
}
.latest-post-text {
  border-bottom: 2px solid #eee;
  margin: 20px 0;
}
.latest-post-text p {
  font-size: 15px;
}
.latest-post-icons {
  margin-top: 20px;
  opacity: 0.4;
  font-size: 13px;
}
</style>
