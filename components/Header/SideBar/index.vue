<!--
 * @Author: wang,shuang
 * @Date: 2021-12-27 18:45:49
 * @Description: 移动端侧边栏
-->
<template>
  <div class="overlay">
    <transition name="horizontal">
      <div v-if="show" class="side-bar-wrapper">侧边栏</div>
    </transition>
    <MaskLayer :showMask="show" @clickMask="handleMaskClick" />
  </div>
</template>
<script>
import MaskLayer from "../../MaskLayer";
export default {
  name: "SideBar",
  components: { MaskLayer },
  props: {
    menu: {
      type: Array,
    },
    show: {
      type: Boolean,
    },
  },
  methods: {
    handleMaskClick() {
      this.$emit("clickMask");
    },
  },
};
</script>
<style lang="scss" scoped>
.overlay {
  @include whenNotSmallScreen {
    display: none;
  }
}
.side-bar-wrapper {
  z-index: 100;
  position: fixed;
  top: 0;
  height: 100%;
  width: 240px;
  background: var(--color-superlight-grey);
}

.horizontal-enter-active,
.horizontal-leave-active {
  transition: transform 0.3s;
}
.horizontal-enter, .horizontal-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(-100%);
}
</style>
