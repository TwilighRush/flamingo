<!--
 * @Author: wang,shuang
 * @Date: 2021-12-28 14:56:34
 * @Description: banner
-->
<template>
  <div class="banner-wrapper">
    <img class="background-walk" src="../../assets/image/banner.jpg" alt="" />
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
    };
  },
  methods: {
    handleWatchMore() {
      const clientHeight = window.innerHeight;
      window.scrollTo({
        top: clientHeight,
      });
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
  & > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
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
