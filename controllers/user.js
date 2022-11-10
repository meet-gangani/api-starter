const { UserStore } = require('../stores')
const { sendSuccess, sendError } = require('./utils')

const getUsers = async (req, res) => {
  try {
    const users = await UserStore.getAll()

    sendSuccess(res, { data: users })
  } catch (error) {
    sendError(res, 'Error while fetching users.', error)
  }
}

const addUser = async (req, res) => {
  try {
    const userInfo = req.body

    if (!userInfo) {
      return sendError(res, 'User not available.', null, 404)
    }

    const user = await UserStore.save(userInfo)
    sendSuccess(res, { data: user })
  } catch (error) {
    sendError(res, 'Error while adding user.', error)
  }
}

module.exports = {
  getUsers,
  addUser
}