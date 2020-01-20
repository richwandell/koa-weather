module.exports = async function (ctx, next) {
    const axios = require('axios');
    const moment = require('moment');

    const oneMonthAgo = moment().subtract(1, 'months').format('YYYY-MM-DD');
    const cityState = ctx.state.city + " " + ctx.state.state;
    const newsApiKey = ctx.app.config["News Api Key"];
    const newsEndpoint = `https://newsapi.org/v2/everything?q=${cityState}&from=${oneMonthAgo}&sortBy=publishedAt&apiKey=${newsApiKey}`;

    let res = await axios.get(newsEndpoint);
    ctx.state.newsArticles = res.data.articles;

    return next();
};