const pickbanRouter = require('express').Router()
const PickBan = require('../models/pickban')

pickbanRouter.get('/', async (req, res) => {
    const pickBans = PickBan.find({}).then(item => {
    res.json(pickBans)
  })
})

pickbanRouter.get('/:id', (req, res, next) => {
  PickBan.findById(req.params.id)
    .then(item => {
      if (item) {
        res.json(item)
      } else {
        res.status(404).end()
      }
    })
    .catch(error => next(error))
})

pickbanRouter.post('/', async (req, res, next) => {
  const body = req.body
  const pickban = new PickBan({
    maps: body.maps,
    totalGames: body.totalGames,
    playersPerTeam: body.playersPerTeam,
    gamesPerSide: body.gamesPerSide,
  })

  const out = await pickban.save()
  res.json(out)
})

module.exports = pickbanRouter