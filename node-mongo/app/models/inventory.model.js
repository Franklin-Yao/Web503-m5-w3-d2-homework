const moogoose = require('mongoose')

const InventorySchema = new moogoose.Schema({
    id: Number,
    title:String,
    author: String
});

module.exports = moogoose.model('Inventory', InventorySchema);