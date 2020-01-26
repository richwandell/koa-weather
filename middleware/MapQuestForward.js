module.exports = async function (ctx, next) {
    const axios = require('axios');
    const city = ctx.params.city;
    const mapQuestApiKey = ctx.app.config["MapQuest Api Key"];
    const mapQuestEndpoint = `http://open.mapquestapi.com/geocoding/v1/address?key=${mapQuestApiKey}&location=${city}`;

    let res = await axios.get(mapQuestEndpoint);
    ctx.state.latLng = res.data.results["0"].locations["0"].latLng;
    ctx.state.city = res.data.results["0"].locations["0"].adminArea5;
    ctx.state.state = res.data.results["0"].locations["0"].adminArea3;
    return next();
};