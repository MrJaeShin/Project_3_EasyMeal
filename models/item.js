const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const itemSchema = new Schema(
    {
        itemName: { type: String, },
        itemCalories: { type: String },
        itemCategory: { type: String, enum: ["protein", "carb", "veggie/fruit"] },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Item', itemSchema);