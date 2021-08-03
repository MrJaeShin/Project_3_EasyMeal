const express = require('express');
const router = express.Router();
const itemsCtrl = require('../../controllers/api/items');

router.get('/', itemsCtrl.allItems);
router.post('/', itemsCtrl.create);
router.delete('/:id', itemsCtrl.delete);

module.exports = router;