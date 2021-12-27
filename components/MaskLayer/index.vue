<!--
 * @Author: wang,shuang
 * @Date: 2021-12-27 18:54:20
 * @Description: 遮罩
-->

<template>
  <transition name="fade">
    <div v-if="showMask" class="overlay" @click="handleMaskClick"></div>
  </transition>
</template>
<script>
export default {
  name: "MaskLayer",
  props: {
    showMask: {
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
  background-color: var(--color-overlay-bg);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
