const Router = require('koa-router')
const Directory = require('require-directory')

class InitManager {
    static initCore(app) {
        InitManager.app = app
        InitManager.initLoadRouters()
        InitManager.initLoadConfig()
    }

    static initLoadRouters() {
        function checkRouter(obj) {
            if (obj instanceof Router) {
                InitManager.app.use(obj.routes())
            }
        }
        const path = process.cwd() + '/app/api'
        Directory(module, path, { visit: checkRouter })
    }

    static initLoadConfig() {
        const path = process.cwd() + '/config/config.js'
        global.config = require(path)
    }
}

module.exports = InitManager