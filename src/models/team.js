const mongoose = require('mongoose')

const teamSchema = new mongoose.Schema({
    name: {
        type: String
    },
    mapBans: {
        type: [String]
    },
    mapPicks: {
        type: [String]
    },
    logoAddress: {
        type: String
    }
})

teamSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Team', teamSchema)