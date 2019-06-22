'use strict'

const Todo = use('App/Models/Todo')

class TodoController {
  async index ({ request, response }) {
    response.json(await Todo.all())
  }

  post ({ request, response }) {
    const todo = new Todo()
    todo.name = request.post().name
    todo.is_done = 0
    todo.save()
    todo.reload()
    response.status(201).json(todo)
  }
}

module.exports = TodoController
