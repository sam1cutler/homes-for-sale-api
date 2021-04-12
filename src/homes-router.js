const express = require('express');


const homesRouter = express.Router();
const jsonParser = express.json();

homesRouter
    .route('/')
    .get( (req, res, next) => {
        res.json(
            'Something done did worked.'
        )
    })

module.exports = homesRouter;