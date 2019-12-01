const router = require('express').Router();
const { index, store, find, update, destroy } = require('../controllers/users.controller');

router.route('/')
    .get(index)
    .post(store);

router.route('/:id')
    .get(find)
    .put(update)
    .delete(destroy);

module.exports = router;