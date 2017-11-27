const Koa = require('koa');
const logger = require('koa-logger');
const Router = require('koa-router');
const dotenv = require('dotenv');
const pageNotFound = require('./middleware/pageNotFound');


const app = new Koa();
const router = new Router();

dotenv.load({path:'./server/.env'});
const statController = require('./controller/statController');

const helloWorld = (ctx, next) => {
  ctx.body = 'Hello world';
};



router.get('/', helloWorld);
router.get('/stat', statController.stat);

app.use(logger());
app.use(router.routes());
app.use(pageNotFound);

app.listen(4300);
