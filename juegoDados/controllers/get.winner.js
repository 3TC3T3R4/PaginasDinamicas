const express = require('express');
const router = express.Router();
const player = require('../models/player');
const Game = require('../models/game-model');

router.get('/game/winner/:id', async (req, res) => {
  
  try {
    
    const game = await Game.findById(req.params.id).populate('winner');  

    const data = {
    _id: game.winner._id,
    name: game.winner.name

  };

  
  res.json({data});

}catch (error) {
    res.json({
    error
    });
  }
});

module.exports = router;
