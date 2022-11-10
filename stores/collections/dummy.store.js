const BaseModel = require('../base-model')
const path = require('path')

class DummyStore extends BaseModel {

}

module.exports = new DummyStore(path.basename(__filename).split('.')[0])
