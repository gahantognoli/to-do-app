const Tasks = require('../models/tasks');
const tasks = new Tasks();

module.exports = {
    index: async (req, res) => {
        try {
            const data = await tasks.listAll();
            res.json(data);
        } catch (error) {
            res.status(500).json({ error });
        }
    },
    add: async (req, res) => {
        try {
            const newTask = req.body;
            console.log('***ADD***', newTask)
            const taskReturn = await tasks.add(newTask);
            res.status(201).json(taskReturn);
        } catch (error) {
            res.status(500).json({ error })
        }
    },
    getById: async (req, res) => {
        try {
            const { id } = req.params;
            const task = await tasks.getById(id);
            res.json(task);
        } catch (error) {
            res.status(500).json({ error });
        }
    },
    update: async (req, res) => {
        try {
            const { id } = req.params;
            const taskUpdate = req.body;
            await tasks.update(taskUpdate, id);
            res.status(204).end();
        } catch (error) {
            res.status(500).json({ error });
        }
    },
    delete: async (req, res) => {
        const { id } = req.params;
        await tasks.delete(id);
        res.status(204).end();
    }
}