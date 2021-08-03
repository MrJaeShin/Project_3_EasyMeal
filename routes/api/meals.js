const express = require('express');
const router = express.Router();
const mealsCtrl = require('../../controllers/api/meals');

router.get('/', mealsCtrl.allMeals);
router.post('/', mealsCtrl.create);
router.get('/:id', mealsCtrl.show);
router.put('/:id', mealsCtrl.update);
router.delete('/:id', mealsCtrl.delete);

module.exports = router;