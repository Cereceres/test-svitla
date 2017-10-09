const Koa = require('koa');
const views = require('koa-render-view');
const path = require('path');
const routers = require('./routers');

const app = new Koa();

app.use(views(path.join(__dirname, '/views')));
app.use(routers);

app.listen(3000);
