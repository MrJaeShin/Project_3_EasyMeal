const Meal = require('../../models/meal');

module.exports = {
    allMeals,
    create,
    show,
    delete: deleteOne,
    createMeal
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

async function deleteOne(req, res) {
    const deletedMeal = await Meal.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedMeal);
}
async function createMeal(req,res){
   
    
    const newMeal = await Meal.create(req.body)
    Meal.findById(newMeal._id, function(err,meal){
        meal.itemLists = req.body.item;
        meal.save(function(err,meal){
            console.log(meal);
            return res.status(200).json(meal);

        });
    })
    // res.status(200).json(newMeal);
    
}
