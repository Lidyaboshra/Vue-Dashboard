<template>
  <div class="searchbar p-2">
    <div class="d-flex justify-content-between align-items-center flex-wrap">
      <div class="search-input">
        <input type="text" placeholder="Type A Keyword" class="ps-5 p-1" />
        <i class="fa-solid fa-magnifying-glass ps-3 search-icon"></i>
      </div>
      <div class="details d-flex me-3">
        <div class="notification me-3"><i class="fa-regular fa-bell"></i></div>
        <div class="profile">
          <img src="../../assets/img/avatar.png" alt="avatar" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.searchbar .search-input input,
.searchbar .search-input input :active {
  border-radius: 8px;
  border-color: #ccc;
  position: relative;
  outline: #ccc;
}
.searchbar .search-input input:focus::placeholder {
  opacity: 0;
}

.searchbar .search-input svg.search-icon {
  position: absolute;
  left: 33px;
  top: 33%;
}
.searchbar .details .notification,
.searchbar .details .profile {
  width: 30px;
  height: 30px;
}
.searchbar .details .profile img,
.searchbar .details .notification svg {
  width: 100%;
  height: 100%;
}

.searchbar .details .notification svg {
  position: relative;
}

.searchbar .details .notification::before {
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: var(--red-color);
  border-radius: 50%;
  right: -5px;
  top: -5px;
}

.searchbar .search-input input {
  margin-left: 30px !important;
}
@media (max-width: 580px) {
  .details {
    margin: 20px 30px 5px;
  }
}
</style>
