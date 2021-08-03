const Item = require('../../models/item');

module.exports = {
    allItems,
    create,
    delete: deleteOne
};

async function allItems(req, res) {
    const items = await Item.find({});
    res.status(200).json(items);
}

async function create(req, res) {
    const newItem = await Item.create(req.body);

    console.log('req', req.body);
    console.log('newItem', newItem);
    console.log('res', res);
    res.status(201).json(newItem);
}

async function deleteOne(req, res) {

    const deletedItem = await Item.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedItem);
}