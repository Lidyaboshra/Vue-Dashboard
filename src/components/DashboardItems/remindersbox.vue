<template>
  <div class="reminders-box box">
    <div class="heading d-flex">
      <div class="text">
        <h6 class="fw-bold">Reminders</h6>
      </div>
    </div>
    <div class="reminders-boxes-info ms-3">
      <div class="reminders-box-info d-flex">
        <div class="reminders-box-chars"></div>
        <div class="reminders-box-content">
          <h6>Check My Tasks List</h6>
          <p><span>28/09/2022</span> - <span>12.00am</span></p>
        </div>
      </div>
      <div class="reminders-box-info d-flex">
        <div class="reminders-box-chars"></div>
        <div class="reminders-box-content">
          <h6>Check My Projects</h6>
          <p><span>26/10/2022</span> - <span>12.00am</span></p>
        </div>
      </div>
      <div class="reminders-box-info d-flex">
        <div class="reminders-box-chars"></div>
        <div class="reminders-box-content">
          <h6>Call All My Clients</h6>
          <p><span>5/11/2022</span> - <span>12.00am</span></p>
        </div>
      </div>
      <div class="reminders-box-info d-flex">
        <div class="reminders-box-chars"></div>
        <div class="reminders-box-content">
          <h6>Finish The Development Workshop</h6>
          <p><span>20/12/2022</span> - <span>12.00am</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.reminders-box-chars {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-top: 12px;
}
.reminders-box-info:nth-child(1) .reminders-box-chars {
  background-color: #0075ff;
}
.reminders-box-info:nth-child(2) .reminders-box-chars {
  background-color: #22c55e;
}
.reminders-box-info:nth-child(3) .reminders-box-chars {
  background-color: #f59e0b;
}
.reminders-box-info:nth-child(4) .reminders-box-chars {
  background-color: #f44336;
}
.reminders-box-content {
  margin-left: 25px;
  position: relative;
}
.reminders-box-content::before {
  position: absolute;
  content: " ";
  left: -15px;
  height: 40px;
}
.reminders-box-info:nth-child(1) .reminders-box-content::before {
  border-right: 2px solid #0075ff;
}
.reminders-box-info:nth-child(2) .reminders-box-content::before {
  border-right: 2px solid #22c55e;
}
.reminders-box-info:nth-child(3) .reminders-box-content::before {
  border-right: 2px solid #f59e0b;
}
.reminders-box-info:nth-child(4) .reminders-box-content::before {
  border-right: 2px solid #f44336;
}
.reminders-box-content h6 {
  margin: 0;
  font-weight: bold;
  font-size: 15px;
}

.reminders-box-content p {
  opacity: 0.5;
  font-size: 12px;
}
@media (max-width: 300px) {
  .reminders-box-content h6 {
    font-size: 9px;
  }
}
</style>
