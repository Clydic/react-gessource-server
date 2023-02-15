// Define all routes of the api
module.exports = app => {
    const games = require("./game.controller");
    var router = require("express").Router();
    // Get all games
    router.get("/", games.findAll);
    router.post("/", games.createGame);
    // Get one game
    router.get("/:name", games.findOne);
    // Get values of one game
    router.get("/:name/values", games.getValues);
    router.get("/:name/:ressource", games.findOneRessource);
    router.put("/:name/:ressource", games.updateRessource);


    app.use('/games', router);
}
