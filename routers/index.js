const fs = require('fs');
const path = require('path');
const compose = require('koa-compose');

const routerPath = path.resolve(__dirname, './');
const routerNameRegex = /^.*router$/;
const Folder = fs.readdirSync(routerPath);

const routers = Folder.reduce((reducer, router) => {
    if (router === 'index.js') return reducer;
    const pathToService = path.resolve(routerPath, router);
    const routerToAttach = require(pathToService);
    reducer.push(routerToAttach);
    return reducer;
}, []);

module.exports = compose(routers);
