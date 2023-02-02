<template>
  <div class="profile px-4">
    <div class="heading d-flex mx-2 pt-3 pb-2">
      <div class="text">
        <h6 class="fw-bold">Projects</h6>
      </div>
    </div>
    <div class="table-responsive">
      <table class="table table-hover">
        <thead class="table-light">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Finish Date</th>
            <th scope="col">Client</th>
            <th scope="col">Price</th>
            <th scope="col">Team</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ministry Wikipedia</td>
            <td>10 May 2022</td>
            <td>Ministry</td>
            <td>$5300</td>
            <td>
              <img src="../../assets/img/team-01.png" alt="img" />
              <img src="../../assets/img/team-02.png" alt="img" />
              <img src="../../assets/img/team-03.png" alt="img" />
              <img src="../../assets/img/team-04.png" alt="img" />
            </td>
            <td>
              <span class="label btn-shape bg-orange c-white">Pending</span>
            </td>
          </tr>
          <tr>
            <td>Elzero Shop</td>
            <td>12 Oct 2021</td>
            <td>Elzero Company</td>
            <td>$1500</td>
            <td>
              <img src="../../assets/img/team-01.png" alt="img" />
              <img src="../../assets/img/team-02.png" alt="img" />
              <img src="../../assets/img/team-03.png" alt="img" />
              <img src="../../assets/img/team-04.png" alt="img" />
            </td>
            <td>
              <span class="label btn-shape bg-blue c-white">In Progress</span>
            </td>
          </tr>
          <tr>
            <td>Bouba App</td>
            <td>05 Sep 2021</td>
            <td>Bouba</td>
            <td>$800</td>
            <td>
              <img src="../../assets/img/team-03.png" alt="img" />
              <img src="../../assets/img/team-04.png" alt="img" />
            </td>
            <td>
              <span class="label btn-shape bg-green c-white">Completed</span>
            </td>
          </tr>
          <tr>
            <td>Mahmoud Website</td>
            <td>22 May 2021</td>
            <td>Mahmoud</td>
            <td>$600</td>
            <td>
              <img src="../../assets/img/team-01.png" alt="img" />
              <img src="../../assets/img/team-02.png" alt="img" />
            </td>
            <td>
              <span class="label btn-shape bg-green c-white">Completed</span>
            </td>
          </tr>
          <tr>
            <td>Sayed Website</td>
            <td>24 May 2021</td>
            <td>Sayed</td>
            <td>$300</td>
            <td>
              <img src="../../assets/img/team-01.png" alt="img" />
              <img src="../../assets/img/team-03.png" alt="img" />
            </td>
            <td>
              <span class="label btn-shape bg-red c-white">Rejected</span>
            </td>
          </tr>
          <tr>
            <td>Arena Application</td>
            <td>01 Mar 2021</td>
            <td>Arena Company</td>
            <td>$2600</td>
            <td>
              <img src="../../assets/img/team-01.png" alt="img" />
              <img src="../../assets/img/team-02.png" alt="img" />
              <img src="../../assets/img/team-03.png" alt="img" />
              <img src="../../assets/img/team-04.png" alt="img" />
            </td>
            <td>
              <span class="label btn-shape bg-green c-white">Completed</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.profile {
  background-color: white;
  margin: 5px;
  border-radius: 5px;
}
.profile table tbody tr {
  vertical-align: middle;
}
.profile table img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #fff;
  margin-left: -15px;
}
.profile table span {
  padding: 4px 10px;
  border-radius: 5px;
  color: white;
}
.profile table tr:nth-child(1) span {
  background-color: #f59e0b;
}
.profile table tr:nth-child(2) span {
  background-color: #0075ff;
}
.profile table tr:nth-child(3) span {
  background-color: #22c55e;
}
.profile table tr:nth-child(4) span {
  background-color: #22c55e;
}
.profile table tr:nth-child(5) span {
  background-color: #f44336;
}
.profile table tr:nth-child(6) span {
  background-color: #22c55e;
}
</style>
