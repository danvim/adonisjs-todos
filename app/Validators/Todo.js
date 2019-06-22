'use strict'

class Todo {
  static get rules () {
    return {
      name: 'string',
      is_done: 'boolean'
    }
  }
}

module.exports = Todo
