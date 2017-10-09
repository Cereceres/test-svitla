const Router = require('koa-router');
const router = new Router();

router.get('/', ({render}) => render('index'));

module.exports = router.routes();
