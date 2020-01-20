const Koa = require('koa');
const Router = require('koa-router');
const Pug = require('koa-pug');
const path = require('path');
const serve = require('koa-static');
const {MapQuest, DarkSky, Config} = require("./middleware");

const app = new Koa();
const router = new Router();
const pug = new Pug({
    viewPath: path.resolve(__dirname, './views'),
    app: app
});

router
    .use("/at/:city", MapQuest)
    .use("/at/:city", DarkSky)
    .get("/at/:city", async (ctx, next) => {
        await ctx.render(
            "index",
            {
                city: ctx.state.city,
                state: ctx.state.state,
                temperature: ctx.state.currently.temperature,
                summary: ctx.state.currently.summary,
                applicationVariables: {
                    icon: ctx.state.currently.icon
                }
            },
            true
        );
    });

app
    .use(serve("./public"))
    .use(Config)
    .use(router.routes())
    .use(router.allowedMethods());

module.exports = app;