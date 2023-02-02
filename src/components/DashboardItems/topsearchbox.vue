<template>
  <div class="top-search box">
    <div class="heading d-flex">
      <div class="text">
        <h6 class="fw-bold">Top Search Items</h6>
      </div>
    </div>
    <div class="top-search-table d-flex justify-content-between mx-3">
      <div class="top-search-keywords">
        <h6 class="text-black-50 mb-3">Keyword</h6>
        <ul>
          <li>Programming</li>
          <li>JavaScript</li>
          <li>PHP</li>
          <li>Code</li>
          <li>Design</li>
          <li>Logic</li>
        </ul>
      </div>
      <div class="top-search-count d-flex align-items-end flex-column">
        <h6 class="text-black-50 mb-3">Search Count</h6>
        <ul>
          <li>220</li>
          <li>180</li>
          <li>160</li>
          <li>145</li>
          <li>110</li>
          <li class="text-center">95</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
ul li {
  margin-bottom: 14px;
}
.top-search-keywords ul li {
  font-size: 14px;
}
.top-search-count ul li {
  background-color: #eee;
  padding: 2px 7px;
  font-size: 12px;
  border-radius: 5px;
}
</style>
