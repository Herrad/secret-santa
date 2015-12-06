module.exports = function run() {
    var groups = require('./groups.json')
    var generator = require('./generator')(groups)
    var result = generator.generate()
    return result
}