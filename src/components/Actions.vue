<template>
  <div class="actions">
    <FontAwesomeIcon icon="plus" />
    <FontAwesomeIcon icon="ellipsis-h" />
  </div>
</template>

<script>
export default {
  name: "Actions",
};
</script>

<style lang="scss" scoped>
.actions {
  align-items: center;
  color: var(--accent-dark);
  display: flex;
  justify-content: space-between;
  width: 45px;
}
</style>
