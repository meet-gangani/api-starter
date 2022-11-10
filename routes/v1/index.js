const v1Routes = require('express').Router()
const dummyRoutes = require('./dummy')
const userRoutes = require('./user')

v1Routes.use('/dummies', dummyRoutes)
v1Routes.use('/users', userRoutes)

module.exports = v1Routes
