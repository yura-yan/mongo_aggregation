import mongoose from 'mongoose'
const Schema = mongoose.Schema
const model = mongoose.model

const country = new Schema({
    country: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    location: {
        ll: {
            type: Array,
            required: true,
        }
    },
    students: [
        {
            year: {
                type: Number,
                required: true
            },
            number: {
                type: Number,
                required: true
            }
        }
    ]
})

export default model('Country', country)