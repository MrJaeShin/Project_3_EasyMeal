const express = require('express');
const router = express.Router();
const mealsCtrl = require('../../controllers/api/meals');

router.get('/', mealsCtrl.allMeals);
router.post('/', mealsCtrl.create);
router.get('/:id', mealsCtrl.show);
router.delete('/:id', mealsCtrl.delete);
router.post('/create', mealsCtrl.createMeal);

module.exports = router;