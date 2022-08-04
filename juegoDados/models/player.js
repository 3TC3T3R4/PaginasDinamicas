const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playerModelSchema = new Schema({

 name:{
   type: String,
  },

 betplayer:{
  type: Number
 },
 winner: {
  type: Boolean
 }

});     

const  Player = mongoose.model('Player',playerModelSchema);

module.exports = Player;