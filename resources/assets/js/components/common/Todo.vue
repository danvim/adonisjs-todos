<template>
  <div class="todo">
    <input
      type="checkbox"
      :checked="isChecked"
    >
    <c-input v-model="todo.name" />
  </div>
</template>

<script>
import CInput from './CInput'
export default {
  name: 'Todo',
  components: { CInput },
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  computed: {
    isChecked () {
      return this.todo.is_done === 1
    }
  }
}
</script>

<style scoped>

</style>
