const { Schema, model } = require("mongoose");

const stationSchema = new Schema({
    name: {
        type: String,
        required: [true, "Station name is required"]
    },
    municipality: {
        type: String,
        required: [true, "Municipality is required"]
    },
    province: {
        type: String,
        required: [true, "Province is required"]
    }
})

module.exports = model('Station', stationSchema);