/*Define request the api will use*/
const express = require('express');
const app = express();
const cors = require('cors');
const { config } = require('dotenv');
const fs = require('fs');
config();
const JSON_FILE = process.env.JSON_FILE || "data/data.json";


exports.findAll = (req, res) => {
    let game = (req.params.game);
    let json_content = fs.readFileSync(JSON_FILE);
    let json = JSON.parse(json_content);
    let game_value = json.games.filter((e) => e.name == game)
    res.send(game_value[0].values);


}

exports.findOne = (req, res) => {
    let game = (req.params.game);
    let ressource = (req.params.ressource);
    let json_content = fs.readFileSync(JSON_FILE);
    let json = JSON.parse(json_content);
    let game_value = json.games.filter((e) => e.name == game)
    res.send(game_value[0].values[ressource]);
}

exports.update = (req, res) => {
    {
        const list_objec = JSON.parse(fs.readFileSync(JSON_FILE));
        const games = list_objec.games;
        console.log(list_objec);
        const index = games.findIndex(i => i.name == req.params.game);
        const ressource = req.params.ressource;
        console.log('req.params : ' + req.params.ressource);
        console.log(index);

        console.log(req.body);

        games[index].values[ressource] = req.body;
        list_objec.games = games;
        fs.writeFileSync(JSON_FILE, JSON.stringify(list_objec));
        res.send(games[index].values[ressource]);


    }
}
exports.delete = (req, res) => {
    {
        const list_objec = JSON.parse(fs.readFileSync(JSON_FILE));
        const games = list_objec.games;
        const index = games.findIndex(i => i.game == req.params.game);
        const ressource = req.params.ressource;
        if (index !== -1) {
            delete games[index].values[ressource];
            list_objec.games = games;
            fs.writeFileSync(JSON_FILE, JSON.stringify(list_objec));
            res.send(list_objec);

        } else {
            res.status(404).send('La ressource n\'existe pas');
        }



    }
}

exports.create = (req, res) => {
    let items = JSON.parse(fs.readFileSync(JSON_FILE));
    let list_games = items.games
    let params_game = req.params.game;
    console.log("list_games : " + list_games[1]);
    const index = list_games.findIndex(i => i.name == params_game);
    // console.log("items : " + items);
    console.log(`game : ${params_game}`);
    let newItem = req.body;
    console.log(newItem);
    console.log(index);
    list_games[index].values[newItem.ressource] = newItem.values;
    // console.log(list_games);
    items.games = list_games;
    fs.writeFileSync(JSON_FILE, JSON.stringify(items));
    res.json(list_games[index]);
}
