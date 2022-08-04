
let bt = document.getElementById('button');
bt.onclick = creategame

async function  creategame(){

  const name1 = document.getElementById('nameplayer').value
  const name2 = document.getElementById('nameplayer2').value
  const name3 = document.getElementById('nameplayer3').value

      const data = {

    nameplayer: name1,
    nameplayer2: name2,
    nameplayer3: name3
    }
    try{
   
    const respuesta = await axios.post('http://localhost:8080/creategame', data);
   
    console.log('ESTE ES LA CREACION DEL JUEGO',respuesta.data);
   
    return startgame(respuesta.data.gamefinal._id) 

  }catch(e){  
    
    console.log(e); 
}

}

 async function getgame(id){

  try{
   
    const gamecomplete = await axios.get(`http://localhost:8080/game/${id}`);
    
    console.log('ESTE ES EL JUEGO COMPLETO',gamecomplete.data.data);
    return getwinner(id)
    

  }catch(e){
  console.log(e); 
}

}

async function startgame(id){
  
  const bet1 = document.getElementById('betplayer').value
  const bet2 = document.getElementById('betplayer2').value
  const bet3 = document.getElementById('betplayer3').value

    const data2 = {
    betplayer:  bet1,
    betplayer2: bet2,
    betplayer3: bet3
    
  }
  
  try{
   
    const startgame = await axios.post(`http://localhost:8080/startgame/${id}`,data2);
    console.log(startgame);
    return getgame(id)
   
  }catch(e){
  console.log(e); 
}

}




async function getwinner(id){
  

  try{

    const dataone = document.getElementById('data1');
    const datatwo = document.getElementById('data2');

    const winner = await axios.get(`http://localhost:8080/game/winner/${id}`);
    console.log(winner);
    datatwo.innerText = JSON.stringify("EL GANADOR ES:")
    dataone.innerText = JSON.stringify(winner.data.data.name);

   
  }catch(e){
  console.log(e); 
}

}

const mandaralert = () => {

  let alerta = document.getElementById('button'); 
  
  alerta('USUARIOS CREADOS CON EXITO')



}








/*


const lobbybutton = () => {

    const lobbybutton = document.getElementById('lobby');

    const label = document.getElementById('nameplayer')
    const label2 = document.getElementById('nameplayer')

   label.innerText =JSON.stringify(gamecomplete.data)
    
   label2.innerText = gamecomplete.data.data.gamers[1].name


}
*/