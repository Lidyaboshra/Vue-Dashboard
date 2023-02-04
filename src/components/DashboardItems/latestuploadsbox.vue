<template>
  <div class="latest-uploads box">
    <div class="heading d-flex">
      <div class="text">
        <h6 class="fw-bold">Latest Uploads</h6>
      </div>
    </div>
    <div class="latest-uploads-boxes">
      <div
        class="latest-uploads-box d-flex justify-content-between pe-3 flex-wrap"
      >
        <div class="d-flex">
          <div class="latest-uploads-img">
            <img src="../../assets/img/pdf.svg" alt="img" />
          </div>
          <div class="latest-uploads-info">
            <h6>my-file.pdf</h6>
            <p>Elzero</p>
          </div>
        </div>

        <div class="latest-uploads-size ps-2">
          <span>2.9mb</span>
        </div>
      </div>
      <div
        class="latest-uploads-box d-flex justify-content-between pe-3 flex-wrap"
      >
        <div class="d-flex">
          <div class="latest-uploads-img ">
            <img src="../../assets/img/avi.svg" alt="img" />
          </div>
          <div class="latest-uploads-info">
            <h6>My-Video-File.avi</h6>
            <p>Admin</p>
          </div>
        </div>

        <div class="latest-uploads-size ps-2">
          <span>4.9mb</span>
        </div>
      </div>
      <div
        class="latest-uploads-box d-flex justify-content-between pe-3 flex-wrap"
      >
        <div class="d-flex">
          <div class="latest-uploads-img ">
            <img src="../../assets/img/psd.svg" alt="img" />
          </div>
          <div class="latest-uploads-info">
            <h6>My-Psd-File.pdf</h6>
            <p>Osama</p>
          </div>
        </div>

        <div class="latest-uploads-size ps-2">
          <span>4.5mb</span>
        </div>
      </div>
      <div
        class="latest-uploads-box d-flex justify-content-between pe-3 flex-wrap"
      >
        <div class="d-flex">
          <div class="latest-uploads-img ">
            <img src="../../assets/img/zip.svg" alt="img" />
          </div>
          <div class="latest-uploads-info">
            <h6>My-Zip-File.pdf</h6>
            <p>User</p>
          </div>
        </div>

        <div class="latest-uploads-size ps-2">
          <span>8.9mb</span>
        </div>
      </div>
      <div
        class="latest-uploads-box d-flex justify-content-between pe-3 flex-wrap"
      >
        <div class="d-flex">
          <div class="latest-uploads-img ">
            <img src="../../assets/img/dll.svg" alt="img" />
          </div>
          <div class="latest-uploads-info">
            <h6>My-DLL-File.pdf</h6>
            <p>Admin</p>
          </div>
        </div>

        <div class="latest-uploads-size ps-2">
          <span>4.9mb</span>
        </div>
      </div>
      <div
        class="latest-uploads-box d-flex justify-content-between pe-3 flex-wrap"
      >
        <div class="d-flex">
          <div class="latest-uploads-img ">
            <img src="../../assets/img/eps.svg" alt="img" />
          </div>
          <div class="latest-uploads-info">
            <h6>My-Eps-File.pdf</h6>
            <p>Designer</p>
          </div>
        </div>

        <div class="latest-uploads-size ps-2">
          <span>8.9mb</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.latest-uploads-box:not(:last-of-type) {
  border-bottom: 2px solid #eee;
}
.latest-uploads-box {
  padding: 0 5px 3px;
  margin: 10px 0;
}
.latest-uploads-box .latest-uploads-img {
  width: 60px;
  height: 30px;
}
.latest-uploads-box .latest-uploads-img img {
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
.latest-uploads-box .latest-uploads-info {
  margin-left: 10px;
  width: 200px;
}
h6 {
  margin-bottom: 0;
}
.latest-uploads-box .latest-uploads-info h6 {
  font-weight: bold;
  font-size: 13px;
}
.latest-uploads-box .latest-uploads-info p {
  opacity: 0.5;
  font-size: 11px;
  margin-bottom: 0;
}
.latest-uploads-box .latest-uploads-size span {
  background-color: #eee;
  padding: 2px 5px;
  font-size: 9px;
}
</style>
