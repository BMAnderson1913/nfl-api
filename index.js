const express = require('express')
const bodyParser = require('body-parser')
const { getAllTeams, getTeamById, saveNewTeam } = require('./controllers/teams')

const app = express()

app.get('/', getAllTeams)

app.get('/:id', getTeamById)

app.post('/', bodyParser.json(), saveNewTeam)

app.listen(8000, () => {
  console.log('Listening on port 8000...') // eslint-disable-line no-console
})
