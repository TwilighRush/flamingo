<!--
 * @Author: wang,shuang
 * @Date: 2021-12-27 18:45:49
 * @Description: 移动端侧边栏
-->
<template>
  <div class="overlay">
    <transition name="horizontal">
      <div v-show="show" class="side-bar-wrapper">
        <div class="side-bar-photo">
          <transition name="rotating">
            <div v-show="show" class="photo">
              <img
                src="http://blog.flamingow.cn/medias/avatar.jpg"
                alt="avatar"
              />
            </div>
          </transition>
          <div class="nickname">Flamingo</div>
          <div class="slogan">this is a slogan , singing my thought</div>
        </div>
        <div class="side-bar-menu">...coding</div>
      </div>
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
  watch: {
    show(val) {
      this.rotating = val ? "clockwise" : "counterclockwise";
    },
  },
  data() {
    return {
      rotating: "",
    };
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
  display: flex;
  flex-direction: column;
  z-index: 100;
  position: fixed;
  top: 0;
  height: 100%;
  width: 240px;
  background: var(--color-superlight-grey);
}

.side-bar-photo {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: var(--main);
  flex: 3;
  .photo {
    height: 100px;
    width: 100px;
    border: 2px solid var(--color-white);
    box-shadow: 0 0 10px rgb(0 0 0 / 20%);
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    & > img {
      height: 100%;
    }
  }
  .nickname {
    color: var(--color-white);
    font-family: "Songti SC", "Noto Serif SC", STZhongsong, STKaiti, KaiTi,
      Roboto, serif;
    font-size: 1.3rem;
    font-weight: 900;
    margin: 10px;
  }

  .slogan {
    text-align: center;
    font-size: 0.9rem;
    font-family: "Times New Roman", Times, serif;
    color: var(--color-light-grey);
    height: 48px;
    overflow: hidden;
    margin: 0 20px;
  }
}

.side-bar-menu {
  flex: 6;
}

.rotating-enter-active,
.rotating-leave-active {
  transition: transform 2s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.rotating-enter,
.rotating-leave-to {
  transform: rotate(-360deg);
}

.horizontal-enter-active,
.horizontal-leave-active {
  transition: transform 0.3s linear;
}
.horizontal-enter, .horizontal-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(-100%);
}
</style>
