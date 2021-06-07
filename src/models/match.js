const mongoose = require('mongoose')

const matchSchema = new mongoose.Schema({
  maps: {
    type: [String]
  },
  totalGames: {
    type: Number,
    default: 9
  },
  playersPerTeam: {
    type: Number,
    default: 15
  },
  gamesPerSide: {
    type: Number,
    default: 1
  },
  tankPicking: {
    type: Boolean,
    default: false
  },
  teamA: {
    type: mongoose.Schema.Types.ObjectId,
  },
  teamB: {
    type: mongoose.Schema.Types.ObjectId,
  }
})

matchSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Match', matchSchema)