<template>
  <div class="welcome-box box">
    <div class="heading d-flex">
      <div class="text">
        <h6 class="fw-bold">Welcome</h6>
        <p class="text-black-50 fw-semibold">Elzero</p>
      </div>
      <div class="img"></div>
    </div>
    <div class="welcome-img ms-2">
      <img src="../../assets/img/avatar.png" alt="img" />
    </div>
    <div class="discribtion mt-5">
      <hr class="text-black-50" />
      <div class="details d-flex justify-content-around flex-wrap">
        <div class="info">
          <p>Lidya Boshra</p>
          <p class="text-center text-black-50">Developer</p>
        </div>
        <div class="info">
          <p class="text-center">80</p>
          <p class="text-black-50">Projects</p>
        </div>
        <div class="info">
          <p class="text-center">$8500</p>
          <p class="text-black-50">Earned</p>
        </div>
      </div>
      <div class="button text-end me-4">
        <button type="button" class="btn btn-primary">Profile</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.welcome-box .heading {
  background-color: #eee;
}

.welcome-box .heading .img {
  background: url(../../assets/img/welcome.png);
  width: 100%;
  background-size: contain;
  background-repeat: no-repeat;
}
.welcome-box .heading .text {
  padding-bottom: 20px;
}
.welcome-box .welcome-img img {
  width: 40px;
  position: absolute;
  height: 40px;
  top: -24px;
  left: 0;
  z-index: 9;
  border: 4px solid white;
  border-radius: 50%;
}
@media (max-width:300px){
  .text-end{
    text-align: center !important;
  }
}
</style>
