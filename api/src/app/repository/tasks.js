const knex = require('knex');
const db = require('../database');

class TasksRepository {
    async add(task) {
        return await db('tasks').insert(task);
    }

    async listAll() {
        return await db.select().from('tasks')
    }

    async getById(id) {
        return await db('tasks').where('id', id)
    }

    async update(task, id) {
        return await db('tasks').where('id', id).update(task);
    }

    async delete(id) {
        return await db('tasks').where('id', id).del();
    }
}

module.exports = TasksRepository;