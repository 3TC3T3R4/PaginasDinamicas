
const express = require('express');
const router = express.Router();
const Game = require('../models/game-model');
const User = require('../models/player');
const mongoose = require('mongoose');


router.post('/creategame', async (req, res) => {

  try {

    const { nameplayer, nameplayer2, nameplayer3 } = req.body;


    const player1 = new User({
      _id: new mongoose.Types.ObjectId(),
      name: nameplayer
    });
    await player1.save();

    const player2 = new User({
      _id: new mongoose.Types.ObjectId(),
      name: nameplayer2
    });
    await player2.save();

    const player3 = new User({
      _id: new mongoose.Types.ObjectId(),
      name: nameplayer3
    });
    await player3.save();

    
    let pointplayer1 = Math.random() * 6;
    let pointplayer2 = Math.random() * 6;
    let pointplayer3 = Math.random() * 6;

      if (pointplayer1 > pointplayer2 && pointplayer1 > pointplayer3) {
        
        const game = new Game({

          type: " ",
          gamers: [player1, player2, player3],
          winner: player1
        });
        await game.save();
  
        const gamefinal = {
  
          _id: game._id,
          type: game.type,
          gamers: [game.gamers[0].name, game.gamers[1].name, game.gamers[2].name]
  
        }
        
        res.status(200).json({
  
          gamefinal
  
        });
     
      } else if (pointplayer2 > pointplayer1 && pointplayer2 > pointplayer3) {

        const game = new Game({

          type: " ",
          gamers: [player1, player2, player3],
          winner: player2
  
  
        });
        await game.save();
  
        const gamefinal = {
  
          _id: game._id,
          type: game.type,
          gamers: [game.gamers[0].name, game.gamers[1].name, game.gamers[2].name]
  
        }
        
        res.status(200).json({
  
          gamefinal
  
        });
       
        
     

      }else{
     
        
      const game = new Game({

        type: " ",
        gamers: [player1, player2, player3],
        winner: player3


      });
      await game.save();

      const gamefinal = {

        _id: game._id,
        type: game.type,
        gamers: [game.gamers[0].name, game.gamers[1].name, game.gamers[2].name]

      }
      
      res.status(200).json({
  
        gamefinal

      });
     

      }
    
  } catch (error) {

  res.status(500).json({
    
    message: error.message,
    stack: error.stack

    });



  }

});


module.exports = router;
