const mongoose = require('mongoose')
const Schema = mongoose.Schema
const DiscountSchema = new Schema({
    book: {type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true},
    discountName: { type: String, required: true},
    discountType: { type: String, default: 'Percentage', enum: ['Percentage', 'Fixed']},
    discountValue: { type: Number, required: true, default: 0},
    validFrom: { type: Date, required: true},
    validTo: { type: Date, required: true},
    status: { type: String, default: 'Active' , enum: ['Active', 'Inactive']}
}, { timestamps: true })

module.exports = mongoose.model('Discount', DiscountSchema)