const teams = require('../teams')

const getAllTeams = (request, response) => {
  return response.send(teams)
}

const getTeamById = (request, response) => {
  const { id } = request.params

  const foundTeam = teams.filter((team) => team.id === id)

  return response.send(foundTeam)
}

const saveNewTeam = (request, response) => {
  const { id, location, mascot, abbreviation, conference, division } = request.body

  if (!id || !location || !mascot || !abbreviation || !conference || !division) {
    return response.status(400).send('All fields are required')
  }

  const newTeam = { id, location, mascot, abbreviation, conference, division }

  teams.push(newTeam)

  return response.send(201).send(newTeam)
}

module.exports = { getAllTeams, getTeamById, saveNewTeam }


