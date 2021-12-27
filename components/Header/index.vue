<!--
 * @Author: wang,shuang
 * @Date: 2021-12-24 15:39:59
 * @Description: filte description
-->
<template>
  <div class="header-wrapper">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-icon-liebiao"></use>
    </svg>
  </div>
</template>
<script>
export default {
  name: "Header",
};
</script>
<style lang="scss" scoped>
.header-wrapper {
  background-color: var(--main);
  height: 64px;
  width: 100%;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 7px 10px 0 rgb(0 0 0 / 12%);
  @include whenSmallScreen {
    height: 44px;
  }
}
</style>
