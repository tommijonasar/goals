<template>
  <div class="data-container">
    <div class="accumulated">{{ accumulated }}</div>
    <div class="target">{{ target }}</div>
  </div>
</template>

<script>
export default {
  name: "Data",
  props: {
    accumulated: {
      type: String,
      default: "",
    },
    target: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.data-container {
  align-items: baseline;
  color: var(--light);
  display: flex;
  font-weight: var(--font-weight-bold);

  .accumulated {
    font-size: 48px;
    &:after {
      content: "/";
      margin: 0 5px;
    }
  }

  .target {
    font-size: 24px;
  }
}
</style>
