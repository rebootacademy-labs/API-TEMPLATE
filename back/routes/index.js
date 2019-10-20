const router = require('express').Router();

const homesRouter = require('./homes.router');
const usersRouter = require('./users.router');
const authRouter = require('./auth.router');

router.use('/homes', homesRouter);
router.use('/users', usersRouter);
router.use('/auth',  authRouter);

module.exports = router;