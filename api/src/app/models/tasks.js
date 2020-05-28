const TasksRepository = require('../repository/tasks');

class Tasks {
    constructor() {
        this._tasksRepository = new TasksRepository();
        this.add.bind(this);
    }

    async listAll() {
        try {
            return await this._tasksRepository.listAll();
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getById(id) {
        try {
            return await this._tasksRepository.getById(id);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async add(task) {
        try {
            task.done = false;
            const idReturn = await this._tasksRepository.add(task);
            return { id: idReturn[0] };
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async update(task, id) {
        try {
            return await this._tasksRepository.update(task, id);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async delete(id) {
        try {
            return await this._tasksRepository.delete(id);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = Tasks;