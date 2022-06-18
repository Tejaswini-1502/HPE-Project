import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
   
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
        default: 0
    },
    description: {
        type: String,
        required: true,
    },
    isbn: {
        type: String,
        required: true,
    },
    genre: [{
        type: String,
        required: true,
    }],
    bookformat: {
        type: String,
        required: true,
    },
    pages: {
        type: Number,
        required: true,
    },
    publisher: {
        type: String,
        required: true,
    },
    num_ratings: {
        type: Number,
        required: true,
    },
    liked_percent: {
        type: Number,
        required: true,
        default: 0
    },
    image_url: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        default: 0
    }
},{
    timestamps: true
})

const Product = mongoose.model('Product',productSchema)

export default Product