const {getPokeTypes} = require('../handlers/getTypeofPokeHand')
const { Router } = require("express");
const getTypes = Router()

getTypes.get("/",getPokeTypes)

module.exports = getTypes;