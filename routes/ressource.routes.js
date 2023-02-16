
module.exports = app => {
    const ressources = require('../controllers/ressource.controller.js');
    var router = require("express").Router();
    // Get all ressources
    router.get("/values", ressources.findAll);
    router.get("/:ressource", ressources.findOne);
    router.put("/:ressource", ressources.update);
    router.post("/", ressources.create);
    router.delete("/:ressource", ressources.delete);


    app.use('/games/:game', router);
}