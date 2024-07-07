const mongoose = require("mongoose")

const anotationSchema = new mongoose.Schema({
    title: { type: String },
    body: { type: String },
    fav: { type: Boolean },
    color: { type: String }
})

module.exports  = mongoose.models.Anotation || mongoose.model('Anotation', anotationSchema)