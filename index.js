const express = require('express')
const { getAllTeams, getTeamById } = require('./controllers/teams')

const app = express()

app.get('/', getAllTeams)

app.get('/:id', getTeamById)

app.listen(8000, () => {
  console.log('Listening on port 8000...') // eslint-disable-line no-console
})
