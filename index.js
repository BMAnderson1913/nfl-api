const express = require('express')
const { getAllTeams, getTeamById, saveNewTeam } = require('./controllers/teams')
const bodyParser = require('body-parser')

const app = express()

app.get('/teams', getAllTeams)

app.get('/teams/:id', getTeamById)

app.post('/teams', bodyParser.json(), saveNewTeam)

app.all('*', (request, response) => {
  return response.status(404).send('I\'m sorry I can\'t find that team.')
})

app.listen(5678, () => {
  console.log('Listening on port 5678...') // eslint-disable-line no-console
})

