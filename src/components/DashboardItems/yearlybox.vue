<template>
  <div class="yearly box">
    <div class="heading d-flex">
      <div class="text">
        <h6 class="fw-bold">Yearly Targets</h6>
        <p class="text-black-50 fw-semibold">Targets Of The Year</p>
      </div>
    </div>
    <div class="targets-box m-1 ms-2">
      <div class="target-box d-flex">
        <div class="target-img">
          <i class="fas fa-dollar-sign"></i>
        </div>
        <div class="target-info ms-2">
          <p>Money</p>
          <p>$20000</p>
          <div class="bar"></div>
        </div>
      </div>
      <div class="target-box d-flex">
        <div class="target-img">
          <i class="fas fa-code"></i>
        </div>
        <div class="target-info ms-2">
          <p>Projects</p>
          <p>24</p>
          <div class="bar"></div>
        </div>
      </div>
      <div class="target-box d-flex">
        <div class="target-img">
          <i class="fas fa-user"></i>
        </div>
        <div class="target-info ms-2">
          <p>Team</p>
          <p>12</p>
          <div class="bar"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.targets-box .target-box {
  margin-bottom: 10px;
}
.targets-box .target-box .target-img {
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.targets-box .target-box:nth-child(1) .target-img {
  background-color: #cce3ff;
}
.targets-box .target-box:nth-child(1) .target-img svg {
  color: #55a5ff;
}
.targets-box .target-box:nth-child(2) .target-img {
  background-color: #fdecce;
}
.targets-box .target-box:nth-child(2) .target-img svg {
  color: #f6b476;
}
.targets-box .target-box:nth-child(3) .target-img {
  background-color: #d3f3df;
}
.targets-box .target-box:nth-child(3) .target-img svg {
  color: #63cf97;
}
.targets-box .target-box .target-info p {
  font-size: 13px;
  margin-bottom: 0;
}
.targets-box .target-box .target-info p:nth-child(1) {
  opacity: 0.5;
}

.targets-box .target-box .target-info p:nth-child(2) {
  font-weight: bold;
}
.targets-box .target-box .bar {
  width: 250px;
  height: 3px;
  position: relative;
}
.targets-box .target-box:nth-child(1) .bar {
  background-color: #dbebff;
}
.targets-box .target-box:nth-child(2) .bar {
  background-color: #fdecce;
}
.targets-box .target-box:nth-child(3) .bar {
  background-color: #d3f3df;
}
.targets-box .target-box .bar::after {
  position: absolute;
  content: " ";
  left: 0;
  top: 0;
  height: 3px;
}
.targets-box .target-box:nth-child(1) .bar::after {
  background-color: #55a5ff;
  width: 80%;
}
.targets-box .target-box:nth-child(2) .bar::after {
  background-color: #f6b476;
  width: 55%;
}
.targets-box .target-box:nth-child(3) .bar::after {
  background-color: #63cf97;
  width: 75%;
}
.targets-box .target-box .bar::before {
  position: absolute;
  top: -35px;
  padding: 3px 7px;
  border-radius: 4px;
  color: white;
  font-size: 13px;
}
.targets-box .target-box:nth-child(1) .bar::before {
  content: "80%";
  left: 75%;
  background-color: #55a5ff;
}
.targets-box .target-box:nth-child(2) .bar::before {
  content: "55%";
  left: 50%;
  background-color: #f6b476;
}
.targets-box .target-box:nth-child(3) .bar::before {
  content: "75%";
  left: 65%;
  background-color: #63cf97;
}
</style>
