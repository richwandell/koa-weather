const Koa = require('koa');
const Router = require('koa-router');
const Pug = require('koa-pug');
const path = require('path');
const serve = require('koa-static');
const {MapQuestForward, MapQuestReverse, DarkSky, Config, NewsApi} = require("./middleware");

const app = new Koa();
const router = new Router();
const pug = new Pug({
    viewPath: path.resolve(__dirname, './views'),
    app: app
});

router
    .use("/get/:city", MapQuestForward)
    .use("/get/:city", DarkSky)
    .use("/get/:city", NewsApi)
    .get("/get/:city", async (ctx, next) => {
        ctx.type = 'application/vnd.api+json';
        ctx.body = {
            "data": {
                "type": "city",
                "attributes": {
                    "name": ctx.state.city,
                    "state": ctx.state.state,
                    "news": {
                        "data": ctx.state.newsArticles
                    },
                    "weather": ctx.state.currently
                }
            }
        }
    });

router
    .use("/getCityName/:latlng", MapQuestReverse)
    .get("/getCityName/:latlng", async (ctx, next) => {
        ctx.type = 'application/vnd.api+json';
        ctx.body = {
            "data": {
                "type": "city",
                "attributes": {
                    "name": ctx.state.city,
                    "state": ctx.state.state,
                }
            }
        };
    });

router.get("/", async (ctx, next) => await ctx.render("index", true));
router.get("/at/:city", async (ctx, next) => await ctx.render("index", true));

app
    .use(serve("./public"))
    .use(Config)
    .use(router.routes())
    .use(router.allowedMethods());

module.exports = app;