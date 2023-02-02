<template>
  <div class="latest-news box">
    <div class="heading d-flex">
      <div class="text">
        <h6 class="fw-bold">Latest News</h6>
      </div>
    </div>
    <div class="latest-news-boxes">
      <div class="latest-news-box d-flex align-items-start">
        <div class="latest-news-img">
          <img src="../../assets/img/news-01.png" alt="img" />
        </div>
        <div class="latest-news-info">
          <h6>Created SASS Section</h6>
          <p>New SASS Examples & Tutorials</p>
        </div>
        <div class="latest-news-date">
          <span>3 Days Ago</span>
        </div>
      </div>
      <div class="latest-news-box d-flex align-items-start">
        <div class="latest-news-img">
          <img src="../../assets/img/news-02.png" alt="img" />
        </div>
        <div class="latest-news-info">
          <h6>Changed The Design</h6>
          <p>A Brand New Website Design</p>
        </div>
        <div class="latest-news-date">
          <span> 5 Days Ago</span>
        </div>
      </div>
      <div class="latest-news-box d-flex align-items-start">
        <div class="latest-news-img">
          <img src="../../assets/img/news-03.png" alt="img" />
        </div>
        <div class="latest-news-info">
          <h6>Team Increased</h6>
          <p>3 Developers Joined The Team</p>
        </div>
        <div class="latest-news-date">
          <span> 7 Days Ago</span>
        </div>
      </div>
      <div class="latest-news-box d-flex align-items-start">
        <div class="latest-news-img">
          <img src="../../assets/img/news-04.png" alt="img" />
        </div>
        <div class="latest-news-info">
          <h6>Added Payment Getaway</h6>
          <p>Many New Payment Getaways Added</p>
        </div>
        <div class="latest-news-date">
          <span> 9 Days Ago</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.latest-news-box:not(:last-of-type) {
  padding: 0 5px 8px;
  margin: 10px 0;
  border-bottom: 2px solid #eee;
}
.latest-news-box {
  padding-left: 5px;
}
.latest-news-box .latest-news-img {
  width: 70px;
  height: 40px;
}
.latest-news-box .latest-news-img img {
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
.latest-news-box .latest-news-info {
  margin-left: 10px;
  width: 200px;
}
.latest-news-box .latest-news-info h6 {
  font-weight: bold;
  font-size: 13px;
}
.latest-news-box .latest-news-info p {
  opacity: 0.5;
  font-size: 11px;
  margin-bottom: 0;
}
.latest-news-box .latest-news-date span {
  background-color: #eee;
  padding: 2px 5px;
  font-size: 9px;
}
</style>
