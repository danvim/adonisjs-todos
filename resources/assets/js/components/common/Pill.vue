<template>
  <button
    type="button"
    class="pill"
    :class="{ active: isActive }"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Pill',
  props: {
    isActive: Boolean
  }
}
</script>

<style scoped>

</style>
