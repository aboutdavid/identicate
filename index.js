const express = require('express')
const acl = require("./acl")
const app = express()

app.get('/acl/user/allowed', (req, res) => {
  const { user, permission } = req.query
  if (!user) return res.json({
    error: true,
    comments: "User field required"
  }).status(400)
  if (!permission) return res.json({
    error: true,
    comments: "Permission field required"
  }).status(400)
  if (permission.split(":").length != 2) return res.json({
    error: true,
    comments: "Permissions invalid"
  }).status(400)

  const split = permission.split(":")
  const service = split[0]
  const subset = split[1]

  res.json(acl.isAllowed({ user, service, permission: subset }))
})

app.get('/acl/user/lookup', (req, res) => {
  const { user } = req.query
  if (!user) return res.json({
    error: true,
    comments: "User field required"
  }).status(400)
  var userFound = acl.getUser({ user })
  userFound.roles = userFound.roles.map(r => {
    var lookupRole = acl.getRole({ role: r.id })
    delete lookupRole.members
    return lookupRole
  })
  res.json(userFound)
})

app.get('/acl/role/lookup', (req, res) => {
  const { role } = req.query

  if (!role) return res.json({
    error: true,
    comments: "Role field required"
  }).status(400)
  var foundRole = acl.getRole({ role })
  delete foundRole.members
  res.json(foundRole)
})

app.get('/acl/service/lookup', (req, res) => {
  const { service } = req.query

  if (!service) return res.json({
    error: true,
    comments: "Service field required"
  }).status(400)
  var foundService = acl.getService({ service })
  res.json(foundService)
})

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log(`Identicate app listening on port ${listener.address().port}`)
})