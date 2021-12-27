<!--
 * @Author: wang,shuang
 * @Date: 2021-12-24 15:39:59
 * @Description: filte description
-->
<template>
  <div class="header-wrapper"></div>
</template>
<script>
export default {
  name: "Header",
};
</script>
<style lang="scss" scoped>
// @mixin whenSmallScreen {
//   @media screen and (max-width: 719px) {
//     @content;
//   }
// }
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
