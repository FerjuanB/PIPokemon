const {getAllPokemon} = require('../handlers/getAllPokeHand');
const { getPokeById } = require('../handlers/getPokeIdHand');
const {createPokemon} = require('../handlers/createPokeHand')
const {getPokeName}= require('../handlers/getPokeNameHand')
const {Router} = require("express");


const getPokemon = Router();

getPokemon.get("/", getAllPokemon);

getPokemon.get("/name", getPokeName)

getPokemon.get("/:pokeId", getPokeById);


getPokemon.post("/", createPokemon)

module.exports = getPokemon;