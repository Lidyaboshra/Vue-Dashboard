<template>
  <div class="social-box box">
    <div class="heading d-flex">
      <div class="text">
        <h6 class="fw-bold">Social Media Stats</h6>
      </div>
    </div>
    <div class="social-media-boxes">
      <div class="social-media-box d-flex justify-content-between">
        <div class="merge d-flex">
          <div class="social-icon">
            <i class="fa-brands fa-twitter"></i>
          </div>
          <p class="ms-2">90K Followers</p>
        </div>

        <span>Follow</span>
      </div>
      <div class="social-media-box d-flex justify-content-between">
        <div class="merge d-flex">
          <div class="social-icon">
            <i class="fab fa-facebook-f"></i>
          </div>
          <p class="ms-2">2M Like</p>
        </div>

        <span>Like</span>
      </div>
      <div class="social-media-box d-flex justify-content-between">
        <div class="merge d-flex">
          <div class="social-icon">
            <i class="fab fa-youtube"></i>
          </div>
          <p class="ms-2">1M Subs</p>
        </div>

        <span>Subscribe</span>
      </div>
      <div class="social-media-box d-flex justify-content-between">
        <div class="merge d-flex">
          <div class="social-icon">
            <i class="fab fa-linkedin-in"></i>
          </div>
          <p class="ms-2">70K Followers</p>
        </div>

        <span>Follow</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.social-media-box {
  margin: 5px 20px;
}
.social-media-box:nth-child(1) {
  background-color: #d2ecfc;
}
.social-media-box:nth-child(2) {
  background-color: #d1e4fc;
}
.social-media-box:nth-child(3) {
  background-color: #ffcccc;
}
.social-media-box:nth-child(4) {
  background-color: #cce4f0;
}
.social-media-box .social-icon {
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
.social-media-box .social-icon svg{
  font-size: 30px;
}
.social-media-box:nth-child(1) .social-icon,
.social-media-box:nth-child(1) span {
  background-color: #1da1f2;
}
.social-media-box:nth-child(2) .social-icon,
.social-media-box:nth-child(2) span {
  background-color: #1877f2;
}
.social-media-box:nth-child(3) .social-icon,
.social-media-box:nth-child(3) span {
  background-color: #ff0000;
}
.social-media-box:nth-child(4) .social-icon,
.social-media-box:nth-child(4) span {
  background-color: #0077b5;
}
.social-media-box p {

  margin: 0;
  display: flex;
  align-items: center;
  font-size: 14px;
}
.social-media-box:nth-child(1) p{
  color: #62c5f8;
}
.social-media-box:nth-child(2) p{
  color: #36b7f7;
}
.social-media-box:nth-child(3) p{
  color: #ff4457;
}
.social-media-box:nth-child(4) p{
  color: #0e7bb9;
}
.social-media-box span {
  color: #fff;

  padding: 3px 7px;
  margin: 10px;
  border-radius: 5px;
  font-size: 13px;
  display: flex;
  align-items: center;
}
</style>
