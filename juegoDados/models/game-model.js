const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameModelSchema = new Schema({

 type: {
   type: String,
   trin: true

   },
improgress: {
  
  type: Boolean,
  
},

winner: {

 type: Schema.Types.ObjectId, ref:'Player'
 
   },

 gamers: [{ 
    type: mongoose.Schema.Types.ObjectId, ref: 'Player'
}]
  

});     

const  Game = mongoose.model('Game',gameModelSchema);

module.exports = Game;