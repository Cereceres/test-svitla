const Router = require('koa-router');
const router = new Router();
const brands = [
    'banana republic',
    'rebecca taylor',
    'gap',
    'boss',
    'hugo boss',
    'taylor',
];
const clothing = [
    'denim',
    'pants',
    'sweaters',
    'skirts',
    'dresses',
];
router.get('/search', async(ctx) => {
    if (!ctx.query || !ctx.query.q) return;
    const query = ctx.query.q.split(/\s/g);
    ctx.body = query.map((word) => word.trim().toLowerCase())
        .map((word, index) => {
            if (brands.indexOf(word) >= 0) return {
                word: query[index],
                style: 'bold'
            };

            if (clothing.indexOf(word) >= 0) return {
                word: query[index],
                style: 'italic'
            };

            return word;
        });
    let boldLonger = '';
    let italicLonger = '';
    ctx.body = ctx.body.map((element) => {
        console.log('element', element);
        console.log('boldLonger', boldLonger);
        console.log('italicLonger', italicLonger);
        if (element.word && element.style === 'bold' && element.word.length > boldLonger.length) boldLonger = element.word;
        if (element.word && element.style === 'italic' && element.word.length > italicLonger.length) italicLonger = element.word;
        if (element.word && (boldLonger !== element.word || italicLonger !== element.word)) element = element.word;
        return element;
    });
});

module.exports = router.routes();
