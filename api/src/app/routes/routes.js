const router = require('express').Router();
const tasks = require('../controllers/tasks');

router.route('/tasks')
    .post(tasks.add)
    .get(tasks.index)
    .put(tasks.update)
    
router.get('/tasks/:id', tasks.getById);
router.delete('/tasks/:id', tasks.delete);

module.exports = router;