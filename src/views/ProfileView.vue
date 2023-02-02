<template>
  <div class="main-content ps-4 py-2">
    <h2 class="mt-3">Profile</h2>
    <div class="border-heading"></div>
    <div class="profile-box-information mt-4 m-3">
      <div class="row">
        <div class="col-lg-2">
          <div class="profile-box-img p-4">
            <div class="profile-img mb-3">
              <img src="../assets/img/avatar.png" alt="img" />
            </div>
            <div class="profile-name fw-bold">Osama Elzero</div>
            <div class="profile-level text-black-50">Level 20</div>
            <div class="profile-bar"></div>
            <div class="profile-rate-icon mt-2">
              <i class="fas fa-star"></i><i class="fas fa-star"></i
              ><i class="fas fa-star"></i><i class="fas fa-star"></i
              ><i class="fas fa-star"></i>
            </div>
            <div class="profile-rate-count text-black-50 mt-2">550 Rating</div>
          </div>
        </div>
        <div class="col-lg-10">
          <div class="profile-box-contact">
            <div class="profile-general-info mt-3 mx-3">
              <h6 class="text-black-50">General Information</h6>
              <div class="profile-general-text d-flex">
                <p class="me-5">
                  <span class="text-black-50">Full Name:</span> Osama Mohamed
                </p>
                <p class="me-5">
                  <span class="text-black-50">Gender:</span> Male
                </p>
                <p class="me-5">
                  <span class="text-black-50">Country:</span> Egypt
                </p>
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckChecked"
                    checked
                  />
                </div>
              </div>
            </div>
            <div class="profile-general-info mt-3 mx-3">
              <h6 class="text-black-50">Personal Information</h6>
              <div class="profile-general-text d-flex">
                <p class="me-5">
                  <span class="text-black-50">Email:</span> O@nn.sa
                </p>
                <p class="me-5">
                  <span class="text-black-50">Phone:</span> 01287963254
                </p>
                <p class="me-5">
                  <span class="text-black-50">Date Of Birth:</span> 25/10/1980
                </p>
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckChecked"
                  />
                </div>
              </div>
            </div>
            <div class="profile-general-info mt-3 mx-3">
              <h6 class="text-black-50">Job Information</h6>
              <div class="profile-general-text d-flex">
                <p class="me-5">
                  <span class="text-black-50">Title:</span> Full Stack Developer
                </p>
                <p class="me-5">
                  <span class="text-black-50">Programming Language:</span>
                  Python
                </p>
                <p class="me-5">
                  <span class="text-black-50">Years Of Experience:</span> 15+
                </p>
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckChecked"
                    checked
                  />
                </div>
              </div>
            </div>
            <div class="profile-general-info mt-3 mx-3">
              <h6 class="text-black-50">Billing Information</h6>
              <div class="profile-general-text d-flex">
                <p class="me-5">
                  <span class="text-black-50">Payment Method:</span> Paypal
                </p>
                <p class="me-5">
                  <span class="text-black-50">Email:</span> email@website.com
                </p>
                <p class="me-5">
                  <span class="text-black-50">Subscription:</span> Monthly
                </p>
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckChecked"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="profile-box-two-sections mt-4 m-3">
      <div class="row">
        <div class="col-lg-4">
          <div class="profile-skills-section p-4 me-3">
            <div class="heading d-flex">
              <div class="text">
                <h6 class="fw-bold">My Skills</h6>
                <p class="text-black-50 fw-semibold">Complete Skills List</p>
              </div>
            </div>
            <div class="skills-boxes">
              <div class="skills-box">
                <span>HTML</span>
                <span>Pugjs</span>
                <span>HAML</span>
              </div>
              <div class="skills-box">
                <span>CSS</span>
                <span>SASS</span>
                <span>Stylus</span>
              </div>
              <div class="skills-box">
                <span>JavaScript</span>
                <span>TypeScript</span>
              </div>
              <div class="skills-box">
                <span>Vuejs</span>
                <span>Reactjs</span>
              </div>
              <div class="skills-box">
                <span>Jest</span>
                <span>Jasmine</span>
              </div>
              <div class="skills-box">
                <span>PHP</span>
                <span>Laravel</span>
              </div>
              <div class="skills-box">
                <span>Python</span>
                <span>Django</span>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-8">
          <div class="profile-activities-section p-4">
            <div class="heading d-flex">
              <div class="text">
                <h6 class="fw-bold">Latest Activities</h6>
                <p class="text-black-50 fw-semibold">
                  Latest Activities Done By The User
                </p>
              </div>
            </div>
            <div class="latest-activity-contents">
              <div class="latest-activity-box d-flex justify-content-between">
                <div class="latest-activity-text">
                  <div class="activity-left-section d-flex">
                    <div class="activity-left-img me-3">
                      <img src="../assets/img/activity-01.png" alt="img" />
                    </div>
                    <div class="activity-info">
                      <h6>Store</h6>
                      <p>Bought The Mastering Python Course</p>
                    </div>
                  </div>
                </div>
                <div class="latest-activity-dates">
                  <p>18:10</p>
                  <p class="text-black-50">Yesterday</p>
                </div>
              </div>
              <div class="latest-activity-box d-flex justify-content-between">
                <div class="latest-activity-text">
                  <div class="activity-left-section d-flex">
                    <div class="activity-left-img me-3">
                      <img src="../assets/img/activity-02.png" alt="img" />
                    </div>
                    <div class="activity-info">
                      <h6>Academy</h6>
                      <p>Got The PHP Certificate</p>
                    </div>
                  </div>
                </div>
                <div class="latest-activity-dates">
                  <p>16:05</p>
                  <p class="text-black-50">Yesterday</p>
                </div>
              </div>
              <div class="latest-activity-box d-flex justify-content-between">
                <div class="latest-activity-text">
                  <div class="activity-left-section d-flex">
                    <div class="activity-left-img me-3">
                      <img src="../assets/img/activity-03.png" alt="img" />
                    </div>
                    <div class="activity-info">
                      <h6>Budges</h6>
                      <p>Unlocked The 10 Skills Badge</p>
                    </div>
                  </div>
                </div>
                <div class="latest-activity-dates">
                  <p>18:05</p>
                  <p class="text-black-50">Yesterday</p>
                </div>
              </div>
              <div class="latest-activity-box d-flex justify-content-between">
                <div class="latest-activity-text">
                  <div class="activity-left-section d-flex">
                    <div class="activity-left-img me-3">
                      <img src="../assets/img/activity-01.png" alt="img" />
                    </div>
                    <div class="activity-info">
                      <h6>Store</h6>
                      <p>Bought The Typescript Course</p>
                    </div>
                  </div>
                </div>
                <div class="latest-activity-dates">
                  <p>12:05</p>
                  <p class="text-black-50">Yesterday</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.profile-box-information,
