const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const mealSchema = new Schema(
    {
        name: { type: String},
        // mealType: { type: String},
        items: [{
            type: Schema.Types.ObjectId,
            ref: 'Item',
        }],
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Meal', mealSchema);