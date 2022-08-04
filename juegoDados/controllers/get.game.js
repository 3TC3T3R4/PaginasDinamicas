
const express = require('express');
const router = express.Router();
const Game = require('../models/game-model');
const User = require('../models/player');

router.get('/game/:id', async (req, res) => {

  try {
    
    const game = await Game.findById(req.params.id).populate('gamers').populate('winner');
    
    const data = {

      id: game._id,
      gamers: game.gamers,
      improgress: false,
      winner: game.winner


    }
    res.status(200).json({

      data
      
    })
  } catch (error) {

    console.log(error)
    res.status(500).json({
      message: error.message,
      stack: error.stack
    });
  }
});

module.exports = router;
