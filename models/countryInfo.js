import mongoose from 'mongoose'
const Schema = mongoose.Schema
const model = mongoose.model

const countryInfo = new Schema({
    _id: {
        type: String,
        required: true
    },
    allDiffs: {
        type: Array,
        required: true
    },
    count: {
        type: Number,
        required: true
    },
    longitude: {
        type: Array,
        required: true
    },
    latitude: {
       type: Array,
       required: true
    }
})

export default model('info_of_country', countryInfo)