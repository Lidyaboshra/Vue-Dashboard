<template>
  <div class="quick-box box">
    <div class="heading d-flex">
      <div class="text">
        <h6 class="fw-bold">Quick Draft</h6>
        <p class="text-black-50 fw-semibold">Write A Draft For Your Ideas</p>
      </div>
    </div>
    <div class="discription m-2">
      <div class="mb-3">
        <input type="text" class="form-control" placeholder="Title" />
      </div>
      <div class="mb-3">
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="Your Thought"
        ></textarea>
      </div>
      <div class="button text-end me-1">
        <button type="button" class="btn btn-primary mb-2">Save</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.discription .form-control {
  background-color: #eee;
}
</style>
