<template>
  <div class="container">
    <h1>Todos</h1>
    <todo
      v-for="todo in todos"
      :todo="todo"
      :key="todo.id"
    />
    <c-input
      placeholder="New todo..."
      @enter="newTodo"
    />
  </div>
</template>

<script>
import CInput from '../common/CInput'
import cookies from 'browser-cookies'
import Todo from '../common/Todo'

export default {
  name: 'Todos',
  components: { Todo, CInput },
  data () {
    return {
      todos: []
    }
  },
  mounted () {
    this.reload()
  },
  methods: {
    async newTodo (todo) {
      const res = await fetch('api/todos', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'x-xsrf-token': cookies.get('XSRF-TOKEN')
        },
        body: JSON.stringify({
          name: todo
        })
      })

      if (!res.ok) {
        alert(res.statusText)
      }

      const data = await res.json()

      console.log(data)
    },
    async reload () {
      const res = await fetch('api/todos', {
        headers: {
          'Accept': 'application/json'
        }
      })

      if (!res.ok) {
        alert(res.statusText)
      }

      const data = await res.json()

      this.todos.splice(0)

      data.forEach(todo => this.todos.push(todo))
    }
  }
}
</script>
