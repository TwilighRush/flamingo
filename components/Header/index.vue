<!--
 * @Author: wang,shuang
 * @Date: 2021-12-24 15:39:59
 * @Description: filte description
-->
<template>
  <div>
    <div class="header-wrapper" :style="colorful">
      <div class="icon-box" @click="showSideBar = true">
        <i class="iconfont icon-menu"></i>
      </div>

      <div class="logo-title">
        <img class="logo" src="../../assets/image/logo.png" alt="logo" />
        <a class="title">Flamingo</a>
      </div>

      <div class="menu">
        <a
          v-for="(item, index) in menuOptions"
          :key="index"
          class="menu-item"
          @click="handleMenuClick(item)"
        >
          <i class="iconfont icon-menu" :class="item.icon"></i>
        </a>
      </div>
    </div>
    <SideBar
      :menu="menuOptions"
      :show="showSideBar"
      @clickMask="handleMaskClick"
    />
  </div>
</template>
<script>
import SideBar from "./SideBar";
import * as file from "../../assets/blog.config.json";
export default {
  name: "Header",
  components: {
    SideBar,
  },
  data() {
    return {
      showSideBar: false,
      bgColor: 0,
      menuOptions: [
        {
          name: "首页",
          icon: "icon-home",
          to: "/",
        },
        {
          name: "关于",
          icon: "icon-user",
          to: "/about",
        },
        {
          name: "搜索",
          icon: "icon-search",
          to: "/search",
        },
      ],
    };
  },
  computed: {
    colorful() {
      let styles = { background: `hsl(187, 100%, 33%, ${this.bgColor})` };
      if (this.bgColor >= 1) {
        styles.boxShadow =
          "0 2px 5px 0 rgb(0 0 0 / 16%), 0 7px 10px 0 rgb(0 0 0 / 12%)";
      }
      return styles;
    },
  },
  mounted() {
    // console.log("---", file);
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleMenuClick(item) {
      this.$router.push(item.to);
    },
    handleMaskClick() {
      this.showSideBar = false;
    },
    handleScroll(e) {
      const height =
        document.documentElement.scrollTop || document.body.scrollTop;
      this.bgColor = height / 300;
    },
  },
};
</script>
<style lang="scss" scoped>
.header-wrapper {
  position: fixed;
  z-index: 9;
  top: 0;
  user-select: none;
  display: flex;
  align-self: center;
  justify-content: space-around;
  height: 64px;
  width: 100%;
  @include whenSmallScreen {
    height: 56px;
  }
}

.icon-box {
  position: absolute;
  left: 20px;
  line-height: 56px;
  @include whenNotSmallScreen {
    display: none;
  }
  .icon-menu {
    font-size: 24px;
    font-weight: 900;
    color: var(--color-white);
  }
}

.logo-title {
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 100%;
  .logo {
    height: 70%;
    @include whenSmallScreen {
      display: none;
    }
  }

  .title {
    margin: 0 10px;
    color: var(--color-white);
    font-size: 1.2rem;
    line-height: 64px;
    text-shadow: var(--color-text-light-grey) 0.2em 0.2em 0.2em;

    @include whenSmallScreen {
      line-height: 56px;
    }
  }
}

.menu {
  display: flex;
  align-items: center;
  @include whenSmallScreen {
    display: none;
  }
  .menu-item {
    height: 100%;
    cursor: pointer;
    width: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.3s linear;
    .icon-menu {
      font-size: 26px;
      color: var(--color-white);
      text-shadow: var(--color-text-light-grey) 0.2em 0.2em 0.2em;
    }
    &:hover {
      background-color: rgba(182, 182, 182, 0.3);
    }
  }
}
</style>
