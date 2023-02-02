<template>
  <div class="tickets-box box">
    <div class="heading d-flex">
      <div class="text">
        <h6 class="fw-bold">Tickets Statistics</h6>
        <p class="text-black-50 fw-semibold">
          Everything About Support Tickets
        </p>
      </div>
    </div>
    <div class="tickets-info text-center d-flex justify-content-around">
      <div class="ticket-info icon-1">
        <div><i class="fa-regular fa-rectangle-list"></i></div>
        <p class="fw-bold">2500</p>
        <p class="text-black-50">Total</p>
      </div>
      <div class="ticket-info icon-2">
        <div><i class="fas fa-spinner"></i></div>
        <p class="fw-bold">500</p>
        <p class="text-black-50">Pending</p>
      </div>
    </div>
    <div class="tickets-info text-center d-flex justify-content-around">
      <div class="ticket-info icon-3">
        <div><i class="fa-regular fa-circle-check"></i></div>
        <p class="fw-bold">1900</p>
        <p class="text-black-50">Closed</p>
      </div>
      <div class="ticket-info icon-4">
        <div><i class="fa-regular fa-rectangle-xmark"></i></div>
        <p class="fw-bold">100</p>
        <p class="text-black-50">Deleted</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.tickets-info .ticket-info {
  border-radius: 7px;
  border: 2px solid #eee;
  width: 80%;
  margin: 7px;
  padding: 7px 0;
}
.tickets-info .ticket-info p {
  margin-bottom: 0;
}
.tickets-info .ticket-info p:nth-child(3) {
  font-size: 10px;
}
.tickets-box .tickets-info .icon-1 svg {
  color: #f6b476;
}
.tickets-box .tickets-info .icon-2 svg {
  color: #0075ff;
}
.tickets-box .tickets-info .icon-3 svg {
  color: #b8d992;
}
.tickets-box .tickets-info .icon-4 svg {
  color: #f44439;
}
</style>
