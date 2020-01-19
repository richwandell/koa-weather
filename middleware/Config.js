module.exports = function(ctx, next) {
    if (typeof ctx.app.config === "undefined") {
        const fs = require('fs');
        ctx.app.config = JSON.parse(fs.readFileSync("config.json", 'utf8'));
    }
    return next();
};