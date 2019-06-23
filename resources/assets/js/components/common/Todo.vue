<template>
  <div class="todo">
    <input
      type="checkbox"
      :checked="isChecked"
      @input="updateCheck"
    >
    <c-input
      v-model="todo.name"
      :class="{done: isChecked}"
      @enter="handleUpdate"
    />
  </div>
</template>

<script>
import CInput from './CInput'
import { headers } from '../../headers'

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
  },
  methods: {
    updateCheck (checkbox) {
      this.todo.is_done = checkbox.target.checked ? 1 : 0
      this.handleUpdate()
    },
    async handleUpdate () {
      const res = await fetch(`api/todos/${this.todo.id}`, {
        method: 'PUT',
        headers: headers(),
        body: JSON.stringify({
          name: this.todo.name,
          is_done: this.todo.is_done
        })
      })

      if (res.status !== 202) {
        alert(res.statusText)
      }

      const todoNew = await res.json()
      this.todo.name = todoNew.name
    }
  }
}
</script>

<style scoped lang="sass">
input.done
  text-decoration-line: line-through

input[type="text"]:not(:hover)
  border-color: transparent
</style>
