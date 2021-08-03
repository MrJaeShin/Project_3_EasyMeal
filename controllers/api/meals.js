const Meal = require('../../models/meal');

module.exports = {
    allMeals,
    create,
    show,
    update,
    delete: deleteOne,
    createItem
};

async function allMeals(req, res) {
    const meals = await Meal.find({});
    res.status(200).json(meals);
}

async function create(req, res) {
    const newMeal = await Meal.create(req.body);
    res.status(201).json(newMeal);
}

async function show(req, res) {
    const meal = await Meal.findById(req.params.id);
    res.status(200).json(meal);
}

async function update(req, res) {
    const updatedMeal = await Meal.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
        }
    );
    res.status(200).json(updatedMeal);
}

async function deleteOne(req, res) {

    const deletedMeal = await Meal.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedMeal);
}

async function createItem(req,res){
    Meal.findById(req.params.id, function(err, meal) {
        meal.items.push(req.body);
        meal.save(function(err) {
            res.json(meal)
        })
    })
}