const mongoose = require('mongoose')


const MapelSchema = new mongoose.Schema({
    mapel: {
        type: String,
        require: [true, "Silahkan isikan mapel"],
    },
    guru: {
        type: String,
        require: [true, "Silahkan isikan nama guru"],
    },
    ruangan: {
        type: String,
        require: [true, "Silahkan isikan ruangan"],
    },
    jam: {
        type: String,
        require: [true, "Silahkan isikan jam mapel"],
    },
    type: {
        type: String,
        require: [true, "Silahkan isikan type"],
    },

})

module.exports = mongoose.model('Mapels', MapelSchema)