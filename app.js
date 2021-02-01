const Koa = require("koa");
const json = require("koa-json");
const logger = require("koa-logger");
const cors = require('koa2-cors')
const parser = require("koa-bodyparser");
const InitManager = require('./core/init');
const catchError = require('./middlewares/exception');



const app = new Koa();


app.use(cors());
app.use(catchError)
app.use(json());
app.use(parser());
app.use(logger());



InitManager.initCore(app);



app.listen(6324, () => console.log("-------------------------服务已启动-------------------------"));



module.exports = app;