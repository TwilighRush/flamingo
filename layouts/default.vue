<!--
 * @Author: wang,shuang
 * @Date: 2021-12-24 15:24:13
 * @Description: layout
-->
<template>
  <div>
    <Header />
    <nuxt />
  </div>
</template>
<script>
import Header from "../components/Header";
export default {
  name: "NuxtDefaultLayout",
  components: {
    Header,
  },
};
</script>
