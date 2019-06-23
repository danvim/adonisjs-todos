<template>
  <div class="container">
    <h1>Todos</h1>
    <nav class="pills">
      <pill
        :is-active="isUndone"
        @click.native="activateUndone"
      >
        Undone
      </pill>
      <pill
        :is-active="isDone"
        @click.native="activateDone"
      >
        Done
      </pill>
      <pill
        :is-active="isAll"
        @click.native="activateAll"
      >
        All
      </pill>
    </nav>
    <todo
      v-for="todo in filteredTodos"
      :key="todo.id"
      :todo="todo"
    />
    <c-input
      placeholder="New todo..."
      @enter="newTodo"
    />
  </div>
</template>

<script>
import CInput from '../common/CInput'
import { headers } from '../../headers'
import Todo from '../common/Todo'
import Pill from '../common/Pill'

const TYPE_ALL = 0
const TYPE_DONE = 1
const TYPE_UNDONE = 2

export default {
  name: 'Todos',
  components: { Pill, Todo, CInput },
  data () {
    return {
      todos: [],
      type: TYPE_UNDONE
    }
  },
  computed: {
    isUndone () {
      return this.type === TYPE_UNDONE
    },
    isDone () {
      return this.type === TYPE_DONE
    },
    isAll () {
      return this.type === TYPE_ALL
    },
    filteredTodos () {
      if (this.type === TYPE_DONE) {
        return this.todos.filter(todo => todo.is_done === 1)
      } else if (this.type === TYPE_UNDONE) {
        return this.todos.filter(todo => todo.is_done === 0)
      }
      return this.todos
    }
  },
  mounted () {
    this.reload()
  },
  methods: {
    activateUndone () {
      this.type = TYPE_UNDONE
    },
    activateDone () {
      this.type = TYPE_DONE
    },
    activateAll () {
      this.type = TYPE_ALL
    },
    async newTodo (todo) {
      const res = await fetch('api/todos', {
        method: 'POST',
        headers: headers(),
        body: JSON.stringify({
          name: todo
        })
      })

      if (!res.ok) {
        alert(res.statusText)
      }

      this.reload()
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
