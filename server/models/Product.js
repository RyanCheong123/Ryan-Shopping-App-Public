const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = mongoose.Schema({
    writter: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        maxlength: 50
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        default: 0
    },
    images: {
        type: Array,
        default: []
    },
    continents: {
        type: String
    },
    sold: {
        type: Number,
        maxlength: 300,
        default: 0
    },
    views: {
        type: Number,
        default: 0
    }
}, {timestamps: true})



const Product = mongoose.model('Product', productSchema);

module.exports = { Product }