const teamsRouter = require('express').Router()
const Team = require('../models/team.js')


teamsRouter.get('/', (req, res, next) => {
  Team.find({}).then(teams => {
    res.json(teams)
  })
})

teamsRouter.get('/:id', (req, res, next) => {
  Team.findById(req.params.id)
    .then(item => {
      if (item) {
        res.json(item)
      } else {
        res.status(404).end()
      }
    })
    .catch(error => next(error))
})

teamsRouter.post('/', async (req, res, next) => {
  const body = req.body
  const team = new Team({
    name: body.name,
    mapBans: body.mapBans,
    mapPicks: body.mapPicks,
    logoAddress: body.logoAddress,
  })

  const out = await team.save()
  res.json(out)
})

module.exports = teamsRouter