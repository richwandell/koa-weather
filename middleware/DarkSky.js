module.exports = async function(ctx, next) {
    const axios = require('axios');
    const darkSkyApiKey = ctx.app.config["DarkSky Api Key"];
    const darkSkyEndpoint = `https://api.darksky.net/forecast/${darkSkyApiKey}/`;

    const res = await axios.get(darkSkyEndpoint + `${ctx.state.latLng.lat},${ctx.state.latLng.lng}`);
    ctx.state.currently = res.data.currently;
    return next();
};