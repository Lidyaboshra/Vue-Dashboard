<template>
  <div class="latest-tasks box">
    <div class="heading d-flex">
      <div class="text">
        <h6 class="fw-bold">Latest Tasks</h6>
      </div>
    </div>
    <div class="latest-tasks-boxes">
      <div class="latest-task-box d-flex">
        <div class="latest-task-info">
          <h6>Record One New Video</h6>
          <p>Record Python Create Exe Project</p>
        </div>
        <div class="latest-disk-delete-icon">
          <i class="fa-regular fa-trash-can"></i>
        </div>
      </div>
    </div>
    <div class="latest-task-box d-flex">
      <div class="latest-task-info">
        <h6>Write Article</h6>
        <p>Write Low Level vs High Level Languages</p>
      </div>
      <div class="latest-disk-delete-icon">
        <i class="fa-regular fa-trash-can"></i>
      </div>
    </div>
    <div class="latest-task-box d-flex">
      <div class="latest-task-info">
        <h6>Finish Project</h6>
        <p>Publish Academy Programming Project</p>
      </div>
      <div class="latest-disk-delete-icon">
        <i class="fa-regular fa-trash-can"></i>
      </div>
    </div>
    <div class="latest-task-box d-flex">
      <div class="latest-task-info">
        <h6>Attend The Meeting</h6>
        <p>Attend The Project Business Analysis Meeting</p>
      </div>
      <div class="latest-disk-delete-icon">
        <i class="fa-regular fa-trash-can"></i>
      </div>
    </div>

    <div class="latest-task-box d-flex">
      <div class="latest-task-info">
        <h6>Finish Lesson</h6>
        <p>Finish Teaching Flex Box</p>
      </div>
      <div class="latest-disk-delete-icon">
        <i class="fa-regular fa-trash-can"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.latest-task-box {
  justify-content: space-around;
  padding: 0 5px 8px;
  margin: 7px 0;
}
.latest-task-box:not(:last-of-type),
.latest-task-box:first-of-type {
  border-bottom: 2px solid #eee;
}
.latest-task-box:nth-child(5) {
  opacity: 0.4;
}
.latest-task-info {
  width: 250px;
}
h6 {
  margin-bottom: 0;
}
.latest-task-info h6 {
  font-weight: bold;
  font-size: 14px;
}
.latest-task-info p {
  opacity: 0.5;
  font-size: 12px;
  margin-bottom: 0;
}
</style>
