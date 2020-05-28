const router = require('express').Router();
const tasks = require('../controllers/tasks');

router.route('/tasks')
    .post(tasks.add)
    .get(tasks.index)
    
router.route('/tasks/:id')
    .get(tasks.getById)
    .put(tasks.update)
    .delete(tasks.delete)

module.exports = router;