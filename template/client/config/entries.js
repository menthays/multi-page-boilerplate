var path = require('path')
var fs = require('fs')

var ROUTES_PATH = path.resolve(__dirname,'../src/routes')
var routesArray = fs.readdirSync(ROUTES_PATH)

module.exports = {

}

routesArray.map((key)=>{
  module.exports[key] = `@/routes/${key}/${key}.js`
})
