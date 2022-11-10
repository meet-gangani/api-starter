const router = require('express').Router()

const { getDummies, addDummy } = require('../../controllers/dummy')

// User routes - /v1/dummies
router.get('/', getDummies)
router.post('/', addDummy)
// router.get('/:userId', getUser)
// router.put('/:userId', updateUser)
// router.delete('/:userId', deleteUser)

module.exports = router
