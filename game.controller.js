const express = require('express');
const app = express();
const cors = require('cors');
const { config } = require('dotenv');
const fs = require('fs');
config();
const JSON_FILE = process.env.JSON_FILE;

// Find All games
exports.findAll = (req, res) => {
    let json_content = fs.readFileSync(JSON_FILE);
    let json = JSON.parse(json_content);
    res.send(json.games);
}

// Find One game
exports.findOne = (req, res) => {
	let name = (req.params.name);
	let json_content = fs.readFileSync(JSON_FILE);
	let json = JSON.parse(json_content);
	let game_value = json.games.filter((e) => e.name == name)
	res.send(game_value[0]);

}

exports.getValues = (req,res)=>{
	let name = (req.params.name);
	let json_content = fs.readFileSync(JSON_FILE);
	let json = JSON.parse(json_content);
	let game_value = json.games.filter((e) => e.name == name)
	res.send(game_value[0].values);


}
