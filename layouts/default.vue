<!--
 * @Author: wang,shuang
 * @Date: 2021-12-24 15:24:13
 * @Description: layout
-->
<template>
  <div>
    <Header />
    <meting-js
      server="netease"
      type="playlist"
      id="2189979178"
      fixed="true"
      lrc-type="0"
      list-folded="true"
    >
    </meting-js>
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
