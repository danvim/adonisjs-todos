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

  async put ({ request, response, params }) {
    const todo = await Todo.findOrFail(params.todoId)
    todo.name = request.post().name
    todo.is_done = request.post().is_done
    todo.save()
    response.status(202).json(todo)
  }
}

module.exports = TodoController
