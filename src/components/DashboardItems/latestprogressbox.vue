<template>
  <div class="latest-progress box">
    <div class="heading d-flex">
      <div class="text">
        <h6 class="fw-bold">Last Project Progress</h6>
      </div>
    </div>
    <div class="latest-progress-info ms-3 d-flex">
      <div class="latest-progress-bars">
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div class="latest-progress-steps">
        <ul>
          <li>Got The Project</li>
          <li>Started The Project</li>
          <li>The Project About To Finish</li>
          <li>Test The Project</li>
          <li>Finish The Project & Get Money</li>
        </ul>
      </div>
    </div>
    <div class="latest-progress-project-img">
      <img src="../../assets/img/project.png" alt="img" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.latest-progress-steps ul li {
  margin-bottom: 10px;
  margin-left: 5px;
}
.latest-progress-bars ul li {
  border: 2px solid #b3d6ff;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: relative;
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.latest-progress-bars ul li:not(:last-of-type)::after {
  position: absolute;
  content: " ";
  border-left: 2px solid #0075ff;
  left: 7px;
  top: 15px;
  height: 20px;
}
.latest-progress-bars ul li::before {
  position: absolute;
  content: " ";
  height: 14px;
  width: 14px;
  border-radius: 50%;
}
.latest-progress-bars ul li:nth-child(1):before,
.latest-progress-bars ul li:nth-child(2):before,
.latest-progress-bars ul li:nth-child(3):before {
  background-color: #0075ff;
}
.latest-progress-bars ul li:nth-child(4):before {
  background-color: #b3d6ff;
}
.latest-progress-project-img {
  width: 90px;
  height: 70px;
  float: right;
  opacity: 0.3;
}
.latest-progress-project-img img {
  width: 100%;
  height: 100%;
}
</style>
