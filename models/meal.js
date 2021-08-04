const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemListSchema = new Schema(
    {
        itemName: { type: String, },
        itemCalories: { type: String },
        itemCategory: { type: String, enum: ["protein", "carb", "veggie/fruit"] },
    },
    {
        timestamps: true,
    }
);
const mealSchema = new Schema(
    {
        name: { type: String },
        // mealType: { type: String},
        items: [{
            type: Schema.Types.ObjectId,
            ref: 'Item',
        }],
        // itemLists:[itemListSchema]
        
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Meal', mealSchema);