<template>
  <div class="data-row">
    <Data v-bind="$attrs" />
    <Actions />
  </div>
</template>

<script>
import Data from "./Data";
import Actions from "./Actions";
export default {
  name: "DataRow",
  components: {
    Actions,
    Data,
  },
};
</script>

<style lang="scss" scoped>
.data-row {
  display: flex;
  justify-content: space-between;
}
</style>
