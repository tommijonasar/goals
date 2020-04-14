<template>
  <div id="app">
    <div class="content">
      <Header />
      <SubHeader header="Hlaup" />
      <DataRow accumulated="34" target="521" />
      <SubHeader header="Völkuþrek" />
      <DataRow accumulated="8" target="52" />
      <SubHeader header="Crossfit" />
      <DataRow accumulated="16" target="78" />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import SubHeader from "./components/SubHeader.vue";
import DataRow from "./components/DataRow";
import sassStyles from "./assets/main.scss";
export default {
  name: "App",
  components: {
    DataRow,
    Header,
    SubHeader,
  },
  methods: {
    test() {
      let ble = 1;
    },
  },
};
</script>

<style>
#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: var(--main-dark);
  height: 100%;
  max-width: 100%;
  margin: 0 auto;
}

@media (min-width: 375px) {
  #app {
    max-width: 375px;
  }
}

.content {
  margin: 30px 25px;
}
</style>
