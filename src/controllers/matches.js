const matchRouter = require('express').Router()
const Match = require('../models/match.js')


matchRouter.get('/', (req, res, next) => {
  Match.find({}).then(matches => {
    res.json(matches)
  })
})

matchRouter.get('/:id', (req, res, next) => {
  Match.findById(req.params.id)
    .then(item => {
      if (item) {
        res.json(item)
      } else {
        res.status(404).end()
      }
    })
    .catch(error => next(error))
})

matchRouter.post('/', async (req, res, next) => {
  const body = req.body
  const match = new Match({
    maps: body.maps,
    totalGames: body.totalGames,
    playersPerTeam: body.playersPerTeam,
    gamesPerSide: body.gamesPerSide,
    tankPicking: body.tankPicking,
    teamA: body.teamA,
    teamb: body.teamB
  })

  const out = await match.save()
  res.json(out)
})

module.exports = matchRouter