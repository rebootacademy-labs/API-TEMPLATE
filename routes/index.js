const router = require('express').Router()

const authRouter = require('./auth.router')
const usersRouter = require('./users.router')

router.use('/auth', authRouter)
router.use('/users', usersRouter)

// Authenticated Route
const { authUser } = require('../utils/functions')

router.get('/whoami', authUser, (req, res) => {
  res.send(`hi there! ${res.locals.user.name}`)
})

module.exports = router
