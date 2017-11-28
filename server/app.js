const Koa = require('koa');
const logger = require('koa-logger');
const Router = require('koa-router');
const dotenv = require('dotenv');
dotenv.load({path:'./server/.env'});
const pageNotFound = require('./middleware/pageNotFound');
const statController = require('./controller/statController');
const userController = require('./controller/userController');
const mongoUtils = require('./utils/mongoUtils.js');


const app = new Koa();
const router = new Router();

mongoUtils.connect2mongo();

const helloWorld = (ctx, next) => {
  ctx.body = 'Hello world';
};

router.get('/', helloWorld);
router.get('/stat', statController.stat);
router.get('/users', userController.getUsers);

app.use(logger());
app.use(router.routes());
app.use(pageNotFound);

app.listen(4300);
