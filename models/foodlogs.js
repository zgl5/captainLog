const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    type:  { type: String, required: true },
    haveFood: { type: Boolean, default: true},
    }, {timestamps: true}
    );

const Food = mongoose.model('Food', foodSchema);

module.exports = Food