<template>
  <div class="subheader-container">
    <span class="main-text">{{ header }}</span>
  </div>
</template>

<script>
export default {
  name: "SubHeader",
  props: {
    header: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.subheader-container {
  margin-top: 25px;
  color: var(--accent-dark);
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
