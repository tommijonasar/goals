<template>
  <div id="app">
    <div class="content">
      <Header />
      <SubHeader header="Hlaup" support-text="km"/>
      <SubHeader header="Völkuþrek"/>
      <SubHeader header="Crossfit"/>
    </div>
  </div>
</template>

<script>

import Header from "./components/Header.vue"
import SubHeader from "./components/SubHeader.vue"
export default {
  name: 'App',
  components: {
    Header,
    SubHeader
  }
}
</script>

<style>
#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #2D2D2D;
  height: 100%;
  max-width: 375px;
  margin: 0 auto;
  border: 1px solid red;
}

.content {
  margin: 30px 25px;
}
</style>
