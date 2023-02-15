/*Define request the api will use*/
const express = require('express');
const app = express();
const cors = require('cors');
const { config } = require('dotenv');
const fs = require('fs');
const JSON_FILE = process.env.JSON_FILE;
config();
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

exports.getValues = (req, res) => {
	let name = (req.params.name);
	let json_content = fs.readFileSync(JSON_FILE);
	let json = JSON.parse(json_content);
	let game_value = json.games.filter((e) => e.name == name)
	res.send(game_value[0].values);


}

exports.findOneRessource = (req, res) => {
	let name = (req.params.name);
	let ressource = (req.params.ressource);
	let json_content = fs.readFileSync(JSON_FILE);
	let json = JSON.parse(json_content);
	let game_value = json.games.filter((e) => e.name == name)
	res.send(game_value[0].values[ressource]);
	game_value[0].values[ressource];



}

exports.updateRessource = (req, res) => {
	{
		const list_objec = JSON.parse(fs.readFileSync(JSON_FILE));
		const games = list_objec.games;
		console.log(list_objec);
		const index = games.findIndex(i => i.name == req.params.name);
		const ressource = req.params.ressource;
		console.log('req.params : ' + req.params.ressource);
		console.log(index);

		console.log(req.body);

		games[index].values[ressource] = req.body;
		list_objec.games = games;
		fs.writeFileSync(JSON_FILE, JSON.stringify(list_objec));
		res.send(list_objec);


	}
}

exports.createGame = (req, res) => {
	const items = JSON.parse(fs.readFileSync(JSON_FILE));
	const games = items.games
	console.log(items);
	const newItem = req.body;
	games.push(newItem);
	items.games = games;
	fs.writeFileSync(JSON_FILE, JSON.stringify(items));
	res.json(items);
}
