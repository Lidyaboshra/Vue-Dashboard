<template>
  <div class="main-content ps-4 py-2">
    <h2 class="mt-3">Settings</h2>
    <div class="border-heading"></div>
    <div class="content-settings mt-3">
      <div class="row">
        <div class="col-lg-4">
          <div class="box">
            <div class="heading d-flex">
              <div class="text">
                <h6 class="fw-bold">Site Control</h6>
                <p class="text-black-50 fw-semibold">
                  Control The Website IF There Is Mintenance
                </p>
              </div>
            </div>
            <div class="setting-site-control-content">
              <div
                class="website-control-info d-flex justify-content-between mx-2 mb-4"
              >
                <div class="website-control-text">
                  <h6>Website Control</h6>
                  <span>Open/Close Website And Type The Reason</span>
                </div>
                <div class="website-control-checked">
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
              <div class="website-control-message">
                <div class="mb-3 mx-2">
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="5"
                    placeholder="Close Message Content"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="box">
            <div class="heading d-flex">
              <div class="text">
                <h6 class="fw-bold">General Info</h6>
                <p class="text-black-50 fw-semibold">
                  General Information About Your Account
                </p>
              </div>
            </div>
            <div class="general-box-form px-3">
              <div class="mb-1">
                <label for="exampleFormControlInput1" class="form-label"
                  >First Name</label
                >
                <input
                  type="text"
                  class="form-control form-control-sm"
                  id="exampleFormControlInput1"
                  placeholder="First Name"
                />
              </div>
              <div class="mb-1">
                <label for="exampleFormControlInput1" class="form-label"
                  >Last Name</label
                >
                <input
                  type="text"
                  class="form-control form-control-sm"
                  id="exampleFormControlInput1"
                  placeholder="Last Name"
                />
              </div>
              <div class="mb-1">
                <label for="exampleFormControlInput1" class="form-label"
                  >Email address</label
                >
                <div class="change-button d-flex align-items-center">
                  <input
                    type="email"
                    class="form-control form-control-sm"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                    disabled
                  />
                  <span>Change</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="box">
            <div class="heading d-flex">
              <div class="text">
                <h6 class="fw-bold">Security Info</h6>
                <p class="text-black-50 fw-semibold">
                  Security Information About Your Account
                </p>
              </div>
            </div>
            <div class="security-info-boxes">
              <div
                class="security-info-box d-flex justify-content-around mb-2 flex-wrap"
              >
                <div class="security-text">
                  <h6>Password</h6>
                  <span>Last Change On 25/10/2021</span>
                </div>
                <div class="security-button">
                  <button type="button" class="btn btn-primary">Change</button>
                </div>
              </div>
              <div
                class="security-info-box d-flex justify-content-around mb-2 flex-wrap"
              >
                <div class="security-text">
                  <h6>Two Factors Authentication</h6>
                  <span>Enable/Disable The Features</span>
                </div>
                <div class="security-button">
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
              <div
                class="security-info-box d-flex justify-content-around mb-2 flex-wrap"
              >
                <div class="security-text">
                  <h6>Devices</h6>
                  <span>Check The Login Devices List</span>
                </div>
                <div class="security-button">
                  <button type="button" class="btn btn-primary">Change</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4">
          <div class="box">
            <div class="heading d-flex">
              <div class="text">
                <h6 class="fw-bold">Social Info</h6>
                <p class="text-black-50 fw-semibold">
                  Social Media Information
                </p>
              </div>
            </div>
            <div class="socail-box-info mx-2">
              <div class="input-group mb-3">
                <span class="input-group-text text-black-50" id="basic-addon1"
                  ><i class="fab fa-twitter"></i
                ></span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Twitter Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  disabled
                />
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text text-black-50" id="basic-addon1"
                  ><i class="fab fa-facebook-f"></i
                ></span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Facebook Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  disabled
                />
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text text-black-50" id="basic-addon1"
                  ><i class="fab fa-linkedin-in"></i
                ></span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Linkedin Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  disabled
                />
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text text-black-50" id="basic-addon1"
                  ><i class="fab fa-youtube"></i
                ></span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Youtube Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  disabled
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="box">
            <div class="heading d-flex">
              <div class="text">
                <h6 class="fw-bold">Widgets Control</h6>
                <p class="text-black-50 fw-semibold">Show/Hide Widgets</p>
              </div>
            </div>
            <div class="widgets-control-section mx-3">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  checked
                />
                <label class="form-check-label" for="flexCheckChecked">
                  Quick Draft
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  checked
                />
                <label class="form-check-label" for="flexCheckChecked">
                  Yearly Targets
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  checked
                />
                <label class="form-check-label" for="flexCheckChecked">
                  Tickets Statistics
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  checked
                />
                <label class="form-check-label" for="flexCheckChecked">
                  Latest News
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label class="form-check-label" for="flexCheckChecked">
                  Latest Tasks
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  checked
                />
                <label class="form-check-label" for="flexCheckChecked">
                  Top Search Items
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="box">
            <div class="heading d-flex">
              <div class="text">
                <h6 class="fw-bold">Backup Manager</h6>
                <p class="text-black-50 fw-semibold">
                  Control Backup Time And Location
                </p>
              </div>
            </div>
            <div class="backup-section-info mx-3">
              <div class="backup-radio">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    checked
                  />
                  <label class="form-check-label" for="flexRadioDefault2">
                    Daily
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                  />
                  <label class="form-check-label" for="flexRadioDefault2">
                    Weekly
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                  />
                  <label class="form-check-label" for="flexRadioDefault2">
                    Monthly
                  </label>
                </div>
              </div>
              <div class="backup-choice">
                <input
                  type="checkbox"
                  class="btn-check"
                  id="btn-check-outlined"
                  autocomplete="off"
                />
                <label class="btn btn-outline-primary" for="btn-check-outlined">
                  <i class="fas fa-bars-progress"></i>Megaman</label
                >
                <input
                  type="checkbox"
                  class="btn-check"
                  id="btn-check-outlined"
                  autocomplete="off"
                />
                <label class="btn btn-outline-primary" for="btn-check-outlined">
                  <i class="fas fa-bars-progress"></i> Zero</label
                >
                <input
                  type="checkbox"
                  class="btn-check"
                  id="btn-check-outlined"
                  autocomplete="off"
                />
                <label class="btn btn-outline-primary" for="btn-check-outlined">
                  <i class="fas fa-bars-progress"></i>
                  Sigma</label
                >
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
p {
  margin: 0;
}
.website-control-text h6 {
  margin: 0;
  font-size: 15px;
}
.website-control-text span {
  font-size: 13px;
  opacity: 0.5;
}
.general-box-form label {
  font-size: 12px;
  opacity: 0.5;
}
.general-box-form input {
  font-size: 15px;
}
.general-box-form input::placeholder {
  font-size: 12px;
  opacity: 0.5;
}
.change-button span {
  color: #79a9ff;
  font-size: 15px;
  margin-left: 4px;
  cursor: pointer;
}
.security-info-box {
  margin: 10px 5px;
  padding: 5px 10px 10px;
}
.security-info-box:not(:last-of-type) {
  border-bottom: 2px solid #eee;
}
.security-info-box .security-text {
  width: 200px;
}
.security-info-box .security-button {
  width: 100px;
  display: flex;
  justify-content: flex-end;
  height: 30px;
}
.security-text h6 {
  margin: 0;
  font-weight: bold;
  font-size: 15px;
}
.security-text span {
  font-size: 13px;
  opacity: 0.5;
}
.input-group span {
  width: 40px;
}
.input-group input::placeholder {
  font-size: 13px;
}
.widgets-control-section .form-check {
  margin-bottom: 12px;
}
.widgets-control-section input {
  margin-right: 10px;
}
.backup-radio .form-check {
  margin-bottom: 10px;
}
.backup-choice {
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
  flex-wrap: wrap;
}
.btn.btn-outline-primary {
  display: flex;
  flex-direction: column;
  width: 100px;
}
.btn.btn-outline-primary:first-of-type,
.btn.btn-outline-primary:last-of-type {
  --bs-btn-color: black;
  --bs-btn-border-color: #eee;
}
</style>
