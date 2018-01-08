import mongoose from 'mongoose';

var ProductSchema = new mongoose.Schema({
    prod_name: String,
    prod_desc: String,
    prod_price: Number,
    updated_at: { type: Date, default: Date.now },
});

var Product = mongoose.model('Product', ProductSchema);
module.exports = Product;