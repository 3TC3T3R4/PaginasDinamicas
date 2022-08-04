
const express = require('express');
const router = express.Router();
const Game = require('../models/game-model');
const User = require('../models/player');



router.post('/startgame/:id', async  (req, res) => {

  try {
    
    const {betplayer,betplayer2,betplayer3 } = req.body;
    
    const game = await Game.findById(req.params.id).populate('gamers').populate('winner');  

    const playersBet= [[game.gamers[0].id,betplayer],[game.gamers[1].id,betplayer2],[game.gamers[2].id,betplayer3]]
    
   
      const data = {

        id: game.id,
        type: " ",
        gamerBet: playersBet

      }

      res.json({

        data

      })

  } catch (error) {
    
      res.status(500).json({
      message: error.message,
      stack: error.stack

    });


 }

});


module.exports = router;