.profile-skills-section,
.profile-activities-section {
  background-color: #fff;
  border-radius: 10px;
}

.profile-box-img {
  border-right: 2px solid #eee;
  height: 90%;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.profile-box-information .profile-box-img .profile-img {
  width: 80px;
  height: 80px;
}

.profile-box-information .profile-box-img .profile-img img {
  width: 100%;
  height: 100%;
}
.profile-bar {
  width: 100%;
  background-color: #eee;
  height: 7px;
  border-radius: 4px;
  margin: 7px 0;
  position: relative;
}
.profile-bar::after {
  position: absolute;
  content: " ";
  width: 70%;
  height: 100%;
  background-color: blue;
  border-radius: 5px;
}
.profile-rate-icon {
  color: #f59e0b;
  font-size: 12px;
}
.profile-rate-icon svg {
  margin-right: 2px;
}

.profile-general-info:not(:last-of-type) {
  border-bottom: 2px solid #eee;
  margin-bottom: 20px;
}
.profile-general-text p {
  font-size: 14px;
}
.profile-general-text p:nth-child(1) {
  width: 185px;
}
.profile-general-text p:nth-child(2) {
  width: 220px;
}
.profile-general-text p:nth-child(3) {
  width: 175px;
}
.skills-boxes .skills-box:not(:last-of-type) {
  border-bottom: 1px solid rgb(241, 238, 238);
}
.skills-boxes .skills-box {
  padding-bottom: 10px;
  margin-top: 10px;
  width: 100%;
}
.skills-boxes .skills-box span {
  margin-right: 5px;
  padding: 2px 7px;
  background-color: #eee;
  border-radius: 4px;
  font-size: 12px;
}
.activity-left-section .activity-left-img {
  width: 50px;
  height: 50px;
}
.activity-left-section .activity-left-img img {
  width: 100%;
  height: 100%;
}
.activity-info h6 {
  margin: 0;
  font-size: 15px;
}
.activity-info p {
  margin: 0;
  font-size: 14px;
  opacity: 0.5;
}
.latest-activity-dates p {
  font-size: 14px;
  margin: 0;
  text-align: end;
}
.latest-activity-box:not(:last-of-type) {
  border-bottom: 2px solid rgb(243, 243, 243);
}
.latest-activity-box {
  padding-bottom: 14px;
  margin-top: 13px;
}
</style>
