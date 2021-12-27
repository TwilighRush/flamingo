<!--
 * @Author: wang,shuang
 * @Date: 2021-12-24 15:39:59
 * @Description: filte description
-->
<template>
  <div>
    <div class="header-wrapper">
      <div class="icon-box" @click="showSideBar = true">
        <i class="iconfont icon-menu"></i>
      </div>
      <div class="logo-title">
        <img class="logo" src="../../assets/image/logo.png" alt="logo" />
        <a class="title">Flamingo</a>
      </div>
      <div class="menu">
        <a v-for="(item, index) in menuOptions" :key="index" class="menu-item">
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
          to: "/",
        },
      ],
    };
  },
  mounted() {
    console.log("---", file);
  },
  methods: {
    handleMaskClick() {
      this.showSideBar = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.header-wrapper {
  user-select: none;
  position: relative;
  display: flex;
  align-self: center;
  justify-content: space-around;
  background: var(--main);
  // opacity: 0;
  height: 64px;
  width: 100%;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 7px 10px 0 rgb(0 0 0 / 12%);
  @include whenSmallScreen {
    height: 56px;
  }
}

.icon-box {
  position: absolute;
  left: 10px;
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
    }
    &:hover {
      background-color: hsl(0, 0%, 61%, 0.2);
    }
  }
}
</style>
