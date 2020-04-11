<template>
  <div class="subheader-container">
    <span class="main-text">{{ header }}</span>
    <span class="support-text" v-if="supportText">{{ supportText }}</span>
  </div>
</template>

<script>
  export default {
    name:"SubHeader",
    props: {
      header: {
        type: String,
        default: ""
      },
      supportText: {
        type: String,
        default: ""
      }
    },
  }
</script>

<style lang="scss" scoped>
.subheader-container {
  margin-top: 25px;
  color:#FB8C48;
  text-transform: uppercase;
  display: flex;
  align-items: baseline;

  .main-text {
    text-align: left;
    font-size: 18px;
    display: flex;
    align-items: flex-end;
  }

  .support-text {
    font-size: 14px;
    display: flex;
    align-items: flex-end;
    margin-left: 5px;
    &::before {
      content: "-";
      margin-right: 5px;
    }
  }
}
</style>