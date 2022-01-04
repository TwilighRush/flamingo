<!--
 * @Author: wang,shuang
 * @Date: 2021-12-28 14:56:34
 * @Description: banner
-->
<template>
  <div class="banner-wrapper">
    <div class="banner-swiper">
      <transition-group name="bannerFade">
        <img
          v-for="(item, index) in imgGroup"
          :key="index"
          v-show="visualIndex === index"
          class="banner-img"
          :src="item"
          alt="banner"
        />
      </transition-group>
    </div>
    <div class="text-box">
      <div class="title">Flamingo</div>
      <div class="subtitle">Life always needs a little fun</div>
      <div class="tools-bar"></div>
    </div>
    <div class="watch-more" @click="handleWatchMore">
      <i class="iconfont icon-down"> </i>
    </div>
  </div>
</template>
<script>
export default {
  name: "Banner",
  data() {
    return {
      timmer: null,
      scrollHeight: 0,
      imgGroup: [
        require("../../assets/image/banner1.jpg"),
        require("../../assets/image/banner2.jpg"),
      ],
      visualIndex: 0,
    };
  },
  mounted() {
    this.startPlay();
  },
  destroyed() {
    clearInterval(this.timmer);
  },
  methods: {
    handleWatchMore() {
      const clientHeight = window.innerHeight;
      window.scrollTo({
        top: clientHeight,
      });
    },
    startPlay() {
      this.timmer = setInterval(() => {
        if (this.visualIndex + 1 == this.imgGroup.length) {
          this.visualIndex = 0;
        } else {
          this.visualIndex = this.visualIndex + 1;
        }
      }, 7000);
    },
  },
};
</script>
<style lang="scss" scoped>
.banner-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 100vh;
  width: 100%;
  .banner-swiper {
    height: 100%;
    width: 100%;
    .banner-img {
      position: absolute;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
}

.bannerFade-enter-active,
.bannerFade-leave-active {
  transition: all 2s;
}
.bannerFade-enter,
.bannerFade-leave-to {
  opacity: 0;
}

.text-box {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  height: 60%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  padding: 60px 0 30px;
  font-size: 3rem;
  text-shadow: var(--color-text-light-grey) 0.2em 0.2em 0.2em;
  text-align: center;
  color: var(--color-white);
}

.subtitle {
  color: var(--color-white);
  text-shadow: var(--color-text-light-grey) 0.2em 0.2em 0.2em;
  font-family: var(--title);
  font-size: 1.2rem;
  margin: 0 20px;
  text-align: center;
}

.tools-bar {
  margin-top: 130px;
  height: 150px;
  width: 50%;
  min-width: 300px;
  border: 1px solid var(--color-white);
  box-shadow: 0 0 10px rgb(0 0 0 / 20%);
  border-radius: 30px;
}

.watch-more {
  position: absolute;
  bottom: 10px;
  animation: floating 1s infinite;
  animation-direction: alternate;
  cursor: pointer;
}

.icon-down {
  color: var(--color-white);
  font-size: 2.4rem;
}

@keyframes floating {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(10px);
  }
}
</style>
