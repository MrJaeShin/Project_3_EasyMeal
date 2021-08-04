const Item = require('../../models/item');

module.exports = {
    allItems,
    create,
    show,
    update,
    delete: deleteOne
};

async function allItems(req, res) {
    const items = await Item.find({});
    res.status(200).json(items);
}

async function create(req, res) {
    const newItem = await Item.create(req.body);
    res.status(201).json(newItem);
}

async function show(req, res) {
    const item = await Item.findById(req.params.id);
    res.status(200).json(item);
}

async function update(req, res) {
    const updatedItem = updateItem.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(updatedItem)
}

async function deleteOne(req, res) {

    const deletedItem = await Item.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedItem);
}