module.exports = app => {
    const games = require("./game.controller");
    var router = require("express").Router();
    // Get all games
    router.get("/", games.findAll);
    // Get one game
    router.get("/:name", games.findOne);
    // Get values of one game
    router.get("/:name/values", games.getValues);
    app.use('/games', router);
}
