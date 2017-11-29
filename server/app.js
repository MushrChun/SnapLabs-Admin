const Koa = require('koa');
const logger = require('koa-logger');
const Router = require('koa-router');
const dotenv = require('dotenv');
dotenv.load({ path: './server/.env' });
const cors = require('@koa/cors');
const pageNotFound = require('./middleware/pageNotFound');
const statController = require('./controller/statController');
const userController = require('./controller/userController');
const investigationController = require('./controller/investigationController');
const mongoUtils = require('./utils/mongoUtils.js');


const app = new Koa();
const router = new Router();

mongoUtils.connect2mongo();

const helloWorld = (ctx) => {
  ctx.body = 'Hello world';
};

router.get('/', helloWorld);
router.get('/stat', statController.stat);
router.get('/users', userController.getUsers);
router.get('/investigations', investigationController.getInvestigations);

app.use(cors());
app.use(logger());
app.use(router.routes());
app.use(pageNotFound);

app.listen(4300);
