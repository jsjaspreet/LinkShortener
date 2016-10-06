// external imports
var path = require('path')
// local imports
var projectPaths = require('../projectPaths')
var baseConfig = require(projectPaths.webpackBaseConfig)

// parse the output target
var outputTarget = path.parse(projectPaths.clientBuild)

module.exports = Object.assign({}, baseConfig, {
    // additional client configuration goes here
    entry: projectPaths.clientEntry,
    output: {
        path: outputTarget.dir,
        filename: outputTarget.base
    }
})


// end of file
