const { Router } = require('express');
const getPokemon = require("./getPokemon")
const getTypes = require("./getTypes")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.use('/pokemons',getPokemon)
router.use('/types', getTypes)


module.exports = router;
